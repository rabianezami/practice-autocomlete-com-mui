
import { Autocomplete, TextField } from "@mui/material";

export default function ExampleDuplicate() {
    const options = [
        { label: "The goodfather", id: 1 },
        { label: "The goodfather", id: 2 },
    ]

    return (
        <Autocomplete
            options={options}
            getOptionKey={(option) => option.id}
            isOptionEqualToValue={(option, value) =>
                option.id === value.id
            }
            renderInput={(params) => (
                <TextField {...params} label="Movie" />
            )}
            sx={{ width: 300 }}
        />
    )
}