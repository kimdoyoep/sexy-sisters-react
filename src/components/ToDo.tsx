import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from './Atom';

export default function ToDo({text, category, id}: IToDo) {

  const setToDo = useSetRecoilState(toDoState);
  const onClick = (newCategory:IToDo["category"]) => {
    setToDo((oldToDos) => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = {text, id, category: newCategory}
      return oldToDos;
    })
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