const Subtitle = ({ text }) => {
  return (
    <p className="text-[16px] md:text-[20px] font-medium text-[#D97706] mb-2">
      {text}
    </p>
  );
};

const Title = ({ text }) => {
  return (
    <p className=" text-[32px] md:text-[56px] font-extrabold mb-6">{text}</p>
  );
};

const Paragraph = ({ text }) => {
  return (
    <p className="text-[16px] md:text-[20px] font-normal">
      {text}
    </p>
  );
};

export {Subtitle, Title, Paragraph}
