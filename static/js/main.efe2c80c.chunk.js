(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{34:function(e,a,t){},44:function(e,a,t){e.exports=t(67)},49:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(39),c=t.n(l),s=(t(49),t(8)),o=t(40),i=t(20),m=t(6),u=(t(34),t(18)),d=t(17),p=t(19),f=t.n(p),g=t(23),E=t(28),b=t(15),v=t.n(b),h=t(69),w=t(70),j=t(71),N=t(72),O=t(73),y=t(74),S=t(75),k=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",{className:"mylogo"},"FireGram"))},x=t(14),I=t(25),P=(t(51),t(52),I.initializeApp({apiKey:"AIzaSyCywtEwerHLeekdTnwlReJtTgf9npBt2Yg",authDomain:"firegram-ce49a.firebaseapp.com",databaseURL:"https://firegram-ce49a.firebaseio.com",projectId:"firegram-ce49a",storageBucket:"firegram-ce49a.appspot.com",messagingSenderId:"393419077561",appId:"1:393419077561:web:4990cad9981e942cca6868"})),C=I.storage(),_=I.firestore(),L=I.firestore.FieldValue.serverTimestamp,R=function(){var e=Object(n.useState)({email:"",password:""}),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)({email:"",password:""}),o=Object(s.a)(c,2),m=o[0],p=o[1],b={email:v.a.string().required().email().label("Email"),password:v.a.string().required().label("Password")},I=function(){var e=v.a.validate(t,b,{abortEarly:!1}).error;if(!e)return null;var a,n={},r=Object(E.a)(e.details);try{for(r.s();!(a=r.n()).done;){var l=a.value;n[l.path[0]]=l.message}}catch(c){r.e(c)}finally{r.f()}return n},C=function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P.auth().signInWithEmailAndPassword(t.email,t.password).then((function(){console.log("Login OK"),P.auth().currentUser.getIdToken(!0).then((function(e){localStorage.setItem("token",e),window.location="/"})).catch((function(e){}))})).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":p({email:e.message});break;case"auth/wrong-password":p({password:e.message})}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(e){var a=Object(d.a)({},m),n=L(e.target);n?a[e.target.name]=n:delete a[e.target.name];var r=e.target,c=r.name,s=r.value;l(Object(d.a)(Object(d.a)({},t),{},Object(u.a)({},c,s))),p(a)},L=function(e){var a=e.name,t=e.value,n=Object(u.a)({},a,t),r=Object(u.a)({},a,b[a]),l=v.a.validate(n,r).error;return l?l.details[0].message:null};return r.a.createElement("div",{className:"login-page"},r.a.createElement(x.a.div,{className:"app flex-row align-items-center",initial:{scale:.5},animate:{scale:1},transition:{duration:.5}},r.a.createElement(h.a,{className:"justify-content-center"},r.a.createElement(w.a,{md:"9",lg:"7",xl:"6"},r.a.createElement(j.a,{className:"mx-4 card-form"},r.a.createElement(N.a,{className:"p-4"},r.a.createElement("form",{className:"login-form",onSubmit:function(e){console.log("Submitted!"),e.preventDefault();var a=I();p(null!==a?a:{}),C()}},r.a.createElement(k,null),r.a.createElement(O.a,{className:"mb-3"},r.a.createElement(y.a,{type:"text",name:"email",value:t.email,placeholder:"Enter Email",onChange:_})),m.email&&r.a.createElement("div",{className:"alert alert-danger"},m.email),r.a.createElement(O.a,{className:"mb-3"},r.a.createElement(y.a,{type:"password",name:"password",value:t.password,placeholder:"Enter Password",onChange:_})),m.password&&r.a.createElement("div",{className:"alert alert-danger"},m.password),r.a.createElement(S.a,{color:"primary",block:!0,className:"mb-3",disabled:I()},"Login"),r.a.createElement("p",{className:"text-center my-3"},"Don't have an account?"," ",r.a.createElement(i.b,{to:"register",className:"text-blue-500 hover:text-blue-600"},"Register here")," ",r.a.createElement("br",null)," ",r.a.createElement(i.b,{to:"reset-password",className:"text-blue-500 hover:text-blue-600"},"Forgot Password?")))))))))},A=function(){var e=Object(n.useState)({email:"",password:"",password_confirmation:""}),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)({email:"",password:"",password_confirmation:""}),o=Object(s.a)(c,2),m=o[0],p=o[1],b={email:v.a.string().required().email().label("Email"),password:v.a.string().required().min(5).max(15).label("Password"),password_confirmation:v.a.string().valid(v.a.ref("password")).required().options({language:{any:{allowOnly:"must match password"}}})},I=function(){var e=v.a.validate(t,b,{abortEarly:!1}).error;if(!e)return null;var a,n={},r=Object(E.a)(e.details);try{for(r.s();!(a=r.n()).done;){var l=a.value;n[l.path[0]]=l.message}}catch(c){r.e(c)}finally{r.f()}return n},C=function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(){console.log("Register OK"),P.auth().currentUser.getIdToken(!0).then((function(e){console.log(e),localStorage.setItem("token",e),window.location="/"})).catch((function(e){}))})).catch((function(e){switch(console.log("Error register "),e.code){case"auth/email-already-in-use":case"auth/invalid-email":p({email:e.message});break;case"auth/weak-password":p(e.message)}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(e){var a=Object(d.a)({},m),n=L(e.target);n?a[e.target.name]=n:delete a[e.target.name];var r=e.target,c=r.name,s=r.value;l(Object(d.a)(Object(d.a)({},t),{},Object(u.a)({},c,s))),p(a)},L=function(e){var a=e.name,t=e.value,n=Object(u.a)({},a,t),r=Object(u.a)({},a,b[a]),l=v.a.validate(n,r).error;return console.log(l),l?l.details[0].message:null};return r.a.createElement("div",{className:"login-page"},r.a.createElement(x.a.div,{className:"app flex-row align-items-center",initial:{scale:.5},animate:{scale:1},transition:{duration:.5}},r.a.createElement(h.a,{className:"justify-content-center"},r.a.createElement(w.a,{md:"9",lg:"7",xl:"6"},r.a.createElement(j.a,{className:"mx-4 card-form"},r.a.createElement(N.a,{className:"p-4"},r.a.createElement("form",{className:"login-form",onSubmit:function(e){console.log("Submitted!"),e.preventDefault();var a=I();p(null!==a?a:{}),C()}},r.a.createElement(k,null),r.a.createElement(O.a,{className:"mb-3"},r.a.createElement(y.a,{type:"text",name:"email",value:t.email,placeholder:"Enter Email",onChange:_})),m.email&&r.a.createElement("div",{className:"alert alert-danger"},m.email),r.a.createElement(O.a,{className:"mb-3"},r.a.createElement(y.a,{type:"password",name:"password",value:t.password,placeholder:"Enter Password",onChange:_})),m.password&&r.a.createElement("div",{className:"alert alert-danger"},m.password),r.a.createElement(O.a,{className:"mb-3"},r.a.createElement(y.a,{type:"password",name:"password_confirmation",value:t.password_confirmation,placeholder:"Repeat Password",onChange:_})),m.password_confirmation&&r.a.createElement("div",{className:"alert alert-danger"},m.password_confirmation),r.a.createElement(S.a,{color:"primary",block:!0,className:"mb-3",disabled:I()},"Register"),r.a.createElement("p",{className:"text-center my-3"},"Do you already have an account?"," ",r.a.createElement(i.b,{to:"login",className:"text-blue-500 hover:text-blue-600"},"Login here")," ",r.a.createElement("br",null)," "))))))))},D=function(e){var a=Object(n.useState)(0),t=Object(s.a)(a,2),r=t[0],l=t[1],c=Object(n.useState)(null),o=Object(s.a)(c,2),i=o[0],m=o[1],u=Object(n.useState)(null),d=Object(s.a)(u,2),p=d[0],E=d[1];return Object(n.useEffect)((function(){var a=C.ref(e.name),t=_.collection("images");a.put(e).on("state_changed",(function(e){var a=e.bytesTransferred/e.totalBytes*100;l(a)}),(function(e){m(e)}),Object(g.a)(f.a.mark((function e(){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getDownloadURL();case 2:n=e.sent,r=L(),t.add({url:n,createdAt:r}),E(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:p,error:i}},B=(t(58),function(e){var a=Object(n.useState)([]),t=Object(s.a)(a,2),r=t[0],l=t[1];return Object(n.useEffect)((function(){var a=_.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var a=[];e.forEach((function(e){a.push(Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id}))})),l(a)}));return function(){return a()}}),[e]),{docs:r}}),T=function(e){var a=e.setSelectedImg,t=B("images").docs;return r.a.createElement("div",{className:"img-grid"},t&&t.map((function(e){return r.a.createElement(x.a.div,{className:"img-wrap",key:e.id,whileHover:{opacity:1},layout:!0,onClick:function(){return a(e.url)}},r.a.createElement(x.a.img,{img:!0,src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},q=function(e){var a=e.selectedImg,t=e.setSelectedImg;return r.a.createElement(x.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&t(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement("p",null,"Share your day"),r.a.createElement(x.a.img,{src:a,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))},F=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile-image"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",alt:""})),r.a.createElement("div",{className:"profile-user-settings"},r.a.createElement("h1",{className:"profile-user-name"},"janedoe_"),r.a.createElement("button",{className:"btn profile-edit-btn"},"Edit Profile"),r.a.createElement("button",{className:"btn profile-settings-btn","aria-label":"profile settings"},r.a.createElement("i",{className:"fas fa-cog","aria-hidden":"true"}))),r.a.createElement("div",{className:"profile-stats"},r.a.createElement("ul",{className:"profile-info"},r.a.createElement("li",null,r.a.createElement("span",{className:"profile-stat-count"},"164")," posts"),r.a.createElement("li",null,r.a.createElement("span",{className:"profile-stat-count"},"188")," followers"),r.a.createElement("li",null,r.a.createElement("span",{className:"profile-stat-count"},"206")," following"))),r.a.createElement("div",{className:"profile-bio"},r.a.createElement("p",null,r.a.createElement("span",{className:"profile-real-name"},"Jane Doe")," Lorem ipsum dolor sit, amet consectetur adipisicing elit \ud83d\udcf7\u2708\ufe0f\ud83c\udfd5\ufe0f"))))},U=function(e){var a=e.file,t=e.setFile,l=D(a),c=l.url,s=l.progress;return Object(n.useEffect)((function(){c&&t(null)}),[c,t]),r.a.createElement(x.a.div,{className:"progress-bar",initial:{width:0},animate:{width:s+"%"}})},J=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(null),o=Object(s.a)(c,2),i=o[0],m=o[1],u=["image/png","image/jpg","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var a=e.target.files[0];a&&u.includes(a.type)?(l(a),m("")):(l(null),m("Please select an image file (png, jpeg or jpg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},i&&r.a.createElement("div",{className:"error"},i),t&&r.a.createElement("div",null,t.name),t&&r.a.createElement(U,{file:t,setFile:l})))},W=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(F,null),r.a.createElement(J,null),r.a.createElement(T,{setSelectedImg:l}),t&&r.a.createElement(q,{selectedImg:t,setSelectedImg:l}))},K=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Reset Password"))},z=t(42),H=function(e){var a=e.component,t=(e.render,e.user,Object(z.a)(e,["component","render","user"]));return r.a.createElement(m.b,Object.assign({},t,{render:function(e){return localStorage.getItem("token")?r.a.createElement(a,e):r.a.createElement(m.a,{to:{pathname:"/login"}})}}))};var G=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){try{var e=localStorage.getItem("token"),a=Object(o.a)(e);t(a),console.log(a)}catch(n){console.log(n)}}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null," ",r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/login",component:R}),r.a.createElement(m.b,{path:"/register",component:A}),r.a.createElement(m.b,{path:"/reset-password",component:K}),r.a.createElement(H,{path:"/",component:W})))," ")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(66);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.efe2c80c.chunk.js.map