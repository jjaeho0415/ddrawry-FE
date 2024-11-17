import { apiRoutes } from "@api/apiRoutes";
import api from "@api/fetcher";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// 일기 삭제
const deleteDiary = async (diaryId: string) => {
  try {
    await api.delete({ endpoint: `${apiRoutes.diary}/${diaryId}` });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useDeleteDiary = (diaryId: string) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => deleteDiary(diaryId),
    onSuccess: () => {
      toast.success("일기 삭제에 성공했습니다!");
      navigate(-1);
    },
  });
};
