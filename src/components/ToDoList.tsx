import { selector, useRecoilState, useRecoilValue } from 'recoil';
import { toDoSelector, toDoState } from './Atom';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';


export default function ToDoList() {

  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>

      <h1>To Do</h1>
      <hr></hr>

      <CreateToDo></CreateToDo>

      <h2>To Do</h2>
      <ul>
        {toDo.map(toDo => (
            <ToDo key={toDo.id} {...toDo}></ToDo>
        ))}
      </ul>
      <hr></hr>

      <h2>Doing</h2>
      <ul>
        {doing.map(doing => (
            <ToDo key={doing.id} {...doing}></ToDo>
        ))}
      </ul>
      <hr></hr>

      <h2>Done</h2>
      <ul>
        {done.map(done => (
            <ToDo key={done.id} {...done}></ToDo>
        ))}
      </ul>
      <hr></hr>

    </div>
  )
}