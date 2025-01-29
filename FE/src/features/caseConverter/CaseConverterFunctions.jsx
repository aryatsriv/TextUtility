import { Box, Button } from "@mui/material"
import { useParams } from "react-router"

const CaseConverterFunctions = ({ buttonsList, onButtonClick }) => {

  const selectedButton = useParams()


  return (
    <Box>
      {buttonsList.map((button) => (
        <Button className="action_button" variant="contained" sx={{ textTransform: 'none' }} key={button[1]} onClick={() => onButtonClick(button[1])}>
          {button[0]}
        </Button>
      ))}
    </Box>
  )

}

export default CaseConverterFunctions;
