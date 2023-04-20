import { atom, selector } from 'recoil'

export enum Category {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface IToDo {
  text: string;
  category: Category;
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<Category>({
  key: "category",
  default: Category.TO_DO,
})

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

      return toDos.filter((toDo) => toDo.category === category);
  }
});

