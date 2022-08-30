class car{
    
    constructor(model,country){
        this.model=model;
        this.country=country;
    }
    printDetail(){
        console.log(`Details :`,this.model,this.country)
    }
}
let audi = new car('R8','Germany')
let tata = new car('Harrier','India')
let Kia  = new car('EV6','South Korea')

// console.log(audi.model)
audi.printDetail()
Kia.printDetail()