import useTodos from "../../contexts/useTodos/useTodos";
import NothingToShowBox from "../NothingToShowBox";
import DoneTodoBox from "./DoneTodoBox";

export default function DoneTasksList() {


    const { complatedTodos } = useTodos()

    return (
        <div className="mt-10">
            <h2 className="text-white mb-3">Done - 1</h2>
            <div className="flex flex-col gap-4">
                {complatedTodos.length ? complatedTodos.map(todo => (
                    <DoneTodoBox key={todo.id} text={todo.text} todoId={todo.id} />
                )) : <NothingToShowBox />}
            </div>
        </div>
    )
}
