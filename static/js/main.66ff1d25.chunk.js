(this["webpackJsonpauto-fill-input"]=this["webpackJsonpauto-fill-input"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),c=n(9),a=n.n(c),s=(n(15),n(7)),o=n(8),u=(n(16),n(5)),l=n(4),h=n(10),d=function e(t){Object(l.a)(this,e),this.val=t,this.children=new Map,this.ended=!1},f=function(){function e(t,n){var r=this;Object(l.a)(this,e),this.isWordNode=n,this.root=new d(""),t.length&&t.forEach((function(e){var t=e.split(" ");n?r.insert(t):t.forEach((function(e){return r.insert(e)}))}))}return Object(h.a)(e,[{key:"insert",value:function(e){var t,n=this.root,r=Object(u.a)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value,c=n.children.get(i)||new d(i);n.children.set(i,c),n=c}}catch(a){r.e(a)}finally{r.f()}n.ended=!0}},{key:"search",value:function(e){var t,n=this.root,r=Object(u.a)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(!(n=n.children.get(i)))return!1}}catch(c){r.e(c)}finally{r.f()}return this.isWordNode?n.children.keys().next().value:this.getDownwardPath(n,"")}},{key:"getDownwardPath",value:function(e,t){if(e.ended)return t;var n,r=Object(u.a)(e.children.keys());try{for(r.s();!(n=r.n()).done;){var i=n.value;if(e.children.has(i)){var c=e.children.get(i);return this.getDownwardPath(c,t+i)}}}catch(a){r.e(a)}finally{r.f()}}}]),e}(),j=function(e){var t=e.input,n=e.dictionary,i=Object(r.useRef)({wordTrie:new f([],!0),charTrie:new f([],!1)}).current;if(Object(r.useEffect)((function(){n&&n.length&&(i.wordTrie=new f(n,!0),i.charTrie=new f(n,!1))}),[JSON.stringify(n)]),n&&n.length&&t&&t.length){var c=t.trim().split(" "),a=c[c.length-1],s=c.length&&c[0]&&i.wordTrie.search(c);return s?"".concat(" "===t[t.length-1]?"":" ").concat(s):a&&i.charTrie.search(a)}return""},v=(n(17),n(0)),b=function(e){var t=e.items;return Object(v.jsxs)("div",{className:"list",children:[Object(v.jsx)("div",{className:"list-header alter",children:"\u5f53\u524d\u8bcd\u5e93\uff1a".concat(t.length)}),t.map((function(e,t){return Object(v.jsx)("div",{className:t%2?"list-item alter":"list-item",children:e},e)}))]})},O=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(new Set),a=Object(o.a)(c,2),u=a[0],l=a[1],h=j({input:n,dictionary:Object(s.a)(u).reverse()});return Object(v.jsxs)("div",{className:"search-page",children:[Object(v.jsx)("h1",{className:"title",children:"AUTO FILL INPUT"}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(new Set(u).add(n.trim())),i("")},children:[Object(v.jsxs)("div",{className:"input-container",children:[Object(v.jsx)("input",{className:"input",value:n,onChange:function(e){return i(e.target.value)},onKeyDown:function(e){9===e.keyCode&&h&&(e.preventDefault(),i((function(e){return e+"".concat(h," ")})))},type:"text",placeholder:"\u8f93\u5165\u6587\u672c...",required:!0}),Boolean(h)&&Object(v.jsx)("span",{className:"auto-fill-hint",style:{marginLeft:"".concat(function(){var e=document.createElement("canvas").getContext("2d");return e.font=getComputedStyle(document.body).font,e.measureText(n).width}()+(" "===h[0]?5:0),"px")},children:h})]}),Object(v.jsx)("input",{className:"submit-button",type:"submit",value:"\u63d0\u4ea4"})]}),Object(v.jsx)(b,{items:Object(s.a)(u).reverse()})]})};n(19);var m=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(O,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(m,{})}),document.getElementById("root")),p()}},[[20,1,2]]]);
//# sourceMappingURL=main.66ff1d25.chunk.js.map