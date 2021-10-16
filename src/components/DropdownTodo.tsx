import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import TodoService from 'services/TodoService';
import ToastHelper from 'utils/ToastHelper';
import { checkTodo } from 'utils/TodoHelper';

const DropdownTodo = (props: any) => {
  const { media, mediaType } = props;
  const [todoStatus, setTodoStatus] = useState('');
  useEffect(() => {
    setTodoStatus(checkTodo(props.user.profile.todos, media.id));
  }, [media, props.user.profile.todos]);
  const handleChangeList = async (e: any) => {
    const toastId = toast.loading('Please wait...');
    const mediaData = {
      id: media.id,
      mediaType,
      mediaName: media.name || media.title,
      status: e.target.value,
    };
    const response = await TodoService.addMediaTodo(mediaData);
    ToastHelper(toastId, {
      title: 'Add media',
      response,
    });
    setTodoStatus(mediaData.status);
  };

  return (
    <div
      className={`relative inline-flex 
      ${!props.user.isAuthenticated && 'hidden'}`}
    >
      <svg
        className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="#648299"
          fillRule="nonzero"
        />
      </svg>
      <select
        value={todoStatus}
        onChange={handleChangeList}
        className="border border-gray-300 rounded-full text-red-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none button-todo"
      >
        {mediaType === 'movie' ? (
          <>
            <option value="">Choose watch type</option>
            <option value="WATCHLIST">Watchlist</option>
            <option value="WATCHED">Watched</option>
            <option value="WATCHING">Watching</option>
          </>
        ) : (
          <>
            <option value="">Choose watch type</option>
            <option value="WATCHLIST">Watchlist</option>
            <option value="WATCHED">Watched</option>
            <option value="WATCHING">Watching</option>
            <option value="WAITING_NEXT_SEASON">Waiting Next Season</option>
          </>
        )}
      </select>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  errors: state.errors,
});
export default connect(mapStateToProps, {})(DropdownTodo);
