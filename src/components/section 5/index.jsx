import Image from "next/image";
import media from "../../../public/assets/section 5/Left.png";
import { Paragraph, Subtitle, Title } from "../shared/textStyle";
export default function Section5() {
  return (
    <div className="flex flex-col items-center md:flex-row ">
      {/* Background */}
      <div className=" align-middle md:bg-green-100 pt-16 px-4 lg:p-[80px]">
        <Image src={media} alt="media" />
      </div>
      <div className="p-4 lg:p-[80px] text-center md:text-left">
        <Subtitle text={"Case studies"}/>
        <Title text={"Check how our systems have helped others"}/>
        <Paragraph text={"Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."}/>
        <p className=" text-amber-900 cursor-pointer mt-4">Find Case Studies</p>
      </div>
    </div>
  );
}
