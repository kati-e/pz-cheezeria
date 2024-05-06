import { createContext, ReactNode, useContext, useState } from "react";
import { OrderItem } from "./utils/types";

const ShoppingListContext = createContext([]);

export function ShoppingListProvider ( {children} : {children: ReactNode} ) {
    const [list, setList] = useState<OrderItem[]>([])

    return (
        <ShoppingListContext.Provider value={{list, setList}}>
            {children}
        </ShoppingListContext.Provider>
    )

}

export function useShoppingList() { 
    const context = useContext(ShoppingListContext)
    
    if(!context) {
        throw new Error('useShoppingList must be within a Shopping List Context')
    }
    return context
}