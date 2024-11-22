import { useGetShareDiary } from "@api/diary/useGetShareDiary";
import BigButton from "@components/buttons/BigButton";
import Diary from "@components/diary/Diary";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { DiaryFormData } from "src/types/WriteDiaryTypes";

const SharedPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const methods = useForm<DiaryFormData>();
  const token = queryParams.get("token");
  const diaryId = Number(queryParams.get("id"));
  const { data: shareDiaryData, error } = useGetShareDiary(diaryId, token);

  useEffect(() => {
    if (shareDiaryData) {
      methods.reset(shareDiaryData);
    }
  }, [methods, shareDiaryData]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center pb-[40px]">
        {shareDiaryData ? (
          <FormProvider {...methods}>
            <Diary date={shareDiaryData?.date} nickname={shareDiaryData?.nickname} />
          </FormProvider>
        ) : null}

        <div className="w-[1150px] flex justify-end">
          <BigButton title="나만의 일기 작성하러 ㄱㄱ" color="blue" onClick={handleGoHome} />
        </div>
      </div>
    </div>
  );
};

export default SharedPage;
