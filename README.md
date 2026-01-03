# React + Vite

```md
3个子包不该耦合在一起，如果适合工具包的话，再提取公共的，如isObject
shared 融合其他子包。
子包目录
type
utils

dndManager => dragdropMange
html5-dnd => react-dnd
drag-html5  => backend-html5
drag-core  => dnd-core
drag-hooks => react-dnd

DragDrop => dnd
Monitor => Watcher
manager => Hub // 枢纽
actions的Registry => Directory // 目录（与 Hub 配套） register， componentManagement
backend => Driver
isSetup,setup => isInit, init
xyCoord => position
spec => norm
connector => adapter
beginDrag => startDrag
endDrag => overDrag
source => origin
target =>  dest / destination


文件名修改，
返回数组，变返回对象。建议还是数组，在观望
switch case 变为 if else
导入不用as
redux5.0.1接收几个参数

// 如果这样使用 useDrag，有预览：
const [, drag, preview] = useDrag(...);
// preview(ref) 用于指定预览元素：
MonotonicInterpolant
OffsetUtils
DragPreviewImage
SourceConnector的一些
```