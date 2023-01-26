import { FC } from "react";
import { TodoType } from "./types/todo";

//Pick=>必要な型だけ抜き出す
//props: Pick<TodoType, "userId" | "title" | "completed">

//Omit=>指定した型を除外する
// props: Omit<TodoType, "id">

export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};
