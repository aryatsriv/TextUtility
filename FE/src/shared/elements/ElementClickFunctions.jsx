import { Box, Button, useTheme } from "@mui/material"

const ElementClickFunctions = ({ buttonsList, onButtonClick, selectedButton }) => {
  const theme = useTheme();

  return (
    <Box>
      {buttonsList.map((button) => {
        const isSelected = button[1] == selectedButton;
        return (
          <Button
            variant="contained"
            key={button[1]}
            onClick={() => onButtonClick(button[1])}
            sx=
            {{
              textTransform: 'none',
              backgroundColor: isSelected ? theme.palette.background.selected : theme.palette.background.paper,
              color: isSelected ? theme.palette.text.selected : theme.palette.text.primary,
              mr: 1,
              mt: 1
            }}
          >
            {button[0]}
          </Button>
        )
      })}
    </Box >
  )

}

export default ElementClickFunctions;
