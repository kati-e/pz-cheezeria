import { useState, useEffect } from "react";
import CheeseList from "./components/CheeseList";
import { Cheese, OrderItem } from "./utils/types";
import { BACKEND_URL } from "./utils/consts";
import HeroBanner from "./components/HeroBanner";

/**
 * Home Page
 *
 * The front page of the website. Route '/'
 */
export default function HomePage() {

  const [cheeses, setCheeses] = useState<Cheese[]>([])

  useEffect(() => {
    const fetchCheeseList = async function () {
      try {
        const res = await fetch(`${BACKEND_URL}cheeses`)
        const data = await res.json()
        setCheeses(data)
      } catch (err) {
        console.error('Error fetching cheese list:', err)
      }
    }

    fetchCheeseList()
  },[])

  return (
    <div className="home page">
      <HeroBanner heading="We Make Really Good Cheeses" tagline="The best cheeseria in the city. Brisbane based PZ Cheeseria has your next charcuterie board covered - hopefully with a selection of our cheeses!" />
      <CheeseList cheeses={cheeses} />
    </div>
  );
}
