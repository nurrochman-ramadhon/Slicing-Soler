import Image from "next/image";

export default function CarouselCard({ icon, review, photo, fullname, meter }) {
  return (
    <div
      className=" min-w-full h-[356px] md:min-w-[364px] md:min-h-[443px] p-[32px] text-base lg:text-lg flex flex-col justify-between gap-[16px] bg-white rounded-md cursor-pointer transition duration-300 ease-in transform  
    md:hover:-translate-y-6 md:hover:shadow-md hover:shadow-purple-400"
    >
      <Image src={icon} />
      <p>{review}</p>
      <div className="flex items-center gap-2">
        <Image src={photo} />
        <div>
          <p>{fullname}</p>
          <p>{meter}</p>
        </div>
      </div>
    </div>
  );
}
