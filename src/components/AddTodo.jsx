import {Button, Flex, FormControl, Input} from "@chakra-ui/react"
import {useState} from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../Redux/action"

export const AddTodo = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    
    // ditambahkan event.preventDefault() agar tidak reload ketika submit
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(value)) 
        setValue("")
    }

    const handleInput = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    return (
        // onSubmit={handleSubmit} digunakan untuk menghandle submit ketika form di submit
        <form onSubmit={handleSubmit}>
            <Flex>
                <FormControl>
                    <Input 
                    type="text" 
                    value={value}
                    placeholder="Add Todo" 
                    onChange={handleInput} 
                    borderTopRightRadius={0}
                    borderBottomRightRadius={0}
                    />
                </FormControl>
                <Button 
                colorScheme="teal" 
                type="submit" 
                disabled={!value}
                borderTopLeftRadius={0}
                borderBottomLeftRadius={0}
                >
                    Tambahkan Todo
                </Button>
            </Flex>
        </form>
    )
}

export default AddTodo