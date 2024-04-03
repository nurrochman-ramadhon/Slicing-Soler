import Image from "next/image";

export default function OwnerCard(props) {
    const {photo, name, mail}= props
  return <div className="flex flex-col gap-4">
    <p>“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>
    <div className="flex gap-4">
        <Image src={photo} alt="photo jpg"/>
        <div className="flex flex-col justify-center items-center text-lg font-normal text-text3">
            <p>{name}</p>
            <p className="text-text4">{mail}</p>
        </div>
    </div>
  </div>;
}
