import { useRecoilValue } from 'recoil';

import { TodoItem } from '@/components/TodoItem';
import { TodoItemCreator } from '@/components/TodoItemCreator';
import { todoListState } from '@/globalStates/todoListState';

export function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
