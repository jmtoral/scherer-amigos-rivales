// --- Configuration ---
const width = document.getElementById('chart-container').offsetWidth;
const height = document.getElementById('chart-container').offsetHeight;
const margin = { top: 50, right: 50, bottom: 50, left: 50 };

// --- Color Scale ---
// We map score -5 to 5 to colors
const colorScale = d3.scaleSequential()
    .domain([-5, 5])
    .interpolator(d3.interpolateRdYlGn);

// Because interpolateRdYlGn goes from Red (0) to Green (1), 
// and our domain is -5 to 5, this mapping works perfectly:
// -5 (Red) -> 0
// 0 (Yellow) -> 0.5
// 5 (Green) -> 1

// --- X Scale ---
// Map score -5 to 5 to width of svg
const xScale = d3.scaleLinear()
    .domain([-5.5, 5.5]) // slightly larger domain for padding
    .range([margin.left, width - margin.right]);

// --- Create SVG ---
const svg = d3.select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// --- Draw Axis ---
const xAxis = d3.axisBottom(xScale)
    .ticks(11) // marks for -5, -4, ... 5
    .tickFormat(d => d > 0 ? `+${d}` : d);

const axisGroup = svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${height / 2})`)
    .call(xAxis);

// Style axis lines
axisGroup.select(".domain").attr("stroke", "#ddd").attr("stroke-width", 2);
axisGroup.selectAll(".tick line").attr("stroke", "#ddd").attr("y2", -10); // ticks upward slightly
axisGroup.selectAll("text").attr("fill", "#999").attr("font-size", "12px").attr("dy", "1.5em");

// --- Process Data for Simulation ---
// Add initial x, y and radius
// Radius based on importance? For now, uniform or slightly varied by page count perhaps?
// Let's use page count length as proxy for importance/size
const nodes = personasData.map(d => {
    // Rough estimate of mentions: split by commas + 1
    const mentionCount = d.pages.toString().split(',').length;
    // Base radius 5, max 15
    const r = Math.min(5 + mentionCount * 1.5, 20); 
    
    return {
        ...d,
        radius: r,
        x: xScale(d.score), // Initial target x
        y: height / 2       // Initial y
    };
});

// --- Force Simulation ---
const simulation = d3.forceSimulation(nodes)
    .force("x", d3.forceX(d => xScale(d.score)).strength(1)) // Strong pull to score position
    .force("y", d3.forceY(height / 2).strength(0.1))         // Weak pull to center line
    .force("collide", d3.forceCollide(d => d.radius + 2))    // Prevent overlap
    .stop();

// Run simulation manually for a few ticks to settle before rendering (static visual style)
// Or run it live for animation. Let's do live for "alive" feel.
simulation.restart();

// --- Tooltip ---
const tooltip = d3.select("#tooltip");

// --- Draw Nodes ---
const nodeElements = svg.append("g")
    .selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", d => d.radius)
    .attr("fill", d => colorScale(d.score))
    .attr("stroke", "white")
    .attr("stroke-width", 2)
    .style("cursor", "pointer")
    .attr("cx", d => d.x) // Start at computed pos
    .attr("cy", d => d.y)
    .style("filter", "drop-shadow(0px 3px 3px rgba(0,0,0,0.1))");

// --- Interaction ---
nodeElements
    .on("mouseenter", function(event, d) {
        // Highlight node
        d3.select(this)
            .transition().duration(200)
            .attr("r", d.radius * 1.5)
            .attr("stroke", "#333");

        // Show tooltip
        tooltip.classed("hidden", false)
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 15) + "px")
            .html(`
                <h3>${d.name}</h3>
                <div class="meta">
                    <span>${d.opinion} (${d.score})</span>
                    <span>Rank: #${d.ranking + 1}</span>
                </div>
                <div class="desc">${d.description}</div>
            `);
    })
    .on("mousemove", function(event) {
        tooltip
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 15) + "px");
    })
    .on("mouseleave", function(event, d) {
        // Reset node
        d3.select(this)
            .transition().duration(200)
            .attr("r", d.radius)
            .attr("stroke", "white");

        tooltip.classed("hidden", true);
    });

// --- Simulation Tick ---
simulation.on("tick", () => {
    nodeElements
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
});

// --- Search Functionality ---
const searchBox = document.getElementById("search-box");
searchBox.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    
    nodeElements.style("opacity", d => {
        if (term === "") return 1;
        return d.name.toLowerCase().includes(term) ? 1 : 0.1;
    });
    
    // Optional: Zoom to node if exact match? Maybe too complex for now.
});

// --- Add Axis Labels ---
svg.append("text")
    .attr("x", margin.left)
    .attr("y", height / 2 + 50)
    .attr("text-anchor", "start")
    .attr("fill", "#a50f15")
    .attr("font-weight", "bold")
    .text("ENEMIGOS (-5)");

svg.append("text")
    .attr("x", width - margin.right)
    .attr("y", height / 2 + 50)
    .attr("text-anchor", "end")
    .attr("fill", "#006d2c")
    .attr("font-weight", "bold")
    .text("AMIGOS (+5)");

