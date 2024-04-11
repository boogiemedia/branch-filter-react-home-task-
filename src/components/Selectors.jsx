import React from 'react';
import {dropDownStyle} from "../theme/dropDownStyle";
import {selectStyled} from "../theme/selectStyled";
import {themeColors} from "../theme/theme";
import {
    styled,
    MenuItem,
    FormControl,
    Select,
    InputBase,
    Box,
    Typography,
} from '@mui/material/';
//End of inputs

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
    },
    '& .MuiInputBase-input': {
        borderRadius: "5px",
        position: 'relative',
        backgroundColor: themeColors.bgTitle,
        border: '1px solid #ced4da',
        fontSize: '16px',
        fontWeight: '400',
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

    // Create lists of cities and areas, sort by oreder and remove spaces from corupted cities names
    const areas = ['כל האזורים', ...new Set(branches.map(branch => branch.store_region).sort((a, b)=>parseInt(a)-parseInt(b)))]; //  Sort all areas by mathematic order
    const cities = [...new Set(branches.filter((branch)=>selectedArea === 'כל האזורים' || branch.store_region === selectedArea).map((r)=>r.city.trim()))] // Trim method to remove spaces from part of cities names
    // Sort cities in Hebrew alphabetical order and add  "כל הערים" selector in top
    cities.sort((a, b) => a.localeCompare(b, 'he'));
    cities.unshift('כל הערים')

    //Handlers...............................
    const handleAreaChange = (event) => {
        setSelectedArea(event.target.value);
        setSelectedCity('כל הערים');
        setSearchText('');
    };
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        setSearchText('');
    };
    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <Box flexDirection='row-reverse' display="flex">

            <FormControl sx={{ m: 1 }} variant="standard">
                <BootstrapInput   placeholder="חיפוש חופשי" id="search-box"  value={searchText} onChange={handleSearchChange} />
            </FormControl>


            <FormControl sx={{ m: 1, bgcolor: themeColors.bgTitle, }} variant="standard">
                <Select
                    MenuProps={{
                        PaperProps: { sx: dropDownStyle },
                    }}
                    sx={selectStyled}
                    id="select-city"
                    value={selectedCity}
                    onChange={handleCityChange}
                    variant="outlined"
                >
                    {cities.map(city => (
                        <MenuItem key={city} value={city}><Typography variant="p">{city}</Typography></MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, bgcolor: themeColors.bgTitle}} variant="standard">
                <Select
                    MenuProps={{
                        PaperProps: { sx: dropDownStyle },
                    }}
                    sx={selectStyled}
                    id="select-area"
                    value={selectedArea}
                    onChange={handleAreaChange}
                    variant={"outlined"}

                >
                    {areas.map(area => (
                        <MenuItem key={area} value={area}><Typography variant="p">{area}</Typography></MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}
