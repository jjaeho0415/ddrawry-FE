import React from "react";
import DefaultLogo from "@assets/images/diaryItem-logo.png";

const DefaultDiaryLogo: React.FC = () => {
  return (
    <div className="w-[180px] aspect-square rounded-[10px] flex justify-center items-center">
      <img src={DefaultLogo} alt="기본 로고 이미지" />
    </div>
  );
};

export default DefaultDiaryLogo;
