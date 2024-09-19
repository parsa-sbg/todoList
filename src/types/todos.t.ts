export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodosContextType {
    complatedTodos: Todo[];
    notComplatedTodos: Todo[];
    addNewTodo: (text: string) => void;
    removeTodo: (todoId:number) => void;
    changeTodoComplated: (todoId:number) => void
}