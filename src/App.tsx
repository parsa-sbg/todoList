import AddTodoSection from "./components/AddTodoSection"
import DoneTasksList from "./components/DoneTasksList/DoneTasksList"
import TasksToDoList from "./components/TaskTodoList/TasksToDoList"



function App() {

  return (
    <div className="bg-[#0D0714]">
      <div className='container min-h-screen flex flex-col items-center justify-center'>
        <div className="w-full max-w-96 py-20">
          <AddTodoSection />
          <TasksToDoList />
          <DoneTasksList />
        </div>
      </div>
    </div>
  )
}

export default App