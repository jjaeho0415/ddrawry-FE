import PaintIcon from "@components/iconComponents/PaintIcon";
import React from "react";

interface SmallButtonProps {
  title: "수정하기" | "띠로리 앨범" | "지우기" | "그림 지우기" | "그림 그려줘!" | "다시 그려줘!";
  color: "green" | "gray";
  onClick?: () => void;
}

const SmallButton: React.FC<SmallButtonProps> = ({ title, color, onClick }) => {
  const buttonClasses = () => {
    switch (color) {
      case "green":
        return "border-LimeStroke bg-Lime text-Charcoal";
      case "gray":
        return "bg-ButtonDisabled border-ButtonDisabledStroke text-[#FFFFFF]";
      default:
        return "";
    }
  };
  return (
    <button
      type="button"
      className={`flex justify-center items-center w-[150px] h-[60px] rounded-[15px] gap-[10px] border text-regular leading-[38.08px] ${buttonClasses()}`}
      onClick={onClick}
    >
      {title === "그림 그려줘!" && (
        <PaintIcon size={36} color={color === "gray" ? "white" : "green"} />
      )}
      {title}
    </button>
  );
};

export default SmallButton;
