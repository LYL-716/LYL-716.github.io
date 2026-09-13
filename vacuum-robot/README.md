# 自动扫地机器人复刻手册

这是 `cesnietor/VacuumRobot` 的平板优先中文步骤站。

## 启动

在项目根目录运行：

```powershell
python -m http.server 8080 --bind 0.0.0.0 --directory vacuum-guide
```

电脑和平板连接同一个 Wi-Fi，然后在平板浏览器打开：

```text
http://电脑的局域网IP:8080
```

也可以直接双击 `start-server.bat` 启动。

## 内容

- 20 个制作步骤，按准备、机械、电路、收尾分组。
- 步骤进度保存在平板浏览器本地。
- 关键图片已下载到 `assets/`，不依赖 Instructables 图片服务器。
- 支持横屏和竖屏平板、手机以及桌面浏览器。
- 左右方向键可以切换步骤，也可以使用页面底部的上一步和下一步按钮。

## 来源

- 原教程：https://www.instructables.com/Build-Your-Own-Vacuum-Robot/
- 原始项目：https://github.com/cesnietor/VacuumRobot

中文页面用于辅助理解和现场操作，遇到电气参数、零件替代和代码版本问题时，以原始教程和仓库内容为准。
