import ImageIcon from "@components/iconComponents/ImageIcon";
import LinkIcon from "@components/iconComponents/LinkIcon";
import React from "react";

interface ModalButtonProps {
  title: "넹" | "이미지로" | "아니용" | "링크로" | string;
  onClick: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="flex justify-center items-center w-[130px] h-[50px] rounded-[15px] gap-[10px] border text-regular bg-Lemon border-LemonStroke text-Charcoal"
      onClick={onClick}
    >
      {title === "이미지로" ? (
        <ImageIcon />
      ) : (
        title === "링크로" && <LinkIcon color="gray" size={24} />
      )}
      {title}
    </button>
  );
};

export default ModalButton;
