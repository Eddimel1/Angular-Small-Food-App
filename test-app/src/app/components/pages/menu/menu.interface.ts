export interface Servings {
    number: number;
    size: number;
    unit: string;
}

export interface Product {
    id: number;
    title: string;
    restaurantChain: string;
    image: string;
    imageType: string;
    servings: Servings;
}