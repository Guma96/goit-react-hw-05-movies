"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{1524:function(n,t,r){r.d(t,{OT:function(){return u},QY:function(){return c},Y5:function(){return s},oO:function(){return l},y:function(){return p}});var e=r(5861),a=r(7757),o=r.n(a),i=r(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={},i.Z.defaults.params.api_key="0ad512fb225eecaea999568cb90b6aa0",i.Z.defaults.params.language="en-US";var c=function(){var n=(0,e.Z)(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day",{params:{page:1}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie",{params:{query:t,include_adult:!1,page:1}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews"),{params:{page:1}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9278:function(n,t,r){r.r(t);var e=r(5861),a=r(9439),o=r(7757),i=r.n(o),c=r(2791),u=r(5558),s=r(1087),p=r(7689),l=r(5562),f=r.n(l),d=r(1524),x=r(184);t.default=function(){var n,t=(0,c.useState)([]),r=(0,a.Z)(t,2),o=r[0],l=r[1],g=(0,s.lr)(),h=(0,a.Z)(g,2),b=h[0],m=h[1],v=(0,c.useState)(""),Z=(0,a.Z)(v,2),w=Z[0],k=Z[1],y=null!==(n=b.get("filter"))&&void 0!==n?n:"",P=(0,p.TH)();(0,c.useEffect)((function(){function n(){return(n=(0,e.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.OT)(y);case 3:t=n.sent,(r=t.results).length<1&&f().Notify.warning("We can't find it, try again"),l(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),f().Notify.warning("Something wrong, try again please");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}y&&function(){n.apply(this,arguments)}()}),[y]);return o?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(u.kD,{onSubmit:function(n){w||f().Notify.warning("Please fill in the gap"),n.preventDefault(),m(""!==w?{filter:w}:{}),k("")},children:[(0,x.jsx)(u.MA,{type:"text",value:w,name:"input",onChange:function(n){return t=n.currentTarget.value.toLowerCase(),void k(t);var t}}),(0,x.jsx)(u.qX,{type:"submit",children:"Search"})]}),o&&(0,x.jsx)(u.OM,{children:o.map((function(n){var t;return t=n.poster_path?"https://image.tmdb.org/t/p/w400/".concat(n.poster_path):"https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg",(0,x.jsxs)(u.nf,{to:"".concat(n.id),state:{from:P},children:[(0,x.jsx)("img",{src:t,width:"400",alt:n.title}),(0,x.jsx)(u.rS,{children:n.title})]},n.id)}))})]}):null}},5558:function(n,t,r){r.d(t,{$L:function(){return q},H:function(){return T},LY:function(){return U},MA:function(){return z},OM:function(){return k},Qj:function(){return P},fG:function(){return C},kD:function(){return j},nf:function(){return w},qX:function(){return _},rS:function(){return y},tP:function(){return O},tk:function(){return S},vr:function(){return M},z_:function(){return L}});var e,a,o,i,c,u,s,p,l,f,d,x,g,h,b,m=r(168),v=r(6444),Z=r(1087),w=(0,v.ZP)(Z.rU)(e||(e=(0,m.Z)(["\n  width: 400px;\n  background-color: black;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  text-decoration: none;\n  margin-bottom: 40px;\n  transition: scale 250ms linear, box-shadow 250ms linear;\n  &:hover {\n    scale: calc(1.03);\n    box-shadow: 0px 0px 20px 8px gray;\n  }\n  &:nth-last-child(-n + 4) {\n    margin-bottom: 0;\n  }\n"]))),k=(0,v.ZP)("div")(a||(a=(0,m.Z)(["\n  padding: 50px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),y=(0,v.ZP)("h2")(o||(o=(0,m.Z)(["\n  text-align: center;\n  font-size: 25px;\n  color: white;\n"]))),P=(0,v.ZP)(Z.rU)(i||(i=(0,m.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  border: 2px solid black;\n  background-color: black;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  :focus {\n    background-color: white;\n    color: black;\n  }\n"]))),_=(0,v.ZP)("button")(c||(c=(0,m.Z)(["\n  font-size: 20px;\n  background-color: black;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 2px solid black;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  focus {\n    color: black;\n    background-color: white;\n  }\n"]))),j=(0,v.ZP)("form")(u||(u=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 20px;\n"]))),z=(0,v.ZP)("input")(s||(s=(0,m.Z)(["\n  padding: 10px;\n  font-size: 20px;\n  outline: none;\n  border: 2px solid black;\n  border-radius: 5px;\n"]))),S=(0,v.ZP)("h1")(p||(p=(0,m.Z)(["\n  text-align: center;\n  font-weight: 900;\n  font-size: 40px;\n"]))),O=(0,v.ZP)("div")(l||(l=(0,m.Z)(["\n  padding: 50px;\n"]))),L=(0,v.ZP)("h3")(f||(f=(0,m.Z)(["\n  margin-top: 0;\n  font-size: 25px;\n"]))),U=(0,v.ZP)(Z.OL)(d||(d=(0,m.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  font-size: 25px;\n  color: black;\n  border-radius: 5px;\n  border: 2px solid black;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:focus,\n  :hover {\n    color: white;\n    background-color: black;\n  }\n  &.active {\n    color: white;\n    background-color: black;\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),C=(0,v.ZP)("div")(x||(x=(0,m.Z)(["\n  padding: 20px;\n"]))),M=(0,v.ZP)("div")(g||(g=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),T=(0,v.ZP)("p")(h||(h=(0,m.Z)(["\n  font-size: 40px;\n"]))),q=(0,v.ZP)(Z.rU)(b||(b=(0,m.Z)([""])))}}]);
//# sourceMappingURL=278.06e5b143.chunk.js.map