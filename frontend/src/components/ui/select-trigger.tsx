import { IconButton, useSelectContext } from "@chakra-ui/react"
import { FaFilter } from "react-icons/fa"

const SelectTrigger = () => {
  const select = useSelectContext()
  return (
    <IconButton
      px="2"
      variant="outline"
      size="sm"
      {...select.getTriggerProps()}
    >
       <FaFilter /> 
    </IconButton>
  )
}


interface Framework {
  label: string
  value: string
  icon: React.ReactNode
}

export default SelectTrigger;