import{A as d,S as n,D as c}from"./HTMLText-7432106a.js";import{i as r,D as p}from"./GroveDepthMapInvertedBlurred-41118009.js";import{_ as l,o as m,c as h}from"./index-c8302e56.js";var s={img:r,depthMap:p};let e=new d({height:1280,width:1920});document.body.appendChild(e.view);let o=n.from(s.img);o.width=1920;o.height=1280;e.stage.addChild(o);let t=n.from(s.depthMap);t.width=1920;t.height=1280;e.stage.addChild(t);let a=new c(t);e.stage.filters=[a];window.onmousemove=function(i){a.scale.x=(window.innerWidth/2-i.clientX)/20,a.scale.y=(window.innerHeight/2-i.clientY)/20};const f={},g={class:""};function w(i,_,u,v,x,D){return m(),h("div",g)}const S=l(f,[["render",w]]);export{S as default};
