(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/cat_icon.a499faa0.png"},22:function(e,t,a){e.exports=a.p+"static/media/soy_sauce.d47132d1.png"},28:function(e,t,a){e.exports=a.p+"static/media/luckycat.eb9ff440.glb"},29:function(e,t,a){e.exports=a.p+"static/media/pigeon.0da28c85.png"},32:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(18),l=a.n(i),o=(a(37),a(8)),c=a(11),s=a(7),m=a(19),h=a.n(m);var u=function(){return r.a.createElement("div",{className:"homeButton"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:h.a})))};var d=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"nav"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{className:a,onClick:function(){return i()}},r.a.createElement(u,null)),r.a.createElement("li",{className:a,onClick:function(){return i()}},r.a.createElement(s.c,{to:"/projects"},"projects")),r.a.createElement("li",{className:a,onClick:function(){return i()}},r.a.createElement("a",{href:"https://daniellehoo.github.io/blog/posts"},"blog")),r.a.createElement("li",{className:a,onClick:function(){return i()}},r.a.createElement(s.c,{to:"/about"},"about")))))};var p=function(){var e=[{id:0,url:"http://www.instagram.com/danihoo",class:"fab fa-instagram"},{id:1,url:"http://github.com/daniellehoo",class:"fab fa-github"},{id:2,url:"http://www.twitter.com/daniellehoo",class:"fab fa-twitter"},{id:3,url:"http://www.soundcloud.com/danihoo",class:"fab fa-soundcloud"},{id:4,url:"http://www.linkedin.com/in/danielle-hoo",class:"fab fa-linkedin"},{id:5,url:"http://www.medium.com/@danihoo",class:"fab fa-medium"},{id:6,url:"https://www.pinterest.com/daniellemhoo/",class:"fab fa-pinterest"}].map(function(e,t){return r.a.createElement("div",{className:"button id_".concat(e.id),key:"".concat(t)},r.a.createElement("a",{href:"".concat(e.url)},r.a.createElement("i",{className:"".concat(e.class)})))});return r.a.createElement("div",{className:"social-footer",key:"1"},e)};function g(e,t){var a,n=/SITU Research/g,r=/Amnesty International/g;switch(e){case"Chinatown USA":a=t.replace(/The Chinese in America/g,"<a href='https://www.penguinrandomhouse.com/books/288096/the-chinese-in-america-by-iris-chang/' target='_blank'>The Chinese in America</a>");break;case"Our Children's Trust":a=t.replace(/Our Children's Trust/g,"<a href='https://www.ourchildrenstrust.org/' target='_blank'>Our Children's Trust</a>").replace(n,"<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>").replace(/Leaflet.js/g,"<a href='https://leafletjs.com/' target='_blank'>Leaflet.js</a>").trim();break;case"Nicaragua":a=t.replace(/digital platform/g,"<a href='http://gieinicaragua-cartografia-violencia.org/' target='_blank'>digital platform</a>").replace(/EAAF/g,"<a href='https://eaaf.org' target='_blank'>EAAF</a>").replace(/GIEI/g,"<a href='https://gieinicaragua.org/en' target='_blank'>GIEI</a>").replace(n,"<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>").trim();break;case"Amnesty International":a=t.replace(n,"<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>").replace(r,"<a href='https://www.amnesty.org/en/' target='_blank'>Amnesty International</a>").replace(/visual investigation/g,"<a href='https://teargas.amnesty.org/iraq/' target='_blank'>visual investigation</a>").trim();break;case"Tear Gas":a=t.replace(n,"<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>").replace(r,"<a href='https://www.amnesty.org/en/' target='_blank'>Amnesty International</a>").replace(/video/g,"<a href='https://teargas.amnesty.org/#how-it-works' target='_blank'>video</a>").trim();break;case"VaporJong":a=t.replace(/p5/g,"<a href='https://p5js.org/' target='_blank'>p5</a>").replace(/Jesse Chen/g,"<a href='https://github.com/jessechen' target='_blank'>Jesse Chen</a>").replace(/playground/g,"<a href='https://daniellehoo.com/vaporJong/vaporJong.html' target='_blank'>playground</a>").replace(/here/g,"<a href='https://github.com/daniellehoo/vaporJong' target='_blank'>here</a>").trim();default:console.log("")}return a}var f=function(e){var t=Object(o.f)().url,a=e.projectsData,n=a.map(function(e){return e.url===t?r.a.createElement("div",{key:e.id,class:"projectClass",dangerouslySetInnerHTML:{__html:g(e.title,e.description)}}):null}),i=a.map(function(e){return e.url===t?r.a.createElement("img",{src:e.img}):null});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"project"},r.a.createElement(d,null),r.a.createElement("div",{className:"project-content"},i,n),r.a.createElement("div",{className:"back"},r.a.createElement("a",{href:"#/Projects"},"<< Back to Projects"))),r.a.createElement(p,null))},b=a(3),w=a(22),v=a.n(w);var E=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",null,r.a.createElement(d,null)),r.a.createElement("h1",null,"About"),r.a.createElement("div",null,r.a.createElement("img",{src:v.a})),r.a.createElement("p",null,"brooklyn, NY resident"),r.a.createElement("p",null,"software engineer working in javascript and react"),r.a.createElement("p",null,"former Museum of Modern Art (MoMA) employee"),r.a.createElement("p",null,"interest in contemporary art, design, & web development"),r.a.createElement("p",null,"occasional distance runner, wanderer & Canon G16 user"),r.a.createElement("div",{className:"spacer"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"contact:",r.a.createElement("a",{id:"contact",href:"mailto:daniellem.hoo@gmail.com?subject=Hello!"},"email")),r.a.createElement(p,null))};function k(e){var t=e.target.value;e.target.value="",e.target.value=t}var y=function(){var e=Object(n.useState)("Danielle Hoo"),t=Object(c.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"header"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:a,onChange:function(e){return i(e.target.value)},autoFocus:!0,onFocus:k})))},j=a(23),_=a(24),I=a(30),A=a(25),C=a(31),O=a(6),N=a(26),S=a(27),T=a.n(S),F=a(0),x=a(28),U=a.n(x),J=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(I.a)(this,Object(A.a)(t).call(this,e))).on_window_resize=function(){a.width=a.mount.getClientRects()[0].width,a.height=a.mount.getClientRects()[0].height,a.camera.aspect=a.width/a.height,a.camera.updateProjectionMatrix(),a.renderer.setSize(a.width,a.height)},a.start=a.start.bind(Object(O.a)(Object(O.a)(a))),a.stop=a.stop.bind(Object(O.a)(Object(O.a)(a))),a.animate=a.animate.bind(Object(O.a)(Object(O.a)(a))),a}return Object(C.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=this.mount.clientWidth,t=this.mount.clientHeight;this.scene=new F.rb,this.camera=new F.gb(75,e/t,.001,1e4),this.camera.position.z=4,this.renderer=new F.Lb({logarithmicDepthBuffer:!0,context:null,precision:"highhp",premultipliedAlpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor("#FFFFFF"),this.renderer.setSize(e,t),this.mount.appendChild(this.renderer.domElement),this.controls=new T.a(this.camera,this.renderer.domElement),this.controls.update(),this.amb_light=new F.c(4210752,8),this.scene.add(this.amb_light),this.raycaster=new F.ob,this.mouse=new F.Gb;var a=this;(new N.a).load(U.a,function(e){a.model=e.scenes[0],a.scene.add(a.model);var t=(new F.g).setFromObject(a.model),n=t.max.x+.235,r=t.max.y;a.model.scale.set(3.5/n,3.5/r,3.5/r);(new F.g).setFromObject(a.model);a.model.position.x=0,a.model.position.y=0,a.model.position.z=0,a.model_bbox=(new F.g).setFromObject(a.model),console.log(this.model.material),a.model.material.transparent=!0,a.model.material.opacity=1},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("An error happened")}),this.start()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.on_window_resize),this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"model",style:{maxWidth:"100vw",minHeight:"100vh",margin:"0 auto"},ref:function(t){e.mount=t}})}}]),t}(n.Component);var R=function(){return r.a.createElement("div",{className:"landing"},r.a.createElement(y,null),r.a.createElement(d,null),r.a.createElement(J,null),r.a.createElement(p,null))},z=a(29),W=a.n(z);var B=function(e){var t=e.projectsData.map(function(e){return r.a.createElement("div",{className:"projectList",key:e.id},r.a.createElement("a",{href:"#/".concat(e.url)},e.title))});return r.a.createElement("div",{className:"projects"},r.a.createElement(d,null),r.a.createElement("h1",null,"Projects"),r.a.createElement("img",{id:"fish",src:W.a}),r.a.createElement("div",{className:"projectsContainer"},t),r.a.createElement(p,null))},D=(a(43),Object(b.a)()),G=[{id:0,title:"Amnesty International",url:"amnesty_international",img:"https://live.staticflickr.com/65535/49836972743_b4d90fcfc2_h.jpg",description:"A new visual investigation by Amnesty International and SITU Research demonstrates that Iraqi security forces intended to kill or severely maim dozens of protesters when they fired military-style grenades directly into crowds on the streets of Baghdad from October 2019 onwards. I contributed research and narrative construction to this project."},{id:1,title:"Chinatown USA",url:"chinatown_usa",img:"https://live.staticflickr.com/65535/49593430952_712dc0cce1_b.jpg",description:"Chinatown, USA was inspired by The Chinese in America by Iris Chang and the work of American conceptual artist, John Baldessari. It is the digital photographic capturing of Chinese owned businesses in North America with minimal geometric interventions."},{id:2,title:"Nicaragua",url:"nicaragua",img:"https://live.staticflickr.com/65535/49837808617_da91d893f7_h.jpg",description:"I worked on a team of developers and designers from SITU Research and in partnership with EAAF and GIEI, to produce an event reconstruction and digital platform to investigate violent and, in some cases, lethal clashes between protesters and government forces in Nicaragua during the spring of 2018."},{id:3,title:"Our Children's Trust",url:"our_childrens_trust",img:"https://live.staticflickr.com/65535/49830965857_2bdd7ff303_h.jpg",description:"Our Children's Trust is the first civil litigation for climate change accountability in U.S. History. Working as part of the SITU Research team, I built an interactive platform using Leaflet.js for evidentiary presentation in court."},{id:4,title:"Tear Gas",url:"tear_gas",img:"https://live.staticflickr.com/65535/49998485043_c075f87203_b.jpg",img_link:"https://teargas.amnesty.org/#how-it-works",description:"Working with SITU Research in partnership with Amnesty International, I conducted research for the production of this video shedding light on tear gas as a 'less lethal' munition used to supress peaceful demonstrations, worldwide. "},{id:5,title:"VaporJong",url:"vapor_jong",img:"https://live.staticflickr.com/65535/49837809302_ee6e014fe1_h.jpg",description:"A VaporWave, mahjong and Solitaire '95 inspired playground built in p5 with Jesse Chen. View the codebase here."}];r.a.createContext(G);var L=Object(o.g)(function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.b,{history:D,basename:"".concat("","/")},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:R}),r.a.createElement(o.a,{path:"/projects",render:function(e){return r.a.createElement(B,Object.assign({},e,{projectsData:G}))}}),r.a.createElement(o.a,{path:"/about",component:E}),r.a.createElement(o.a,{path:"/:url",render:function(e){return r.a.createElement(f,Object.assign({},e,{projectsData:G}))}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.34809df7.chunk.js.map