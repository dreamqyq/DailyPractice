# DailyPractice

本项目用来上传一些闲暇时间完成的小练习，顶部预览为项目的首页，其中包括每一个小练习的链接。

---

### 支持自动创建新的练习文件脚本

命令：`node cli`，根据 `README.md`的目录列表，自增练习文件序号。自动创建的文件均以练习序号为名。新增练习会自动插入到`README.md`、`index.html` 的目录列表。

参数如下：

- `--name` 必填项；练习名称，会自动写入到 `html` 文件的 `title` 属性。
- `js`、`css`、`html`、`jsx`，可选项；参数中有的属性，就会同时创建该文件，并自动在创建的 `html` 文件中引入。

示例：`node cli css js html jsx --name "Practice Name 1"`

---

#### 目录：

- 001：导航栏
- 002：下拉菜单
- 003：轮播图
- 004：用原生 JS 实现 jQuery 的一些操作
- 005：事件冒泡、捕获可视化
- 006：点击按钮，显示浮层，点击别处，浮层消失
- 007：鸡兔同笼
- 008：倒计时插件
- 009: React Class 组件
- 010: React 龟兔赛跑
- 011: React 九宫格游戏
- 012: React 组件通信（EventHub）
- 013: React 组件通信（Redux）
- 014: VanillaJs x Redux demo
- 015: React Context demo
- 016: React Context 切换主题
- 017: React Hooks
- 018: React Router（Hash 实现）
- 019: React Router（react-router 实现）
- 020: React Lifecycle
- 021: CSS Grid Layout
- 022: Deep Copy
- 023: Cool Button
