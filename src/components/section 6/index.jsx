import Image from "next/image";
import { Paragraph, Subtitle, Title } from "../shared/textStyle";
import ButtonTheme from "../shared/button";
import bgCircle from "../../../public/assets/section 6/Ellipse 1.png";
import macbook from "../../../public/assets/section 6/Macbook.png";
export default function Section6() {
  return (
    <div className=" bg-bgPurple">
      {/* Background circle */}
      <div className="relative ">
        <div className="absolute right-0 max-w-[200px] md:max-w-[400px]">
          <Image src={bgCircle} alt="bg circle" className=" object-contain" />
        </div>
      </div>
      {/* Description */}
      <div className="flex justify-between flex-col md:flex-row p-4 lg:px-[80px]">
        <div className="text-white lg:w-2/3 z-30">
          <Subtitle text={"Get the Sun to power your home"} />
          <Title
            text={"All the power that you need for your house is now available"}
          />
        </div>
        <div className="flex items-center mt-4 md:mt-0 z-10">
          <ButtonTheme title={"Request a quote"} fontWeight={`700`} />
        </div>
      </div>

      <div className=" z-[9999] z flex justify-center ">
        <Image src={macbook} alt="pc" />
      </div>
    </div>
  );
}
