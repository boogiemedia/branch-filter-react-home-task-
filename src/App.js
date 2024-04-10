import {useState, useEffect} from "react";
import {Selectors} from "./Selectors";
import {Branches} from "./Branches";
import getData from "./api";
import {Typography, Box} from '@mui/material/';
import {createTheme, ThemeProvider} from "@mui/material";
// End of imports

function App() {
    const [ branches, setBranches]= useState([]);
    const [ selectedArea, setSelectedArea ] = useState('הכל');
    const [ selectedCity, setSelectedCity ] = useState('הכל');
    const [ searchText, setSearchText ] = useState('');

    //Change to rtl
    const theme = createTheme({direction:'rtl'})

    useEffect(() => {
        getData('https://mcdonalds-live-engage-api-stage-1.azurewebsites.net/stores.json')
            .then(data => setBranches(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <ThemeProvider theme={theme}>
        <Box display={"flex"}  flexDirection={"column"} justifyContent={"center"} alignItems={"center"} pt={"2%"}>
            <Typography variant="h1"> רשימת סניפים</Typography>
            <Selectors branches={branches} selectedArea={selectedArea} setSelectedArea={setSelectedArea} selectedCity={selectedCity} setSelectedCity={setSelectedCity} searchText={searchText} setSearchText={setSearchText}/>
            <Branches branches={branches} selectedArea={selectedArea} selectedCity={selectedCity} searchText={searchText}/>
        </Box>
        </ThemeProvider>
    );
}

export default App;
