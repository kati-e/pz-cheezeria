import { useEffect, useState } from "react"
import { useShoppingList } from "../ShoppingListContext"
import { OrderItem } from "../utils/types"

/**
 * Site Header Component
 *
 * This component renders the header used site-wide.
 */
export default function Header() {

    const { list } = useShoppingList()
    const [open, setOpen] = useState(false)
    const [orderTotal, setOrderTotaḻ] = useState<number>(0)

    useEffect(() => {
        let total = 0

        list.forEach((listItem: OrderItem) => {
            total += listItem.grams * (listItem.cheese.pricePerKg / 1000)
        });
        
        setOrderTotaḻ(total.toFixed(2))
    }, [list])

    return (
        <header className="site-header wrapper">
            <div className="inner-content container">
                <span className="logo">PZ Cheeseria</span>
                <nav className="navigation">
                    <ul className="nav-links">
                        <li className="nav-link"><a href="/">Home</a></li>
                        <li className="nav-link"><a href="#">About Us</a></li>
                        <li className="nav-link"><a href="#">Our Locations</a></li>
                        <li className="nav-link"><a href="#">Contact Us</a></li>
                        {/* Ideally if I had more time I'd build out the pages */}
                    </ul>
                    <a className="cta-button" href="#" onClick={() => setOpen(true)}>View My Shopping List</a>
                    {/* If allowed more time I'd make a list page & send advance order page to show an itemised list with costs and amounts ordered */}
                </nav>
                {open && <div className="list-modal">
                    <a href="#" onClick={() => setOpen(false)}>Close</a>
                    <table>
                        {list && list.length > 0 ? list.map((lineItem: OrderItem) => {
                            return (
                                <tr key={lineItem.cheese.id} className="line-item">
                                    <td>{lineItem.cheese.name}</td>
                                    <td>{lineItem.grams}g</td>
                                    <td>${(lineItem.grams * (lineItem.cheese.pricePerKg / 1000)).toFixed(2)}</td>
                                </tr>
                            )
                        }): <tr>
                            <td>There are no cheeses in your list.</td>
                        </tr>
                        }
                        {orderTotal > 0 && <tr className="border-t-2">
                            <td className="font-bold">Totals:</td>
                            <td></td>
                            <td className="font-bold">${orderTotal}</td>
                        </tr>}
                    </table>
                </div>}
            </div>
        </header>
    )
}