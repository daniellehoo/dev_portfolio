(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/cat_icon.a499faa0.png"},20:function(e,t,a){e.exports=a.p+"static/media/ramen.7877ddd7.png"},26:function(e,t,a){e.exports=a.p+"static/media/luckycat.eb9ff440.glb"},27:function(e,t,a){e.exports=a.p+"static/media/pigeon.468a6036.png"},31:function(e,t,a){e.exports=a(44)},36:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/soy_sauce.d47132d1.png"},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),c=a.n(i),o=(a(36),a(28)),l=a(2),s=a(10),m=a(8),h=a(18),u=a.n(h);var d=function(){return r.a.createElement("div",{className:"homeButton"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:u.a})))};var p=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),i=a[0],c=a[1];return console.log(e),r.a.createElement("div",{className:"nav"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{className:i,onClick:function(){return c()}},r.a.createElement(d,null)),r.a.createElement("li",{className:i,onClick:function(){return c()}},r.a.createElement(m.c,{to:"/projects"},"projects")),r.a.createElement("li",{className:i,onClick:function(){return c()}},r.a.createElement("a",{href:"https://daniellehoo.github.io/blog/posts"},"blog")),r.a.createElement("li",{className:i,onClick:function(){return c()}},r.a.createElement(m.c,{to:"/about"},"about")))))};var g=function(){var e=[{id:0,url:"http://www.instagram.com/danihoo",class:"fab fa-instagram"},{id:1,url:"http://github.com/daniellehoo",class:"fab fa-github"},{id:2,url:"http://www.twitter.com/daniellehoo",class:"fab fa-twitter"},{id:3,url:"http://www.soundcloud.com/danihoo",class:"fab fa-soundcloud"},{id:4,url:"http://www.linkedin.com/in/danielle-hoo",class:"fab fa-linkedin"},{id:5,url:"http://www.medium.com/@danihoo",class:"fab fa-medium"},{id:6,url:"https://www.pinterest.com/daniellemhoo/",class:"fab fa-pinterest"}].map(function(e,t){return r.a.createElement("div",{className:"button id_".concat(e.id),key:"".concat(t)},r.a.createElement("a",{href:"".concat(e.url)},r.a.createElement("i",{className:"".concat(e.class)})))});return r.a.createElement("div",{className:"social-footer",key:"1"},e)};function f(e,t){var a,n=/SITU Research/g,r=/Amnesty International/g;switch(e){case"Chinatown USA":a=t.replace(/The Chinese in America/g,"<a href='https://www.penguinrandomhouse.com/books/288096/the-chinese-in-america-by-iris-chang/' target='_blank'>The Chinese in America</a>");break;case"Our Children's Trust":a=t.replace(/Our Children's Trust/g,"<a href='https://www.ourchildrenstrust.org/' target='_blank'>Our Children's Trust</a>").replace(n,"<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>").replace(/Leaflet.js/g,"<a href='https://leafletjs.com/' target='_blank'>Leaflet.js</a>").trim();break;case"Nicaragua":a=t.replace(/digital platform/g,"<a href='http://gieinicaragua-cartografia-violencia.org/' target='_blank'>digital platform</a>").replace(/event reconstruction/g,"<a href='http://www.marchadelasmadres.com/#/' target='_blank'>event reconstruction</a>").replace(/EAAF/g,"<a href='https://eaaf.org' target='_blank'>EAAF</a>").replace(/GIEI/g,"<a href='https://gieinicaragua.org/en' target='_blank'>GIEI</a>").replace(n,"<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>").trim();break;case"Amnesty International":a=t.replace(n,"<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>").replace(r,"<a href='https://www.amnesty.org/en/' target='_blank'>Amnesty International</a>").replace(/visual investigation/g,"<a href='https://teargas.amnesty.org/iraq/' target='_blank'>visual investigation</a>").trim();break;case"Tear Gas":a=t.replace(n,"<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>").replace(r,"<a href='https://www.amnesty.org/en/' target='_blank'>Amnesty International</a>").replace(/video/g,"<a href='https://teargas.amnesty.org/#how-it-works' target='_blank'>video</a>").trim();break;case"VaporJong":a=t.replace(/p5/g,"<a href='https://p5js.org/' target='_blank'>p5</a>").replace(/Jesse Chen/g,"<a href='https://github.com/jessechen' target='_blank'>Jesse Chen</a>").replace(/playground/g,"<a href='https://daniellehoo.com/vaporJong/vaporJong.html' target='_blank'>playground</a>").replace(/here/g,"<a href='https://github.com/daniellehoo/vaporJong' target='_blank'>here</a>").trim();default:console.log("")}return a}var b=function(e){var t=Object(l.f)().url,a=e.projectsData,i=a.map(function(e){return e.url===t?r.a.createElement("div",{key:e.id,class:"projectClass",dangerouslySetInnerHTML:{__html:f(e.title,e.description)}}):null}),c=a.map(function(e){return e.url===t?r.a.createElement("img",{src:e.img}):null}),s=Object(n.useState)(!1),m=Object(o.a)(s,2),h=m[0];return m[1],r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{isActive:h}),r.a.createElement("div",{className:"project"},r.a.createElement("div",{className:"project-content"},c,i),r.a.createElement("div",{className:"back"},r.a.createElement("a",{href:"#/Projects"},"<< Back to Projects"))),r.a.createElement(g,null))},w=a(4),v=(a(42),a(20)),E=a.n(v);var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("div",{className:"about"},r.a.createElement("div",null),r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"brooklyn, NY resident"),r.a.createElement("p",null,"software engineer working in javascript and react"),r.a.createElement("p",null,"formerly at",r.a.createElement("a",{href:"https://www.situ.nyc",target:"_blank"},"SITU/"),"and the",r.a.createElement("a",{href:"/"},"Museum of Modern Art (MoMA) ")),r.a.createElement("p",null,"interest in contemporary art, design, & web development"),r.a.createElement("p",null,"occasional distance runner, wanderer & Canon G16 user"),r.a.createElement("div",{className:"spacer"}),r.a.createElement("p",null,"contact:",r.a.createElement("a",{id:"contact",href:"mailto:daniellem.hoo@gmail.com?subject=Hello!"},"email")),r.a.createElement("div",null,r.a.createElement("img",{id:"soy",src:E.a})),r.a.createElement(g,null)))};function y(e){var t=e.target.value;e.target.value="",e.target.value=t}var j=function(){var e=Object(n.useState)("Danielle Hoo"),t=Object(s.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"header"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:a,onChange:function(e){return i(e.target.value)},autoFocus:!0,onFocus:y})))},_=a(21),I=a(22),A=a(29),C=a(23),O=a(30),N=a(7),S=a(24),F=a(25),T=a.n(F),x=a(1),U=a(26),R=a.n(U),J=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(A.a)(this,Object(C.a)(t).call(this,e))).on_window_resize=function(){a.width=a.mount.getClientRects()[0].width,a.height=a.mount.getClientRects()[0].height,a.camera.aspect=a.width/a.height,a.camera.updateProjectionMatrix(),a.renderer.setSize(a.width,a.height)},a.start=a.start.bind(Object(N.a)(Object(N.a)(a))),a.stop=a.stop.bind(Object(N.a)(Object(N.a)(a))),a.animate=a.animate.bind(Object(N.a)(Object(N.a)(a))),a}return Object(O.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this.mount.clientWidth,t=this.mount.clientHeight;this.scene=new x.Scene,this.camera=new x.PerspectiveCamera(75,e/t,.001,1e4),this.camera.position.z=4,this.renderer=new x.WebGLRenderer({logarithmicDepthBuffer:!0,context:null,precision:"highhp",premultipliedAlpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor("#FFFFFF"),this.renderer.setSize(e,t),this.mount.appendChild(this.renderer.domElement),this.controls=new T.a(this.camera,this.renderer.domElement),this.controls.update(),this.amb_light=new x.AmbientLight(4210752,8),this.scene.add(this.amb_light),this.raycaster=new x.Raycaster,this.mouse=new x.Vector2;var a=this;(new S.a).load(R.a,function(e){a.model=e.scenes[0],a.scene.add(a.model);var t=(new x.Box3).setFromObject(a.model),n=t.max.x+.235,r=t.max.y;a.model.scale.set(3.5/n,3.5/r,3.5/r);(new x.Box3).setFromObject(a.model);a.model.position.x=0,a.model.position.y=0,a.model.position.z=0,a.model_bbox=(new x.Box3).setFromObject(a.model),console.log(this.model.material),a.model.material.transparent=!0,a.model.material.opacity=1},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("An error happened")}),this.start()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.on_window_resize),this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"model",style:{maxWidth:"100vw",minHeight:"100vh",margin:"0 auto"},ref:function(t){e.mount=t}})}}]),t}(n.Component);var B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("div",{className:"landing"},r.a.createElement(j,null),r.a.createElement(J,null),r.a.createElement(g,null)))},W=a(27),z=a.n(W);var L=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),i=a[0],c=a[1],o=e.projectsData.map(function(e){return r.a.createElement("div",{className:"projectList",key:e.id},r.a.createElement("a",{href:"#/".concat(e.url),className:i,onClick:function(){return c()}},e.title))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"projects"},r.a.createElement("h1",null,"Projects"),r.a.createElement("div",{className:"projectsContainer"},o),r.a.createElement("img",{id:"fish",src:z.a}),r.a.createElement(g,null)),r.a.createElement(p,{isActive:i}))},D=(a(43),Object(w.a)()),G=[{id:0,title:"Amnesty International",url:"amnesty_international",img:"https://live.staticflickr.com/65535/49836972743_b4d90fcfc2_h.jpg",description:"A new visual investigation by Amnesty International and SITU Research demonstrates that Iraqi security forces intended to kill or severely maim dozens of protesters when they fired military-style grenades directly into crowds on the streets of Baghdad from October 2019 onwards. I contributed research and narrative construction to this project."},{id:1,title:"Chinatown USA",url:"chinatown_usa",img:"https://live.staticflickr.com/65535/49593430952_712dc0cce1_b.jpg",description:"Chinatown, USA was inspired by The Chinese in America by Iris Chang and the work of American conceptual artist, John Baldessari. It is the digital photographic capturing of Chinese owned businesses in North America with minimal geometric interventions."},{id:2,title:"Nicaragua",url:"nicaragua",img:"https://live.staticflickr.com/65535/49837808617_da91d893f7_h.jpg",description:"I worked on a team of developers and designers from SITU Research and in partnership with EAAF and GIEI, to produce an event reconstruction and digital platform to investigate violent and, in some cases, lethal clashes between protesters and government forces in Nicaragua during the spring of 2018."},{id:3,title:"Our Children's Trust",url:"our_childrens_trust",img:"https://live.staticflickr.com/65535/49830965857_2bdd7ff303_h.jpg",description:"Our Children's Trust is the first civil litigation for climate change accountability in U.S. History. Working as part of the SITU Research team, I built an interactive platform using Leaflet.js for evidentiary presentation in court."},{id:4,title:"Tear Gas",url:"tear_gas",img:"https://live.staticflickr.com/65535/49998485043_c075f87203_b.jpg",img_link:"https://teargas.amnesty.org/#how-it-works",description:"Working with SITU Research in partnership with Amnesty International, I conducted research for the production of this video shedding light on tear gas as a 'less lethal' munition used to supress peaceful demonstrations, worldwide. "},{id:5,title:"VaporJong",url:"vapor_jong",img:"https://live.staticflickr.com/65535/49837809302_ee6e014fe1_h.jpg",description:"A VaporWave, mahjong and Solitaire '95 inspired playground built in p5 with Jesse Chen. View the codebase here."}];r.a.createContext(G);var M=Object(l.g)(function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.b,{history:D,basename:"".concat("","/")},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:B}),r.a.createElement(l.a,{path:"/projects",render:function(e){return r.a.createElement(L,Object.assign({},e,{projectsData:G}))}}),r.a.createElement(l.a,{path:"/about",component:k}),r.a.createElement(l.a,{path:"/:url",render:function(e){return r.a.createElement(b,Object.assign({},e,{projectsData:G}))}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.3e49568a.chunk.js.map