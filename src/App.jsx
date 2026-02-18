import { Typography, Box } from "@mui/material"
import ComboBox from "./components/ComboBox"

function App() {


  return (
    <Box
      sx={{ p: 2 }}
    >
      <Typography>
         MUI Autocomplete practice
      </Typography>

      <ComboBox />
    </Box>
  )
}

export default App
