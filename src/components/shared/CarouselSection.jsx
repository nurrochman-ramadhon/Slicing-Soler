import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CarouselCard from "./CarouselCard";
import { useState } from "react";
export default function CarouselSection({ slides, curr, next, prev }) {
  return (
    <div className="">
      <div className="w-11/12 mx-auto md:ml-auto">
        <div
          id="slider"
          className="flex  min-w-full space-x-4 overflow-x-auto no-scrollbar scroll-smooth items-end min-h-[400px] lg:min-h-[470px]  "
        >
          {slides.map((val, id) => {
            return (
              <CarouselCard
                key={id}
                icon={val.icon}
                photo={val.photo}
                review={val.review}
                fullname={val.fullname}
                meter={val.meter}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-4 py-4 pl-16 text-lg">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow text-button1 border-[1px] border-button1 hover:opacity-50"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow text-button1 border-[1px] border-button1 hover:opacity-50"
        >
          <IoIosArrowForward />
        </button>
      </div>
      
    </div>
  );
}
