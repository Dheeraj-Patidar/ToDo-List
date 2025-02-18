import  { useState } from 'react';

interface Todo {
  title: string;
}

const ToDo_List = () => {
  
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState('');
  
  const addTask = () => {
    if (newTitle ) {
      const newTodo: Todo = { title: newTitle };
      setTodos([...todos, newTodo]);
      setNewTitle('');
    }
  };

  const removeTask = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  
  return (
    <>
   
    <div className='container flex flex-col gap-10 bg-black text-white mx-auto items-center justify-center h-screen'>
    
      <h1 className='font-bold '>Todo List</h1>
      <div>
        <input className='text-white  border-2 border-white mr-2'
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Task title"
        />
        
        <button className='hover:bg-white rounded-2xl w-20 hover:text-black' onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className=' text-white rounded-2xl mr-5 p-2'>
              {todo.title} 
            </span>
            
            <button className='bg-white text-black mb-5 rounded-2xl w-20' onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default ToDo_List;





