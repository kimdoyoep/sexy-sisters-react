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

  const {register, handleSubmit} = useForm();
  const onValid = (data:any) => {
    console.log(data);
  }
  return(
    <div>
      <form onSubmit={handleSubmit(onValid)}> 
        <input {...register("email", {required : true})} placeholder="Email" />
        <input {...register("firstName", {required : true})} placeholder="First Name" />
        <input {...register("lastName", {required : true})} placeholder="Last Name" />
        <input {...register("username", {required : true})} placeholder="Username" />
        <input {...register("password", {required : true})} placeholder="Password" />
        <input {...register("password1", {required : true})} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  )
}