import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ToDoList() {

  interface IForm {
    toDo: string;
  }

  const {
    register,
    handleSubmit,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log('data to do', data.toDo);
  }

return(
  <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
      {...register("toDo", {
        required: "Please write a To Do",
      })}
      placeholder='Write a to do'></input>
      <button>Add</button>
    </form>
  </div>
)
}