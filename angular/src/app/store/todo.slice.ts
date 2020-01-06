import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../model';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    saveTodoList(_, action: PayloadAction<Todo[]>) {
      const todoList = action.payload;
      return todoList;
    },
  },
});

export const { saveTodoList } = todosSlice.actions;
export default todosSlice.reducer;
