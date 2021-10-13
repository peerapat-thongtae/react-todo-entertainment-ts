import { ApiTodoHelper } from 'utils/APIHelper';
import MovieService from './MovieService';

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

  getMyMovieWatchlist: async () => {
    try {
      const res = await ApiTodoHelper({
        method: 'GET',
        url: `/todo/mywatchlist/movie`,
      });
      const medias = Promise.all(
        res.data.todos.map((todo: any) =>
          MovieService.getMovieDetail(todo.mediaId)
        )
      );
      return medias;
    } catch (err) {
      return err;
    }
  },

  getMyMovieWatched: async () => {
    try {
      const res = await ApiTodoHelper({
        method: 'GET',
        url: `/todo/mywatched/movie`,
      });
      const medias = Promise.all(
        res.data.todos.map((todo: any) =>
          MovieService.getMovieDetail(todo.mediaId)
        )
      );
      return medias;
    } catch (err) {
      return err;
    }
  },
};

export default TodoService;
