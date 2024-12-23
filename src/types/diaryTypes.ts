import { DiaryFormData } from "src/types/WriteDiaryTypes";

export type BaseDiaryType = {
  id: number;
  date: string;
  image: string | null;
  bookmark: boolean;
  title?: string
};

export type DiaryListType = BaseDiaryType & {
  title: string;
};

export type WriteDiaryPayLoad = {
  date: string;
  nickname: string;
} & DiaryFormData;

export type WriteDiaryResponse = {
  id: number;
  temp_id: number;
};

export type GetDiaryResponse = {
  date: string;
  nickname: string;
  title: string;
  weather: string;
  mood: string;
  story: string;
  bookmark: boolean;
  image?: string;
};
