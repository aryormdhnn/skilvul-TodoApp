import { Container, TabList, Tabs, Tab } from "@chakra-ui/react"
import { VISIBILITY_FILTERS } from "../Constants"

export const VisibilityFilter = () => {
  return (
    <Container centerContent>
        <Tabs>
            <TabList>
               {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
                     const currentFilter = VISIBILITY_FILTERS[filterKey]
                        return (
                            <Tab key={`visibility-filter-${currentFilter}`} >
                                {currentFilter}
                            </Tab>
                        )
                    })}
            </TabList>
            </Tabs>
    </Container>
  )
}
