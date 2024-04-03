import { FaArrowRight } from "react-icons/fa6";
export default function ButtonThemeNavbar(props) {
  const { title, fontWeight } = props;

  return (
    <div
    style={{fontWeight:fontWeight}}
      className={`bg-button1 text-text2 flex items-center gap-4 rounded-[100px] w-fit cursor-pointer hover:opacity-60 p-[12px] text-[16px]`}
    >
      <button className="">{title}</button>
      <FaArrowRight />
    </div>
  );
}
