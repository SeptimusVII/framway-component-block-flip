module.exports = function(app){
    var BlockFlip = Object.getPrototypeOf(app).BlockFlip = new app.Component("block-flip");
    //BlockFlip.debug = true;
    BlockFlip.createdAt      = "2.0.0";
    BlockFlip.lastUpdate     = "2.0.0";
    BlockFlip.version        = "1";
    // BlockFlip.factoryExclude = true;
    // BlockFlip.loadingMsg     = "This message will display in the console when component will be loaded.";
    // BlockFlip.requires       = [];

    // BlockFlip.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return BlockFlip;
}