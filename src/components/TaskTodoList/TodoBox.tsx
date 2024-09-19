import { FaCheck } from "react-icons/fa6";
import { PiTrashSimpleLight } from "react-icons/pi";
import useTodos from "../../contexts/useTodos/useTodos";

interface TodoBoxProps {
    text: string,
    todoId: number
}

export default function TodoBox({ text, todoId }: TodoBoxProps) {

    const { removeTodo, changeTodoComplated } = useTodos()

    return (
        <div className="bg-[#15101C] rounded-lg text-main p-4 flex items-center justify-between gap-3">
            <p>{text}</p>
            <div className="flex items-center gap-0.5">

                <button onClick={() => {changeTodoComplated(todoId)}} className="p-3 hover:bg-gray-100 transition-colors rounded-full !bg-opacity-15">
                    <FaCheck size={20} />
                </button>

                <button onClick={() => { removeTodo(todoId) }} className="p-3 hover:bg-gray-100 transition-colors rounded-full !bg-opacity-15">
                    <PiTrashSimpleLight strokeWidth={12} size={20} />
                </button>

            </div>
        </div>
    )
}
