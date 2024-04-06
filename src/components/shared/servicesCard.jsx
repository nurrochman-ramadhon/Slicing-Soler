import Image from "next/image";

const ServicesCard = (props) => {
    const {src,title,desc} = props
    return <div className=" lg:h-[209px] flex flex-col gap-[16px] items-center lg:items-baseline">
        <Image src={src} alt="media"/>
        <p className="text-[20px] lg:text-[24px] font-bold text-center lg:text-left ">{title}</p>
        <p className="text-[16px] text-center lg:text-left lg:text-[18px]">{desc}</p>
    </div>
}

export default ServicesCard