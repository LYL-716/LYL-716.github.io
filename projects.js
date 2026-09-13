window.PROJECTS = [
  {
    id: "vacuum-robot",
    number: "01",
    title: "自动扫地机器人复刻手册",
    status: "公开可用",
    statusType: "published",
    date: "2026.09",
    tags: ["机器人", "嵌入式", "教程"],
    description:
      "把 cesnietor/VacuumRobot 的 20 步制作流程整理成适合平板阅读的中文手册，包含机械装配、接线、程序烧录和调试。",
    cover: "vacuum-robot/assets/step-04.webp",
    coverAlt: "扫地机器人底盘设计图",
    href: "vacuum-robot/",
    action: "打开制作手册",
    repo: "https://github.com/cesnietor/VacuumRobot",
    details: ["Arduino Uno", "20 步", "平板适配"]
  },
  {
    id: "stm32-motor-usart",
    number: "02",
    title: "STM32 串口四路电机控制",
    status: "资料整理中",
    statusType: "draft",
    date: "2026.09",
    tags: ["嵌入式", "机器人"],
    description:
      "基于 STM32F103 的串口运动控制程序：USART1 用于调试输出，USART2 与电机控制模块通信，支持编码器回读、速度控制和 PWM 指令。",
    cover: null,
    coverAlt: "STM32 串口运动控制代码",
    href: "stm32-motor-usart/",
    action: "查看项目摘要",
    repo: null,
    details: ["STM32F103", "USART", "编码器"]
  }
];
