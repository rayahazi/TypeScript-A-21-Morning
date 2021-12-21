function createPaints():IPaint{
    let r:number = Math.floor(Math.random()*3); // 0-2
    switch(r){
        case 0: return new Pencil('green', 'Carandash',2, true );
        case 1: return new Pen('black', 2020, 0.5, 'ink' );
        case 2: return new OilPaint('yellow', 30, 'high');
        default: return null;
    }
}

let myPaints:IPaint[] = new Array<IPaint>(10);

// init & call elements (from interface):
for (let i = 0; i < myPaints.length; i++) {
   myPaints[i] = createPaints();
   console.log(`Paint: ${myPaints[i].color}, waterBase: ${myPaints[i].isWaterBase()}`);
}
