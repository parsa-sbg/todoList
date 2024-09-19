import { createContext, ReactNode, useEffect, useState } from "react";
import { Todo } from "../types/todos.t";
import { TodosContextType } from "../types/todos.t";



export const TodosContext = createContext<TodosContextType | undefined>(undefined)

export const TodosProvider = ({ children }: { children: ReactNode }) => {
    const storedTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || "[]")

    const [allTodos, setAllTodos] = useState(storedTodos)
    const [complatedTodos, setComplatedTodos] = useState(storedTodos)
    const [notComplatedTodos, setNotComplatedTodos] = useState(storedTodos)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(allTodos))
        setComplatedTodos(allTodos.filter((todo) => todo.completed))
        setNotComplatedTodos(allTodos.filter((todo) => !todo.completed))
    }, [allTodos])


    const addNewTodo = (text: string) => {
        const newTodo: Todo = {
            id: Math.random(),
            text,
            completed: false
        }
        setAllTodos(prev => [newTodo, ...prev])
    }

    const removeTodo = (todoId: number) => {
        setAllTodos(prev => prev.filter(todo => todo.id !== todoId))
    }

    const changeTodoComplated = (todoId: number) => {

        setAllTodos(prev => prev.map(todo => {
            if (todo.id == todoId) {
                return {
                    id: todo.id,
                    text: todo.text,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }


    return (
        <TodosContext.Provider value={{
            complatedTodos,
            notComplatedTodos,
            addNewTodo,
            removeTodo,
            changeTodoComplated
        }}>
            {children}
        </TodosContext.Provider>
    )
}