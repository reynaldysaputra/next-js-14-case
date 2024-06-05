"use server";

import { ITodos } from "@/app/case-1/page";
import { revalidatePath } from "next/cache";
import { getMovies } from "./global";
import { createTodo, getTodos, updateTodo } from "./todos";

export default async function refreshPage() {
  revalidatePath("/dashboard");
}

export const getTodoAction = async () => {
  try {
    const response = await getTodos();
    
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    return error;
  } finally {
    revalidatePath("/case-1");
  }
}

export const createTodoAction = async (body: ITodos) => {
  try {
    const response: any = await createTodo(body);

    if(response.status === 201) return { message: "Todo added Successfully", code: 200 }
    else throw new Error(response.status)
  } catch (error: any) {
    return {error: `Failed to add todo (${error})`};
  } finally {
    revalidatePath("/case-1");
  }
}

export const updateTodoAction = async (id: string, body: ITodos) => {
  try {
    const response = await updateTodo(id, body);

    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.log("ERROR 2 = ", error);
    return error;
  } finally {
    revalidatePath("/case-1");
  }
}

export const getMoviesAction = async (query: string) => {
  try {
    const response = await getMovies(query);
    if(response.status === 404) throw new Error(JSON.stringify(response));    
    return JSON.parse(JSON.stringify(response.data));
  } catch (error: any) {
    return error;
  } finally {
    revalidatePath("/case-1");
  }
}