## 学んだこと

### 三項演算子

`条件 ? trueだった時 : falseだった時`

ex)
`var age = 26;`
`var beverage = (age >= 21) ? "ビール" : "ジュース";`
`console.log(beverage); // "ビール"`

参考：Qiita https://qiita.com/smicle/items/7d3b9881834dc0142fb7
MDN https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

### return 内での条件分岐

- if のみ
  `{(list.length === 0) && (<Loading />)}`

- if else の場合
  `{isQuestion ? ( <Avatar alt="icon" src={Kafu}/> ) : ( <Avatar alt="icon" src={NoProfile}> )}`

最初に条件式
（）内に真または偽の場合に返す JSX を書く
