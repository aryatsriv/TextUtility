import { Box } from "@mui/material"
import { useTheme } from "@emotion/react"

const ElementDivOutput = ({ resultText }) => {
  const theme = useTheme()

  return (
    <>
      <h3>Result:</h3>
      <Box
        component="pre"
        id="convert-case-output"
        aria-label="convert case output"
        sx={{
          whiteSpace: 'pre-wrap',
          fontFamily: 'monospace',
          fontSize: '1rem',
          backgroundColor: theme.palette.background.paper,
          padding: 2,
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
          overflowX: 'auto',
          minHeight: '200px',
        }}
        dangerouslySetInnerHTML={{ __html: resultText }}
      />
    </>
  )
}

export default ElementDivOutput
