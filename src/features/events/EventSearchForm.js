import React from "react";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import categoryData from "../../data/category.json";
import cityData from "../../data/city.json"
import { useDispatch, useSelector } from "react-redux";
import { addTodo,selectSearchParam } from "./GlobalSlice";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '100%',
    color: theme.palette.text.secondary,
  }));

const categoryList = []; 
const locationList = [];

const EventSerachForm =  () => {

  
    const dispatch = useDispatch();

    const sp = useSelector(selectSearchParam);

    const [searchKeyWord, setSerachKeyword] = React.useState('');
    const [searchCategory, setSerachCategory] = React.useState('');
    const [searchLocation, setSerachLocation] = React.useState('');

    React.useEffect(() => {
  
        const categoryContent = categoryData.map((catg,index) => {
            categoryList.push({label:catg.catName})
            catg.subCategory.map((item) => {
                categoryList.push({label:item})
            });
        });

        const locationContent = cityData.data.map((name,index) => {
            locationList.push({label:name})
        });

      

       
       }, []);


    const searchEvents = () => {
      console.log("dispat all search param..");
      dispatch(addTodo(
        {
          "keyword":searchKeyWord?searchKeyWord:"all",
          "category":searchCategory?searchCategory:"all",
          "location":searchLocation?searchLocation:"all"
        } ));
    }

    return (

        <div className="search-container">

          <div className="inner-wrapper">

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>  
          <TextField onChange={(e)=> setSerachKeyword(e.target.value)} id="outlined-basic"   label="Search by Keyword" variant="outlined" />
        </Item>
        </Grid>
        <Grid xs>
          <Item>
          <Autocomplete
            onChange={(event, newValue) => {
                let ctgVal = newValue?.label?newValue.label:"all";
                setSerachCategory(ctgVal);
            }}
            disablePortal
            id="combo-box-demo"
            options={categoryList}
            renderInput={(params) => <TextField {...params} label="Category" />}
            />

          </Item>
        </Grid>
        <Grid xs>
          <Item> <Autocomplete
            onChange={(event, newValue) => {
                let locVal = newValue?.label?newValue.label:"all";
                 setSerachLocation(locVal);
            }}
            disablePortal
            id="combo-box-demo"
            options={locationList}
            renderInput={(params) => <TextField {...params} label="Location" />}
            />

          </Item>
        </Grid>
        <Grid xs>
          <span className="btn-event-search">
            <Button onClick={searchEvents}  variant="contained">Submit</Button>
          </span>
        </Grid>
      </Grid>
    </Box>
             
    </div>
        </div>
       );

}

export default EventSerachForm