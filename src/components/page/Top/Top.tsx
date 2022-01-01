import { VFC } from 'react';

import { Button } from '@/components/common/Button';
import { TodoList } from '@/components/TodoList';

export const Top: VFC = () => {
  return (
    <div>
      <h1>top page!</h1>
      <Button />
      <TodoList />
    </div>
  );
};
