import { useSelector, useDispatch } from 'react-redux';
import { COMPLETED, ONGOING, removeTodo, Todo } from '../store/action/taskAction';

const TaskList = () => {
  const tasks = useSelector(state => state);
  const dispatch = useDispatch();

  const handleTodo = todoId => {
    dispatch(Todo(todoId));
  };
  const handleOngoing = todoId => {
    dispatch(ONGOING(todoId));
  };
  const handleCompleted = todoId => {
    dispatch(COMPLETED(todoId));
  };

  const handleRemoveTodo = todoId => {
    dispatch(removeTodo(todoId));
  };

  return (
    <div className='w-1/2 mx-auto text-center'>
      <h2 className='border-b-2 border-sky-400 text-2xl uppercase font-bold mb-2'>Todo List</h2>
      <ul className=''>
        {tasks.map(task => (
          <li className='flex justify-center gap-6 items-center bg-gray-50 p-2'
            key={task.id}
          >
            <h2 className={`${task.status === "completed" ? 'line-through' : 'none' }`}>{task.text}</h2>
            <div className="flex items-center space-x-6">
          <div className={`${task.status === "todo" ?  "bg-red-500":"border bg-white"} flex items-center w-5 h-5 rounded-full`}
          onClick={() => handleTodo(task.id)}>
 
          </div>
          <div className={`${task.status === "ongoing" ?  "bg-yellow-500":"border bg-white"} flex items-center w-5 h-5 rounded-full`}
          onClick={() => handleOngoing(task.id)}>
 
          </div>
          <div className={`${task.status === "completed" ?  "bg-green-500":"border bg-white"} flex items-center w-5 h-5 rounded-full`}
          onClick={() => handleCompleted(task.id)}>
 
          </div>
        </div>
            <button className='text-2xl text-red-600' onClick={() => handleRemoveTodo(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
