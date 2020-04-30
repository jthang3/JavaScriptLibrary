//literal object
let myTv = {
    screenSize: 27,
    screenType: "pLasma",
    refreshRate: 140,
    manufacurer: "Sony"
}
let yourTv = {
    screenSize: 60,
    screenType: "Lcd",
    refreshRate: 60,
    manufacurer: "Samsung"
}
function TV (screenSize,screenType,refreshRate,manufacurer){
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacurer = manufacurer;
}
myT = new TV(60,"Lcd",140,"LG");
console.log(myT);
for(let i in myT){
    console.log(myT[i]);
}

