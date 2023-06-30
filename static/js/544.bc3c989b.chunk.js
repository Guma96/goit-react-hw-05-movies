"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{1524:function(n,r,t){t.d(r,{OT:function(){return u},QY:function(){return c},Y5:function(){return s},oO:function(){return l},y:function(){return p}});var e=t(5861),o=t(7757),a=t.n(o),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={},i.Z.defaults.params.api_key="0ad512fb225eecaea999568cb90b6aa0",i.Z.defaults.params.language="en-US";var c=function(){var n=(0,e.Z)(a().mark((function n(){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day",{params:{page:1}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(a().mark((function n(r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie",{params:{query:r,include_adult:!1,page:1}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(a().mark((function n(r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(r,"/credits"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(a().mark((function n(r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(r,"/reviews"),{params:{page:1}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},9544:function(n,r,t){t.r(r),t.d(r,{Home:function(){return f}});var e=t(5861),o=t(9439),a=t(7757),i=t.n(a),c=t(5558),u=t(2791),s=t(5562),p=t.n(s),l=t(1524),d=t(184),f=function(){var n=(0,u.useState)([]),r=(0,o.Z)(n,2),t=r[0],a=r[1];return(0,u.useEffect)((function(){function n(){return(n=(0,e.Z)(i().mark((function n(){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.QY)();case 3:r=n.sent,(t=r.results)<1&&p().Notify.warning("We can't find it, try again"),a(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),p().Notify.warning("Something wrong, try again please");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.tk,{children:"Trending movies"}),t&&(0,d.jsx)(c.OM,{children:t.map((function(n){var r;return r=n.poster_path?"https://image.tmdb.org/t/p/w400/".concat(n.poster_path):"https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg",(0,d.jsxs)(c.nf,{to:"/movies/".concat(n.id),children:[(0,d.jsx)("img",{src:r,width:"400",alt:n.title}),(0,d.jsx)(c.rS,{children:n.title})]},n.id)}))})]})}},5558:function(n,r,t){t.d(r,{$L:function(){return q},H:function(){return Q},LY:function(){return L},MA:function(){return z},OM:function(){return w},Qj:function(){return P},fG:function(){return Y},kD:function(){return j},nf:function(){return k},qX:function(){return _},rS:function(){return y},tP:function(){return S},tk:function(){return O},vr:function(){return M},z_:function(){return U}});var e,o,a,i,c,u,s,p,l,d,f,x,g,b,h,m=t(168),v=t(6444),Z=t(1087),k=(0,v.ZP)(Z.rU)(e||(e=(0,m.Z)(["\n  width: 400px;\n  background-color: black;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  text-decoration: none;\n  margin-bottom: 40px;\n  transition: scale 250ms linear, box-shadow 250ms linear;\n  &:hover {\n    scale: calc(1.03);\n    box-shadow: 0px 0px 20px 8px gray;\n  }\n  &:nth-last-child(-n + 4) {\n    margin-bottom: 0;\n  }\n"]))),w=(0,v.ZP)("div")(o||(o=(0,m.Z)(["\n  padding: 50px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),y=(0,v.ZP)("h2")(a||(a=(0,m.Z)(["\n  text-align: center;\n  font-size: 25px;\n  color: white;\n"]))),P=(0,v.ZP)(Z.rU)(i||(i=(0,m.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  border: 2px solid black;\n  background-color: black;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  :focus {\n    background-color: white;\n    color: black;\n  }\n"]))),_=(0,v.ZP)("button")(c||(c=(0,m.Z)(["\n  font-size: 20px;\n  background-color: black;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 2px solid black;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  focus {\n    color: black;\n    background-color: white;\n  }\n"]))),j=(0,v.ZP)("form")(u||(u=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 20px;\n"]))),z=(0,v.ZP)("input")(s||(s=(0,m.Z)(["\n  padding: 10px;\n  font-size: 20px;\n  outline: none;\n  border: 2px solid black;\n  border-radius: 5px;\n"]))),O=(0,v.ZP)("h1")(p||(p=(0,m.Z)(["\n  text-align: center;\n  font-weight: 900;\n  font-size: 40px;\n"]))),S=(0,v.ZP)("div")(l||(l=(0,m.Z)(["\n  padding: 50px;\n"]))),U=(0,v.ZP)("h3")(d||(d=(0,m.Z)(["\n  margin-top: 0;\n  font-size: 25px;\n"]))),L=(0,v.ZP)(Z.OL)(f||(f=(0,m.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  font-size: 25px;\n  color: black;\n  border-radius: 5px;\n  border: 2px solid black;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:focus,\n  :hover {\n    color: white;\n    background-color: black;\n  }\n  &.active {\n    color: white;\n    background-color: black;\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),Y=(0,v.ZP)("div")(x||(x=(0,m.Z)(["\n  padding: 20px;\n"]))),M=(0,v.ZP)("div")(g||(g=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),Q=(0,v.ZP)("p")(b||(b=(0,m.Z)(["\n  font-size: 40px;\n"]))),q=(0,v.ZP)(Z.rU)(h||(h=(0,m.Z)([""])))}}]);
//# sourceMappingURL=544.bc3c989b.chunk.js.map