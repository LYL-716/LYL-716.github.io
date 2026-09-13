# LYL-716 项目大厅

GitHub Pages 根站点，用来集中展示个人项目。

## 当前结构

```text
project-hub/
├── index.html                 # 项目大厅首页
├── projects.js                # 项目索引数据
├── hub.css / hub.js
├── vacuum-robot/              # 扫地机器人 20 步制作手册
└── stm32-motor-usart/         # STM32 串口电机控制项目摘要
```

## 新增项目

1. 在 `project-hub/` 下创建项目目录。
2. 把项目主页放在该目录的 `index.html`。
3. 在 `projects.js` 增加一条项目记录。
4. 如果项目有封面图，把图片放进项目目录并在记录中填写 `cover`。
5. push 后 GitHub Pages 会自动更新。

## 本地预览

```powershell
python -m http.server 8081 --bind 127.0.0.1 --directory project-hub
```

访问 `http://127.0.0.1:8081/`。

## 发布目标

发布到 GitHub Pages 根地址：

```text
https://LYL-716.github.io/
```
