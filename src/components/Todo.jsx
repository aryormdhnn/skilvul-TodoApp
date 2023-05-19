import { Box, Checkbox, Text } from "@chakra-ui/react"
import { useState } from "react"

export const Todo = ({ todo }) => {

    const [cheked, isCheked] = useState(false);
    
  return (

    <Box mb={1} bgColor="lightblue" p={2}>
        <Checkbox colorScheme="teal" isChecked={cheked}>
            <Text as={todo.completed && "del" } >
            {todo.text}
            </Text>
        </Checkbox>
    </Box>

    )
}


export default Todo