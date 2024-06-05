"use client";

import { Input } from '@/components/ui/input';
import { createTodoAction } from '@/lib/action';
import { useOptimistic } from 'react';
import { ITodos } from '../page';
import { SubmitButton } from './submit-button';
import TodoItem from './todo-item';

function Todos({todos}: {todos: ITodos[]}) {
  const [todoOpmitistic, addTodoOptimistic] = useOptimistic(
    todos,
    (state, newTodo: ITodos) => [
      ...state,
      {
        ...newTodo,
        sending: true
      }      
    ]
  )
  
  const handleTodo = async (form: FormData) => {
    const data: ITodos = {
      id: Math.random().toString(),
      createdAt: new Date().toString(),
      text: form.get("title")?.toString() || "",
      isCompleted: false,
    }

    addTodoOptimistic(data);
    
    const response = await createTodoAction(data);
    
    if(!response) console.log("ERROR = ", response);
  }

  return (
    <div>
      <form action={handleTodo}  className='flex'>
        <Input type='text' name='title' placeholder='Add a new todo' />
        <SubmitButton />
      </form>

      <h2 className='mt-10 border-b pb-2 font-serif text-lg font-medium'>
        Previous todos:
      </h2>

      <ul className='mt-4 flex flex-col gap-1'>
        {todoOpmitistic?.map(item => (
          <TodoItem 
            key={item.id}
            id={item.id}
            isCompleted={item.isCompleted}
            text={item.text}
            createdAt={item.createdAt}
            sending={item.sending}
          />
        ))}
      </ul>
    </div>
  )
}

export default Todos;