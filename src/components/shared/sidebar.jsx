export default function Sidebar(props) {
    const {onHandleCloseSidebar} =props
  return (
    <div className="fixed inset-0">
      <div className="absolute left-0 w-full text-center bg-white h-fit flex flex-col gap-4 p-4 z-40">
        <p className="text-right font-semibold cursor-pointer " onClick={onHandleCloseSidebar}>X</p>
        <p className=" font-medium text-base cursor-pointer w-fit mx-auto hover:text-button1 transition ">Products</p>
        <p className=" font-medium text-base cursor-pointer w-fit mx-auto hover:text-button1 transition ">Solutions</p>
        <p className=" font-medium text-base cursor-pointer w-fit mx-auto hover:text-button1 transition ">Services</p>
        <p className=" font-medium text-base cursor-pointer w-fit mx-auto hover:text-button1 transition ">Configures</p>
      </div>
      <div className=" w-full h-full" onClick={onHandleCloseSidebar} >

      </div>
    </div>
  );
}
