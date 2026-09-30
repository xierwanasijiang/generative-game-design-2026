# 生成式游戏设计年鉴 2024–2026

LLM 驱动的生成式游戏设计（Generative Game Design / PCG）年度综述的交互网页版。

**在线阅读：** https://xierwanasijiang.github.io/generative-game-design-2026/

## 内容

- 六个核心判断
- 四条技术路线：神经世界模型、内容与场景生成、规则与代码合成、资产·智能体·综述
- 神经世界模型规格演进（Genie → GameNGen → Genie 3 → Matrix-Game 3.0）
- 28 篇 2024–2026 年高引用论文（Semantic Scholar 引用数，2026-09-27 检索）
- 2024–2026 年 33 个里程碑时间线
- GDC《2026 State of the Game Industry》产业数据
- 2026 年研究前沿与行动建议

## 数据来源

Semantic Scholar Graph API、arXiv API、GDC 2026 State of the Game Industry 报告原文、Google DeepMind / Microsoft / World Labs / Decart 官方发布、Wikipedia 相关条目。引用数只宜做相对比较。

## 目录结构

```
index.html        # 发布的页面（单文件，由 src/ 生成）
src/web.html      # 页面模板
src/data.js       # 全部数据（论文、时间线、调查数据）
src/build.py      # 生成 index.html：python src/build.py
```
