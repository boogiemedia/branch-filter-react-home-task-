import * as React from 'react';
import {themeColors} from "../theme/theme";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from '@mui/material/';
//End of imports
export const Branches = ({ branches, selectedArea, selectedCity, searchText }) => {
    // Create lists of cities and areas, sort by oreder, remove spaces from corupted cities names, and filter list by area, city, free typing
    const filteredBranches = branches.filter(branch =>
        (selectedArea === 'כל האזורים' || selectedArea === '' || branch.store_region === selectedArea) &&
        (selectedCity === 'כל הערים' || selectedCity === '' || branch.city.trim() === selectedCity.trim()) && // Trim method to remove spaces from part of cities names
        (searchText === '' ||
            branch.store_title.includes(searchText) ||
            branch.store_address.includes(searchText) ||
            branch.city.includes(searchText) ||
            branch.store_region.includes(searchText) ||
            branch.store_id.toString().includes(searchText))
    );
    filteredBranches.sort((a, b) => a.city.localeCompare(b.city, 'he'));
// End of lists******************************

    const columnNames = [
        { id: 'store_region', label: 'אזור' },
        { id: 'city', label: 'עיר' },
        { id: 'store_address', label: 'כתובת' },
        { id: 'store_title', label: 'שם' },
        { id: 'store_id', label: 'מספר סניף' },
    ];
    return (
        <TableContainer component={Paper}sx={{
            maxHeight: "60vh",
            width: "75%",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            overflow: "auto",
            "&::-webkit-scrollbar": {
                width: "8px",
                height: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
                background: "#DD5746",
                borderRadius: "31px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
                background: "#FFC470",
            },
            "&::-webkit-scrollbar-track": {
                background: "#f1fade",
                borderRadius: "31px",
            },
        }}>
            <Table stickyHeader sx={{ minWidth: 650, }} aria-label="simple table" bgcolor={themeColors.bg}>
                <TableHead sx={{
                    "& th": {
                        bgcolor: themeColors.bgTitle
                    }}}>
                    <TableRow>
                        {columnNames.map((column) => (
                            <TableCell align="right" key={column.id}>
                                <Typography variant="h2">{column.label}</Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredBranches.map((branch) => (
                        <TableRow
                            key={branch.store_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{branch.store_region}</TableCell>
                            <TableCell align="right">{branch.city}</TableCell>
                            <TableCell align="right">{branch.store_address}</TableCell>
                            <TableCell align="right">{branch.store_title}</TableCell>
                            <TableCell align="right">{branch.store_id}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
