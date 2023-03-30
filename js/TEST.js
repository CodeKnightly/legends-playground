

var sources = {
    img: "/img/Dragon FULL IMAGE.ff330bd8.png",
    depthMap: "/img/Dragon - Full Image - Depth Map.53e8f573.png",
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
img.width =  1920;
img.height = 2617;
app.stage.addChild(img);

let depthMap = PIXI.Sprite.from(sources.depthMap);
depthMap.width =  window.innerWidth;
depthMap.height = window.innerHeight;
app.stage.addChild(depthMap);



let displacementFilter = new PIXI.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

window.onmousemove = function(e) {
displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) /20;
displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) /20;
};