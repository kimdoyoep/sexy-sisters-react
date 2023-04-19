import { IToDo } from './Atom';

export default function ToDo({text}: IToDo) {
  return(
    <li>
      <span>{text}</span>
      <button>To Do</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  )
}