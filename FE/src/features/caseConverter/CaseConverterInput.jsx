import { useTheme } from "@emotion/react"
import { TextField } from "@mui/material"

const CaseConverterInput = ({ inputText, handleInputTextChange }) => {
  const theme = useTheme();
  return (

    <>
      <h3>Input</h3>
      <TextField
        label="Input for Case Converter"
        id="convert-case-input"
        aria-label="convert case input"
        multiline
        rows={10}
        variant="outlined"
        fullWidth
        value={inputText}
        onChange={handleInputTextChange}
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
      />
    </>
  )
}

export default CaseConverterInput
