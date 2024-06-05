"use client";

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { updateTodoAction } from '@/lib/action';
import React, { useOptimistic, useTransition } from 'react'
import { ITodos } from '../page';

function TodoItem(item: ITodos) {
  const [isPending, startTransition] = useTransition();
  const [opmisitcTodo, updateOptimisticTodo] = useOptimistic(
    item,
    (state, todos: ITodos): ITodos => {
      return {
        ...state,
        isCompleted: todos.isCompleted,
      }
    }
  )

  const handleChange = async (id: string, checked: boolean) => {
    const todo: ITodos = {
      ...item,
      isCompleted: checked
    }

    updateOptimisticTodo(todo);

    const response = await updateTodoAction(id, todo);

    if(!response) console.log("ERROR = ", response);
  }

  return (
    <li className='flex items-center gap-3'>
      <Checkbox
        id={opmisitcTodo.id}
        className='peer'
        defaultChecked={opmisitcTodo.isCompleted}
        checked={opmisitcTodo.isCompleted}
        onCheckedChange={checked => {
          startTransition(() => handleChange(opmisitcTodo.id, checked as boolean))
        }}
      />
      <Label
        htmlFor={opmisitcTodo.id}
        className='cursor-pointer peer-data-[state=checked]:text-gray-500 peer-data-[state=checked]:line-through'
      >
        {opmisitcTodo.text}
      </Label>
      <span className='ml-auto text-sm text-gray-500 peer-data-[state=checked]:text-gray-500 peer-data-[state=checked]:line-through'>
        {opmisitcTodo.createdAt}
        <p className='font-bold'>{opmisitcTodo.sending ? "Sending..." : ""}</p>
      </span>
    </li>
  )
}

export default TodoItem