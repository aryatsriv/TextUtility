import { Box, Button } from "@mui/material"

const CaseConverterFunctions = ({ onButtonClick }) => {
  const buttons = [["lower case", "lower"], ["UPPER CASE", "upper"], ["Sentence case", "sentence"], ["Capitalize Case", "capitalize"], ["AlTeRnAtInG cAsE", "alternating"], ["iNvErSe CaSe", "inverse"], ["snake_case", "snake"]]
  return (
    <Box>
      {buttons.map((button) => (
        <Button sx={{ textTransform: 'none' }} key={button[1]} onClick={() => onButtonClick(button[1])}>
          {button[0]}
        </Button>
      ))}
    </Box>
  )

}

export default CaseConverterFunctions;
