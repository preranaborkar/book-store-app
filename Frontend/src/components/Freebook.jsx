import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://book-store-app-k433.onrender.com/book");
        console.log("API Response:", res.data);  // Log the full response
        setBook(res.data);  // Set all books without filtering
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBook();
  }, []);
  
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
         
          IT projects often follow frameworks like Agile, Scrum, and DevOps. Books on these methodologies provide guidance on managing teams, improving workflows, and optimizing development processes.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
               <Cards item={item} key={item.id} />
            ))}
          </Slider>
         
      
        </div>
      </div>
    </>
  );
}
export default Freebook;
