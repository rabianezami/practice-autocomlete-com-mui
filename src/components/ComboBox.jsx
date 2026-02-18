import { Autocomplete, TextField } from "@mui/material"
import top100Films from "../top100Films"

export default function ComboBox() {
    return (
        <Autocomplete 
          disablePortal
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
    )
}