import { useRecoilState, useRecoilValue } from 'recoil';
import { toDoState } from './Atom';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';


export default function ToDoList() {

  const toDo = useRecoilValue(toDoState);
  return (
    <div>

      <h1>To Do</h1>
      <hr></hr>

      <CreateToDo></CreateToDo>

      <ul>
        {toDo.map(toDo => (
            <ToDo key={toDo.id} {...toDo}></ToDo>
        ))}
      </ul>

    </div>
  )
}