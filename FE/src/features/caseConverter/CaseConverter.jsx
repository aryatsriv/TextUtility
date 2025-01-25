import { Box, Container } from "@mui/material"

const CaseConverter = () => {
  return (
    <>
      <h1>text value</h1>
      <Container>
        <Box component="section" sx={{ p: 3, border: '1px dashed grey' }}>
          This Box renders as an HTML section element.
        </Box>
      </Container>
    </>
  )
}


export default CaseConverter

