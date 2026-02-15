"""Split the extracted text into chapter-sized chunks for analysis."""
import json
import os

BASE = r"c:\Users\User\Documents\PROYECTOS_PERSONALES\scherer\temp_pages"

with open(os.path.join(BASE, "all_pages.json"), "r", encoding="utf-8") as f:
    pages = json.load(f)

# Save chunks of ~20 pages each for manageable reading
chunk_size = 20
total_pages = len(pages)
chunk_num = 0

for start in range(1, total_pages + 1, chunk_size):
    end = min(start + chunk_size - 1, total_pages)
    chunk_text = ""
    for p in range(start, end + 1):
        page_text = pages.get(str(p), "")
        if page_text.strip():
            chunk_text += f"\n=== PÁGINA {p} ===\n{page_text}\n"

    if chunk_text.strip():
        chunk_num += 1
        outfile = os.path.join(BASE, f"chunk_{chunk_num:02d}_pp{start}-{end}.txt")
        with open(outfile, "w", encoding="utf-8") as f:
            f.write(chunk_text)
        print(f"Chunk {chunk_num}: pages {start}-{end} ({len(chunk_text)} chars)")

print(f"\nTotal chunks: {chunk_num}")
