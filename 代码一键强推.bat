@echo off
chcp 65001 >nul
cd /d G:\Github\jhkx\tvbox-config

echo ========================================
echo 🚀 开始备份源码到 GitHub、GitLab、Gitee
echo ========================================
echo.

git add .

git commit -m "backup source: %date% %time%"

echo.
echo 📤 推送到 GitHub...
git push github main --force

echo.
echo 📤 推送到 GitLab...
git push gitlab main --force

echo.
echo 📤 推送到 Gitee...
git push gitee main --force

echo.
echo ========================================
echo ✅ 三个平台推送完成！
echo ========================================
pause