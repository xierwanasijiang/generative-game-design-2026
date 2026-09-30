/* 生成式游戏设计年鉴 2024–2026 · 共享数据
   引用数：Semantic Scholar Graph API，检索于 2026-09-27。
   产业数据：GDC《2026 State of the Game Industry》(2026-01，n>2,300)、Google DeepMind / Microsoft / World Labs / Decart 官方发布、Wikipedia 相关条目。 */
window.GP = {
  retrieved: "2026-09-27",

  tracks: {
    W: { name: "神经世界模型", en: "Neural world models", desc: "以动作为条件、逐帧生成画面的“模型即引擎”。" },
    S: { name: "内容与场景生成", en: "Levels, scenes & narrative", desc: "LLM 生成关卡、叙事、2D/3D 场景等显式内容。" },
    R: { name: "规则与代码合成", en: "Rules, mechanics & code", desc: "LLM 写出可执行的规则、机制乃至完整游戏。" },
    F: { name: "资产 · 智能体 · 综述", en: "Assets, agents & surveys", desc: "3D 资产基座、游戏智能体与领域综述/基准。" }
  },

  /* 2024–2026 首次发布的论文（arXiv 首发年份） */
  papers: [
    { id: "2412.01506", t: "Structured 3D Latents for Scalable and Versatile 3D Generation (TRELLIS)", s: "TRELLIS", a: "Xiang et al.", org: "Microsoft Research", y: 2024, v: "CVPR 2025", c: 907, k: "F", adj: true, n: "结构化 3D 潜空间，一次生成网格、辐射场与高斯；成为游戏 3D 资产管线的通用底座。" },
    { id: "2501.03575", t: "Cosmos World Foundation Model Platform for Physical AI", s: "Cosmos WFM", a: "NVIDIA", org: "NVIDIA", y: 2025, v: "arXiv", c: 865, k: "W", adj: true, n: "开放权重的世界基础模型平台，面向物理 AI；与游戏世界模型共享架构与数据方法。" },
    { id: "2402.15391", t: "Genie: Generative Interactive Environments", s: "Genie", a: "Bruce et al.", org: "Google DeepMind", y: 2024, v: "ICML 2024 最佳论文", c: 829, k: "W", n: "从无动作标注的网络游戏视频中学出潜在动作空间，11B 参数，开启“可玩世界模型”路线。" },
    { id: "2501.12202", t: "Hunyuan3D 2.0: Scaling Diffusion Models for High Resolution Textured 3D Assets Generation", s: "Hunyuan3D 2.0", a: "Zhao et al.", org: "腾讯混元", y: 2025, v: "arXiv", c: 417, k: "F", n: "开源高分辨率带纹理 3D 资产生成，被大量游戏团队用于原型与长尾资产。" },
    { id: "2405.12399", t: "Diffusion for World Modeling: Visual Details Matter in Atari", s: "DIAMOND", a: "Alonso et al.", org: "日内瓦大学 / 爱丁堡大学", y: 2024, v: "NeurIPS 2024 Spotlight", c: 336, k: "W", n: "扩散世界模型；在 Atari 上训练智能体，并演示了可玩的 CS:GO 神经模拟。" },
    { id: "2408.14837", t: "Diffusion Models Are Real-Time Game Engines", s: "GameNGen", a: "Valevski et al.", org: "Google Research", y: 2024, v: "ICLR 2025", c: 300, k: "W", n: "单 TPU 以 20 fps 实时运行《DOOM》，人类评审难以区分真伪片段。" },
    { id: "2406.09394", t: "WonderWorld: Interactive 3D Scene Generation from a Single Image", s: "WonderWorld", a: "Yu et al.", org: "Stanford", y: 2024, v: "CVPR 2025", c: 227, k: "S", n: "从单张图像交互式扩展 3D 场景，用户可边走边生成相连区域。" },
    { id: "2402.18659", t: "Large Language Models and Games: A Survey and Roadmap", s: "LLMs & Games 综述", a: "Gallotta, Todd, Zammit, Earle, Liapis, Togelius, Yannakakis", org: "马耳他大学 / NYU", y: 2024, v: "IEEE Transactions on Games", c: 192, k: "F", n: "领域奠基综述：梳理 LLM 在游戏中的玩家、设计者、叙事者等角色，并给出研究路线图。" },
    { id: "2508.13009", t: "Matrix-Game 2.0: An Open-Source, Real-Time, and Streaming Interactive World Model", s: "Matrix-Game 2.0", a: "He et al.", org: "Skywork AI（昆仑万维）", y: 2025, v: "arXiv", c: 157, k: "W", n: "少步自回归扩散实现实时流式生成，约 1,200 小时 UE/GTA5 交互数据，完全开源。" },
    { id: "2504.12369", t: "WORLDMEM: Long-term Consistent World Simulation with Memory", s: "WorldMem", a: "Xiao et al.", org: "NTU S-Lab", y: 2025, v: "NeurIPS 2025", c: 147, k: "W", n: "引入记忆库检索历史帧与状态，缓解世界模型“回头就变样”的一致性问题。" },
    { id: "2403.01248", t: "SceneCraft: An LLM Agent for Synthesizing 3D Scene as Blender Code", s: "SceneCraft", a: "Hu et al.", org: "Caltech / Google", y: 2024, v: "ICML 2024", c: 144, k: "S", n: "LLM 智能体把文本描述编译为 Blender Python 代码，并以视觉反馈迭代修正场景。" },
    { id: "2404.02039", t: "A Survey on Large Language Model-Based Game Agents", s: "LLM 游戏智能体综述", a: "Hu et al.", org: "Georgia Tech", y: 2024, v: "arXiv", c: 142, k: "F", n: "按感知、记忆、推理、行动等模块系统梳理 LLM 游戏智能体。" },
    { id: "2411.13543", t: "BALROG: Benchmarking Agentic LLM and VLM Reasoning On Games", s: "BALROG", a: "Paglieri et al.", org: "UCL / Oxford", y: 2024, v: "ICLR 2025", c: 135, k: "F", n: "用 NetHack 等游戏评测 LLM/VLM 的长程智能体推理能力。" },
    { id: "2411.00769", t: "GameGen-X: Interactive Open-world Game Video Generation", s: "GameGen-X", a: "Che et al.", org: "港科大 等", y: 2024, v: "ICLR 2025", c: 135, k: "W", n: "首个专为开放世界游戏视频生成与交互控制设计的扩散 Transformer。" },
    { id: "2501.08325", t: "GameFactory: Creating New Games with Generative Interactive Videos", s: "GameFactory", a: "Yu et al.", org: "港大 / 快手", y: 2025, v: "ICCV 2025", c: 131, k: "W", n: "把动作控制从小规模游戏数据泛化到开放域场景，用于“创造新游戏”。" },
    { id: "2507.21809", t: "HunyuanWorld 1.0: Generating Immersive, Explorable, and Interactive 3D Worlds from Words or Pixels", s: "HunyuanWorld 1.0", a: "HunyuanWorld Team", org: "腾讯混元", y: 2025, v: "arXiv", c: 96, k: "S", n: "文本/图像生成全景可探索 3D 世界，输出可导入引擎的分层网格。" },
    { id: "2412.03568", t: "The Matrix: Infinite-Horizon World Generation with Real-Time Moving Control", s: "The Matrix", a: "Feng et al.", org: "—", y: 2024, v: "NeurIPS 2025", c: 91, k: "W", n: "面向无限时长、实时移动控制的世界生成，训练于 AAA 游戏数据并泛化至真实场景。" },
    { id: "2504.08388", t: "MineWorld: a Real-Time and Open-Source Interactive World Model on Minecraft", s: "MineWorld", a: "Guo et al.", org: "Microsoft Research", y: 2025, v: "arXiv", c: 90, k: "W", n: "Minecraft 上的实时开源世界模型，采用并行解码提升帧率。" },
    { id: "2506.17201", t: "Hunyuan-GameCraft: High-dynamic Interactive Game Video Generation with Hybrid History Condition", s: "Hunyuan-GameCraft", a: "Li et al.", org: "腾讯混元", y: 2025, v: "arXiv", c: 85, k: "W", n: "统一键鼠动作表征与混合历史条件，生成高动态、可交互的游戏视频。" },
    { id: "2404.10179", t: "Scaling Instructable Agents Across Many Simulated Worlds", s: "SIMA", a: "SIMA Team", org: "Google DeepMind", y: 2024, v: "arXiv", c: 83, k: "F", n: "在多款商业 3D 游戏中以自然语言指令驱动的通用智能体。" },
    { id: "s41586-025-08600-3", t: "World and Human Action Models towards gameplay ideation", s: "Muse / WHAM", a: "Kanervisto et al.", org: "Microsoft Research × Ninja Theory", y: 2025, v: "Nature", c: 74, k: "W", n: "以《Bleeding Edge》对局数据训练，生成画面与手柄动作，面向玩法构思而非替代引擎。" },
    { id: "2507.17744", t: "Yume: An Interactive World Generation Model", s: "Yume", a: "Mao et al.", org: "上海 AI Lab 等", y: 2025, v: "arXiv", c: 71, k: "W", n: "从图像出发、以键鼠控制探索的交互式世界生成。" },
    { id: "2410.15644", t: "Procedural Content Generation in Games: A Survey with Insights on Emerging LLM Integration", s: "PCG × LLM 综述", a: "Maleki & Zhao", org: "—", y: 2024, v: "AIIDE 2024", c: 63, k: "F", n: "回顾二十年 PCG 方法谱系，专门讨论 LLM 带来的新范式。" },
    { id: "2405.13042", t: "StoryVerse: Towards Co-authoring Dynamic Plot with LLM-based Character Simulation via Narrative Planning", s: "StoryVerse", a: "Wang et al.", org: "—", y: 2024, v: "FDG 2024", c: 49, k: "S", n: "作者意图 × 角色模拟的混合叙事规划，支持动态剧情共创。" },
    { id: "2404.08706", t: "Game Generation via Large Language Models", s: "VGDL 游戏生成", a: "Hu, Zhao, Liu", org: "南方科技大学", y: 2024, v: "IEEE CoG 2024", c: 32, k: "R", n: "用 LLM 同时生成 VGDL 规则与关卡，探讨提示设计对可玩性的影响。" },
    { id: "2407.09388", t: "GAVEL: Generating Games Via Evolution and Language Models", s: "GAVEL", a: "Todd et al.", org: "NYU / Maastricht", y: 2024, v: "NeurIPS 2024", c: 32, k: "R", n: "以 LLM 作为变异算子、质量多样性搜索在 Ludii 语言中进化出新桌游规则。" },
    { id: "2405.06686", t: "Word2World: Generating Stories and Worlds through Large Language Models", s: "Word2World", a: "Nasir, James, Togelius", org: "NYU 等", y: 2024, v: "arXiv", c: 31, k: "S", n: "先写故事、再抽取角色与地块，最终生成可玩的 2D 世界。" },
    { id: "2412.00887", t: "Playable Game Generation", s: "PlayGen", a: "Yang et al.", org: "—", y: 2024, v: "arXiv", c: 26, k: "R", n: "强调“可玩性”而非画面：数据、模型与评测三方面联合设计。" }
  ],

  /* 2023 年奠基工作（被本领域反复引用） */
  foundations: [
    { s: "Generative Agents", a: "Park et al.", v: "UIST 2023", c: 5674, n: "“西部小镇”式可信 NPC 社会模拟" },
    { s: "Voyager", a: "Wang et al.", v: "TMLR", c: 2343, n: "Minecraft 中终身学习的 LLM 智能体" },
    { s: "LayoutGPT", a: "Feng et al.", v: "NeurIPS 2023", c: 447, n: "LLM 生成 2D/3D 布局" },
    { s: "Holodeck", a: "Yang et al.", v: "CVPR 2024", c: 343, n: "语言驱动的 3D 室内环境生成" },
    { s: "Level Generation Through LLMs", a: "Todd et al.", v: "FDG 2023", c: 134, n: "LLM 生成 Sokoban 关卡的首个系统研究" },
    { s: "3D-GPT", a: "Sun et al.", v: "3DV 2025", c: 121, n: "LLM 调度程序化 3D 建模" },
    { s: "MarioGPT", a: "Sudhakaran et al.", v: "NeurIPS 2023", c: 111, n: "文本到马里奥关卡的开放式生成" }
  ],

  /* 世界模型规格演进（仅列官方公开的数字） */
  worldspecs: [
    { m: "Genie", d: "2024-02", org: "Google DeepMind", fps: 1, res: "2D", horizon: "短片段", note: "11B 参数，从网络视频学习潜在动作" },
    { m: "GameNGen", d: "2024-08", org: "Google Research", fps: 20, res: "DOOM 原生", horizon: "多分钟稳定", note: "单 TPU" },
    { m: "Oasis", d: "2024-10", org: "Decart × Etched", fps: 20, res: "—", horizon: "开放游玩", note: "首个公开可玩的实时 AI Minecraft" },
    { m: "Genie 2", d: "2024-12", org: "Google DeepMind", fps: null, res: "360p", horizon: "10–20 秒", note: "首次支持 3D 与第一人称" },
    { m: "Muse / WHAM", d: "2025-02", org: "Microsoft", fps: 10, res: "300×180", horizon: "玩法片段", note: "Nature 论文，面向玩法构思" },
    { m: "Genie 3", d: "2025-08", org: "Google DeepMind", fps: 24, res: "720p", horizon: "数分钟 · 记忆约 1 分钟", note: "可提示的世界事件" },
    { m: "Matrix-Game 3.0", d: "2026-04", org: "Skywork AI", fps: null, res: "720p", horizon: "长时记忆", note: "实时流式、开源" }
  ],

  /* GDC 2026 State of the Game Industry */
  sentiment: {
    years: [2024, 2025, 2026],
    positive: [21, 13, 7],
    negative: [18, 30, 52],
    mixed2025: 51, mixed2026: 30
  },
  usecases: [
    { k: "调研 / 头脑风暴", v: 81 },
    { k: "邮件与日常事务", v: 47 },
    { k: "代码辅助", v: 47 },
    { k: "原型制作", v: 35 },
    { k: "测试 / 调试", v: 22 },
    { k: "市场与宣传内容", v: 20 },
    { k: "资产生成", v: 19 },
    { k: "程序化生成（PCG）", v: 10, hi: true },
    { k: "面向玩家的功能", v: 5, hi: true }
  ],
  adoption: { personal: 36, company: 52, policy: 78, studio: 30, publisher: 58, mgmt: 47, ic: 29 },

  /* 时间线：r = 研究，i = 产业，p = 政策与劳工 */
  timeline: [
    { d: "2024-01", k: "p", t: "Steam 要求披露生成式 AI", x: "Valve 更新规则：使用生成式 AI 内容的游戏须在商店页披露，并说明防止生成违规内容的措施。" },
    { d: "2024-02", k: "r", t: "Genie 发布", x: "DeepMind 以 11B 参数模型从无标注游戏视频中学会“可玩”，7 月获 ICML 2024 最佳论文。" },
    { d: "2024-02", k: "r", t: "《LLMs and Games》综述", x: "Gallotta、Togelius、Yannakakis 等发表领域路线图，后刊于 IEEE Transactions on Games。" },
    { d: "2024-03", k: "i", t: "Roblox Studio 引入生成式工具", x: "上线自动化身设置与文本生成纹理两项 AI 工具。" },
    { d: "2024-08", k: "r", t: "GameNGen：扩散模型跑《DOOM》", x: "Google 在单 TPU 上以 20 fps 实时模拟《DOOM》，“神经游戏引擎”概念出圈。" },
    { d: "2024-09", k: "p", t: "加州 AB 1836 / AB 2602 签署", x: "为表演者的数字复制品（含配音与动捕）建立同意与授权要求。" },
    { d: "2024-10", k: "i", t: "Oasis 公开可玩", x: "Decart 与 Etched 发布实时 AI 生成的 Minecraft 式世界，20 fps，无传统游戏代码。" },
    { d: "2024-10", k: "i", t: "Unity 6 发布", x: "随附 Unity Muse 与 Sentis 生成式/推理工具。" },
    { d: "2024-12", k: "r", t: "Genie 2", x: "扩展到 3D 与第一人称视角，360p，可维持 10–20 秒一致。" },
    { d: "2025-02", k: "r", t: "Muse / WHAM 登上 Nature", x: "Microsoft Research 与 Ninja Theory 以《Bleeding Edge》数据训练玩法构思模型。" },
    { d: "2025-02", k: "i", t: "《使命召唤：黑色行动 6》披露 AI 资产", x: "Activision 依 Steam 规则声明使用生成式 AI 制作部分游戏内资产。" },
    { d: "2025-03", k: "i", t: "Roblox 开源 Cube 3D", x: "发布面向 3D 智能的基础模型路线，首个版本生成网格资产。" },
    { d: "2025-05", k: "p", t: "SAG-AFTRA 就 AI 达斯·维达语音提起申诉", x: "针对《堡垒之夜》中 AI 生成角色语音，向 Epic 子公司提出不当劳动行为指控。" },
    { d: "2025-06", k: "r", t: "Matrix-Game 与 Hunyuan-GameCraft", x: "中国团队密集开源交互式游戏世界模型，数据规模达千小时级。" },
    { d: "2025-07", k: "p", t: "游戏配音罢工结束", x: "SAG-AFTRA 新协议以 95.04% 通过，确立数字复制品的同意与披露要求。" },
    { d: "2025-08", k: "r", t: "Genie 3", x: "720p、24 fps 实时交互，一致性维持数分钟，支持“可提示的世界事件”。" },
    { d: "2025-08", k: "r", t: "Matrix-Game 2.0 开源", x: "少步自回归扩散实现实时流式世界生成。" },
    { d: "2025-09", k: "i", t: "EA 550 亿美元私有化", x: "据《金融时报》报道，新股东计划在全公司引入 AI 以压缩运营成本。" },
    { d: "2025-11", k: "i", t: "World Labs 发布 Marble", x: "多模态世界模型面向所有用户开放，可导出高斯泼溅、网格或视频。" },
    { d: "2025-11", k: "r", t: "Hunyuan-GameCraft-2", x: "从固定键鼠动作走向自然语言指令驱动的游戏世界交互。" },
    { d: "2025-12", k: "i", t: "《光与影：33 号远征队》被撤销独立游戏奖", x: "因首发版本含生成式 AI 占位纹理，Indie Game Awards 收回两项奖项。" },
    { d: "2026-01", k: "i", t: "Project Genie 上线", x: "1 月 29 日向美国 Google AI Ultra 订阅者开放，单次探索限 60 秒；多家游戏公司股价随之下跌。" },
    { d: "2026-01", k: "i", t: "GDC 行业报告：52% 认为负面", x: "认为生成式 AI 对行业有负面影响的比例从 2024 年 18% 升至 52%。" },
    { d: "2026-02", k: "i", t: "World Labs 融资 10 亿美元", x: "世界模型赛道资本集中：AMI 亦融资 10.3 亿美元，General Intuition 种子轮 1.337 亿美元。" },
    { d: "2026-03", k: "r", t: "AutoUE", x: "多智能体在 Unreal Engine 中端到端生成 3D 游戏，含自动试玩评测。" },
    { d: "2026-04", k: "r", t: "Matrix-Game 3.0", x: "720p 实时长时记忆世界模型，数据引擎融合 UE 合成、AAA 游戏采集与真实视频。" },
    { d: "2026-04", k: "i", t: "Xbox 品牌重塑", x: "新领导层公开表态不以生成式 AI 用于游戏开发，并暂停主机与移动端 Copilot。" },
    { d: "2026-04", k: "i", t: "阿里发布 Happy Oyster", x: "实时世界模型，含“导演”与“漫游”两种模式，可生成 3 分钟世界片段。" },
    { d: "2026-05", k: "r", t: "GameGen-Verifier 与 Mage", x: "为 LLM 生成的游戏建立可验证评测：状态注入验证、四轴评测超越“编译通过率”。" },
    { d: "2026-06", k: "i", t: "NVIDIA Cosmos 3 开放权重", x: "统一物理推理、世界模拟与动作生成的多模态世界模型家族。" },
    { d: "2026-07", k: "r", t: "从像素回到状态", x: "《From Pixels to States》与 StatePlay 主张世界模型必须显式建模游戏状态与机制。" },
    { d: "2026-08", k: "r", t: "Matrix-Game 3.5 与“游戏开发即数据引擎”", x: "几何感知 Patch Memory；另有工作提出以引擎可验证性为世界模型提供奖励信号。" },
    { d: "2026-09", k: "r", t: "GameDirector", x: "把玩法逻辑与渲染解耦，让玩家可配置的游戏世界模型兼顾机制正确与生成自由。" }
  ],

  /* 2026 研究前沿 */
  frontiers: [
    { h: "从像素回到状态", en: "State-aware world models", p: ["From Pixels to States (2607.14076)", "StatePlay (2607.26754)", "GameDirector (2609.25652)", "WorldMind (2608.21439)"],
      x: "纯像素世界模型能“看起来像游戏”，却守不住血量、技能、胜负等规则。2026 年的共识是把显式游戏状态重新请回循环：模型同时预测画面与状态，或让引擎负责规则、生成模型负责渲染。" },
    { h: "长时记忆与几何一致", en: "Memory & long horizon", p: ["WorldMem (2504.12369)", "Matrix-Game 3.0 (2604.08995)", "Matrix-Game 3.5 (2608.29910)", "StableWorld (2601.15281)"],
      x: "一致性从 Genie 2 的 10–20 秒走到数分钟，关键在记忆：检索历史帧、显式 3D patch 记忆与相机投影条件，让“转身回来世界还在”。" },
    { h: "可验证的游戏生成", en: "Verification beyond compile-pass", p: ["GameGen-Verifier (2605.07442)", "Mage (2605.07342)", "V-GameGym (2509.20136)", "CreativeGame (2604.19926)"],
      x: "Mage 在 858 次生成中发现：直接 NL→C# 的运行通过率最高（均值 43%），但机制 F1 仅约 0.12。评测正从“能跑”转向“机制对不对、好不好玩”。" },
    { h: "引擎原生的智能体管线", en: "Engine-native agents", p: ["AutoUE (2603.07106)", "MAGIC (2607.11594)", "ScriptDoctor (2506.06524)", "Real-Time World Crafting (2510.16952)"],
      x: "LLM 不再直接吐出成品，而是在 Unreal、Unity、PuzzleScript 等引擎里调用工具、写蓝图、跑自动试玩；DSL / ECS 等受约束中间层成为安全接入玩家侧的主流模式。" },
    { h: "搜索生成器，而非搜索内容", en: "Program search & open-endedness", p: ["PCG Metageneration + CAD (2608.17947)", "Mortar (2601.00105)", "GAVEL (2407.09388)"],
      x: "LLM 作为变异算子，与质量多样性搜索结合：进化的对象从单个关卡上移到“生成器程序”和“游戏机制”，并能自动沉淀可复用的抽象库。" },
    { h: "游戏开发作为世界模型的奖励环境", en: "Games as verifiable data engines", p: ["Agentic Game Dev as Data Engine (2608.25518)", "Matrix-Game 3.0 数据引擎"],
      x: "代码之所以能被 RL 后训练，是因为编译器提供可靠奖励。游戏引擎能检查碰撞、物理、可达性与可玩性，正被当作空间/世界模型缺失的那块“可验证奖励”。" }
  ],

  findings: [
    { n: "1 → 24 fps", h: "“模型即引擎”在 30 个月内从论文走到消费级原型",
      x: "Genie（2024-02，1 fps，2D）→ GameNGen（20 fps 跑《DOOM》）→ Genie 3（720p、24 fps、数分钟一致）→ Project Genie（2026-01 向订阅用户开放）。神经世界模型成为生成式游戏设计中增长最快、引用最集中的方向。" },
    { n: "192 vs 829", h: "学术影响力的重心，从 LLM-PCG 转向世界模型与 3D 基座",
      x: "2024–2026 年引用最高的相关工作是 TRELLIS（907）、Cosmos（865）与 Genie（829）。纯 LLM 驱动的 PCG 论文引用多在数十量级，领域综述《LLMs and Games》为 192。视觉生成社区正在定义“生成式游戏”的议程。" },
    { n: "43% / F1 0.12", h: "2026 年的关键词是“可验证”",
      x: "能跑不等于对。新一代工作把显式状态、引擎校验和自动试玩放回生成循环：StatePlay、GameDirector 解耦规则与渲染，GameGen-Verifier 与 Mage 重建评测体系。" },
    { n: "6+ 开源系列", h: "中国团队主导开源交互世界模型",
      x: "Matrix-Game 1.0→3.5（Skywork）、Hunyuan-GameCraft 1/2、HunyuanWorld 与 Yan（腾讯）、Happy Oyster（阿里）等持续开源或发布，数据引擎普遍结合 UE 合成与 AAA 游戏采集。" },
    { n: "52% · 52%", h: "产业侧：采用在上升，认同在下降",
      x: "GDC 2026 调查中 52% 的受访者所在公司使用生成式 AI，而认为其对行业有负面影响的比例也达 52%（2024 年为 18%）。真正用于程序化生成的仅 10%，用于面向玩家功能的仅 5%。" },
    { n: "$1B+", h: "资本押注世界模型，玩家端的“AI 披露”成为声誉变量",
      x: "World Labs 与 AMI 各自完成约 10 亿美元融资；与此同时，《光与影：33 号远征队》因 AI 占位纹理被撤奖，ARC Raiders 回炉重录 AI 语音，Xbox 公开与生成式 AI 保持距离。" }
  ],

  recs: [
    { who: "游戏工作室", items: [
      "把 LLM 放在“设计中间层”：让它产出结构化 IR、DSL、蓝图或参数，而不是直接产出面向玩家的最终资产。",
      "先在不可见环节落地：原型、关卡草案、自动试玩与数值模拟（LLM 驱动的 MMO 玩家仿真已有实证）。",
      "建立可验证回路：运行时状态注入、机制断言与自动化试玩，替代“能编译就算过”。",
      "把披露当作产品设计的一部分：Steam 已要求披露，玩家与评奖机构对未披露的 AI 内容零容忍。"
    ]},
    { who: "研究者", items: [
      "评测超越 FVD 与编译通过率：机制一致性、可玩性、长时一致与玩家体验需要同时度量。",
      "混合架构是主线：显式状态 / 规则引擎 + 生成式渲染与内容长尾。",
      "把游戏引擎当作可验证奖励环境，为空间与世界模型的 RL 后训练提供信号。",
      "重视数据治理：训练数据来源、授权与能耗是从业者反对的首要原因。"
    ]},
    { who: "平台与工具方", items: [
      "UGC 平台是最早的规模化场景：Roblox Cube、Project Genie 类“提示即世界”降低了创作门槛。",
      "为创作者提供“可控性旋钮”：种子、约束、局部重生成与版本谱系，比一次性生成更有价值。",
      "世界模型的推理成本仍是瓶颈：Project Genie 以 60 秒限制控制算力，实时化与端侧化是竞争焦点。"
    ]}
  ],

  sources: [
    ["Semantic Scholar Graph API（论文元数据与引用数，2026-09-27 检索）", "https://api.semanticscholar.org"],
    ["arXiv API（2025–2026 新论文检索与摘要）", "https://arxiv.org"],
    ["GDC, 2026 State of the Game Industry（2026-01，n>2,300，±3% MoE）", "https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/"],
    ["Google DeepMind, Genie 3: A new frontier for world models（2025-08）", "https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/"],
    ["Google, Project Genie（2026-01-29）", "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/"],
    ["World Labs, Marble: A Multimodal World Model", "https://www.worldlabs.ai/blog/marble-world-model"],
    ["Decart / Etched, Oasis", "https://oasis-model.github.io/"],
    ["Kanervisto et al., World and Human Action Models towards gameplay ideation, Nature (2025)", "https://doi.org/10.1038/s41586-025-08600-3"],
    ["Wikipedia：Genie (world model)、World model (AI)、Decart、Steam、SAG-AFTRA video game strike、AI slop 等条目", "https://en.wikipedia.org"]
  ]
};
