import { FC } from "react";

const Button: FC<{ text: string }> = (props) => {
  return (
    <div className="bg-[#00616C] text-white px-7 py-4 rounded-full hover:shadow-lg text-xl font-medium hover:scale-105 duration-300 cursor-pointer">
      {props.text}
    </div>
  );
};

export default Button;
