(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{128:function(e,t,n){e.exports={item:"Post_item__1kNVy"}},129:function(e,t,n){e.exports={content:"Profile_content__1_t6i"}},131:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2_Q0H"}},162:function(e,t,n){},166:function(e,t,n){},26:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2l3oF",dialogsItems:"Dialogs_dialogsItems__1eb_z",dialog:"Dialogs_dialog__3hTO0",active:"Dialogs_active__3BvGC",messages:"Dialogs_messages__3tG52",message:"Dialogs_message__1lzfF"}},286:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(62),o=n.n(a),i=(n(162),n(22)),c=n(23),u=n(25),l=n(24),d=n(11),j=n(10),h=n(8),p=(n(166),n.p+"static/media/preloader.b767aab4.svg"),b=n(0),f=function(){return Object(b.jsx)("img",{src:p})},O=n(41),g=n(3),m={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Sveta"},{id:3,name:"Sasha"},{id:4,name:"Andrey"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"how is your it-kamasutra"},{id:3,message:"yo"},{id:4,message:"yo"},{id:5,message:"yo"}],newPostText:""},v=n(26),x=n.n(v),P=function(e){return Object(b.jsx)("div",{className:x.a.message,children:e.message})},S=n(16),C=function(e){return Object(b.jsx)("div",{className:x.a.dialog+" "+x.a.active,children:Object(b.jsx)(S.b,{to:"/dialogs/"+e.id,children:e.name})})},w=n(122),E=n(123),k=function(e){if(!e)return"Field is required"},A=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},T=n(43),y=n(34),U=n.n(y),_=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,s=e.children,a=(Object(T.a)(e,["input","meta","children"]),n&&r);return Object(b.jsxs)("div",{className:U.a.formControl+" "+(a?U.a.error:""),children:[Object(b.jsx)("div",{children:s}),Object(b.jsx)("div",{children:a&&Object(b.jsx)("span",{children:r})})]})},F=function(e){var t=e.input,n=(e.meta,e.child,Object(T.a)(e,["input","meta","child"]));return Object(b.jsx)(_,Object(g.a)(Object(g.a)({},e),{},{children:Object(b.jsx)("textarea",Object(g.a)(Object(g.a)({},t),n))}))},I=function(e){var t=e.input,n=(e.meta,e.child,Object(T.a)(e,["input","meta","child"]));return Object(b.jsx)(_,Object(g.a)(Object(g.a)({},e),{},{children:Object(b.jsx)("input",Object(g.a)(Object(g.a)({},t),n))}))},D=function(e,t,n,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(b.jsxs)("div",{children:[Object(b.jsx)(w.a,Object(g.a)({validate:n,placeholder:e,name:t,component:r},s)),a]})},N=A(30),Y=Object(E.a)({form:"addMessage"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)(w.a,{validate:[k,N],placeholder:"Enter your message",name:"addMessage",component:F}),Object(b.jsx)("button",{children:"Add message"})]})})),L=function(e){var t=e.messagesPage,n=t.dialogs.map((function(e){return Object(b.jsx)(C,{name:e.name,id:e.id})})),r=t.messages.map((function(e){return Object(b.jsx)(P,{message:e.message})}));return Object(b.jsxs)("div",{className:x.a.dialogs,children:[Object(b.jsx)("div",{className:x.a.dialogsItems,children:n}),Object(b.jsxs)("div",{className:x.a.messages,children:[r,Object(b.jsx)(Y,{onSubmit:function(t){e.addMessage(t.addMessage)}})]})]})},R=function(e){return{isAuth:e.auth.isAuth}},z=function(e){var t=function(t){Object(u.a)(r,t);var n=Object(l.a)(r);function r(){return Object(i.a)(this,r),n.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(g.a)({},this.props)):Object(b.jsx)(j.a,{to:"/login"})}}]),r}(s.a.Component);return Object(d.b)(R)(t)},M=Object(h.d)(z,Object(d.b)((function(e){return{newPostText:e.messagesPage.newPostText,messagesPage:e.messagesPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:"ADD-MESSAGE",text:e}}(t))}}})))(L),G=n(90),W=n.n(G),J=function(e){return Object(b.jsxs)("header",{className:W.a.header,children:[Object(b.jsx)("img",{src:"data:image/png;base64,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"}),Object(b.jsx)("div",{className:W.a.loginBlock,children:e.isAuth?Object(b.jsxs)("div",{children:[e.login," - ",Object(b.jsx)("button",{onClick:e.logoutTC,children:"Log out"})]}):Object(b.jsx)(S.b,{to:"/login",children:"Login"})})]})},B=n(9),H=n.n(B),K=n(13),q=n(21),V=n(127),X=n.n(V).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"5b802dfc-8175-4671-99bf-e30ddb894d16"}}),Q={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return X.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return X.post("follow/".concat(e))},unFollow:function(e){return X.delete("follow/".concat(e))},profileAPI:function(e){return console.warn("Obsolete method. Use profileAPI"),Z.getProfile(e)}},Z={getProfile:function(e){return X.get("profile/".concat(e)).then((function(e){return e}))},getStatus:function(e){return X.get("profile/status/".concat(e))},updateStatus:function(e){return X.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),X.put("/profile/photo",t,{headers:{"Content-type":"multipart/form-data"}})},saveProfile:function(e){return X.put("profile",e)}},$=function(){return X.get("auth/me").then((function(e){return e.data}))},ee=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return X.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},te=function(){return X.delete("auth/login")},ne=function(){return X.get("security/get-captcha-url")},re="social-network/auth/SET_USER_DATA",se="social-network/auth/GET_CAPTCHA_URL_SUCCESS",ae={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},oe=function(e,t,n,r){return{type:re,payload:{userId:e,email:t,login:n,isAuth:r}}},ie=function(e){return{type:se,payload:{captchaUrl:e}}},ce=function(){return function(){var e=Object(K.a)(H.a.mark((function e(t){var n,r,s,a,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,a=r.email,o=r.login,t(oe(s,a,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ue=function(){return function(){var e=Object(K.a)(H.a.mark((function e(t){var n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:n=e.sent,r=n.data.url,t(ie(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},le=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsx)(J,Object(g.a)({},this.props))}}]),n}(s.a.Component),de=Object(d.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:oe,logoutTC:function(){return function(){var e=Object(K.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:0===e.sent.data.resultCode&&t(oe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(le),je=(A(100),Object(E.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(b.jsx)("form",{onSubmit:t,children:Object(b.jsxs)("div",{children:[D("Email","email",[k],I),D("Password","password",[k],I,{type:"password"}),D(null,"rememberMe",[],I,{type:"checkbox"},"remember me"),r&&Object(b.jsx)("img",{src:r}),r&&D("Symbols from image","captcha",[k],I),n&&Object(b.jsx)("div",{className:U.a.formSubmissoinError,children:n}),Object(b.jsx)("button",{children:"Login"})]})})}))),he=Object(d.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{loginTC:function(e,t,n,r){return function(){var s=Object(K.a)(H.a.mark((function s(a){var o,i;return H.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,ee(e,t,n,r);case 2:0===(o=s.sent).data.resultCode?a(ce()):(10===o.data.resultCode&&a(ue()),i=o.data.messages.length>0?o.data.messages[0]:"some error",a(Object(q.a)("login",{_error:i})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,n=e.loginTC,r=e.captchaUrl;return t&&j.a,Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(je,{onSubmit:function(e){n(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:r})]})})),pe=n(67),be=n.n(pe),fe=[{url:"/profile",name:"Profile"},{url:"/dialogs",name:"Messages"},{url:"/Users",name:"Users"},{url:"/login",name:"Login"}],Oe=function(){return Object(b.jsx)("nav",{className:be.a.nav,children:fe.map((function(e){return Object(b.jsx)("div",{className:be.a.item,children:Object(b.jsx)(S.b,{to:e.url,activeClassName:be.a.activeLink,children:e.name})},e.url)}))})},ge="SET_STATUS",me="DELETE_POST",ve="SAVE_PHOTO_SUCCESS",xe={posts:[{id:1,message:"Hi, how are you",likesCount:12},{id:2,message:"it's first",likesCount:24},{id:3,message:"yo"},{id:4,message:"yo"},{id:5,message:"yo"}],profile:null,status:""},Pe=function(e){return{type:ge,status:e}},Se=function(e){return function(){var t=Object(K.a)(H.a.mark((function t(n){var r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.profileAPI(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Ce=A(10),we=Object(E.a)({form:"addPost"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)(w.a,{component:F,name:"addPost",placeholder:"enter text",validate:[k,Ce]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Add posts"})})]})})),Ee=n(91),ke=n.n(Ee),Ae=n(128),Te=n.n(Ae),ye=function(e){return Object(b.jsxs)("div",{className:Te.a.item,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://i.ytimg.com/vi/o_26SGY83-I/movieposter_en.jpg"})}),e.message,Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["Like ",e.like]})})]})},Ue=s.a.memo((function(e){console.log("render");var t=e.posts.map((function(e){return Object(b.jsx)(ye,{message:e.message,like:e.likesCount},e.id)}));return Object(b.jsxs)("div",{className:ke.a.postsBlock,children:[Object(b.jsx)("h3",{children:"My posts"}),Object(b.jsx)(we,{onSubmit:function(t){e.addPost(t.addPost)}}),Object(b.jsx)("div",{className:ke.a.posts,children:t})]})})),_e=Object(d.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(Ue),Fe=n(129),Ie=n.n(Fe),De=n(35),Ne=n(42),Ye=n.n(Ne),Le=function(e){var t=Object(r.useState)(!0),n=Object(De.a)(t,2),s=n[0],a=n[1],o=Object(r.useState)(e.reduxStatus),i=Object(De.a)(o,2),c=i[0],u=i[1];Object(r.useEffect)((function(){u(e.reduxStatus)}),[e.reduxStatus]);return Object(b.jsx)("div",{children:s?Object(b.jsx)("div",{children:Object(b.jsxs)("span",{onDoubleClick:function(){a(!1)},children:[Object(b.jsx)("b",{children:"Status:"})," ",e.reduxStatus||"----"]})}):Object(b.jsx)("div",{children:Object(b.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!0),e.updateStatusThunkCreator(c)},value:c})})})},Re=n.p+"static/media/user.96e310a6.png",ze=Object(E.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,r=e.error;return Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"save"})}),r&&Object(b.jsx)("div",{className:U.a.formSubmissoinError,children:r}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Full name"}),": ",D("Full name","fullName",[],I)]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Looking for a job"}),":",D("","lookingForAJob",[],I,{type:"checkbox"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"My professional skills"}),":",D("My professional skills","lookingForAJobDescription",[],F)]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"About me"}),":",D("About me","aboutMe",[],F)]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Contacts"}),":",Object.keys(n.contacts).map((function(e){return Object(b.jsx)("div",{className:Ye.a.contact,children:Object(b.jsxs)("b",{children:[e,": ",D(e,"contacts."+e,[],I)]})},e)}))]})]})})),Me=function(e){var t=e.profile,n=e.isOwner,r=e.goToEditMode;return Object(b.jsxs)("div",{children:[n&&Object(b.jsx)("button",{onClick:r,children:"Edit"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Full name"}),": ",t.fullName]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Looking for a job"}),": ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"About me"}),": ",t.aboutMe]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(t.contacts).map((function(e){return Object(b.jsx)(Ge,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})},Ge=function(e){var t=e.contactTitle,n=e.contactValue;return Object(b.jsxs)("div",{className:Ye.a.contact,children:[Object(b.jsx)("b",{children:t}),": ",n]})},We=function(e){var t=e.profile,n=e.reduxStatus,s=e.isOwner,a=e.updateStatusThunkCreator,o=e.savePhoto,i=e.saveProflie,c=Object(r.useState)(!1),u=Object(De.a)(c,2),l=u[0],d=u[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:Ye.a.descriptionBlock,children:[Object(b.jsx)("img",{src:t.photos.large||Re,className:Ye.a.mainPhoto}),s&&Object(b.jsx)("input",{type:"file",onChange:function(e){var t;(null===(t=e.target.files)||void 0===t?void 0:t.length)&&o(e.target.files[0])}}),l?Object(b.jsx)(ze,{initialValue:t,profile:t,onSubmit:function(e){i(e).then((function(){d(!1)}))}}):Object(b.jsx)(Me,{goToEditMode:function(){return d(!0)},isOwner:s,profile:t}),Object(b.jsx)(Le,{reduxStatus:n,updateStatusThunkCreator:a})]})})},Je=function(e){return Object(b.jsxs)("div",{className:Ie.a.content,children:[Object(b.jsx)(We,{saveProflie:e.saveProfile,savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,reduxStatus:e.reduxStatus,updateStatusThunkCreator:e.updateStatusThunkCreator}),Object(b.jsx)(_e,{})]})},Be=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfileThunkCreator(e),this.props.getStatusThunkCreator(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return this.props.profile?Object(b.jsx)(Je,Object(g.a)(Object(g.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,reduxStatus:this.props.reduxStatus,updateStatusThunkCreator:this.props.updateStatusThunkCreator,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})):Object(b.jsx)(f,{})}}]),n}(s.a.Component),He=Object(h.d)(z,Object(d.b)((function(e){return{profile:e.profilePage.profile,reduxStatus:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfileThunkCreator:Se,getStatusThunkCreator:function(e){return function(){var t=Object(K.a)(H.a.mark((function t(n){var r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.getStatus(e);case 2:r=t.sent,n(Pe(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatusThunkCreator:function(e){return function(){var t=Object(K.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(Pe(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(K.a)(H.a.mark((function t(n){var r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((s=r.data.data.photos,{type:ve,photos:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(K.a)(H.a.mark((function t(n,r){var s,a;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,Z.saveProfile(e);case 3:if(0!==(a=t.sent).data.resultCode){t.next=8;break}n(Se(s)),t.next=10;break;case 8:return n(Object(q.a)("edit-profile",{_error:a.data.messages[0]})),t.abrupt("return",Promise.reject(a.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),j.g)(Be),Ke=n(130),qe=Object(Ke.a)((function(e){return e.userPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ve=function(e){return e.userPage.pageSize},Xe=function(e){return e.userPage.totalUsersCount},Qe=function(e){return e.userPage.currentPage},Ze=function(e){return e.userPage.isFetching},$e=function(e){return e.userPage.followingInProgress},et=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(g.a)(Object(g.a)({},e),r):e}))},tt="FOLLOWING_IN_PROGRESS",nt={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},rt=function(e){return{type:"FOLLOW",userId:e}},st=function(e){return{type:"UNFOLLOW",userId:e}},at=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},ot=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},it=function(e,t){return{type:tt,userId:t,isFetching:e}},ct=function(){var e=Object(K.a)(H.a.mark((function e(t,n,r,s){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(it(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(s(n)),t(it(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),ut=n(53),lt=n.n(ut),dt=function(e){for(var t=e.totalUsersCount,n=e.pageSize,s=e.currentPage,a=e.isAuth,o=e.onPageChanged,i=e.portionSize,c=void 0===i?10:i,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var h=Math.ceil(u/c),p=Object(r.useState)(1),f=Object(De.a)(p,2),O=f[0],g=f[1],m=(O-1)*c+1,v=O*c;return!1===a?Object(b.jsx)(j.a,{to:"/login"}):Object(b.jsxs)("div",{className:lt.a.paginator,children:[O>1&&Object(b.jsx)("button",{onClick:function(){g(O-1)},children:"PREV"}),l.filter((function(e){return e>=m&&e<=v})).map((function(e){return Object(b.jsx)("span",{className:s===e?"".concat(lt.a.selectedPage," ").concat(lt.a.page):lt.a.page,onClick:function(t){o(e)},children:e},e)})),h>O&&Object(b.jsx)("button",{onClick:function(){g(O+1)},children:"NEXT"})]})},jt=n(131),ht=n.n(jt),pt=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,s=e.unFollow;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(S.b,{to:"/profile/".concat(t.id),children:Object(b.jsx)("img",{src:null!==t.photos.small?t.photos.small:Re,className:ht.a.userPhoto})})}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)("button",{disabled:n.some((function(e){return e!==t.id})),onClick:function(){s(t.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:n.some((function(e){return e!==t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.status})]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:"user.location.city"}),Object(b.jsx)("div",{children:"user.location.country"})]})]})},bt=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,s=e.isAuth,a=e.users,o=e.onPageChanged,i=Object(T.a)(e,["totalUsersCount","pageSize","currentPage","isAuth","users","onPageChanged"]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(dt,{pageSize:n,currentPage:r,totalUsersCount:t,onPageChanged:o,isAuth:s}),a.map((function(e){return Object(b.jsx)(pt,{user:e,followingInProgress:i.followingInProgress,follow:i.follow,unFollow:i.unFollow},e.id)}))]})},ft=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsersThunkCreator(t,n)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.pageSize,n=e.currentPage;this.props.getUsersThunkCreator(n,t)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(f,{}):null,Object(b.jsx)(bt,{isAuth:this.props.isAuth,followingInProgress:this.props.followingInProgress,followingInProgressAC:it,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,users:this.props.users,unFollow:this.props.unFollow,follow:this.props.follow})]})}}]),n}(s.a.Component),Ot=Object(h.d)(Object(d.b)((function(e){return{users:qe(e),pageSize:Ve(e),totalUsersCount:Xe(e),currentPage:Qe(e),isFetching:Ze(e),followingInProgress:$e(e),isAuth:e.auth.isAuth}}),{follow:function(e){return function(){var t=Object(K.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ct(n,e,Q.follow.bind(Q),rt);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(K.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ct(n,e,Q.unFollow.bind(Q),st);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:at,followingInProgressAC:it,getUsersThunkCreator:function(e,t){return function(){var n=Object(K.a)(H.a.mark((function n(r){var s;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ot(!0)),r(at(e)),n.next=4,Q.getUsers(e,t);case 4:s=n.sent,r(ot(!1)),r({type:"SET_USERS",users:s.items}),r({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:s.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ft),gt="INITIALIZED_SUCCESS",mt={initialized:!1},vt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).catchAllUnHandledErrors=function(e){alert("some error")},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnHandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnHandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(de,{}),Object(b.jsx)(Oe,{}),Object(b.jsx)("div",{className:"app-wrapper-content",children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(j.a,{to:"/profile"})}}),Object(b.jsx)(j.b,{path:"/dialogs",render:function(){return Object(b.jsx)(M,{})}}),Object(b.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(b.jsx)(He,{})}}),Object(b.jsx)(j.b,{path:"/users",component:Ot}),Object(b.jsx)(j.b,{path:"/login",component:he}),Object(b.jsx)(j.b,{path:"*",render:function(){return Object(b.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}):Object(b.jsx)(f,{})}}]),n}(s.a.Component),xt=Object(h.d)(j.g,Object(d.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ce());Promise.all([t]).then((function(){e({type:gt})}))}}}))(vt),Pt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,287)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),a(e),o(e)}))},St=n(132),Ct=n(124),wt=Object(h.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(g.a)(Object(g.a)({},e),{},{posts:[].concat(Object(O.a)(e.posts),[{id:5,message:t.newPostText,likesCount:0}])});case"SET_USER_PROFILE":return Object(g.a)(Object(g.a)({},e),{},{profile:t.profile});case ge:return Object(g.a)(Object(g.a)({},e),{},{status:t.status});case me:return Object(g.a)(Object(g.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case ve:return Object(g.a)(Object(g.a)({},e),{},{profile:Object(g.a)(Object(g.a)({},e.profile),{},{photos:t.photos})});default:return e}},messagesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(g.a)(Object(g.a)({},e),{},{newPostText:"",messages:[].concat(Object(O.a)(e.messages),[{id:6,message:t.text}])});default:return e}},userPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":case"UNFOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:et(e.users,t.userId,"id",{followed:!0})});case"SET_USERS":return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case tt:return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:case re:return Object(g.a)(Object(g.a)({},e),t.payload);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case gt:return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},form:Ct.a}),Et=Object(h.e)(wt,Object(h.a)(St.a));window.store=Et;var kt=Et;o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(S.a,{children:Object(b.jsx)(d.a,{store:kt,children:Object(b.jsx)(xt,{})})})}),document.getElementById("root")),Pt()},34:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1-OWX",error:"FormsControls_error__9hqAk",formSubmissoinError:"FormsControls_formSubmissoinError__Zw5gy"}},42:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__12L-I",mainPhoto:"ProfileInfo_mainPhoto__1r5dj",contact:"ProfileInfo_contact__1Nr4E"}},53:function(e,t,n){e.exports={paginator:"Paginator_paginator__1-OnL",page:"Paginator_page__3znQI",selectedPage:"Paginator_selectedPage__notKK"}},67:function(e,t,n){e.exports={nav:"Navbar_nav__2zCt2",item:"Navbar_item__3iGJL",activeLink:"Navbar_activeLink__3myhE"}},90:function(e,t,n){e.exports={header:"Header_header__2aBSP",loginBlock:"Header_loginBlock__1pf-7"}},91:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__2Mc5B",posts:"MyPosts_posts__LdFJw"}}},[[286,1,2]]]);
//# sourceMappingURL=main.ca5ac931.chunk.js.map