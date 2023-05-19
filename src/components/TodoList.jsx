import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Todo } from "./Todo";


const TodoList = () => {
  const { todos } = useSelector(state => state);

  return (
    <Box my={3}>
        {todos.todos.length ? todos.todos.map(todo => ( <Todo key={`todo-${todo.id}`} todo={todo} />
        )) : <Box textAlign="center" my="4">No todos, yay!</Box>}
        
    </Box>
  );
};

export default TodoList;
