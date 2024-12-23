import React from "react";

interface BigButtonProps {
  title: string | "일기 자랑하기" | "일기 저장하기";
  color: "gray" | "yellow" | "blue";
  disabled?: boolean;
  onClick?: () => void;
}

const BigButton: React.FC<BigButtonProps> = ({ title, color, onClick, disabled }) => {
  const buttonClasses = () => {
    switch (color) {
      case "gray":
        return "bg-ButtonDisabled border-ButtonDisabledStroke text-[#FFFFFF]";
      case "yellow":
        return "bg-Lemon border-LemonStroke text-Charcoal";
      case "blue":
        return "bg-Primary border-PrimaryStroke text-Charcoal";
      default:
        return "";
    }
  };
  return (
    <button
      disabled={disabled}
      className={`w-[400px] h-[60px] flex justify-center items-center rounded-[15px] border ${buttonClasses()} text-regular leading-[38.08px]`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default BigButton;
