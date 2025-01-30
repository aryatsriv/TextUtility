import { Box, Button, useTheme } from "@mui/material"
import { useParams } from "react-router"

const CaseConverterFunctions = ({ buttonsList, onButtonClick }) => {
  const theme = useTheme();
  const selectedButton = useParams()


  return (
    <Box>
      {buttonsList.map((button) => (
        <Button variant="contained" sx={{ textTransform: 'none', backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary, mr: 1 }} key={button[1]} onClick={() => onButtonClick(button[1])}>

          {button[0]}
        </Button>
      ))}
    </Box>
  )

}

export default CaseConverterFunctions;
