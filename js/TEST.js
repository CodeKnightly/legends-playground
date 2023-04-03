

var sources = {
    img: "/legends-playground/img/DragonFULLIMAGE.ff330bd8.png",
    depthMap: "/legends-playground/img/INVERTEDBlurredDragonFull ImageDepthMap.e24de389.png",
};

let app = new PIXI.Application({
    // width: window.innerWidth,
    // height: window.innerHeight,
    height: 2617,
    width: 1920,
});
document.body.appendChild(app.view);

let img = PIXI.Sprite.from(sources.img);
// img.width =  window.innerWidth;
// img.height = window.innerHeight;
img.width =  window.innerWidth;
img.height = window.innerHeight * 2;
app.stage.addChild(img);

let depthMap = PIXI.Sprite.from(sources.depthMap);
depthMap.width =  window.innerWidth;
depthMap.height = window.innerHeight * 2;
app.stage.addChild(depthMap);



let displacementFilter = new PIXI.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

window.onmousemove = function(e) {
displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) /15;
displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) /15;
};