# vdom (virtual dom)

## 什么是 vdom，为何要用 vdom

- virtual dom, 虚拟 DOM
- 用 JS 模拟 DOM 结构
- DOM 变化的对比，放在 JS 层来做（图灵完备语言）
- 提高重绘性能

```html
<ul id='list'>
  <li class='item'>Item 1</li>
  <li class='item'>Item 2</li>
</ul>
```

```js
{
  tag: 'ul',
  attrs: {
    id: 'list'
  },
  children: [
    {
      tag: 'li',
      attrs: { className: 'item' },
      children: ['Item 1']
    },
    {
      tag: 'li',
      attrs: { className: 'item' },
      children: ['Item 2']
    }
  ]
}
```

#### 用 jQuery 实现

<<< @/src/JS/jq-vdom.html

#### 遇到的问题

- DOM 操作是 "昂贵" 的，js 运行效率高
- 尽量减少 DOM 操作，而不是 "推到重来"
- 项目越复杂，影响就越严重
