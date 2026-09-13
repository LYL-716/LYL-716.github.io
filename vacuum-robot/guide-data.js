window.GUIDE_STEPS = [
  {
    id: 1,
    phase: "准备",
    title: "材料准备",
    originalTitle: "Materials",
    image: "assets/step-01.webp",
    summary:
      "先按清单核对全部零件，确认主控、电机、吸尘风扇、传感器、电池和 3D 打印件都能到位。",
    tasks: [
      "Arduino Uno 或兼容主板。",
      "L298N 双路电机驱动和 IRF520 MOSFET 模块。",
      "两个 6V 微型减速电机、轮子和万向球轮。",
      "吸尘风扇、3S 锂电池、充电器和安全开关。",
      "两个 Sharp 红外距离传感器、按键、杜邦线和 M3 五金。"
    ],
    warning: "先不要接电池。确认所有模块电压范围、极性和引脚定义后再通电。"
  },
  {
    id: 2,
    phase: "准备",
    title: "理解吸尘原理",
    originalTitle: "How Does It Work?",
    image: "assets/step-02.webp",
    summary:
      "风扇把空气和灰尘吸入，经过过滤后从排气口排出；灰尘留在集尘盒中，不直接穿过风扇电机。",
    tasks: [
      "确认风道方向：进气口、过滤材料、风扇和排气口形成完整通路。",
      "把过滤材料放在灰尘进入风扇之前。",
      "理解“吸力”和“风量”的区别：风量不足时，吸尘效果会明显下降。"
    ]
  },
  {
    id: 3,
    phase: "准备",
    title: "选择核心部件",
    originalTitle: "About the Ingredients",
    image: "assets/step-03.webp",
    summary:
      "吸尘风扇是本项目最关键的部件。原项目建议优先选择风量足够、尺寸合适且能由现有电池供电的型号。",
    tasks: [
      "风扇优先看 CFM 或风量参数，不只看电机转速。",
      "电机需要能驱动底盘并留出足够的扭矩余量。",
      "红外距离传感器用于提前发现障碍，碰撞开关负责近距离兜底。",
      "所有部件都要确认工作电压和最大电流。"
    ]
  },
  {
    id: 4,
    phase: "准备",
    title: "检查机械设计",
    originalTitle: "The Design",
    image: "assets/step-04.webp",
    summary:
      "原项目底盘约为 210 mm × 210 mm × 80 mm，机械部分包含底盘、保险杠、集尘盒和过滤器安装结构。",
    tasks: [
      "确认 3D 打印机平台至少能容纳 210 mm × 210 mm 的零件。",
      "核对电机、风扇、电池和主板的安装空间。",
      "先检查零件之间是否会干涉，尤其关注轮子、万向轮和保险杠。"
    ]
  },
  {
    id: 5,
    phase: "准备",
    title: "3D 打印零件",
    originalTitle: "3D Printing",
    image: "assets/step-05.webp",
    summary:
      "原教程的底盘由 12 个较大的打印件组成。建议先用测试件校准尺寸，再打印整套结构。",
    tasks: [
      "先打印测试件，检查螺丝孔、卡扣和装配公差。",
      "按材料要求设置层高、填充率和壁厚。",
      "打印完成后清理毛刺，再试装电机、轮子和电池。",
      "如果使用外部打印服务，先确认平台尺寸和材料。"
    ],
    warning: "打印件变形或孔位偏差会直接影响后续装配，发现问题应重打，不要强行用螺丝撑开。"
  },
  {
    id: 6,
    phase: "机械",
    title: "安装距离传感器",
    originalTitle: "Setting the Sensors Up",
    image: "assets/step-06.webp",
    summary:
      "先把两个红外距离传感器装入支架。原设计会让其中一个传感器反向安装，以适应左右两侧的探测方向。",
    tasks: [
      "给传感器焊接或接好电源、地线和信号线。",
      "用 M3 螺丝把传感器固定到打印支架。",
      "确认两个传感器朝向一致、不会被轮子或底盘挡住。"
    ]
  },
  {
    id: 7,
    phase: "机械",
    title: "安装电机和 H 桥",
    originalTitle: "Connecting the Motors and H-bridge",
    image: "assets/step-07.webp",
    summary:
      "先把两个减速电机装入电机支架，再把 L298N 电机驱动固定到底盘。电机线可以先任意接，方向会在程序中校正。",
    tasks: [
      "用支架固定两个电机，确认左右轮位置对称。",
      "安装 L298N 驱动板并预留散热和接线空间。",
      "把两个电机分别接到驱动的两路输出。",
      "不要让裸露导线互相接触或碰到金属底盘。"
    ]
  },
  {
    id: 8,
    phase: "机械",
    title: "安装万向球轮",
    originalTitle: "Mounting the Ball Caster",
    image: "assets/step-08.webp",
    summary:
      "万向球轮负责支撑车头。原项目需要把安装柱略微缩短，使底盘保持合适的前倾角度，让吸尘口贴近地面。",
    tasks: [
      "测量万向轮支架与底盘的安装高度。",
      "按教程图片把过长的螺栓或支柱缩短。",
      "装好后放平机器人，检查底盘不会翘起或摩擦地面。"
    ],
    warning: "切割或打磨金属时戴护目镜，完成后清除金属屑。"
  },
  {
    id: 9,
    phase: "机械",
    title: "安装保险杠",
    originalTitle: "The Bumper",
    image: "assets/step-09.webp",
    summary:
      "红外传感器可能漏检透明或过近的物体，因此还要安装一个机械保险杠。碰撞时，它会触发按键让机器人转向。",
    tasks: [
      "把保险杠与底盘的转动结构装配到位。",
      "调整复位弹簧或弹性结构，让保险杠能自动回中。",
      "检查按下保险杠时能可靠触发微动开关。",
      "确保保险杠不会长期压住开关。"
    ]
  },
  {
    id: 10,
    phase: "机械",
    title: "连接 Sharp 传感器",
    originalTitle: "Connecting the Sharp Sensors",
    image: "assets/step-10.webp",
    summary:
      "为两个 Sharp 传感器制作供电和接线接口。它们的模拟输出随后会接到 Arduino 的模拟输入。",
    tasks: [
      "按传感器标记连接 VCC、GND 和信号线。",
      "做一个小型分线板或整理线束，避免电源线松动。",
      "给线束编号，区分左前和右前传感器。",
      "上电前再次确认 VCC 和 GND 没有接反。"
    ]
  },
  {
    id: 11,
    phase: "电路",
    title: "制作分压电路",
    originalTitle: "Voltage Divider",
    image: "assets/step-11.webp",
    summary:
      "Arduino 不能直接测量 3S 锂电池的满电电压，因此需要用分压电路把电压降到安全范围。",
    tasks: [
      "按原教程连接电阻和可调电阻，输出接到 Arduino 的 A4。",
      "用万用表确认满电时模拟输入不超过 5V。",
      "记录充满和低电量时程序读到的数值。",
      "分压信号线远离电机线，减少干扰。"
    ],
    warning: "绝对不能把 12V 电池直接接到 Arduino 模拟输入，否则会损坏主板。"
  },
  {
    id: 12,
    phase: "电路",
    title: "布置电池和主电源",
    originalTitle: "Get Your Hands Dirty",
    image: "assets/step-12.webp",
    summary:
      "电池同时给电机、风扇和分压电路供电。此步骤开始集中接线，重点是防止短路和虚接。",
    tasks: [
      "按原图把风扇正负极接到 MOSFET 输出。",
      "向 H 桥、开关和分压电路分配电源正极。",
      "把所有模块的 GND 连接在一起。",
      "先整理并固定导线，再进行下一步测试。"
    ],
    warning: "接线时断开电池。第一次通电建议串接保险丝或限流保护。"
  },
  {
    id: 13,
    phase: "电路",
    title: "连接风扇和电机驱动",
    originalTitle: "Terminals, Fan and Motor Driver",
    image: "assets/step-13.webp",
    summary:
      "固定 Arduino、风扇和电机驱动，并把分压电路的信号线接到 A4。这个阶段线束很多，按原图逐根连接。",
    tasks: [
      "用螺丝固定 Arduino 和 L298N。",
      "安装吸尘风扇并确认叶轮不会刮碰外壳。",
      "把电池分压信号接到 Arduino A4。",
      "用扎带固定线束，避免轮子或风扇卷入。"
    ]
  },
  {
    id: 14,
    phase: "电路",
    title: "连接电机控制信号",
    originalTitle: "Connecting the Motors Signal Inputs",
    image: "assets/step-14.webp",
    summary:
      "L298N 的四个控制输入需要连接到 Arduino 的数字引脚，用来控制左右轮的转向和 PWM 速度。",
    tasks: [
      "使用 4 根母对公杜邦线连接驱动板控制端。",
      "按原教程接到 Arduino 数字引脚 3、5、6、9。",
      "记录每根线对应的左轮或右轮方向。",
      "上电后用测试代码确认方向，再固定线束。"
    ]
  },
  {
    id: 15,
    phase: "电路",
    title: "连接传感器和风扇信号",
    originalTitle: "Connecting the Sensors to the Microcontroller",
    image: "assets/step-15.webp",
    summary:
      "把两个红外传感器、保险杠按键和风扇控制信号接到 Arduino。",
    tasks: [
      "左侧 Sharp 传感器信号接到 A0。",
      "右侧 Sharp 传感器信号接到 A1。",
      "保险杠按键接到数字引脚 10。",
      "风扇 MOSFET 信号接到数字引脚 12，并把 MOSFET GND 接到 Arduino GND。"
    ],
    warning: "传感器供电电压要与 Arduino 输入范围匹配，确认信号不会超过 5V。"
  },
  {
    id: 16,
    phase: "电路",
    title: "安装开关和指示灯",
    originalTitle: "Almost Done",
    image: "assets/step-16.webp",
    summary:
      "安装总电源开关，并把可选的状态 LED 接到数字引脚 13 和 GND。",
    tasks: [
      "连接电池开关的公母接头，确保接口不会在震动中松脱。",
      "可选：用数字引脚 13 驱动指示灯。",
      "检查所有外部接线已经固定，并留出维护空间。",
      "通电前再次确认正负极和公共地。"
    ]
  },
  {
    id: 17,
    phase: "收尾",
    title: "装配集尘盒和过滤器",
    originalTitle: "Assembling the Container",
    image: "assets/step-17.webp",
    summary:
      "组装集尘盒、滤网支架和过滤材料，确保灰尘先经过过滤再进入风扇区域。",
    tasks: [
      "按照滤网支架尺寸裁剪过滤材料，每边预留约 1 mm。",
      "把过滤材料安装到支架并确认四周没有明显缝隙。",
      "试装集尘盒，确保能快速拆下清灰。",
      "检查风道密封，避免灰尘绕过滤网。"
    ]
  },
  {
    id: 18,
    phase: "收尾",
    title: "合盖、烧录和调试",
    originalTitle: "Close It and Program It",
    image: "assets/step-18.webp",
    summary:
      "合上外壳，把 Arduino 代码烧录到主板，然后依次测试电池监测、避障、风扇和电机。",
    tasks: [
      "上传测试程序，先验证电机正反转，方向反了就交换电机输出线。",
      "测试左右传感器距离读数，再测试保险杠开关。",
      "把机器人架空测试风扇和电机，确认没有短路或卡死。",
      "最后上传完整程序，在低风险区域低速试跑。"
    ],
    warning: "第一次测试不要直接放地上满速运行；先架空、限速并随时准备断开电池。"
  },
  {
    id: 19,
    phase: "升级",
    title: "后续升级方向",
    originalTitle: "What's Next?",
    summary:
      "原项目后续加入过编码器和 PD 控制器。继续升级后，可以让机器人估计位置、沿墙清扫并逐步实现建图。",
    tasks: [
      "增加电机编码器，完成速度闭环和里程计。",
      "加入更多距离传感器，实现沿墙或边缘清扫。",
      "记录障碍物位置，尝试建立简单地图。",
      "把随机避障升级为覆盖路径规划。"
    ]
  },
  {
    id: 20,
    phase: "升级",
    title: "保存代码和继续改进",
    originalTitle: "Contribute",
    summary:
      "把程序、接线图和打印文件保存在自己的版本库中。每次改动都记录测试结果，后续排查会容易很多。",
    tasks: [
      "将代码和关键接线照片保存到版本库。",
      "记录每块电池的实际运行时间和低压保护点。",
      "把遇到的故障、解决方法和零件替代方案写下来。",
      "继续升级时保持原始版本可回退。"
    ],
    sourceUrl: "https://github.com/cesnietor/VacuumRobot"
  }
];
