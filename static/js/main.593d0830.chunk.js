(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{213:function(e,t,a){},214:function(e,t,a){},349:function(e,t,a){},353:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(0),c=a.n(r),s=a(35),i=a.n(s),o=(a(213),a(61)),d=a(114),l=a(38),u=a(355),b=a(90),j=(a(214),a(367)),m=a(368),f=a(369),O=a(121),h=a(122),p=a(141),x=a(140),y=a(356),g=a(144);g.a.initializeApp({apiKey:"AIzaSyCfTKQ-5sDNvN3QfC6S4oqeKOnbEv7AxzE",authDomain:"iot-smart-home-door-lock-7ccc9.firebaseapp.com",databaseURL:"https://iot-smart-home-door-lock-7ccc9.firebaseio.com",projectId:"iot-smart-home-door-lock-7ccc9",storageBucket:"iot-smart-home-door-lock-7ccc9.appspot.com",messagingSenderId:"513607106040",appId:"1:513607106040:web:d627644390357454e76a0d"});var v=g.a.database(),I=g.a.auth(),w=function(e){Object(p.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.ref("Access").on("value",(function(t){var a=t.val(),n=[];for(var r in a)n.unshift({id:r,name:a[r].name,rfid:a[r].rfid,accessDate:a[r].access_by_date,accessTime:a[r].access_by_time});e.setState({users:n})}))}},{key:"render",value:function(){var e=this.state.users;return Object(n.jsx)("div",{children:Object(n.jsx)(y.a,{dataSource:e,columns:[{title:"Name",dataIndex:"name"},{title:"RFID",dataIndex:"rfid"},{title:"Access by Date",dataIndex:"accessDate"},{title:"Access by Time",dataIndex:"accessTime"}],rowKey:"id"})})}}]),a}(c.a.Component),C=a(103),k=a.n(C),S=a(198),D=a(134),F=a(53),_=a(203),T=a(357),A=a(359),L=a(205),P=a(360),N=a(47),E=a(361),U=a(362),q=a(363),K=a(364),z=a(365),R=a(366),V=function(e){Object(p.a)(a,e);var t=Object(x.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.users,a=e.editableCell,r=e.mergedColumns,c=e.handleCancel;return Object(n.jsx)("div",{children:Object(n.jsx)(y.a,{components:{body:{cell:a}},bordered:!0,dataSource:t,columns:r,rowClassName:"editable-row",pagination:{onChange:c},rowKey:"id"})})}}]),a}(c.a.Component),B=a(204),H=a(358),$=function(e){var t=Object(r.useState)(!1),a=Object(o.a)(t,2),c=a[0],s=a[1],i=T.a.useForm(),d=Object(o.a)(i,1)[0],l=e.arrUsers;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(H.a,{title:"Add new user",visible:c,onCancel:function(){s(!1)},footer:!1,children:Object(n.jsxs)(T.a,{form:d,name:"basic",initialValues:{remember:!0},onFinish:function(e){var t=v.ref("Users"),a=e.name,n=e.rfid,r=e.pin,c=(new Date).toLocaleDateString(),i=(new Date).toLocaleTimeString();if(function(e){for(var t in l)if(e===l[t].rfid)return!0;return!1}(n))B.b.error("RFID existed !");else{var o={name:a,rfid:n,pin:r,created_by_date:c,created_by_time:i};t.push(o),s(!1),d.resetFields()}},children:[Object(n.jsx)(T.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name"}],children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(T.a.Item,{label:"RFID",name:"rfid",rules:[{required:!0,message:"Please input your RFID",pattern:/^[0-9]+$/}],children:Object(n.jsx)(A.a.Password,{type:"number"})}),Object(n.jsx)(T.a.Item,{label:"Pin",name:"pin",rules:[{required:!0,message:"Please input your pin",pattern:/^[0-9]+$/}],children:Object(n.jsx)(A.a.Password,{})}),Object(n.jsx)(T.a.Item,{children:Object(n.jsx)(N.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})}),Object(n.jsx)(N.a,{type:"primary",onClick:function(){s(!0)},children:"Add User"})]})},J=function(e){var t=e.editing,a=e.dataIndex,r=e.title,c=e.inputType,s=(e.record,e.index,e.children),i=Object(_.a)(e,["editing","dataIndex","title","inputType","record","index","children"]);return Object(n.jsx)("td",Object(F.a)(Object(F.a)({},i),{},{children:t?Object(n.jsx)(T.a.Item,{name:a,style:{margin:0},rules:[{required:!0,message:"Please Input ".concat(r,"! ").concat("number"===c?"requirement number":""),pattern:"number"===c&&/^[0-9]+$/}],children:Object(n.jsx)(A.a,{})}):s}))},Q=function(){var e=T.a.useForm(),t=Object(o.a)(e,1)[0],a=Object(r.useState)(""),c=Object(o.a)(a,2),s=c[0],i=c[1],d=Object(r.useState)(""),l=Object(o.a)(d,2),u=l[0],b=l[1];Object(r.useEffect)((function(){v.ref("Users").on("value",(function(e){var t=e.val(),a=[];for(var n in t)a.push({id:n,name:t[n].name,rfid:t[n].rfid,pin:t[n].pin,createdDate:t[n].created_by_date,createdTime:t[n].created_by_time});i(a)}))}),[]);var j=function(e){return e.id===u},m=function(){b("")},f=function(e){switch(e){case"success":L.a[e]({message:"Success",description:"Updated successfully"});break;case"error":L.a[e]({message:"Error",description:"RFID existed !"})}},O=function(){var e=Object(D.a)(k.a.mark((function e(a){var n,r,c,o,d,l,u,j;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.ref("Users/".concat(a)),r=Object(S.a)(s),c=function(e){for(var t in r)if(e===r[t].rfid)return!0;return!1},e.prev=3,e.next=6,t.validateFields();case 6:o=e.sent,(d=r.findIndex((function(e){return a===e.id})))>-1?(l=r[d],u=l.createdDate,j=l.createdTime,c(o.rfid)?f("error"):(f("success"),r.splice(d,1,Object(F.a)(Object(F.a)({},l),o)),n.set(Object(F.a)(Object(F.a)({},o),{},{created_by_date:u,created_by_time:j})),i(r),b(""))):(r.push(o),i(r),b("")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("Validate Failed:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return{filterDropdown:function(t){var a=t.setSelectedKeys,r=t.selectedKeys,c=t.confirm,s=t.clearFilters;return Object(n.jsxs)("div",{style:{padding:8},children:[Object(n.jsx)(A.a,{ref:function(e){return e},placeholder:"Search ".concat(e),value:r[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return p(r,c,e)},style:{width:188,marginBottom:8,display:"block"}}),Object(n.jsxs)(P.b,{children:[Object(n.jsx)(N.a,{type:"primary",onClick:function(){return p(r,c,e)},icon:Object(n.jsx)(U.a,{}),size:"small",style:{width:90},children:"Search"}),Object(n.jsx)(N.a,{onClick:function(){return x(s)},size:"small",style:{width:90},children:"Reset"})]})]})},filterIcon:function(e){return Object(n.jsx)(U.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,a){return a[e]?a[e].toString().toLowerCase().includes(t.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){return e},render:function(e){return e}}},p=function(e,t,a){t()},x=function(e){e()},y=[Object(F.a)(Object(F.a)({title:"name",dataIndex:"name"},h("name")),{},{editable:!0}),Object(F.a)(Object(F.a)({title:"rfid",dataIndex:"rfid"},h("rfid")),{},{editable:!0}),{title:"pin",dataIndex:"pin",editable:!0},{title:"Created by Date",dataIndex:"createdDate"},{title:"Created by Time",dataIndex:"createdTime"},{title:"operation",dataIndex:"operation",render:function(e,a){return j(a)?Object(n.jsxs)(P.b,{size:"middle",children:[Object(n.jsxs)(N.a,{onClick:function(){return O(a.id)},children:["Save",Object(n.jsx)(q.a,{})]}),Object(n.jsx)(E.a,{title:"Sure to cancel?",onConfirm:m,children:Object(n.jsxs)(N.a,{children:["Cancel ",Object(n.jsx)(K.a,{})]})})]}):Object(n.jsxs)(P.b,{size:"middle",children:[Object(n.jsxs)(N.a,{disabled:""!==u,onClick:function(){return function(e){t.setFieldsValue(Object(F.a)({name:"",rfid:"",pin:""},e)),b(e.id)}(a)},children:["Edit",Object(n.jsx)(z.a,{style:{marginLeft:"5px"}})]}),Object(n.jsx)(E.a,{title:"Sure to delete?",onConfirm:function(){return g(a.id)},children:Object(n.jsxs)(N.a,{disabled:""!==u,children:[Object(n.jsx)("span",{children:"Delete"}),Object(n.jsx)(R.a,{})]})})]})}}],g=function(e){v.ref("Users/".concat(e)).remove()},I=y.map((function(e){return e.editable?Object(F.a)(Object(F.a)({},e),{},{onCell:function(t){return{record:t,inputType:"rfid"===e.dataIndex||"pin"===e.dataIndex?"number":"text",dataIndex:e.dataIndex,title:e.title,editing:j(t)}}}):e}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)($,{arrUsers:s}),Object(n.jsx)(T.a,{form:t,component:!1,children:Object(n.jsx)(V,{users:s,editableCell:J,mergedColumns:I,handleCancel:m})})]})},M=(a(349),function(e){var t=Object(r.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1],i=Object(l.f)(),d=e.setIsLogin;return Object(n.jsx)("div",{className:"container-form",children:Object(n.jsxs)(T.a,{name:"basic",initialValues:{remember:!0},onFinish:function(e){!function(e,t){I.signInWithEmailAndPassword(e,t).then(function(){var e=Object(D.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object.entries(t.user)[5][1].b.h;case 2:if(!(a=e.sent)){e.next=7;break}return d(!0),localStorage.setItem("token",a),e.abrupt("return",i.push("/dashboard/access-log"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){s("Email or password incorrect !")}))}(e.email,e.password)},onFinishFailed:function(e){console.log("Failed",e)},className:"form",children:[Object(n.jsx)("h1",{children:"login"}),Object(n.jsx)(T.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(T.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(n.jsx)(A.a.Password,{})}),Object(n.jsx)(T.a.Item,{children:Object(n.jsx)(N.a,{type:"primary",htmlType:"submit",children:"Login"})}),c&&Object(n.jsx)(T.a.Item,{className:"error",children:c})]})})}),W=u.a.Header,G=u.a.Content,X=u.a.Footer,Y=u.a.Sider,Z=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)((function(){return!!localStorage.getItem("token")})),i=Object(o.a)(s,2),O=i[0],h=i[1];return Object(n.jsx)(d.a,{children:O?Object(n.jsxs)(u.a,{style:{minHeight:"100vh"},children:[Object(n.jsxs)(Y,{collapsible:!0,collapsed:a,onCollapse:function(){c(!a)},children:[Object(n.jsx)("div",{className:"logo"}),Object(n.jsxs)(b.a,{theme:"dark",defaultSelectedKeys:["/dashboard/access-log"],mode:"inline",children:[Object(n.jsxs)(b.a.Item,{icon:Object(n.jsx)(j.a,{}),children:["Access Log",Object(n.jsx)(d.b,{to:"/dashboard/access-log"})]},"/access-log"),Object(n.jsxs)(b.a.Item,{icon:Object(n.jsx)(m.a,{}),children:["User Information",Object(n.jsx)(d.b,{to:"/dashboard/user-info"})]},"/user-info"),Object(n.jsx)("div",{className:"button-logout"}),Object(n.jsx)(b.a.Item,{icon:Object(n.jsx)(f.a,{}),children:Object(n.jsx)("button",{style:{background:"none",border:"none",cursor:"pointer",width:"calc(100% - 32px)",padding:"0",textAlign:"left"},onClick:function(){I.signOut().then((function(){localStorage.removeItem("token"),h(!1)})),window.location.replace("/dashboard/")},children:"Logout"})})]})]}),Object(n.jsxs)(u.a,{className:"site-layout",children:[Object(n.jsx)(W,{className:"site-layout-background",style:{padding:0}}),Object(n.jsx)(G,{style:{margin:"0 16px"},children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/dashboard/user-info",component:Q}),Object(n.jsx)(l.a,{exact:!0,path:"/dashboard/access-log",component:w})]})}),Object(n.jsx)(X,{style:{textAlign:"center"},children:"Dashboard \xa92020 Created by Long Le Hoang"})]})]}):Object(n.jsx)(M,{setIsLogin:h})})};i.a.render(Object(n.jsx)(Z,{}),document.getElementById("root"))}},[[353,1,2]]]);
//# sourceMappingURL=main.593d0830.chunk.js.map