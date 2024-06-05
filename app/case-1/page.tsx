import { getTodoAction } from "@/lib/action";
import Todos from "./components/todos";

export interface ITodos {
  id: string,
  createdAt: string,
  text: string,
  isCompleted: boolean,
  sending?: boolean
}

async function page() {
  const todos = await getTodoAction();

  return (
    <div>
      <div className='container md:max-w-2xl mt-4'>
        <h1 className='mb-10 bg-gray-100 px-2 font-serif text-3xl font-bold'>
          Todos
        </h1>

        <Todos todos={todos} />
      </div>
    </div>
  )
}

export default page