export type TCategoryModel = {
  id: number;
  title: string;
};

export type TQuestionModel = {
  id: number;
  categoryId: number;
  title: string;
  link: string | undefined;
};

export type TQuestionModelInLS = TQuestionModel & {
  category: TCategoryModel | undefined;
  score?: number;
};
