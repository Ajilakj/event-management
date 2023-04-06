import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,selectSearchParam } from "./GlobalSlice";
import TextField from '@mui/material/TextField';



const EventSerachInput =  ({ value, onChangeText }) => {

    const [categoryValue, setCategoryValue] = React.useState('');
    const dispatch = useDispatch();


    return (

        <div className="search-header-container">


          <TextField sx={{  } } 
              color="secondary"
            size="small" 
            onChange={onChangeText} value={value} 
            label="Search by Keyword" 
            variant="filled" />
       
        </div>
       );

}

export default EventSerachInput