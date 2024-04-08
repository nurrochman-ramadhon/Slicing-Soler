import Image from "next/image";
import vector from "../../../public/assets/section 1/Vector 1.png";
import banner1 from "../../../public/assets/section 1/Right.png";
import ButtonTheme from "../shared/button";
import OwnerCard from "../shared/ownerCard";
import photo from "../../../public/assets/section 1/User Thumb.png";

export default function Section1() {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row justify-between lg:pl-[80px] pl-4">
      <div className="mt-[44px] ">
        {/* Main Description */}
        <div className=" md:w-[600px] flex flex-col gap-[24px] ">
          <h1 className=" text-[40px] font-extrabold lg:text-7xl">
            Get the Sun to Power Your Home
          </h1>
          <p className=" font-normal lg:text-2xl text-[18px] ">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </p>
          <ButtonTheme title={"Request a quote"} fontWeight={`700`} />
        </div>

        {/* Owner card */}
        <div className="mt-[64px] lg:mt-[128px]  md:w-[600px] pr-4">
          <OwnerCard
            photo={photo}
            name={"Rwanda Melflor"}
            mail={"zerowaste.com"}
          />
        </div>
      </div>

      {/* banner image */}
      <div className="flex justify-end">
        <Image
          src={banner1}
          alt="banner 1"
          className="w-[312px] md:w-[834px]"
        />
        {/* vector bg for banner image and through navbar */}
        <div className="absolute -z-10 right-0 -top-[40px] md:-top-[79px]">
          <Image src={vector} alt="vector" className="w-[330px] md:w-[673px]" />
        </div>
      </div>
    </div>
  );
}
