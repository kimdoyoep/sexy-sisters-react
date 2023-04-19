import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from './Atom';

export default function ToDo({text, category, id}: IToDo) {

  const setToDo = useSetRecoilState(toDoState);
  const onClick = (newCategory:IToDo["category"]) => {

  }

  return(
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>To Do</button>}
      {category !== "DOING" && <button onClick={() => onClick("DOING")}>Doing</button>}
      {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>}
    </li>
  )
}