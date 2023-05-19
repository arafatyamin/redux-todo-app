import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/action/taskAction';

const TaskForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text,
        completed: false
      }));
      setText('');
    }
  };

  return (
    <div className='text-center'>
      <h2 className='text-3xl font-bold'>Add Todo</h2>
      <form className='w-1/2 mx-auto flex gap-3' onSubmit={handleSubmit}>
        <input
        className='w-full border rounded-md py-1 focus:border-blue-400 active:border-blue-400'
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter your text"
        />
        <button className='text-white  border py-1 px-4 bg-blue-600 rounded-xl' type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
