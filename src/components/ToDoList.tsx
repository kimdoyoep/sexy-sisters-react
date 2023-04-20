import { selector, useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoSelector, toDoState } from './Atom';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';


export default function ToDoList() {

  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  }

  return (
    <div>

      <h1>To Do</h1>
      <hr></hr>

      <select value={category} onInput={onInput}>
        <option value="TO_DO">To D0</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>

      <CreateToDo></CreateToDo>

      {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo}></ToDo>)}

    </div>
  )
}