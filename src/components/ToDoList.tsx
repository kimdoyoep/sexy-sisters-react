import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
  id: number;
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
})

export default function ToDoList() {

  const [toDo, setToDo] = useRecoilState(toDoState);

  const {
    register,
    handleSubmit,
    setValue
  } = useForm<IForm>();

  const handleValid = ({toDo}: IForm) => {
    setToDo((oldToDo) => [{text: toDo, category: "TO_DO", id:Date.now()/1000}, ...oldToDo]);
    setValue("toDo", "");
  }

return(
  <div>

    <h1>To Do</h1>
    <hr></hr>

    <form onSubmit={handleSubmit(handleValid)}>
      <input
      {...register("toDo", {
        required: "Please write a To Do",
      })}
      placeholder='Write a to do'></input>
      <button>Add</button>
    </form>

    <ul>
      {toDo.map(toDo => (
        <li key={toDo.id}>{toDo.text}</li>
      ))}
    </ul>

  </div>
)
}