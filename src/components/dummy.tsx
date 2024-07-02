import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FoodMenu = () => {
  const scrollContainerRef = useRef(null);
  console.log(scrollContainerRef)

  const scrollLeft = () => {
    
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });

    console.log(scrollContainerRef)
    
    
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Food Menu</h2>
        <div>
          <button
            onClick={scrollLeft}
            className="p-2 bg-gray-300 hover:bg-gray-400 rounded-l"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-gray-300 hover:bg-gray-400 rounded-r"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll space-x-4 scrollbar-hide"
      >
        {/* Food menu items with sample images */}
        <div className="min-w-[200px] bg-white p-4 border rounded shadow">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGJ1cmdlcnxlbnwwfHx8fDE2MzU5NDc5NjE&ixlib=rb-1.2.1&q=80&w=400"
            alt="Burger"
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="mt-2 font-semibold text-lg">Burger</h3>
        </div>
        <div className="min-w-[200px] bg-white p-4 border rounded shadow">
          <img
            src="https://images.unsplash.com/photo-1601924928373-fbdee9e7c20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHBpenphfGVufDB8fHx8MTYzNTk0ODAzNw&ixlib=rb-1.2.1&q=80&w=400"
            alt="Pizza"
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="mt-2 font-semibold text-lg">Pizza</h3>
        </div>
        <div className="min-w-[200px] bg-white p-4 border rounded shadow">
          <img
            src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHBhc3RhfGVufDB8fHx8MTYzNTk0ODA4Nw&ixlib=rb-1.2.1&q=80&w=400"
            alt="Pasta"
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="mt-2 font-semibold text-lg">Pasta</h3>
        </div>
        <div className="min-w-[200px] bg-white p-4 border rounded shadow">
          <img
            src="https://images.unsplash.com/photo-1562967916-eb82221dfb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHN1c2hpfGVufDB8fHx8MTYzNTk0ODE2NA&ixlib=rb-1.2.1&q=80&w=400"
            alt="Sushi"
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="mt-2 font-semibold text-lg">Sushi</h3>
        </div>
        <div className="min-w-[200px] bg-white p-4 border rounded shadow">
          <img
            src="https://images.unsplash.com/photo-1549576490-b0b4831ef60d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGRlc3NlcnR8ZW58MHx8fHwxNjM1OTQ4MjYy&ixlib=rb-1.2.1&q=80&w=400"
            alt="Dessert"
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="mt-2 font-semibold text-lg">Dessert</h3>
        </div>
        <div className="min-w-[200px] bg-white p-4 border rounded shadow">
          <img
            src="https://images.unsplash.com/photo-1555992336-03a23c67d47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHN0ZWFrfGVufDB8fHx8MTYzNTk0ODMwOQ&ixlib=rb-1.2.1&q=80&w=400"
            alt="Steak"
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="mt-2 font-semibold text-lg">Steak</h3>
        </div>
        <div className="min-w-[200px] bg-white p-4 border rounded shadow">
          <img
            src="https://images.unsplash.com/photo-1559622212-34d8c7e82fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlZWZ8ZW58MHx8fHwxNjM1OTQ4MzQ4&ixlib=rb-1.2.1&q=80&w=400"
            alt="Beef"
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="mt-2 font-semibold text-lg">Beef</h3>
        </div>
        <div className="min-w-[200px] bg-white p-4 border rounded shadow">
          <img
            src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGNob2NvbGF0ZXxlbnwwfHx8fDE2MzU5NDg0Mzk&ixlib=rb-1.2.1&q=80&w=400"
            alt="Chocolate"
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="mt-2 font-semibold text-lg">Chocolate</h3>
        </div>
        <div className="min-w-[200px] bg-white p-4 border rounded shadow">
          <img
            src="https://images.unsplash.com/photo-1543779280-133b7813d349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNoZWVzZXxlbnwwfHx8fDE2MzU5NDg0ODY&ixlib=rb-1.2.1&q=80&w=400"
            alt="Cheese"
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="mt-2 font-semibold text-lg">Cheese</h3>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;