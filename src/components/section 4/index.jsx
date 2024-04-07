import Image from "next/image";
import { Paragraph, Subtitle, Title } from "../shared/textStyle";
import ButtonTheme from "../shared/button";
import icon1 from "../../../public/assets/section 4/Icon 1.png";
import icon2 from "../../../public/assets/section 4/Icon 2.png";
import icon3 from "../../../public/assets/section 4/Icon 3.png";
import icon4 from "../../../public/assets/section 4/Icon 4.png";
import userThumb1 from "../../../public/assets/section 4/User Thumb 1.png";
import userThumb3 from "../../../public/assets/section 4/User Thumb 2.png";
import userThumb2 from "../../../public/assets/section 4/User Thumb 3.png";
import userThumb4 from "../../../public/assets/section 4/User Thumb 4.png";
import CarouselSection from "../shared/CarouselSection";
import { useState } from "react";

export default function Section4() {
  const data = [
    {
      icon: icon1,
      photo: userThumb1,
      meter: "10KWh",
      fullname: "Jane Cooper",
      review:
        "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    },
    {
      icon: icon2,
      photo: userThumb2,
      meter: "32KWh",
      fullname: "Ralph Edward",
      review:
        "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    },
    {
      icon: icon3,
      photo: userThumb3,
      meter: "6KWh",
      fullname: "Courtney Henry",
      review:
        "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    },
    {
      icon: icon4,
      photo: userThumb4,
      meter: "12KWh",
      fullname: "Cameron Weasley",
      review:
        "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec..",
    },
  ];

  const [curr, setCurr] = useState(0);
  const onHandlePrev = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft-460;
  };
  const onHandleNext = () =>{
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft+460;
}
  return (
    <div className=" bg-bgPurple">
      {/* Description */}
      <div className="flex justify-between flex-col md:flex-row p-4 lg:pt-[80px] lg:px-[80px]">
        <div className="text-white lg:w-2/3">
          <Subtitle text={"Join Other Sun Harvesters"} />
          <Title text={"Make Something Awesome"} />
          <Paragraph
            text={
              "Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
            }
          />
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <ButtonTheme title={"Request a quote"} fontWeight={`700`} />
        </div>
      </div>

      {/* Carousel */}
      <div className="">
        <CarouselSection
          slides={data}
          curr={curr}
          next={onHandleNext}
          prev={onHandlePrev}
        />
      </div>
    </div>
  );
}
