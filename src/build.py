# 重新生成站点：python src/build.py（在仓库根目录运行）
import os
here=os.path.dirname(os.path.abspath(__file__))
s=open(os.path.join(here,"web.html"),encoding="utf8").read()
d=open(os.path.join(here,"data.js"),encoding="utf8").read()
s=s.replace("/*@DATA*/",d)
i=s.index('<div id="progress">')
out=('<!doctype html>\n<html lang="zh-CN">\n<head>\n<meta charset="utf-8">\n'
 '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
 '<meta name="description" content="LLM 驱动的生成式游戏设计与 PCG 2024–2026 年度综述：技术路线、世界模型演进、高引用论文、时间线、GDC 2026 产业数据与 2026 研究前沿。">\n'
 '<style>html,body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>\n'
 +s[:i]+'</head>\n<body>\n'+s[i:]+'\n</body>\n</html>\n')
open(os.path.join(here,"..","index.html"),"w",encoding="utf8").write(out)
print("wrote index.html")
