import React from "react"
import Portfolio1 from "../assets/portfolio/port1.jpg"
import Portofolio2 from "../assets/portfolio/port2.jpg"
import Portfolio3 from "../assets/portfolio/port3.jpg"
import Portfolio4 from "../assets/portfolio/port4.jpg"
import Portofolio5 from "../assets/portfolio/port5.jpg"
import Portfolio6 from "../assets/portfolio/port6.jpg"

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: Portfolio1,
        },
        {
            id: 2,
            src: Portofolio2,
        },
        {
            id: 3,
            src: Portfolio3,
        },
        {
            id: 4,
            src: Portfolio4,
        },
        {
            id: 5,
            src: Portofolio5,
        },
        {
            id: 6,
            src: Portfolio6,
        },
    ]
  return (
    <div name="portfolio"
     className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white">
     <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
            </p>
            <p className="py-6">
                Check out some of my work right here
            </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src })=> (
                <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                    <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
