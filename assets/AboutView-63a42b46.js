import{_ as n,A as a,C as i,T as c,S as r,o as d,c as p,a as _}from"./index-4aca4040.js";const s=new a({background:"#1099bb"});document.body.appendChild(s.view);const e=new i;s.stage.addChild(e);const h=c.from("https://pixijs.io/examples/examples/assets/bunny.png");for(let t=0;t<25;t++){const o=new r(h);o.anchor.set(.5),o.x=t%5*40,o.y=Math.floor(t/5)*40,e.addChild(o)}e.x=s.screen.width/2;e.y=s.screen.height/2;e.pivot.x=e.width/2;e.pivot.y=e.height/2;s.ticker.add(t=>{e.rotation-=.01*t});const l={},u={class:"about"},x=_("h1",null,"CCC",-1),b=[x];function f(t,o,m,w,y,C){return d(),p("div",u,b)}const v=n(l,[["render",f]]);export{v as default};
