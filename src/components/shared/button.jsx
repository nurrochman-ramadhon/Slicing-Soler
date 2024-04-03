import { FaArrowRight } from "react-icons/fa6";
export default function ButtonTheme(props) {
  const { title, fontWeight } = props;

  return (
    <div
    style={{fontWeight:fontWeight}}
      className={`bg-button1 text-text2 flex items-center gap-4 rounded-[100px] w-fit cursor-pointer hover:opacity-60 p-[16px] lg:px-[24px] lg:py-[20px] text-[20px] lg:text-[24px]`}
    >
      <button className="">{title}</button>
      <FaArrowRight />
    </div>
  );
}
