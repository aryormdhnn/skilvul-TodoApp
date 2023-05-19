import { Container, TabList, Tabs, Tab } from "@chakra-ui/react"
import { VISIBILITY_FILTERS } from "../Constants"
import { useDispatch } from "react-redux"
import { setFilter } from "../Redux/action"

export const VisibilityFilter = () => {
  const dispatch = useDispatch()
  return (
    <Container centerContent>
        <Tabs>
            <TabList>
               {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
                     const currentFilter = VISIBILITY_FILTERS[filterKey]
                        return (
                            <Tab key={`visibility-filter-${currentFilter}`} 
                            onClick={() => dispatch(setFilter(currentFilter))}
                            >
                                {currentFilter}
                            </Tab>
                        )
                    })}
            </TabList>
            </Tabs>
    </Container>
  )
}
