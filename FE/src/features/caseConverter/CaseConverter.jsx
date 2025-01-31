import { Box, Container, Typography } from "@mui/material"
import CaseConverterFunctions from "./CaseConverterFunctions"
import textService from "../../services/textService.js"
import { useState, useEffect } from "react"
import { useTheme } from "@mui/material/styles";
import CaseConverterInput from "./CaseConverterInput.jsx";
import CaseConverterOutput from "./CaseConverterOutput.jsx";
import { useNavigate, useParams } from "react-router";

const CaseConverter = () => {
  const theme = useTheme();
  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const buttons = [["lower case", "lower"], ["UPPER CASE", "upper"], ["Sentence case", "sentence"], ["Capitalize Case", "capitalize"], ["AlTeRnAtInG cAsE", "alternating"], ["iNvErSe CaSe", "inverse"], ["snake_case", "snake"]]
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let paramButton = params.button;
    if (paramButton == null || paramButton == undefined || paramButton.length == 0) {
      setSelectedOption('')
    }
    const matchingButton = buttons.find(button => button[1] == paramButton)
    if (matchingButton) {
      setSelectedOption(matchingButton[1])
    }
    else {
      setSelectedOption('')
    }
  }, [])

  useEffect(() => {
    setResultText(textService.convertCase(selectedOption, inputText));

  }, [inputText, selectedOption])

  const handleButtonSelect = (option) => {
    setSelectedOption(option);
    navigate(`/caseconverter/${option}`, { replace: true });
  }
  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
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
      <Container>
        <Box sx={{ backgroundColor: theme.palette.background.default }}>
          <Typography variant="h5" sx={{ color: theme.palette.text.primary, mt: 3, mb: 2 }}>
            Text Stream Converter
          </Typography>
          {selectedOptionWarning}
          <CaseConverterFunctions onButtonClick={handleButtonSelect} buttonsList={buttons} selectedButton={selectedOption} />
          <CaseConverterInput inputText={inputText} handleInputTextChange={handleInputTextChange} />
          <CaseConverterOutput resultText={resultText} />
        </Box>
      </Container>
    </>
  )
}


export default CaseConverter

