"""Extract text from PDF page by page and save to individual text files."""
import pdfplumber
import os
import json

import glob
pdf_files = glob.glob(r"c:\Users\User\Documents\PROYECTOS_PERSONALES\scherer\input\*.pdf")
if not pdf_files:
    raise FileNotFoundError("No PDF found in input/")
PDF_PATH = pdf_files[0]
print(f"Using PDF: {PDF_PATH}")
OUTPUT_DIR = r"c:\Users\User\Documents\PROYECTOS_PERSONALES\scherer\temp_pages"

os.makedirs(OUTPUT_DIR, exist_ok=True)

pdf = pdfplumber.open(PDF_PATH)
total = len(pdf.pages)
print(f"Total pages: {total}")

all_text = {}
for i, page in enumerate(pdf.pages):
    text = page.extract_text() or ""
    all_text[i + 1] = text
    if i < 3:
        print(f"--- PAGE {i+1} ---")
        print(text[:300])
        print()

# Save all text as a single JSON for easy processing
with open(os.path.join(OUTPUT_DIR, "all_pages.json"), "w", encoding="utf-8") as f:
    json.dump(all_text, f, ensure_ascii=False)

print(f"\nExtracted {total} pages. Saved to {OUTPUT_DIR}/all_pages.json")
pdf.close()
