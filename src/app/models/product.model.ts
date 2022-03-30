export class Product {
    constructor(init?: Partial<Product>) { init ? Object.assign(this, init) : null; }

    name!: string;
    price!: number;
    discount!: number;
    rating!: number;
    image!: string;
}
