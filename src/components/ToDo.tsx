import { useSetRecoilState } from 'recoil';
import { Category, IToDo, toDoState } from './Atom';

export default function ToDo({text, category, id}: IToDo) {

  const setToDo = useSetRecoilState(toDoState);
  const onClick = (newCategory:IToDo["category"]) => {
    setToDo((oldToDos) => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const newToDo = {text, id, category: newCategory}
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex+1)]
    })
  }

  return(
    <li>
      <span>{text}</span>
      {category !== Category.TO_DO && <button onClick={() => onClick(Category.TO_DO)}>To Do</button>}
      {category !== Category.DOING && <button onClick={() => onClick(Category.DOING)}>Doing</button>}
      {category !== Category.DONE && <button onClick={() => onClick(Category.DONE)}>Done</button>}
    </li>
  )
}