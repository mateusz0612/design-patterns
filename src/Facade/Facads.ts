export class Bed {
    makeTheBed() {
      console.log('The bed is ready');
    }
}
   
export class AirFreshener {
    spray() {
      console.log('A nice smell spreads through the air')
    }
}
  
export class TrashCan {
    takeOutTrash() {
      console.log('The trash is taken out')
    }
}
  
export class Dishwasher {
    fill() {
      console.log('The dishwasher is filled');
    }
    wash() {
      console.log('The dishwasher is working');
    }
}




export class HouseCleaningFacade {
    private bed: Bed;
    private trashCan: TrashCan;
    private airFreshener: AirFreshener;
    private dishwasher: Dishwasher;


    constructor(bed: Bed, trashCan: TrashCan, airFreshener: AirFreshener, dishwasher: Dishwasher) {
      this.bed = bed;
      this.trashCan = trashCan;
      this.airFreshener = airFreshener;
      this.dishwasher = dishwasher;
    }
   
    cleanTheHouse() {
      this.airFreshener.spray();
      this.bed.makeTheBed();
      this.trashCan.takeOutTrash();
      this.dishwasher.fill();
      this.dishwasher.wash();
    }
}