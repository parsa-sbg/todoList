import useTodos from "../../contexts/useTodos/useTodos";
import TodoBox from "./TodoBox";
import { Todo } from "../../types/todos.t";
import NothingToShowBox from "../NothingToShowBox";


export default function TasksToDoList() {


    const { notComplatedTodos } = useTodos()


    return (
        <div className="mt-10">
            <h2 className="text-white mb-3">Tasks to do - {notComplatedTodos.length}</h2>
            <div className="flex flex-col gap-4">
                {notComplatedTodos.length ? notComplatedTodos.map((todo: Todo) => (
                    <TodoBox key={todo.id} text={todo.text} todoId={todo.id} />
                )) : <NothingToShowBox />
                }

            </div>
        </div>
    )
}
