import { Box, Container, Typography } from "@mui/material"
import ElementClickFunctions from "../../shared/elements/ElementClickFunctions.jsx"
import textFormatterService from "../../services/textFormatterService.js"
import { useState, useEffect } from "react"
import { useTheme } from "@mui/material/styles";
import ElementTextInput from "../../shared/elements/ElementTextInput.jsx";
import ElementTextOutput from "../../shared/elements/ElementTextOutput.jsx";
import { useNavigate, useParams } from "react-router";
import ElementDivOutput from "../../shared/elements/ElementDivOutput.jsx";

const TextFormatter = () => {
	const theme = useTheme();
	const [inputText, setInputText] = useState('');
	const [resultText, setResultText] = useState('');
	const [selectedOption, setSelectedOption] = useState('');
	const buttons = [["Bold Text", "bold"], ["Italic Text", "italic"], ["Underline text", "underline"]]
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
	}, [params.button])

	useEffect(() => {
		setResultText(textFormatterService.textModifier(selectedOption, inputText));
	}, [inputText, selectedOption])

	const handleButtonSelect = (option) => {
		setSelectedOption(option);
		navigate(`/textformatter/${option}`, { replace: true });
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
						Text Formatter
					</Typography>
					{selectedOptionWarning}
					<ElementClickFunctions onButtonClick={handleButtonSelect} buttonsList={buttons} selectedButton={selectedOption} />
					<ElementTextInput inputText={inputText} handleInputTextChange={handleInputTextChange} />
					<ElementDivOutput resultText={resultText} />
				</Box>
			</Container>
		</>
	)
}

export default TextFormatter


