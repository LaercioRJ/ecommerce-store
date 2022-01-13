export class Product {
    id!: number;
    name: string;
    picture!: string;
    description: string;
    stock: number;
    price: number;

    constructor(name: string, description: string, stock: number, price: number) {
        this.name = name;
        this.description = description;
        this.stock = stock;
        this.price = price;
    }
}
