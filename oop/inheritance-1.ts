class Product {

    constructor(public id: string, public price: number, public description: string) {   
    }

    display(): void {
        console.log(`id: ${this.id} price: ${this.price} description: ${this.description}`);
    }
}

class Book extends Product {

    constructor(public id: string, public price: number, public description: string, public author: string, public title:string) {
        super(id,price,description);
    }

    display(): void {
        console.log(`${this.author}`)
    }
}

class Electronic extends Product{

    constructor(public id: string, public price: number, public description: string, public brand: string, public model: string){
        super(id,price,description);
    }
}