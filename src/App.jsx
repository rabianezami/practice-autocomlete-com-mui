import { Typography, Box, Stack } from "@mui/material"
import ComboBox from "./components/ComboBox"
import ExampleString from "./components/ExampleString"
import ExampleObject from "./components/ExampleObject"
import ExampleDuplicate from "./components/ExampleDuplicate"

function App() {


  return (
    <>
      <Box
        sx={{ p: 2 }}
      >
        <Typography mb={2}>
          MUI Autocomplete practice
        </Typography>

       <Stack spacing={3}>
        <ComboBox />
        <ExampleString />
        <ExampleObject />
        <ExampleDuplicate />
       </Stack>
      </Box>
    </>
  )
}

export default App
