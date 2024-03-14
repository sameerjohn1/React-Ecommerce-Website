import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/company/brand1.png";
import img2 from "../../assets/company/brand2.png";
import img3 from "../../assets/company/brand3.png";
import img4 from "../../assets/company/brand4.png";
import img5 from "../../assets/company/brand5.png";

import ctg1 from "../../assets/category/image1.png";
import ctg2 from "../../assets/category/image2.png";
import ctg3 from "../../assets/category/image3.png";
import ctg4 from "../../assets/category/image4.png";
import ctg5 from "../../assets/category/image5.png";

const Category = () => {
  const companyLogo = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      {/* brang logo */}
      <div className="flex items-center justify-around flex-wrap gap-2 py-5">
        {companyLogo?.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* category grid */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p
          className="font-semibold uppercase md:-rotate-90 text-center bg-Black text-white md:p-1.5
        p-2 rounded-sm inline-flex"
        >
          Explore new and popular styles
        </p>
        <div>
          <Link to="/">
            <img
              src={ctg1}
              alt=""
              className="w-full hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src={ctg2}
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src={ctg3}
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src={ctg4}
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src={ctg5}
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
