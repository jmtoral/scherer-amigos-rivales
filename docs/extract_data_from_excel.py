import openpyxl
import json
import os

# Path to the Excel file
EXCEL_FILE = r"c:\Users\User\Documents\PROYECTOS_PERSONALES\scherer\output\amigos_o_rivales_JSI.xlsx"
OUTPUT_FILE = r"c:\Users\User\Documents\PROYECTOS_PERSONALES\scherer\visualization\data.js"

def extract_from_excel():
    if not os.path.exists(EXCEL_FILE):
        print(f"Error: Excel file not found at {EXCEL_FILE}")
        return

    print(f"Reading {EXCEL_FILE}...")
    wb = openpyxl.load_workbook(EXCEL_FILE, data_only=True)
    ws = wb["Ranking"]

    data = []
    # Iterate over rows, skipping header (row 1)
    # Columns: Ranking(A), Nombre(B), Opinión(C), Puntuación(D), Descripción(E), Páginas(F)
    for row in ws.iter_rows(min_row=2, values_only=True):
        if not row[1]: # Skip if Name is empty
            continue
            
        ranking, name, opinion, score, desc, pages = row
        
        entry = {
            "ranking": ranking,
            "name": name,
            "opinion": opinion,
            "score": score,
            "description": desc,
            "pages": str(pages) # ensure pages is string
        }
        data.append(entry)

    # Write to data.js
    json_str = json.dumps(data, indent=4, ensure_ascii=False)
    js_content = f"const personasData = {json_str};\n"
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)
    
    print(f"Successfully exported {len(data)} entries to {OUTPUT_FILE}")

if __name__ == "__main__":
    extract_from_excel()
