import React from "react";
import NewComponent from "./newComponent";


import { newDataSection } from "@/utility";

const News: React.FC = () => {
  return (
    <section className="bg-[#142D3A] py-[120px]">
      <div className="container">
        <h3 className="title text-[#fff] text-[32px] sm:text-[18px] md:text-[22px] lg:text-[28px] xl:text-[32px] font-semibold mb-2 ">
          News
        </h3>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 ">
          {newDataSection.map((item, index) => (
            <NewComponent
              key={index}
              text={item.text}
              img={item.img}
              title={item.title}
              icon={item.icon}
              flex={item.flex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default News;
