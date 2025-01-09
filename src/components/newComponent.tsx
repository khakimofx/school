"use client";
import Image, { StaticImageData } from "next/image";
const titleStyle = "font-semibold text-2xl 2xl:text-2xl xl:text-xl lg:text-md md:text-base sm:text-sm";
const textStyle = "font-normal text-xl 2xl:text-xl xl:text-lg lg:text-base md:text-xs sm:text-xs";

interface newComponentProps {
  id?: string;
  img?: string | StaticImageData;
  text?: string;
  title?: string;
  icon?: string | StaticImageData;
  flex?: string;
}

const NewComponent: React.FC<newComponentProps> = ({
  img,
  text,
  title,
  icon,
  flex,
}) => {

  const renderCard = (index: number) => (
    <div
      className={`w-full h-full relative parent group transition-all duration-1000 ease cursor-pointer overflow-hidden rounded-2xl`}
    >
      {Array.isArray(img) && <Image src={img[index]} alt={title!} fill />}
      {!Array.isArray(img) && <Image src={img!} alt={title!} fill />}

      <div className=" relative w-full bottom-0 left-0 h-[100%] z-20 transition-all duration-1100 ease flex p-5 md:p-2 lg:p-5 items-end justify-between text-white group-hover:backdrop-blur-sm">
        <div className="flex items-end ">
          <div className="translate-y-[250px] group-hover:translate-y-0 transition-all duration-1000 ease">
            <h3 className={titleStyle} >{title}</h3>
            <p className={textStyle}>{text}</p>
          </div>
          <Image className="translate-x-[200px] group-hover:translate-x-0 transition-all duration-1000 ease sm:w-[30px] sm:h-[30px] md:w-[65px] md:h-[65px] xl:w-[80px] xl:h-[80px]" src={icon!} alt={title!} />
        </div>
      </div>
    </div>
  );
  return (
    <div
      style={{
        display: Array.isArray(img) ? "flex" : "block",
        height: "400px",
        flexDirection: flex === "column" ? "column" : "row",
        gap: "10px",
      }}
      className=" sm:!h-[210px] md:!h-[250px]  lg:!h-[300px] xl:!h-[350px] 2xl:!h-[400px] "
    >
      {Array.isArray(img) && renderCard(0)}
      {renderCard(1)}
    </div >
  );
};

export default NewComponent;
