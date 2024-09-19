import { CiUndo } from "react-icons/ci";
import { PiTrashSimpleLight } from "react-icons/pi"
import useTodos from "../../contexts/useTodos/useTodos";

interface DoneTasksListProps {
    text: string,
    todoId: number
}

export default function DoneTodoBox({ text, todoId }: DoneTasksListProps) {

    const { removeTodo, changeTodoComplated } = useTodos()


    return (
        <div className="relative bg-[#15101C] rounded-lg text-[#78CFB0] p-4 flex items-center justify-between">
            <p className="line-through">
                {text}
            </p>
            <div className="flex items-center gap-2">
                <button onClick={() => { changeTodoComplated(todoId) }} className="p-3 hover:bg-gray-100 transition-colors rounded-full !bg-opacity-15">
                    <CiUndo strokeWidth={2} size={20} />
                </button>

                <button onClick={() => { removeTodo(todoId) }} className="p-3 hover:bg-gray-100 transition-colors rounded-full !bg-opacity-15">
                    <PiTrashSimpleLight strokeWidth={12} size={20} />
                </button>
            </div>
        </div>
    )
}
