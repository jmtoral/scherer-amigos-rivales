@echo off
echo ===================================================
echo  Amigos o Rivales - Launcher
echo ===================================================

echo [1/4] Activating Conda environment 'scherer'...
call "C:\Users\User\anaconda3\condabin\conda.bat" activate scherer

echo [2/4] Running text extraction (extract_text.py)...
python extract_text.py

echo [3/4] Generating Excel report (generate_excel.py)...
python generate_excel.py

echo [4/4] Updating visualization data (extract_data_from_excel.py)...
python visualization/extract_data_from_excel.py

echo.
echo ===================================================
echo  Process Completed Successfully!
echo ===================================================
pause
