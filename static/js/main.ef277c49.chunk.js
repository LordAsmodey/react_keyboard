(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(7),a=n.n(s),c=n(2),r=n(3),o=n(5),i=n(4),u=n(1),p=n(0),y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={x:0,y:0},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("mousemove",(function(t){e.setState({x:t.x,y:t.y})}))}},{key:"render",value:function(){var e=this.state,t=e.x,n=e.y;return Object(p.jsx)("h1",{children:"X: ".concat(t,",Y: ").concat(n)})}}]),n}(u.Component),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:null},e.pressAnyKey=function(t){e.setState({pressedKey:"Space"===t.code?"Space":t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.pressAnyKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.pressAnyKey)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("p",{className:"App__message",children:null===this.state.pressedKey?"Nothing was pressed yet":"The last pressed key is [".concat(this.state.pressedKey,"]")}),Object(p.jsx)(y,{})]})}}]),n}(u.Component);n(13);a.a.render(Object(p.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ef277c49.chunk.js.map