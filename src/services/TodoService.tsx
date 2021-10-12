import { ApiTodoHelper } from 'utils/APIHelper';

const TodoService = {
  addMediaTodo: async (mediaData: any) => {
    try {
      const res = await ApiTodoHelper({
        method: 'POST',
        url: `/todo/add`,
        data: mediaData,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
};

export default TodoService;
