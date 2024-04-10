import React from 'react';
import { styled, InputLabel, MenuItem, FormControl, Select, NativeSelect, InputBase } from '@mui/material/';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

export const Selectors = ({ branches, selectedArea, setSelectedArea, selectedCity, setSelectedCity, searchText, setSearchText }) => {
    const areas = ['הכל', ...new Set(branches.map(branch => branch.store_region))];
    const cities = ['הכל', ...new Set(branches.filter(branch => selectedArea === 'הכל' || branch.store_region === selectedArea).map(branch => branch.city))];

    const handleAreaChange = (event) => {
        setSelectedArea(event.target.value);

        // Reset the city  and search selectors when the area changes
        setSelectedCity('הכל');
        setSearchText('');

    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);

        // Reset the search text when the city changes
        setSearchText('');
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="search-box">חיפוש</InputLabel>
                <BootstrapInput id="search-box" value={searchText} onChange={handleSearchChange} />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="select-city">עיר</InputLabel>
                <NativeSelect
                    id="select-city"
                    value={selectedCity}
                    onChange={handleCityChange}
                    input={<BootstrapInput />}
                >
                    <option aria-label="None" value="" />
                    {cities.map(city => (
                        <option value={city}>{city}</option>
                    ))}
                </NativeSelect>
            </FormControl>

            <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel id="select-Area">אזור</InputLabel>
                <Select
                    labelId="select-area"
                    id="select-area"
                    value={selectedArea}
                    onChange={handleAreaChange}
                    input={<BootstrapInput />}
                >
                    {areas.map(area => (
                        <MenuItem value={area}>{area}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}
