import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-cover bg-center">
        style={{ backgroundImage: `url("/restaurant-app/public/asbaz.svg")` }}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
            <h1 className="text-yellow-500 text-3xl md:text-5xl font-serif mb-4"></h1>
        
        <p className="text-white text-lg md:text-xl mb-8 opacity-90">
            We only use the five star quality for our menu,come and get the richness in every meals we serve.
        </p>

<button className="border-2 border-yellow-500 text-white px-8 py-3 rounded-sm hover:bg-yellow-500 hover:text-black transition-colors duration-300">Go to Menu</button>
        </div>
        </section>
    );
};
export default Hero;
