import ast
import json
import os
import re

# Path to the python file containing the data
SOURCE_FILE = r"c:\Users\User\Documents\PROYECTOS_PERSONALES\scherer\generate_excel.py"
OUTPUT_FILE = r"c:\Users\User\Documents\PROYECTOS_PERSONALES\scherer\docs\data.js"


def count_pages(page_str):
    """Count individual pages from a page reference string like '27-32, 203, 263-264'."""
    if page_str.startswith("Presente"):
        return 300  # AMLO: present throughout
    total = 0
    for part in page_str.split(","):
        part = part.strip()
        match = re.match(r"(\d+)-(\d+)", part)
        if match:
            total += int(match.group(2)) - int(match.group(1)) + 1
        elif re.match(r"\d+", part):
            total += 1
    return total


def extract_personas():
    with open(SOURCE_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    # Parse the file content into an AST
    tree = ast.parse(content)

    # Find the assignment to 'personas'
    personas_list = None
    for node in tree.body:
        if isinstance(node, ast.Assign):
            for target in node.targets:
                if isinstance(target, ast.Name) and target.id == "personas":
                    try:
                        personas_list = ast.literal_eval(node.value)
                    except ValueError:
                        print("Could not directly eval. Trying to process node manually.")
                        pass
                    break

    if personas_list is None:
        print("Could not find 'personas' list in the file.")
        return

    # Convert to a list of dicts for JSON
    data = []
    for p in personas_list:
        # Structure: (Name, Opinion_word, Score, Description, Pages)
        page_count = count_pages(p[4])
        # Central antagonists: key figures throughout the entire book
        central_names = {"Jesús Ramírez Cuevas", "Alejandro Gertz Manero"}
        is_central = p[0] in central_names
        entry = {
            "name": p[0],
            "opinion": p[1],
            "score": p[2],
            "description": p[3],
            "pages": p[4],
            "pageCount": page_count,
            "isCentral": is_central,
        }
        data.append(entry)

    # Write to data.js
    json_str = json.dumps(data, indent=4, ensure_ascii=False)
    js_content = f"const personasData = {json_str};\n"

    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"Successfully exported {len(data)} entries to {OUTPUT_FILE}")


if __name__ == "__main__":
    extract_personas()
