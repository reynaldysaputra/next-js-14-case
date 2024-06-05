"use server";

import { ITodos } from "@/app/case-1/page";

const url = "https://65db586a3ea883a152918f56.mockapi.io/todo";

export const getTodos = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    })

    return response.json();
  } catch (error) {
    return error;
  }
}

export const createTodo = async (body: ITodos) => {
  try {
    const response = await fetch("https://65db586a3ea883a152918f56.mockapi.io/todo", {
      method: "POST",
      cache: "no-store",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      },
    })

    return response
  } catch (error) {
    return error;
  }
}

export const updateTodo = async (id: string, body: ITodos) => {
  try {
    const response = await fetch(`https://65db586a3ea883a152918f56.mockapi.io/todo/${id}`, {
      method: "PUT",
      cache: 'no-store',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })

    return response;
  } catch (error) {
    console.log("ERROR 1 = ", error);
    return error; 
  }
}