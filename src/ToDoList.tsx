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


interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  checkingPassword: string;
  extraError?: string;
  };

  const {register, handleSubmit, formState:{ errors }, setError} = useForm<IForm>({
    defaultValues:{
      email: "@naver.com"
    }
  });
  const onValid = (data : IForm) => {
    if(data.password !== data.checkingPassword) {
      setError("checkingPassword", {message : "Password are not the same"}, {shouldFocus:true})
    }
    setError("extraError", {message : "Server offline"})
  }
  return(
    <div style={{color : "white"}}>
      <form style={{display: "flex", flexDirection : "column"}} onSubmit={handleSubmit(onValid)}> 
        <input {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "Only naver.com emails allowed"
          }
        })}
          placeholder="Email" />
          <span>{errors?.email?.message as string}</span>

        <input {...register("firstName", {
          required: "Fist Name is required",
          validate: (value) => value.includes("yupgy") ? "no yupgy allowed" : true,
          })} placeholder="First Name" />
        <span>{errors?.firstName?.message as string}</span>

        <input {...register("lastName", {required : "Last Name is required"})} placeholder="Last Name" />
        <span>{errors?.lastName?.message as string}</span>

        <input {...register("username", {required : "Usermame is required"})} placeholder="Username" />
        <span>{errors?.username?.message as string}</span>

        <input {...register("password", {required : "Password is required",
        minLength : {
          value : 5,
          message : "Your password is too short",
        }
        })} placeholder="Password" />
        <span>{errors?.password?.message as string}</span>
        
        <input {...register("checkingPassword", {required : "Checking Password is required",
        minLength : {
          value : 5,
          message : "Your password is too short"
        } })} placeholder="Checking Password" />
        <span>{errors?.checkingPassword?.message as string}</span>
        <button>Add</button>
        <span style={{color : "white"}}>{errors?.extraError?.message}</span>
      </form>
    </div>
  )
}