import Image from "next/image";
import logo from "../../../public/assets/Logo Container.png";

export default function Footer() {
  return (
    <div className="flex flex-col md:gap-2 md:flex-row md:justify-between md:px-[80px] md:py-[24px] md:items-center">
      <div className="flex flex-col md:flex-row items-center gap-4 mt-[24px] md:mt-0">
        <Image src={logo} />
        <p>@2023 Soller, Inc. All Rights Reserved</p>
      </div>
      <div className=" flex gap-8 justify-center mt-[24px] md:mt-0">
        <p>Terms</p>
        <p>Privacy</p>
        <p>Support</p>
      </div>
    </div>
  );
}
