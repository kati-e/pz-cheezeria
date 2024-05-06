export interface Cheese {
    id: number
    image?: string
    name: string
    description: string
    type: string
    taste: string
    colour: string
    pricePerKg: number
}

export interface OrderItem {
    cheese: Cheese,
    grams: number
}