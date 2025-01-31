import { TextField } from "@mui/material"
import { useTheme } from "@emotion/react"

const CaseConverterOutput = ({ resultText }) => {
  const theme = useTheme()

  return (
    <>
      <h3>Result:</h3>
      <TextField label="Result"
        id="convert-case-output"
        aria-label="convert case input"
        multiline
        rows={10}
        variant="outlined"
        fullWidth
        value={resultText}
        sx={{
          backgroundColor: theme.palette.background.paper,
        }} />

    </>
  )

}

export default CaseConverterOutput
