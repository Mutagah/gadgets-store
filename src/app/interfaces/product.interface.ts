// Interfaces allow us to describe the objects that will be used in our code.

// A way to define a contract on a function with respet to the argurments and their type
export interface Product{
    id: number,
    category: string,
    goods: [
            {
                id: number,
                name:string,
                price: number,
                inStock: number,
                discount: number,
                pImage: string
                }
        ]
    };