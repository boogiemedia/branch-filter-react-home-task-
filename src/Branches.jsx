import * as React from 'react';
import {Table,TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';

export const Branches = ({ branches, selectedArea, selectedCity, searchText }) => {
    const filteredBranches = branches.filter(branch =>
        (selectedArea === 'הכל' || selectedArea === '' || branch.store_region === selectedArea) &&
        (selectedCity === 'הכל' || selectedCity === '' || branch.city.trim() === selectedCity.trim()) &&
        (searchText === '' ||
            branch.store_title.includes(searchText) ||
            branch.store_address.includes(searchText) ||
            branch.city.includes(searchText) ||
            branch.store_region.includes(searchText) ||
            branch.store_id.toString().includes(searchText))
    );

    return (
        <TableContainer component={Paper}sx={{
            maxWidth: "80%"
        }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell align="right">אזור</TableCell>
                        <TableCell align="right">עיר</TableCell>
                        <TableCell align="right">כטובת</TableCell>
                        <TableCell align="right">שם</TableCell>
                        <TableCell align="right">Id</TableCell>

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
