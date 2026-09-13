@echo off
setlocal
cd /d "%~dp0"
echo.
echo Vacuum Robot Guide
echo Open this address on your tablet:
echo.
echo   http://YOUR-COMPUTER-LAN-IP:8080
echo.
echo The computer and tablet must be on the same Wi-Fi.
echo Press Ctrl+C to stop the server.
echo.
python -m http.server 8080 --bind 0.0.0.0
endlocal
