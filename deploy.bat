@echo off
echo Building Flutter web app...
flutter build web --release

echo.
echo Deploying to Firebase...
firebase deploy

echo.
echo Deployment complete!
pause
