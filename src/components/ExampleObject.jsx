import { Autocomplete, TextField } from "@mui/material"

export default function ExampleObject() {
    const options = [
        { label: "The Godfather", id: 1 },
        { label: "Puple Fiction", id: 2 },
    ]

    return (
        <Autocomplete
            disablePortal
            options={options}
            renderInput={(params) => (
                <TextField {...params} label="Movie" />
            )}
            sx={{ width: 300 }}
        />
    )
}