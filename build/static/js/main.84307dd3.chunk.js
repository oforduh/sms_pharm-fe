(this.webpackJsonpsms_pharm_fe=this.webpackJsonpsms_pharm_fe||[]).push([[0],{107:function(e,t,a){e.exports={loaderParent:"loader_loaderParent__2jqcr",loader:"loader_loader__2sbTU",spin:"loader_spin__3WO-j"}},109:function(e,t,a){e.exports={loaderParent:"mLoader_loaderParent__3EJap",loader:"mLoader_loader__1T_cW",spin:"mLoader_spin__xyFZ1"}},185:function(e,t,a){},186:function(e,t,a){},193:function(e,t){},195:function(e,t){},209:function(e,t){},21:function(e,t,a){e.exports={removeList:"navbar_removeList__1FimS",hidden:"navbar_hidden__1Vbhs",navbar:"navbar_navbar__1pbIf",menuBars:"navbar_menuBars__17vqD",navbarMenu:"navbar_navbarMenu__2iyz_",navMenuItems:"navbar_navMenuItems__1n_fk",navbarToggle:"navbar_navbarToggle__c47Rb",navContentParent:"navbar_navContentParent__pW4de",navContent:"navbar_navContent__4le0k",imageParent:"navbar_imageParent__2z-gK",imageCont:"navbar_imageCont__2644U",liContent:"navbar_liContent__3tBZo",buttonContainer:"navbar_buttonContainer__21zHU",buttonIcon:"navbar_buttonIcon__l6_0Q",imageContent:"navbar_imageContent__23Urh",iconUploader:"navbar_iconUploader__sLgbQ",deleteImagePreview:"navbar_deleteImagePreview__3mLDE",navText:"navbar_navText__3IkLj",active:"navbar_active__2Wy9j",navTextActive:"navbar_navTextActive__1ZK0i"}},211:function(e,t){},239:function(e,t){},24:function(e,t,a){e.exports={dashboardParentDiv:"patientData_dashboardParentDiv__3Y5ar",dashboardContentDiv:"patientData_dashboardContentDiv__KezRM",inventoryParent:"patientData_inventoryParent__1GPIB",inventoryContainer:"patientData_inventoryContainer__JmwBv",inventoryListItems:"patientData_inventoryListItems__3qwP_",dataParent:"patientData_dataParent__81qLg",dataContainer:"patientData_dataContainer__25Kk7",formIcon:"patientData_formIcon__2yovl",formGroup:"patientData_formGroup__mCF82",formControl:"patientData_formControl__3fNYd",active:"patientData_active__6agjJ"}},241:function(e,t){},242:function(e,t){},247:function(e,t){},249:function(e,t){},255:function(e,t){},257:function(e,t){},27:function(e,t,a){e.exports={dashboardParentDiv:"dashboard_dashboardParentDiv__31gN3",dashboardContentDiv:"dashboard_dashboardContentDiv__dn0He",active:"dashboard_active__3otNi",dashboardPageDiv:"dashboard_dashboardPageDiv__1XCys",dashboardMenu:"dashboard_dashboardMenu__2Ymk6",searchBarParentContainer:"dashboard_searchBarParentContainer__3D_fQ",searchBarCont:"dashboard_searchBarCont__1tYCz",searchBarIcon:"dashboard_searchBarIcon__2piAV",searchBarIcon2:"dashboard_searchBarIcon2__2EiWU",dashboardSection:"dashboard_dashboardSection__3kipr",filterParentDiv:"dashboard_filterParentDiv__3XN1a",tableParentDiv:"dashboard_tableParentDiv__1xowW"}},276:function(e,t){},288:function(e,t){},291:function(e,t){},316:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(77),c=a.n(r),o=(a(185),a(186),a(187),a(23)),i=(a(188),a(35)),u=a(6),l=a.n(u),d=a(13),j=a(5),b=a(173),p=a.n(b),v=a(174),m="https://sms-pharm.herokuapp.com",h=a(1),O=Object(n.createContext)(),x=function(){var e=Object(n.useContext)(O),t=Object(j.a)(e,4);return{user:t[0],setUser:t[1],token:t[2],setToken:t[3]}},f=sessionStorage.getItem("token"),_=JSON.parse(sessionStorage.getItem("userProfile")),g=function(e){var t=e.children,a=Object(n.useState)(void 0),s=Object(j.a)(a,2),r=s[0],c=s[1],i=Object(n.useState)(void 0),u=Object(j.a)(i,2),b=u[0],x=u[1];Object(n.useEffect)((function(){x(f),c(_);var e=p.a.decode(f,"jwtAuthenticationSecrete4smsPharm");if(e){var t=Date.now()-1e3*e.exp;(t/=6e4)>=0&&(o.b.error("Session has Expired"),sessionStorage.clear(),c(null),x(null))}}),[]);var g={headers:{Authorization:"Bearer ".concat(f)}},N=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,g));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(v.a)("".concat(m,"/api/auth/user/token_checker"),N,{refreshInterval:6e4}),C=w.data,P=w.error;return P?console.log(P):null===C||void 0===C||C.json().then((function(e){e.data>=-5&&o.b.warn("session would expire in ".concat(Math.floor(Math.abs(e.data))," minutes "))})),Object(h.jsx)(O.Provider,{value:[r,c,b,x],children:void 0===r?null:t})},N=Object(n.createContext)(),w=function(){var e=Object(n.useContext)(N),t=Object(j.a)(e,2);return{isLoading:t[0],setIsLoading:t[1]}},C=function(e){var t=e.children,a=Object(n.useState)(!1),s=Object(j.a)(a,2),r=s[0],c=s[1];return Object(h.jsx)(N.Provider,{value:[r,c],children:t})},P=a(107),y=a.n(P),D=function(){return Object(h.jsx)("div",{className:y.a.loaderParent,children:Object(h.jsx)("div",{className:y.a.loader})})},S=a(19),I=a(3),k=a(319),M=a(320),L=a(34),A=a.n(L);function E(e){this.path="".concat(m,"/api/auth/").concat(e)}E.prototype.login=function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,s,r,c,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:a})},e.prev=1,e.next=4,fetch(this.path,n);case 4:return s=e.sent,e.next=7,s.json();case 7:if(r=e.sent,200===s.status){e.next=10;break}return e.abrupt("return",Object(I.a)({status:!1},r));case 10:return c=r.data,o=r.token,i=JSON.stringify(c),sessionStorage.setItem("userProfile",i),sessionStorage.setItem("token",o),e.abrupt("return",Object(I.a)({status:!0},r));case 18:return e.prev=18,e.t0=e.catch(1),e.abrupt("return",{status:!1,error:e.t0});case 21:case"end":return e.stop()}}),e,this,[[1,18]])})));return function(t,a){return e.apply(this,arguments)}}(),E.prototype.logout=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},e.prev=1,e.next=4,fetch(this.path,a);case 4:return n=e.sent,e.next=7,n.json();case 7:if(s=e.sent,200===n.status){e.next=10;break}return e.abrupt("return",Object(I.a)({status:!1},s));case 10:return e.abrupt("return",Object(I.a)({status:!0},s));case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",{status:!1,error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),E.prototype.updateUserProfile=function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,s,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)},e.prev=1,e.next=4,fetch(this.path,n);case 4:return s=e.sent,e.next=7,s.json();case 7:if(r=e.sent,200===s.status){e.next=10;break}return e.abrupt("return",Object(I.a)({status:!1},r));case 10:return c=r.data,o=JSON.stringify(c),sessionStorage.setItem("userProfile",o),e.abrupt("return",Object(I.a)({status:!0},r));case 16:return e.prev=16,e.t0=e.catch(1),e.abrupt("return",{status:!1,error:e.t0});case 19:case"end":return e.stop()}}),e,this,[[1,16]])})));return function(t,a){return e.apply(this,arguments)}}(),E.prototype.updateUserPassword=function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)},e.prev=1,e.next=4,fetch(this.path,n);case 4:return s=e.sent,e.next=7,s.json();case 7:if(r=e.sent,200===s.status){e.next=10;break}return e.abrupt("return",Object(I.a)({status:!1},r));case 10:return e.abrupt("return",Object(I.a)({status:!0},r));case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",{status:!1,error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}(),E.prototype.deleteUserAccount=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},e.prev=1,e.next=4,fetch(this.path,a);case 4:return n=e.sent,e.next=7,n.json();case 7:if(s=e.sent,200===n.status){e.next=10;break}return e.abrupt("return",Object(I.a)({status:!1},s));case 10:return sessionStorage.clear(),e.abrupt("return",Object(I.a)({status:!0},s));case 14:return e.prev=14,e.t0=e.catch(1),e.abrupt("return",{status:!1,error:e.t0});case 17:case"end":return e.stop()}}),e,this,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),E.prototype.terminateSession=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"Bearer ".concat(t)}},e.prev=1,e.next=4,fetch(this.path,a);case 4:return n=e.sent,e.next=7,n.json();case 7:if(s=e.sent,200===n.status){e.next=10;break}return e.abrupt("return",Object(I.a)({status:!1},s));case 10:return e.abrupt("return",Object(I.a)({status:!0},s));case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",{status:!1,error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),E.prototype.deleteUserAvatar=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},e.prev=1,e.next=4,fetch(this.path,a);case 4:return n=e.sent,e.next=7,n.json();case 7:if(s=e.sent,200===n.status){e.next=10;break}return e.abrupt("return",Object(I.a)({status:!1},s));case 10:return r=s.data,c=JSON.stringify(r),sessionStorage.setItem("userProfile",c),e.abrupt("return",Object(I.a)({status:!0},s));case 16:return e.prev=16,e.t0=e.catch(1),e.abrupt("return",{status:!1,error:e.t0});case 19:case"end":return e.stop()}}),e,this,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();var T=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s,r,c,o,i,u,d,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.e,n=t.email,s=t.password,r=t.setErrorMessage,c=t.setSigningMessage,o=t.setIsLoggedIn,i=t.setIsSigningIn,(u=t.setIsLoading)(!0),a.preventDefault(),c(!0),i(!0),r(null),d=new E("login"),e.next=9,d.login(n,s);case 9:j=e.sent,u(!1),j.status||(r(j.message),c(!1)),j.status&&(o("Login successful"),c(!1),i(!1),setTimeout((function(){window.location.replace("/")}),3e3)),console.log(j);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=a(29),B=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),c=Object(j.a)(r,2),u=c[0],l=c[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),p=b[0],v=b[1],m=Object(n.useState)(!1),O=Object(j.a)(m,2),x=O[0],f=O[1],_=Object(n.useState)(null),g=Object(j.a)(_,2),N=g[0],C=g[1],P=Object(n.useState)(!1),y=Object(j.a)(P,2),D=y[0],S=y[1],L=w(),E=L.isLoading,B=L.setIsLoading,G=Object(n.useState)({password1:"password"}),F=Object(j.a)(G,2),H=F[0],z=F[1];Object(n.useEffect)((function(){p&&o.b.error(p)}),[p]),Object(n.useEffect)((function(){x&&o.b.success(x)}),[x]);return Object(h.jsxs)("div",{className:A.a.loginParentDiv,children:[Object(h.jsx)("div",{className:A.a.logoParentDiv}),Object(h.jsx)("div",{className:A.a.formParentDiv,children:Object(h.jsx)("div",{className:A.a.formContainer,children:Object(h.jsxs)(k.a,{onSubmit:function(e){T({e:e,email:a,password:u,setErrorMessage:v,setSigningMessage:C,setIsLoggedIn:f,setIsSigningIn:S,isLoading:E,setIsLoading:B})},children:[Object(h.jsx)("h3",{children:"Login"}),N&&Object(h.jsx)("small",{className:A.a.signingMessage,children:"Signing In"}),Object(h.jsxs)(k.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(k.a.Label,{children:"Email address"}),Object(h.jsx)(k.a.Control,{type:"email",placeholder:"Enter email",value:a,onChange:function(e){s(e.target.value)}})]}),Object(h.jsxs)("div",{className:A.a.formGroup,children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("div",{className:A.a.inputParentDiv,children:Object(h.jsxs)("div",{className:A.a.inputParentCont,children:[Object(h.jsx)("input",{className:A.a.passwordInput,type:H.password1,placeholder:"******",value:u,onChange:function(e){l(e.target.value)}}),Object(h.jsx)("div",{className:A.a.eyeIcon,onClick:function(){return function(e){var t=Object(I.a)({},H);t[e]="password"===H[e]?"text":"password",z(t)}("password1")},children:"password"===H.password1?Object(h.jsx)(U.c,{}):Object(h.jsx)(U.b,{})})]})})]}),Object(h.jsx)(k.a.Group,{className:"mb-3",controlId:"formBasicCheckbox"}),Object(h.jsx)(M.a,{variant:"primary",type:"submit",style:{cursor:D&&"not-allowed"},children:"Enter"}),Object(h.jsxs)("div",{className:A.a.forgetPasswordParentDiv,children:[Object(h.jsx)("div",{}),Object(h.jsx)(i.b,{href:"#",children:"Forgot Password"})]})]})})})]})},G=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s,r,c,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.token,n=t.setIsLoggedIn,s=t.setErrorMessage,r=t.setIsLoggingOut,(c=t.setIsLoading)(!0),o=new E("logout"),e.next=5,o.logout(a);case 5:i=e.sent,c(!1),r(!0),i.status||s(i.message),i.status&&(n("Logout is successful"),setTimeout((function(){r(!1),window.location.replace("/login")}),1e3));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=a(21),H=a.n(F),z=a(78),q=a(79),R=a(58),J=a(67),W=[{title:"Dashbaord",path:"/home",icon:Object(h.jsx)(R.b,{}),cName:"nav-text"},{title:"New Prescription",path:"/prescription",icon:Object(h.jsx)(z.b,{}),cName:"nav-text"},{title:"Patient List",path:"/patient/data",icon:Object(h.jsx)(q.a,{}),cName:"nav-text"},{title:"Admin",path:"/admins",icon:Object(h.jsx)(J.a,{}),cName:"nav-text"},{title:"Inventory List",path:"/Inventory list",icon:Object(h.jsx)(R.c,{}),cName:"nav-text"},{title:"My Account",path:"/account",icon:Object(h.jsx)(R.a,{}),cName:"nav-text"}],K=a.p+"static/media/user.55758720.png",Y=function(e){var t=e.sidebar,a=e.setSidebar,s=x(),r=s.user,c=s.token,u=Object(n.useState)(""),l=Object(j.a)(u,2),d=l[0],b=l[1],p=Object(n.useState)(!1),v=Object(j.a)(p,2),m=v[0],O=v[1],f=Object(n.useState)(!1),_=Object(j.a)(f,2),g=_[0],N=_[1],C=Object(n.useState)(!1),P=Object(j.a)(C,2),y=P[0],D=P[1],S=w().setIsLoading,I=Object(n.useState)({src:(null===r||void 0===r?void 0:r.avatar)?r.avatar:K,alt:"Upload an Image"}),k=Object(j.a)(I,2),M=k[0],L=M.alt,A=M.src,E=(k[1],function(){a(!t)}),T=function(){N(!g)};return Object(n.useEffect)((function(){d&&o.b.error(d,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),[d]),Object(n.useEffect)((function(){m&&o.b.success(m,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),[m]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"".concat(H.a.navbar),children:Object(h.jsx)(i.b,{to:"#",className:g?H.a.menuBars:H.a.hidden,children:Object(h.jsx)(z.a,{onClick:function(){E(),T()}})})}),Object(h.jsx)("nav",{className:t?H.a.navbarMenu:"".concat(H.a.navbarMenu," ").concat(H.a.active),children:Object(h.jsxs)("ul",{className:"".concat(H.a.navMenuItems," ").concat(H.a.removeList),children:[Object(h.jsx)("li",{className:H.a.navbarToggle,children:Object(h.jsx)(i.b,{to:"#",className:H.a.MenuBars,children:Object(h.jsx)(U.a,{onClick:function(){E(),T()}})})}),Object(h.jsx)("div",{className:H.a.navContentParent,children:Object(h.jsxs)("div",{className:H.a.navContent,children:[Object(h.jsx)("div",{className:H.a.imageContent,children:Object(h.jsx)("img",{src:A,alt:L})}),W.map((function(e,t){return Object(h.jsx)("li",{className:H.a.navText,children:Object(h.jsxs)(i.c,{activeClassName:H.a.navTextActive,to:e.path,children:[e.icon,Object(h.jsx)("span",{children:e.title})]})},t)})),Object(h.jsx)("li",{className:H.a.liContent,children:Object(h.jsxs)("div",{className:H.a.buttonContainer,children:[Object(h.jsx)(q.b,{className:H.a.buttonIcon}),Object(h.jsx)("button",{style:{cursor:y&&"not-allowed"},onClick:function(){G({token:c,setIsLoggedIn:O,setErrorMessage:b,setIsLoggingOut:D,setIsLoading:S})},children:"Logout"})]})})]})})]})})]})},Q=a(4),Z=a.n(Q),X=a(179),V=(a(109),a(177)),$=a(65),ee=Object(V.a)({apiKey:"AIzaSyAd0-R38v6ERd6dNKHstnkbO32v_2g7nqE",authDomain:"sms-pharm.firebaseapp.com",projectId:"sms-pharm",storageBucket:"sms-pharm.appspot.com",messagingSenderId:"169109161623",appId:"1:169109161623:web:fcddab801827b9285f8bd2",measurementId:"G-6EQ5EH917K"}),te=Object($.b)(ee),ae=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s,r,c,o,i,u,d,j,b,p,v,m,h,O,x,f,_;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.e,n=t.state,s=t.setUpdatingMessageProfile,r=t.token,c=t.setErrorMessage,o=t.setSuccessMessage,i=t.imageFile,u=t.setUser,a.preventDefault(),s(!0),c(!1),o(!1),e.prev=5,d=Object.keys(n),j=Object.values(n),!i){e.next=25;break}return b=Object($.c)(te,"user-profile-images/".concat(i.name)),e.next=12,Object($.d)(b,i);case 12:return p=e.sent,e.next=15,Object($.a)(p.ref);case 15:return v=e.sent,m={avatar:v},j.map((function(e,t){e&&(m[d[t]]=e)})),h=new E("user/me/edit"),e.next=21,h.updateUserProfile(m,r,u);case 21:O=e.sent,s(!1),O.status||(c(O.message),o(!1)),O.status&&(c(!1),o("Update Successful"),setTimeout((function(){window.location.reload()}),2e3));case 25:return x={},j.map((function(e,t){e&&(x[d[t]]=e)})),f=new E("user/me/edit"),e.next=30,f.updateUserProfile(x,r,u);case 30:_=e.sent,s(!1),_.status||(c(_.message),o(!1)),_.status&&(c(!1),o("Update Successful"),setTimeout((function(){window.location.reload()}),2e3)),e.next=39;break;case 36:e.prev=36,e.t0=e.catch(5),console.log(e.t0);case 39:case"end":return e.stop()}}),e,null,[[5,36]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s,r,c,i,u,d,j,b,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.e,n=t.state,s=t.setUpdatingMessagePassword,r=t.token,c=t.setErrorMessage,i=t.setSuccessMessage,a.preventDefault(),s(!0),c(!1),i(!1),e.prev=5,n.new_password===n.confirm_new_password){e.next=10;break}return o.b.error("New password should be the same as confirm password "),s(!1),e.abrupt("return");case 10:return u=Object.keys(n),d=Object.values(n),j={},d.map((function(e,t){e&&(j[u[t]]=e)})),b=new E("changePassword"),e.next=17,b.updateUserPassword(j,r);case 17:p=e.sent,s(!1),p.status||(c(p.message),i(!1)),p.status&&(c(!1),i("Password has been updated successful"),setTimeout((function(){window.location.reload()}),2e3)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(5),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[5,23]])})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.token,n=t.setupdatingMessageRemoveAccount,s=t.setErrorMessage,r=t.setSuccessMessage,n(!0),s(!1),r(!1),e.prev=4,c=new E("user/me"),e.next=8,c.deleteUserAccount(a);case 8:o=e.sent,n(!1),o.status||(s(o.message),r(!1)),o.status&&(s(!1),r("Account has been deleted"),setTimeout((function(){window.location.reload()}),2e3)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.token,n=t.setUpdatingMessageDeleteUser,s=t.setErrorMessage,r=t.setSuccessMessage,n(!0),s(!1),r(!1),e.prev=4,c=new E("user/me/avatar"),e.next=8,c.deleteUserAvatar(a);case 8:o=e.sent,n(!1),o.status||(s(o.message),r(!1)),o.status&&(s(!1),r("Avatar has been deleted"),setTimeout((function(){window.location.reload()}),2e3)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.token,n=t.setTerminatingSessionMessage,s=t.setErrorMessage,r=t.setSuccessMessage,n(!0),s(!1),r(!1),e.prev=4,c=new E("user/me/session"),e.next=8,c.terminateSession(a);case 8:o=e.sent,n(!1),console.log("non"),o.status||(console.log("Failure"),s(o.message),r(!1)),o.status&&(console.log("success"),s(!1),r(o.message),setTimeout((function(){window.location.reload()}),2e3)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}(),oe=a(110),ie=a.n(oe),ue=a(178),le=a.n(ue);ie.a.extend(le.a);var de=function(){var e=x(),t=e.user,a=e.setUser,s=e.token,r=Object(n.useState)(!1),c=Object(j.a)(r,2),i=c[0],u=c[1],l=Object(n.useState)(null),d=Object(j.a)(l,2),b=d[0],p=d[1];Object(n.useEffect)((function(){i&&o.b.error(i)}),[i]),Object(n.useEffect)((function(){b&&o.b.success(b)}),[b]);var v=Object(n.useState)({src:t.avatar?t.avatar:K,alt:"Upload an Image"}),m=Object(j.a)(v,2),O=m[0],f=O.alt,_=O.src,g=m[1],N=Object(n.useState)(null),w=Object(j.a)(N,2),C=w[0],P=w[1],y=Object(n.useState)(""),D=Object(j.a)(y,2),S=D[0],k=D[1],M=Object(n.useState)(""),L=Object(j.a)(M,2),A=L[0],E=L[1],T=Object(n.useState)(""),B=Object(j.a)(T,2),G=B[0],F=B[1],H=Object(n.useState)(""),z=Object(j.a)(H,2),q=z[0],R=z[1],J=Object(n.useState)(!1),W=Object(j.a)(J,2),Q=W[0],V=W[1],$=Object(n.useState)(!1),ee=Object(j.a)($,2),te=ee[0],oe=ee[1],ue=Object(n.useState)(!1),le=Object(j.a)(ue,2),de=le[0],je=le[1],be=Object(n.useState)(!1),pe=Object(j.a)(be,2),ve=pe[0],me=pe[1],he=Object(n.useState)(!1),Oe=Object(j.a)(he,2),xe=Oe[0],fe=Oe[1],_e=Object(n.useState)(!0),ge=Object(j.a)(_e,2),Ne=ge[0],we=ge[1],Ce=Object(n.useState)(""),Pe=Object(j.a)(Ce,2),ye=Pe[0],De=Pe[1],Se=Object(n.useState)(""),Ie=Object(j.a)(Se,2),ke=Ie[0],Me=Ie[1],Le=Object(n.useState)(""),Ae=Object(j.a)(Le,2),Ee=Ae[0],Te=Ae[1],Ue=Object(n.useState)({password1:"password",password2:"password",password3:"password"}),Be=Object(j.a)(Ue,2),Ge=Be[0],Fe=Be[1],He=function(e){var t=Object(I.a)({},Ge);t[e]="password"===Ge[e]?"text":"password",Fe(t)},ze=Object(n.useState)(!1),qe=Object(j.a)(ze,2),Re=qe[0],Je=qe[1];return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:Z.a.accountParentDiv,children:[Object(h.jsx)(Y,{sidebar:Re,setSidebar:Je}),Object(h.jsx)("div",{className:"".concat(Z.a.accountContentDiv," ").concat(Re&&Z.a.active," "),children:Object(h.jsxs)("div",{className:Z.a.ManageAccountContainer,children:[Object(h.jsx)("div",{className:Z.a.linkParentDiv,children:Object(h.jsx)("div",{className:Z.a.linkContentDiv,children:Object(h.jsx)("div",{className:Z.a.sectionHeader,children:"Manage Accounts"})})}),Object(h.jsx)("div",{className:Z.a.profileParentDiv,children:Object(h.jsxs)("div",{className:Z.a.profileContentDiv,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:Z.a.sectionHeader,children:" Profile "}),Object(h.jsx)("p",{className:Z.a.textCustomizer,children:"Your email address is your identity on sms pharm and is used to log in."})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"".concat(Z.a.sectionHeader," ").concat(Z.a.editProfileText),children:["Edit Profile"," "]}),Object(h.jsxs)("div",{className:Z.a.profileForm,children:[Object(h.jsx)("div",{className:Z.a.imageContainer,children:Object(h.jsxs)("div",{className:Z.a.imageContent,children:[Object(h.jsx)("img",{src:_,alt:f}),Ne?Object(h.jsxs)("label",{className:Z.a.iconUploader,style:{opacity:Q&&.5},children:[Object(h.jsx)(X.a,{}),Object(h.jsx)("input",{type:"file",accept:"image/*",className:Z.a.hide,onChange:function(e){!function(e){var t=e.e,a=e.setImg,n=e.setHideIcon,s=e.setimageFile;t.target.files[0]&&(a({src:URL.createObjectURL(t.target.files[0]),alt:t.target.files[0].name}),n(!1),s(t.target.files[0]))}({e:e,setImg:g,setHideIcon:we,setimageFile:P})}})]}):Object(h.jsx)("button",{className:"".concat(Z.a.iconUploader," ").concat(Z.a.deleteImagePreview," ").concat(Z.a.hide),onClick:function(){!function(e){var t=e.setImg,a=e.setHideIcon,n=e.user;t({src:n.avatar?n.avatar:K,alt:"Upload an Image"}),a(!0)}({setImg:g,setHideIcon:we,user:t})},style:{opacity:Q&&.5},children:Object(h.jsx)(U.d,{})})]})}),Object(h.jsxs)("form",{onSubmit:function(e){ae({e:e,state:{fName:S,lName:A,phone:G,age:q},token:s,setUpdatingMessageProfile:V,setErrorMessage:u,setSuccessMessage:p,imageFile:C,setUser:a})},children:[Q&&Object(h.jsx)("small",{className:Z.a.signingMessage,children:"Update Profile..."}),Object(h.jsxs)("div",{className:Z.a.splitInputField,children:[Object(h.jsxs)("div",{className:Z.a.formGroup,children:[Object(h.jsx)("label",{children:"First Name"}),Object(h.jsx)("input",{type:"text",className:Z.a.formControl,placeholder:t.fName?t.fName:"",value:S,onChange:function(e){k(e.target.value)}})]}),Object(h.jsxs)("div",{className:Z.a.formGroup,children:[Object(h.jsx)("label",{children:"Last Name"}),Object(h.jsx)("input",{type:"text",className:Z.a.formControl,placeholder:t.lName?t.lName:"",value:A,onChange:function(e){E(e.target.value)}})]})]}),Object(h.jsxs)("div",{className:Z.a.formGroup,children:[Object(h.jsx)("label",{children:"Email Address"}),Object(h.jsx)("input",{type:"email",className:Z.a.formControl,placeholder:t.email?t.email:"",disabled:!0})]}),Object(h.jsxs)("div",{className:Z.a.splitInputField,children:[Object(h.jsxs)("div",{className:Z.a.formGroup,children:[Object(h.jsx)("label",{children:"Phone Number"}),Object(h.jsx)("input",{type:"text",className:Z.a.formControl,placeholder:t.phone?t.phone:"",value:G,onChange:function(e){F(e.target.value)}})]}),Object(h.jsxs)("div",{className:Z.a.formGroup,children:[Object(h.jsx)("label",{children:"Age (Optional)"}),Object(h.jsx)("input",{type:"number",className:Z.a.formControl,placeholder:t.age?t.age:"",value:q,onChange:function(e){R(e.target.value)}})]})]}),Object(h.jsx)("button",{style:{opacity:Q&&.5},children:"Submit"})]})]})]}),Object(h.jsx)("div",{className:Z.a.dummySpace})]})}),Object(h.jsx)("div",{className:Z.a.closeAccountParentDiv,children:Object(h.jsxs)("div",{className:Z.a.closeAccountContentDiv,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:Z.a.sectionHeader,children:Object(h.jsx)("span",{children:"Avatar"})}),Object(h.jsxs)("p",{className:Z.a.textCustomizer,children:[Object(h.jsx)("span",{children:"warning:"})," Deleting your account avatar is irreversible"]})]}),Object(h.jsxs)("div",{children:[ve&&Object(h.jsx)("small",{className:Z.a.deletingAvatarMessage,children:"Deleting Avatar..."}),Object(h.jsx)("button",{onClick:function(){return re({token:s,setUpdatingMessageDeleteUser:me,setErrorMessage:u,setSuccessMessage:p})},style:{opacity:ve&&.5},children:"Remove avatar"})]}),Object(h.jsx)("div",{className:Z.a.dummySpace})]})}),Object(h.jsx)("div",{className:Z.a.passwordParentDiv,children:Object(h.jsxs)("div",{className:Z.a.passwordContentDiv,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:Z.a.sectionHeader,children:" Password "}),Object(h.jsx)("p",{className:Z.a.textCustomizer,children:"This allows you to set a new password"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"".concat(Z.a.sectionHeader," ").concat(Z.a.editProfileText),children:"Change Password"}),Object(h.jsx)("div",{className:Z.a.passwordForm,children:Object(h.jsxs)("form",{onSubmit:function(e){ne({e:e,state:{old_password:ye,new_password:ke,confirm_new_password:Ee},token:s,setUpdatingMessagePassword:oe,setErrorMessage:u,setSuccessMessage:p})},children:[te&&Object(h.jsx)("small",{className:Z.a.signingMessage,children:"Updating Password..."}),Object(h.jsxs)("div",{className:Z.a.formGroup,children:[Object(h.jsx)("label",{children:"Current Password"}),Object(h.jsx)("div",{className:Z.a.inputParentDiv,children:Object(h.jsxs)("div",{className:Z.a.inputParentCont,children:[Object(h.jsx)("input",{type:Ge.password1,className:Z.a.formControl,required:!0,placeholder:"******",value:ye,onChange:function(e){De(e.target.value)}}),Object(h.jsx)("div",{className:Z.a.eyeIcon,onClick:function(){return He("password1")},children:"password"===Ge.password1?Object(h.jsx)(U.c,{}):Object(h.jsx)(U.b,{})})]})})]}),Object(h.jsxs)("div",{className:Z.a.splitInputField,children:[Object(h.jsxs)("div",{className:Z.a.formGroup,children:[Object(h.jsx)("label",{children:"New Password"}),Object(h.jsx)("div",{className:Z.a.inputParentDiv,children:Object(h.jsxs)("div",{className:Z.a.inputParentCont,children:[Object(h.jsx)("input",{type:Ge.password2,className:Z.a.formControl,required:!0,placeholder:"******",value:ke,onChange:function(e){Me(e.target.value)}}),Object(h.jsx)("div",{className:Z.a.eyeIcon2,onClick:function(){return He("password2")},children:"password"===Ge.password2?Object(h.jsx)(U.c,{}):Object(h.jsx)(U.b,{})})]})})]}),Object(h.jsxs)("div",{className:Z.a.formGroup,children:[Object(h.jsx)("label",{children:"Confirm New Password"}),Object(h.jsx)("div",{className:Z.a.inputParentDiv,children:Object(h.jsxs)("div",{className:Z.a.inputParentCont,children:[Object(h.jsx)("input",{type:Ge.password3,className:Z.a.formControl,required:!0,placeholder:"******",value:Ee,onChange:function(e){Te(e.target.value)}}),Object(h.jsx)("div",{className:Z.a.eyeIcon2,onClick:function(){return He("password3")},children:"password"===Ge.password3?Object(h.jsx)(U.c,{}):Object(h.jsx)(U.b,{})})]})})]})]})," ",Object(h.jsx)("button",{style:{opacity:te&&.5},children:"Submit"})]})})]}),Object(h.jsx)("div",{className:Z.a.dummySpace})]})}),Object(h.jsx)("div",{className:Z.a.closeAccountParentDiv,children:Object(h.jsxs)("div",{className:Z.a.closeAccountContentDiv,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Delete Account"}),Object(h.jsxs)("p",{className:Z.a.textCustomizer,children:[Object(h.jsx)("span",{children:"warning:"})," Deleting your account is irreversible."]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){return se({token:s,setupdatingMessageRemoveAccount:je,setErrorMessage:u,setSuccessMessage:p})},style:{opacity:de&&.5},children:"Close this account"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"Terminate other session"})}),Object(h.jsx)("p",{className:Z.a.textCustomizer,children:"Logs out session on all other connected devices"})]}),Object(h.jsxs)("div",{children:[xe&&Object(h.jsx)("small",{className:Z.a.terminatingSessionMessage,children:"Terminating..."}),Object(h.jsx)("button",{onClick:function(){return ce({token:s,setTerminatingSessionMessage:fe,setErrorMessage:u,setSuccessMessage:p})},style:{opacity:xe&&.5},children:"terminate"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Time Registered"})," "]}),Object(h.jsx)("div",{children:ie()(t.createdAt).format("LLLL")}),Object(h.jsx)("div",{className:Z.a.dummySpace})]})})]})})]})})},je=a(27),be=a.n(je),pe=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],s=t[1];return Object(h.jsxs)("div",{className:be.a.dashboardParentDiv,children:[Object(h.jsx)(Y,{sidebar:a,setSidebar:s}),Object(h.jsx)("div",{className:"".concat(be.a.dashboardContentDiv," ").concat(a&&be.a.active," "),children:Object(h.jsxs)("div",{className:be.a.dashboardPageDiv,children:[Object(h.jsxs)("div",{className:be.a.dashboardMenu,children:[Object(h.jsx)("div",{className:be.a.dashboardText,children:Object(h.jsx)("h4",{children:"DASHBOARD"})}),Object(h.jsx)("div",{className:be.a.searchBarParentContainer,children:Object(h.jsxs)("div",{className:be.a.searchBarCont,children:[Object(h.jsx)(J.b,{className:be.a.searchBarIcon}),Object(h.jsx)("input",{type:"text",placeholder:"Keywords"}),Object(h.jsx)("button",{children:Object(h.jsx)(J.b,{className:be.a.searchBarIcon2})})]})})]}),Object(h.jsxs)("div",{className:be.a.dashboardSection,children:[Object(h.jsx)("div",{className:be.a.filterParentDiv,children:"first"}),Object(h.jsx)("div",{className:be.a.tableParentDiv,children:"second"})]})]})})]})},ve=a(24),me=a.n(ve),he=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],s=t[1];return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:me.a.dashboardParentDiv,children:[Object(h.jsx)(Y,{sidebar:a,setSidebar:s}),Object(h.jsxs)("div",{className:"".concat(me.a.dashboardContentDiv," ").concat(a&&me.a.active," "),children:[Object(h.jsx)("div",{className:me.a.inventoryParent,children:Object(h.jsxs)("div",{className:me.a.inventoryContainer,children:[Object(h.jsx)("h3",{children:"Dashboard"}),Object(h.jsx)("h5",{children:"Inventory List"}),Object(h.jsxs)("div",{className:me.a.inventoryListItems,children:[Object(h.jsx)("div",{children:"Lorem ipsum dolo"}),Object(h.jsx)("div",{children:"5"})]})]})}),Object(h.jsx)("div",{className:me.a.dataParent,children:Object(h.jsxs)("div",{className:me.a.dataContainer,children:[Object(h.jsx)("div",{className:me.a.formIcon,children:Object(h.jsx)(R.c,{})}),Object(h.jsx)("span",{children:"Upload Patient Data"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("div",{className:me.a.formGroup,children:Object(h.jsx)("input",{type:"text",className:me.a.formControl,required:!0,placeholder:"Full Name"})}),Object(h.jsx)("div",{className:me.a.formGroup,children:Object(h.jsx)("input",{type:"text",className:me.a.formControl,required:!0,placeholder:"Card No"})}),Object(h.jsx)("div",{className:me.a.formGroup,children:Object(h.jsx)("input",{type:"text",className:me.a.formControl,required:!0,placeholder:"Phone Number"})}),Object(h.jsx)("button",{children:"Submit"})]})]})})]})]})})},Oe=a(40),xe=a.n(Oe),fe={Login:B,Accounts:de,Dashboard:pe,PatientData:he,Prescription:function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],s=t[1];return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:xe.a.dashboardParentDiv,children:[Object(h.jsx)(Y,{sidebar:a,setSidebar:s}),Object(h.jsxs)("div",{className:"".concat(xe.a.dashboardContentDiv," ").concat(a&&xe.a.active," "),children:[Object(h.jsx)("div",{className:xe.a.inventoryParent,children:Object(h.jsxs)("div",{className:xe.a.inventoryContainer,children:[Object(h.jsx)("h3",{children:"Dashboard"}),"d Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur cumque ducimus distinctio repellendus delectus dolorum laborum, a, eius amet vero dolorem velit, cum aliquid quidem odit reprehenderit magnam pariatur beatae. wi"]})}),Object(h.jsx)("div",{className:xe.a.dataParent,children:Object(h.jsxs)("div",{className:xe.a.dataContainer,children:[Object(h.jsx)("h3",{children:"Dashboard"}),"d Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur cumque ducimus distinctio repellendus delectus dolorum laborum, a, eius amet vero dolorem velit, cum aliquid quidem odit reprehenderit magnam pariatur beatae. wi"]})})]})]})})}},_e=[{path:"/",element:Object(h.jsx)(fe.Dashboard,{}),type:"authenticated"},{path:"/home",element:Object(h.jsx)(fe.Dashboard,{}),type:"authenticated"},{path:"/prescription",element:Object(h.jsx)(fe.Prescription,{}),type:"authenticated"},{path:"/patient/data",element:Object(h.jsx)(fe.PatientData,{}),type:"authenticated"},{path:"/account",element:Object(h.jsx)(fe.Accounts,{}),type:"authenticated"},{path:"/login",element:Object(h.jsx)(fe.Login,{}),type:"protected"}];function ge(e){var t=e.children,a=sessionStorage.getItem("userProfile"),n=Object(S.g)();return a?t:Object(h.jsx)(S.a,{to:"/login",replace:!0,state:{path:n.pathname}})}function Ne(e){var t=e.children;return sessionStorage.getItem("user")?Object(h.jsx)(S.a,{to:"/",replace:!0}):t}function we(e){return e.children}var Ce=function(){return Object(h.jsx)(S.d,{children:_e.map((function(e,t){var a=e.element,n=e.type,s=e.path;return Object(h.jsx)(S.b,{path:s,exact:!0,render:function(){return function(e){var t=e.element,a=e.type;return{authenticated:Object(h.jsx)(ge,{children:t}),protected:Object(h.jsx)(Ne,{children:t}),public:Object(h.jsx)(we,{children:t})}[a]}({element:a,type:n})}},t)}))})};var Pe=function(){var e=w().isLoading;return Object(h.jsxs)(i.a,{children:[Object(h.jsxs)("div",{children:[e&&Object(h.jsx)(D,{}),Object(h.jsx)(o.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHove:!0})]}),Object(h.jsx)(Ce,{})]})};c.a.render(Object(h.jsx)(C,{children:Object(h.jsx)(g,{children:Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(Pe,{})})})}),document.getElementById("root"))},34:function(e,t,a){e.exports={loginParentDiv:"login_loginParentDiv__2nkAp",logoParentDiv:"login_logoParentDiv__1iOSP",formParentDiv:"login_formParentDiv__aRXN-",formContainer:"login_formContainer__1VtRj",formGroup:"login_formGroup__2URTe",inputParentCont:"login_inputParentCont__2XmQW",eyeIcon:"login_eyeIcon__3Nb4M",signingMessage:"login_signingMessage__D7A0R",forgetPasswordParentDiv:"login_forgetPasswordParentDiv__3pLWW"}},4:function(e,t,a){e.exports={dummySpace:"accounts_dummySpace__1fLE9",signingMessage:"accounts_signingMessage__2cygR",deletingAvatarMessage:"accounts_deletingAvatarMessage__3E_cJ",terminatingSessionMessage:"accounts_terminatingSessionMessage__pLvhD",accountParentDiv:"accounts_accountParentDiv__24j0S",hide:"accounts_hide__3XNd8",textCustomizer:"accounts_textCustomizer__1Pubn",sectionHeader:"accounts_sectionHeader__ASA0L",accountContentDiv:"accounts_accountContentDiv__uYoAX",active:"accounts_active__1tTbg",ManageAccountContainer:"accounts_ManageAccountContainer__HY9bc",linkParentDiv:"accounts_linkParentDiv__2KEEN",linkContentDiv:"accounts_linkContentDiv__24iP6",profileParentDiv:"accounts_profileParentDiv__3wLBw",profileContentDiv:"accounts_profileContentDiv__c9wBZ",editProfileText:"accounts_editProfileText__3VbWv",profileForm:"accounts_profileForm__31T3Y",imageContainer:"accounts_imageContainer__1Q5yw",imageContent:"accounts_imageContent__3yNq8",iconUploader:"accounts_iconUploader__VO_BN",deleteImagePreview:"accounts_deleteImagePreview__JUZ_c",splitInputField:"accounts_splitInputField__19D8Z",formGroup:"accounts_formGroup__2P5Hy",formControl:"accounts_formControl__3J_a7",passwordParentDiv:"accounts_passwordParentDiv__3-lAl",passwordContentDiv:"accounts_passwordContentDiv__3dYMR",passwordForm:"accounts_passwordForm__I6_ua",inputParentDiv:"accounts_inputParentDiv__1OhiA",inputParentCont:"accounts_inputParentCont__3KLt8",eyeIcon:"accounts_eyeIcon__318P3",eyeIcon2:"accounts_eyeIcon2__8CFW4",closeAccountParentDiv:"accounts_closeAccountParentDiv__1Qksl",closeAccountContentDiv:"accounts_closeAccountContentDiv__3WW_Q"}},40:function(e,t,a){e.exports={dashboardParentDiv:"prescription_dashboardParentDiv__3OEf7",dashboardContentDiv:"prescription_dashboardContentDiv__nBvdW",inventoryParent:"prescription_inventoryParent__16GYY",inventoryContainer:"prescription_inventoryContainer__1eXce",inventoryListItems:"prescription_inventoryListItems__17ZZ8",dataParent:"prescription_dataParent__2t8OU",dataContainer:"prescription_dataContainer__2QWeG",formIcon:"prescription_formIcon__1y2kg",formGroup:"prescription_formGroup__1hnyB",formControl:"prescription_formControl__2VM23",active:"prescription_active__1oJKm"}}},[[316,1,2]]]);
//# sourceMappingURL=main.84307dd3.chunk.js.map