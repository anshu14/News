@echo off
"C:\Users\Anshu Kumar\ApnaKawardha\platforms\android\build\outputs\apk\Zipalign\Resources\zipalign" -v 4 "C:\Users\Anshu Kumar\ApnaKawardha\platforms\android\build\outputs\apk\android-release-unsigned.apk" "C:\Users\Anshu Kumar\ApnaKawardha\platforms\android\build\outputs\apk\Zipalign\ZipAlignedApps\android-release-unsigned.apk"
echo You can find the zip-aligned apps in the "ZipAlignedApps" Folder
pause
del %CD%\ZipAlign.bat
