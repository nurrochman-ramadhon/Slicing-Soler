import Image from "next/image";
import vector from "../../../public/assets/section 3/Rectangle 15.png";
import mobile from "../../../public/assets/section 3/Mobile-App-Placeholder-1.png";
import { Paragraph, Subtitle, Title } from "../shared/textStyle";
import ServicesCard from "../shared/servicesCard";
import servicesIcon1 from "../../../public/assets/section 3/Icon 1.png";
import servicesIcon2 from "../../../public/assets/section 3/Icon 2.png";
import servicesIcon3 from "../../../public/assets/section 3/Icon 3.png";
import servicesIcon4 from "../../../public/assets/section 3/Icon 4.png";

export default function Section3() {
  const services = [
    {
      src: servicesIcon1,
      title: "Et Mauris",
      desc: "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
    },
    {
      src: servicesIcon2,
      title: "Eget Sit",
      desc: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
    },
    {
      src: servicesIcon3,
      title: "Imperdiet pellentesque",
      desc: "Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.",
    },
    {
      src: servicesIcon4,
      title: "Non libero",
      desc: "Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.",
    },
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row lg:pt-[80px] pt-[50px] items-center ">
      {/* Background section 3 */}
      <div className="relative flex h-[523px] lg:h-fit lg:w-2/5 mr-auto mt-10 lg:mt-0 w-full">
        <div className="absolute h-full lg:h-fit -z-20 ">
          <Image
            src={vector}
            alt="vector"
            className="h-full lg:w-[500px]"
          />
        </div>
        <Image src={mobile} alt="mobile" className=" w-fit object-contain -z-10 mx-auto" />
        {/* <div className="absolute -z-10">
        </div> */}
      </div>

      {/* Main Section 3*/}
      <div className="lg:my-auto lg:w-3/5 lg:pr-4 px-4">
        <div className="text-center lg:text-left">
          <Subtitle text={"Services"} />
          <Title text={"Personalized Services"} />
          <Paragraph
            text={
              "Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
            }
          />
        </div>
        <div className=" mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((val, id) => {
            return (
              <ServicesCard
                key={id}
                src={val.src}
                title={val.title}
                desc={val.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
