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

  getMyMovieWatchlist: async () => {
    try {
      const res = await ApiTodoHelper({
        method: 'GET',
        url: `/todo/movie/watchlist`,
      });
      // const medias = Promise.all(
      //   res.data.todos.map((todo: any) =>
      //     MovieService.getMovieDetail(todo.mediaId)
      //   )
      // );
      return res.data;
    } catch (err) {
      return err;
    }
  },

  getMyMovieWatched: async () => {
    try {
      const res = await ApiTodoHelper({
        method: 'GET',
        url: `/todo/movie/watched`,
      });
      // const medias = Promise.all(
      //   res.data.todos.map((todo: any) =>
      //     MovieService.getMovieDetail(todo.mediaId)
      //   )
      // );
      return res.data;
    } catch (err) {
      return err;
    }
  },

  getTVWatchlist: async () => {
    try {
      const res = await ApiTodoHelper({
        method: 'GET',
        url: `/todo/tv/watchlist`,
      });
      // const medias = Promise.all(
      //   res.data.todos.map((todo: any) => TVService.getTVDetail(todo.mediaId))
      // );
      return res.data;
    } catch (err) {
      return err;
    }
  },

  getTVWatched: async () => {
    try {
      const res = await ApiTodoHelper({
        method: 'GET',
        url: `/todo/tv/watched`,
      });
      // const medias = Promise.all(
      //   res.data.todos.map((todo: any) => TVService.getTVDetail(todo.mediaId))
      // );
      return res.data;
    } catch (err) {
      return err;
    }
  },

  getTodoMovieByStatus: async (status: string, query = {}) => {
    try {
      const res = await ApiTodoHelper({
        method: 'GET',
        url: `/todo/movie/${status}`,
        params: query,
      });
      // const medias = await Promise.all(
      //   res.data.todos.map((todo: any) =>
      //     MovieService.getMovieDetail(todo.mediaId)
      //   )
      // );
      return res.data;
    } catch (err) {
      return err;
    }
  },

  getTodoTVByStatus: async (status: string, query = {}) => {
    try {
      const res = await ApiTodoHelper({
        method: 'GET',
        url: `/todo/tv/${status}`,
        params: query,
      });
      // const medias = await Promise.all(
      //   res.data.todos.map((todo: any) => TVService.getTVDetail(todo.mediaId))
      // );
      return res.data;
    } catch (err) {
      return err;
    }
  },

  getTVWatching: async () => {
    try {
      const res = await ApiTodoHelper({
        method: 'GET',
        url: `/todo/tv/watching`,
      });
      // const medias = Promise.all(
      //   res.data.todos.map((todo: any) => TVService.getTVDetail(todo.mediaId))
      // );
      return res.data;
    } catch (err) {
      return err;
    }
  },
};

export default TodoService;
