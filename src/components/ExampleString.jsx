import { Autocomplete, TextField } from "@mui/material"

export default function ExampleString() {

    const options = ["The goodmother", "romantic"]

    return (
        <Autocomplete
            options={options}
            renderInput={(params) => (
                <TextField {...params} label="Movie" />
            )}
            sx={{ width: 200 }}
        />
    )
}