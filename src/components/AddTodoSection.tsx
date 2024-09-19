import { FaPlus } from "react-icons/fa6";
import useTodos from "../contexts/useTodos/useTodos";
import { useRef, useState } from "react";


export default function AddTodoSection() {

  const [inputValue, setInputValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)


  const { addNewTodo } = useTodos()

  const btnclichhandler = () => {
    if (inputValue.trim()) {
      addNewTodo(inputValue)
      setInputValue('')
      if (inputRef.current) {
        inputRef.current.focus()
      }

    } else {
      alert('please write your task ...')
    }

  }

  return (
    <div className="flex justify-center gap-2 w-full">
      <div className="w-full max-w-96">
        <input
          ref={inputRef}
          onChange={e => { setInputValue(e.target.value) }}
          value={inputValue}
          type="text"
          className="h-10 rounded-lg bg-transparent border-2 border-[#3E1671] py-1 px-4 w-full outline-none caret-main text-main placeholder:text-[#777777]"
          placeholder="Add a new task" />
      </div>
      <button onClick={btnclichhandler} className="bg-main min-h-full w-10 flex items-center justify-center rounded-lg"><FaPlus color="white" size={20} /></button>
    </div>
  )
}
