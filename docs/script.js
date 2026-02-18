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

// --- Add Axis Labels (Background Layer) ---
svg.append("text")
    .attr("x", margin.left)
    .attr("y", height / 2 + 50)
    .attr("text-anchor", "start")
    .attr("fill", "#a50f15")
    .attr("font-weight", "bold")
    .style("pointer-events", "none") // Prevent blocking hover
    .text("ENEMIGOS (-5)");

svg.append("text")
    .attr("x", width - margin.right)
    .attr("y", height / 2 + 50)
    .attr("text-anchor", "end")
    .attr("fill", "#006d2c")
    .attr("font-weight", "bold")
    .style("pointer-events", "none") // Prevent blocking hover
    .text("AMIGOS (+5)");

// --- Process Data for Simulation ---
// Add initial x, y and radius
// Radius based on actual page count (from pageCount field)
const radiusScale = d3.scaleSqrt()
    .domain([1, 300])  // 1 page to 300 (AMLO)
    .range([4, 35]);

const nodes = personasData.map((d, i) => {
    const pc = d.pageCount || 1;
    const r = radiusScale(pc);

    return {
        ...d,
        ranking: i,
        radius: r,
        x: xScale(d.score),
        y: height / 2
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

// --- Draw Nodes (Foreground Layer) ---
const nodeElements = svg.append("g")
    .selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", d => d.radius)
    .attr("fill", d => colorScale(d.score))
    .attr("stroke", d => d.isCentral ? "#222" : "white")
    .attr("stroke-width", d => d.isCentral ? 3 : 2)
    .attr("stroke-dasharray", d => d.isCentral ? "5,3" : "none")
    .style("cursor", "pointer")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .style("filter", "drop-shadow(0px 3px 3px rgba(0,0,0,0.1))");

// --- Interaction ---
nodeElements
    .on("mouseenter", function (event, d) {
        // Highlight node
        d3.select(this)
            .transition().duration(200)
            .attr("r", d.radius * 1.5)
            .attr("stroke", "#333");

        // Weight label
        const pc = d.pageCount || 1;
        const weightLabel = pc >= 15 ? "Alta" : pc >= 5 ? "Media" : "Baja";
        const centralTag = d.isCentral ? ' <span style="color:#ff6b6b;font-weight:bold;">&#9670; Antagonista central</span>' : '';

        // Show tooltip
        tooltip.classed("hidden", false)
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 15) + "px")
            .html(`
                <h3>${d.name}</h3>
                <div class="meta">
                    <span>${d.opinion} (${d.score > 0 ? '+' : ''}${d.score})</span>
                    <span>${pc} pp. | Peso: ${weightLabel}</span>
                </div>
                ${centralTag}
                <div class="desc">${d.description}</div>
            `);
    })
    .on("mousemove", function (event) {
        tooltip
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 15) + "px");
    })
    .on("mouseleave", function (event, d) {
        // Reset node
        d3.select(this)
            .transition().duration(200)
            .attr("r", d.radius)
            .attr("stroke", d.isCentral ? "#222" : "white");

        tooltip.classed("hidden", true);
    });

// --- Simulation Tick ---
simulation.on("tick", () => {
    nodeElements
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
});

// --- Size & Antagonist Legend (inside SVG) ---
const legendG = svg.append("g")
    .attr("transform", `translate(${margin.left + 10}, ${height - 70})`);

// Background rect for readability
legendG.append("rect")
    .attr("x", -10).attr("y", -18)
    .attr("width", 460).attr("height", 60)
    .attr("rx", 8)
    .attr("fill", "rgba(255,255,255,0.85)")
    .attr("stroke", "#e0e0e0").attr("stroke-width", 1);

// Title
legendG.append("text")
    .attr("x", 0).attr("y", -2)
    .attr("fill", "#666").attr("font-size", "13px").attr("font-weight", "bold")
    .text("Tamaño = páginas dedicadas al personaje");

// Small example circle
legendG.append("circle")
    .attr("cx", 10).attr("cy", 24)
    .attr("r", 5).attr("fill", "#ccc").attr("stroke", "white").attr("stroke-width", 1);
legendG.append("text")
    .attr("x", 22).attr("y", 28)
    .attr("fill", "#777").attr("font-size", "12px")
    .text("Pocas pp.");

// Large example circle
legendG.append("circle")
    .attr("cx", 110).attr("cy", 22)
    .attr("r", 12).attr("fill", "#ccc").attr("stroke", "white").attr("stroke-width", 1);
legendG.append("text")
    .attr("x", 128).attr("y", 28)
    .attr("fill", "#777").attr("font-size", "12px")
    .text("Muchas pp.");

// Antagonist central legend
legendG.append("circle")
    .attr("cx", 250).attr("cy", 22)
    .attr("r", 10).attr("fill", "#ccc")
    .attr("stroke", "#222").attr("stroke-width", 3).attr("stroke-dasharray", "5,3");
legendG.append("text")
    .attr("x", 266).attr("y", 28)
    .attr("fill", "#777").attr("font-size", "12px").attr("font-weight", "600")
    .text("Antagonista central del libro");

// --- Search Functionality ---
const searchBox = document.getElementById("search-box");
searchBox.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();

    nodeElements.style("opacity", d => {
        if (term === "") return 1;
        return d.name.toLowerCase().includes(term) ? 1 : 0.1;
    });
});

