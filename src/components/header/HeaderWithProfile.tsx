import ProfileIcon from "@components/iconComponents/ProfileIcon";
import LoadingSpinner from "@components/loading/LoadingSpinner";
import React, { Suspense, useState } from "react";

const ProfileModal = React.lazy(() => import("@components/modals/ProfileModal"));

interface HeaderWithProfileProps {
  title: "띠로리" | "좋아요한 일기들" | "일기 검색하기";
}

const HeaderWithProfile: React.FC<HeaderWithProfileProps> = ({ title }) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  const handleProfileIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsProfileModalOpen(!isProfileModalOpen);
  };
  return (
    <>
      <div
        className={`z-[50] sticky top-0 flex w-full p-0 min-h-[50px] justify-center items-center ${
          title === "띠로리" ? "bg-Primary" : "bg-Lime"
        }`}
      >
        <p className="text-center title-font leading-[48.96px]">{title}</p>
        <div className="flex items-center absolute right-4 ">
          <button onClick={handleProfileIconClick}>
            <ProfileIcon />
          </button>
        </div>
      </div>
      {isProfileModalOpen && (
        <div className="z-[10] fixed right-6 top-0 translate-y-[80px]">
          <Suspense
            fallback={
              <div className="profile-modal-layout h-[300px]">
                <LoadingSpinner />
              </div>
            }
          >
            <ProfileModal />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default HeaderWithProfile;
