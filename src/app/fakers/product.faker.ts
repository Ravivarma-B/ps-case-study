import { Product } from "../models/product.model";
import { faker } from "@faker-js/faker";

export class ProductFaker {
    public static fetchProducts(size=20) {
        let products: Product[] = [];
        for (let i = 0; i < size; i++) {
            let product = new Product({
                name: faker.vehicle.bicycle(),
                discount: faker.datatype.number({min: 0, max: 3000}),
                price: faker.datatype.number({min: 7000, max: 9999}),
                rating: faker.datatype.number({min: 1, max: 5}),
                image: faker.random.arrayElement(['https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80', 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2022&q=80', 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3748&q=80'])
            });
            products.push(product);
        } 
        return products;
    }
}
