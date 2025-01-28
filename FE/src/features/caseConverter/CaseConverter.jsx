import { Box, Container, Paper, TextField } from "@mui/material"
import CaseConverterFunctions from "./CaseConverterFunctions"
import CaseConverterService from "../../services/CaseConverterService.js"
import { useState, useEffect } from "react"
import { useTheme } from "@mui/material/styles";

const CaseConverter = () => {
  const theme = useTheme();
  const [inputText, setInputText] = useState('')
  const [resultText, setResultText] = useState('')
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {
    setResultText(CaseConverterService.convertCase(selectedOption, inputText));
  }, [inputText, selectedOption])
  const handleButtonSelect = (option) => {
    setSelectedOption(option)
  }
  const handleInputTextChange = (event) => {
    setInputText(event.target.value)
  }
  let selectedOptionWarning = null
  if (selectedOption.length == 0) {
    selectedOptionWarning =
      (
        <Box sx={{ color: "red" }}>
          Please click on one of the button below to convert your text.
        </Box>
      )

  }

  return (
    <>
      <Container sx={{ marginTop: -2.5 }}>
        <Box sx={{ backgroundColor: theme.palette.background.default }}>
          <h1>Case Converter</h1>
          {selectedOptionWarning}
          <CaseConverterFunctions onButtonClick={handleButtonSelect} />
          <h3>Input:</h3>
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
          <h3>Result:</h3>
          <TextField label="Result"
            id="convert-case-input"
            aria-label="convert case input"
            multiline
            rows={10}
            variant="outlined"
            fullWidth
            value={resultText}
            sx={{
              backgroundColor: theme.palette.background.paper,
            }} />
        </Box>
      </Container>
    </>
  )
}


export default CaseConverter

