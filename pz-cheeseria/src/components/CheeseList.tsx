import { CHEESE_IMG } from "../utils/consts";
import { Cheese, OrderItem } from "../utils/types";
import '../styles/cheese-list.scss'
import { useEffect, useState } from "react";
import { useShoppingList } from "../ShoppingListContext";

/**
 * CheeseList Component
 *
 * This component renders a grid of cards holding all the cheeses. 
 * If there are no cheeses available it has a message.
 */
export default function CheeseList({ cheeses }: { cheeses: Cheese[] }) {

    const [order, setOrder] = useState<OrderItem[]>([])
    const {list, setList} = useShoppingList()
    
    //In this version of this web app, everytime you change the grams values in the input fields it will set the cart accordingly.
    //In a perfect world it would be an 'Add to cart' button instead
    useEffect(() => {
        setList(order)
    }, [order, setList])

    function addToOrder(cheese: Cheese, grams: number) {

        const existsInOrder = order.find(orderItem => orderItem.cheese.id === cheese.id)

        if (existsInOrder) {
            //then you need to replace this item with the new amount of that same cheese
            setOrder(prevItem =>
                prevItem.map(item => item.cheese.id === cheese.id ? { ...item, grams } : item)
            )
        } else {
            setOrder(prevItem => [...prevItem, { cheese, grams }])
        }
    }
    //since this is a purchase 'in-store' thing there wouldn't need to be a checkout, but maybe would be cool to send an order to the store in advance?
    //then it could send an email to the store with the details in order for them to prep it before the customer arrives for pickup

    return (
        <section className="cheese-list wrapper">
            {cheeses && cheeses.length > 0 ?
                <div className="cheese-cards container">
                    {cheeses.map(cheese => {
                        return (
                            <div key={cheese.id} className="cheese-card">
                                <div className="image">
                                    <img src={cheese.image && cheese.image !== "" ? cheese.image : CHEESE_IMG} alt="cheese" />
                                </div>
                                <div className="inner-content">
                                    <h3>{cheese.name}</h3>
                                    <span>Taste: {cheese.taste} | Colour: {cheese.colour}</span>
                                    <p>{cheese.description}</p>
                                    {/* ^ I would truncate this description with a 'see more' for the mobile version of the page if more time */}
                                    <div className="calculator">
                                        {cheese.pricePerKg !== 0 && <span>Price per Kg: ${cheese.pricePerKg.toFixed(2)}</span>}
                                        <label htmlFor="grams">Add to Shopping list "{cheese.name}"</label>
                                        <input min="0" max="10000" type="number" name="grams" placeholder="0" onChange={(e) => addToOrder(cheese, parseInt(e.target.value))} />
                                        {order.map(orderItem => orderItem.cheese.id === cheese.id && orderItem.grams > 0 ? <span>Calculating for {orderItem.grams}g</span> : null)}
                                        {order.map(orderItem => orderItem.cheese.id === cheese.id && orderItem.grams > 0 ? <span>Cost: ${(orderItem.grams * (orderItem.cheese.pricePerKg / 1000)).toFixed(2)}</span> : null)}
                                        {/* ^ I'd add an error message & validation for the input field to not allow lower than 0 as a value if more time */}
                                        {/* ^ I'd add an 'Add to list' button too if I had more time to implement */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div> :
                <div className="container">
                    <p className="error-message">There are currently no cheeses available. Try again later or <a href="#">Contact Us</a> to enquire.</p>
                </div>
            }
        </section>
    )
}