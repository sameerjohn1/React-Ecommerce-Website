import React from "react";
import img1 from "../../assets/company/brand1.png";
import img2 from "../../assets/company/brand2.png";
import img3 from "../../assets/company/brand3.png";
import img4 from "../../assets/company/brand4.png";
import img5 from "../../assets/company/brand5.png";

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
    </div>
  );
};

export default Category;
