import Image from "next/image";
import circleBg1 from "../../../public/assets/section 2/Ellipse 14.png";
import circleBg2 from "../../../public/assets/section 2/Ellipse 15.png";
import desktop from "../../../public/assets/section 2/Desktop.png";
import circleComponent1 from "../../../public/assets/section 2/Ellipse 16.png";
import circleComponent2 from "../../../public/assets/section 2/Ellipse 17.png";
import circleComponent3 from "../../../public/assets/section 2/Ellipse 19.png";
import circleComponent4 from "../../../public/assets/section 2/Ellipse 18.png";
import { Paragraph, Subtitle, Title } from "../shared/textStyle";

export default function Section2() {
  return (
    <div className="pt-[48px] lg:pt-[80px]">
      {/* Background */}
      <div className=" bg-red-200">
        <div className="absolute flex justify-between -z-10 w-full">
          <div className="absolute top-[190px]">
            <Image src={circleBg1} alt="bg1" className="w-[100px] md:w-[230px] lg:w-full" />
            <div className="absolute top-[30px] lg:top-[122px] left-[30px] lg:left-[74px]">
              <Image
                src={circleComponent3}
                alt="circle comp"
                className="w-[40px] md:w-full"
              />
            </div>
          </div>
          <div className="absolute top-[280px] lg:top-[400px] right-0">
            <Image src={circleBg2} alt="bg2" className="w-[100px] md:w-[250px] lg:w-full" />
            <div className="absolute top-[106px] right-[50px]">
              <Image
                src={circleComponent4}
                alt="circle comp"
                className="hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* main section 2 */}
      <div className="px-[16px] text-center mb-[30px] md:mb-[80px]">
        <Subtitle text={"No More Waste"} />
        <Title text={"Pick The Sun"} />
        <div className="mx-auto lg:w-[900px]">
            <Paragraph text={"Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."}/>
        </div>
      </div>

      {/*  Main banner section 2 */}
      <div className="flex justify-center">
        <Image
          src={desktop}
          alt="main banner 2"
          className=" w-[358px] lg:w-[1100px] rounded-md"
        />
      </div>
    </div>
  );
}
