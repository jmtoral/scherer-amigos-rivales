import ast
import json
import os

# Path to the python file containing the data
SOURCE_FILE = r"c:\Users\User\Documents\PROYECTOS_PERSONALES\scherer\generate_excel.py"
OUTPUT_FILE = r"c:\Users\User\Documents\PROYECTOS_PERSONALES\scherer\visualization\data.js"

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
                    # We found the assignment. Now we need to evaluate the list safely.
                    # Since ast.literal_eval might fail if there are complex expressions, 
                    # but here it is a list of tuples with strings and numbers, it should work 
                    # if we extract the expression source or just walk the node.
                    # However, ast.literal_eval is best for simple structures.
                    
                    # To make it safer and easier, let's just extract the portion of code 
                    # corresponding to the list and eval it (since we trust the source file).
                    # Actually, using ast.literal_eval on the value node is the most robust way
                    # if the list contains only literals.
                    try:
                        personas_list = ast.literal_eval(node.value)
                    except ValueError:
                        print("Could not directly eval. Trying to process node manually.")
                        pass # complicated fallback if needed
                    break
    
    if personas_list is None:
        print("Could not find 'personas' list in the file.")
        return

    # Convert to a list of dicts for JSON
    data = []
    for p in personas_list:
        # Structure: (Name, Opinion_word, Score, Description, Pages)
        entry = {
            "name": p[0],
            "opinion": p[1],
            "score": p[2],
            "description": p[3],
            "pages": p[4]
        }
        data.append(entry)

    # Write to data.js
    json_str = json.dumps(data, indent=4, ensure_ascii=False)
    js_content = f"const personasData = {json_str};\n"
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)
    
    print(f"Successfully exported {len(data)} entries to {OUTPUT_FILE}")

if __name__ == "__main__":
    extract_personas()
