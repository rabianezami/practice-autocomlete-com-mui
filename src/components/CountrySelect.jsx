import { Autocomplete, Box, TextField } from "@mui/material"

const countries = [
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    { code: 'IR', label: 'Iran', phone: '98' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
]

export default function CountrySelect() {
    return (
        <Autocomplete
            sx={{ width: 300, mr: 2 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
                <Box
                    component="li"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    {...props}
                >
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                </Box>
            )}

            renderInput={(params) => (
                <TextField {...params} label="Choose a country" />
            )}
        />
    )
}