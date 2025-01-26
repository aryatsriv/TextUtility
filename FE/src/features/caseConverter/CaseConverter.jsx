import { Box, Container, TextField } from "@mui/material"
import CaseConverterFunctions from "./CaseConverterFunctions"

const CaseConverter = () => {
  return (
    <>
      <Container>
        <Box component="section" sx={{ p: 3, border: '1px dashed grey' }}>
          <h1>Case Converter</h1>
          <CaseConverterFunctions />
          <h3>Input:</h3>
          <TextField label="Input for Case Converter"
            id="convert-case-input"
            aria-label="convert case input"
            multiline
            rows={10}
            variant="outlined"
            fullWidth
            sx={{
              overflow: "auto"//enable autoscrolling
            }} />
          <h3>Result:</h3>
          <TextField label="Result"
            id="convert-case-input"
            aria-label="convert case input"
            multiline
            rows={10}
            variant="outlined"
            fullWidth
            sx={{
              overflow: "auto"//enable autoscrolling
            }} />
        </Box>
      </Container>
    </>
  )
}


export default CaseConverter

