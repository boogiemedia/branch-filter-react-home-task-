import {useState, useEffect} from "react";
import {Selectors} from "./components/Selectors";
import {Branches} from "./components/Branches";
import getData from "./api";
import {Typography, Box} from '@mui/material/';
import {createTheme, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";
// End of imports

function App() {
    const [ branches, setBranches]= useState([]);
    const [ selectedArea, setSelectedArea ] = useState('כל האזורים');
    const [ selectedCity, setSelectedCity ] = useState('כל הערים');
    const [ searchText, setSearchText ] = useState('');

    // api call
    useEffect(() => {
        getData('https://mcdonalds-live-engage-api-stage-1.azurewebsites.net/stores.json')
            .then(data => setBranches(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <ThemeProvider theme={theme}>
        <Box display={"flex"}  flexDirection={"column"} justifyContent={"center"} alignItems={"center"} pt={"10px"}>
            <Typography variant="h1" sx={{mb:"40px", mt:"40px"}}> רשימת סניפים</Typography>

                <Selectors branches={branches} selectedArea={selectedArea} setSelectedArea={setSelectedArea} selectedCity={selectedCity} setSelectedCity={setSelectedCity} searchText={searchText} setSearchText={setSearchText}/>
                <Branches branches={branches} selectedArea={selectedArea} selectedCity={selectedCity} searchText={searchText}/>


        </Box>
        </ThemeProvider>
    );
}

export default App;
