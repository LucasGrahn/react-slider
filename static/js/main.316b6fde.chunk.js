(this["webpackJsonpreact-slider"]=this["webpackJsonpreact-slider"]||[]).push([[0],{29:function(n,t,e){"use strict";e.r(t);var i,a,c,o,r,s,b,l,d,h,u,j,p=e(0),x=e.n(p),O=e(13),g=e.n(O),m=e(3),f=e(4),v=Object(f.a)(i||(i=Object(m.a)(["\n    body {\n      margin: 0;\n      padding: 0;\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n        sans-serif;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n"]))),w=e(18),y=e(1),k=f.b.div(a||(a=Object(m.a)(["\n    max-width: 800px;\n    opacity: ",";\n"])),(function(n){return n.isActive?"1":"0"})),C=f.b.img(c||(c=Object(m.a)(["\n    position: relative;\n    width: 100%;\n    height: auto;\n    z-index: -1;\n    max-height: 450px;\n    border-radius: 10px;\n    transform: scale(",");\n    transition: ease 0.5s;\n"])),(function(n){return n.isActive?"1":"0.95"})),S=f.b.div(o||(o=Object(m.a)(["\n    position: absolute;\n    bottom: 10px;\n    width: 100%;\n    min-height: 30px;\n    z-index: 5;\n    color: white;\n    text-align: center;\n    opacity: ",";\n"])),(function(n){return n.isActive?"1":"0"})),F=f.b.div(r||(r=Object(m.a)(["\n    position: absolute;\n    left: 0px;\n    top: 0px;\n"]))),A=function(n){var t=n.isActive,e=n.imageSrc,i=n.alt,a=n.label;return Object(y.jsx)(k,{isActive:t,children:Object(y.jsxs)(F,{children:[Object(y.jsx)(C,{src:e,alt:i,isActive:t}),Object(y.jsx)(S,{isActive:t,children:a})]})})},z=f.b.form(s||(s=Object(m.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"]))),I=(f.b.input(b||(b=Object(m.a)(["\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n    background-color: black;\n"]))),function(n){n.amount,n.activeIndex,n.onChangeFn;return Object(y.jsx)(z,{children:Object(y.jsx)("fieldset",{})})}),B=e(17),D=e(10),M=f.b.div(l||(l=Object(m.a)(["\n    width: 100%;\n    border-radius: 10px;\n    position: relative;\n    height: 450px;\n"]))),J=f.b.button(d||(d=Object(m.a)(["\n    background-color: transparent;\n    border-color: transparent;\n    color: white;\n    z-index: 10;\n    cursor: pointer;\n    height: 40px;\n    width: 40px;\n    padding: 4px;\n"]))),L=Object(f.b)(B.a)(h||(h=Object(m.a)(["\n    height: 20px;\n    width: 20px !important;\n"]))),P=f.b.div(u||(u=Object(m.a)(["\n    display: flex;\n    justify-content: space-between;\n    z-index: 10;\n    position: absolute;\n    bottom: 45%;\n    width: 95%;\n    padding-left: 2.5%;\n"]))),R=function(n){var t=n.items,e=Object(p.useState)(0),i=Object(w.a)(e,2),a=i[0],c=i[1],o=Object(p.useCallback)((function(n){c(n!==t.length-1?n+1:0)}),[a]),r=Object(p.useCallback)((function(n){c(0===n?t.length-1:n-1)}),[a]),s=Object(p.useCallback)((function(n){return c(n)}),[]);return Object(y.jsxs)(M,{children:[t.map((function(n,t){return Object(y.jsx)(A,{isActive:t===a,imageSrc:n.path,alt:n.alt,label:n.label},t)})),Object(y.jsxs)(P,{children:[Object(y.jsx)(J,{onClick:function(){return r(a)},children:Object(y.jsx)(L,{icon:D.a})}),Object(y.jsx)(J,{onClick:function(){return o(a)},children:Object(y.jsx)(L,{icon:D.b})})]}),Object(y.jsx)(I,{amount:t.length,activeIndex:a,onChangeFn:s})]})},T=f.b.div(j||(j=Object(m.a)(["\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),U=function(){var n=Object(p.useMemo)((function(){return[{path:"https://picsum.photos/1280/720",label:"What an amazing image!",alt:"amazing image"},{path:"https://picsum.photos/1920/1080",label:"I wonder what can be seen here",alt:"wonder"},{path:"https://picsum.photos/960/544",label:"Sadly the last picture...",alt:"last picture"}]}),[]);return Object(y.jsxs)(x.a.Fragment,{children:[Object(y.jsx)(v,{}),Object(y.jsxs)(T,{children:[Object(y.jsx)("h1",{children:"React Slider Demo"}),Object(y.jsx)(R,{items:n})]})]})},E=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,30)).then((function(t){var e=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),i(n),a(n),c(n),o(n)}))};g.a.render(Object(y.jsx)(x.a.StrictMode,{children:Object(y.jsx)(U,{})}),document.getElementById("root")),E()}},[[29,1,2]]]);
//# sourceMappingURL=main.316b6fde.chunk.js.map