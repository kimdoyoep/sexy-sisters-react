import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { toDoState } from './Atom';

export default function CreateToDo() {

  interface IForm {
    toDo: string;
  }

  const {
    register,
    handleSubmit,
    setValue
  } = useForm<IForm>();

  const setToDo = useSetRecoilState(toDoState);

  const handleValid = ({toDo}: IForm) => {
    setToDo((oldToDo) => [{text: toDo, category: "TO_DO", id:Date.now()}, ...oldToDo]);
    setValue("toDo", "");
  }

  return(

    <form onSubmit={handleSubmit(handleValid)}>
      <input
      {...register("toDo", {
        required: "Please write a To Do",
      })}
      placeholder='Write a to do'></input>
      <button>Add</button>
    </form>

  )
}