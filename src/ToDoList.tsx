import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ToDoList() {

  // const [toDo, setToDo] = useState("");
  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setToDo(value);
  // };
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(toDo);
  // }; 

  const {register, watch} = useForm();
  console.log(watch())
  return(
    <div>
      <form>
        <input {...register("Email")} placeholder='Email'/>
        <button>Add</button>
      </form>
    </div>
  )
}