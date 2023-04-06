import { createSlice } from '@reduxjs/toolkit';

const GlobalSlice = createSlice({
  name: 'global',
  initialState: {
    globalstate: {
      "keyword":"all",
      "location":"all",
      "category":"all",
      "userLocation":""
    } 
  },
  reducers: {
    addTodo: (state, action) => {
       

        if(action.payload.field)
        {
          if(action.payload.field=="keyword")
          {
            state.globalstate.keyword = action.payload.val;
          }
          else if(action.payload.field=="category")
          {
            state.globalstate.category = action.payload.val;
          }
          else if(action.payload.field=="location")
          {
            state.globalstate.location = action.payload.val;
          }
          else if(action.payload.field=="userLocation")
          {
            state.globalstate.userLocation = action.payload.val;
          }
        }
        else 
        {
          state.globalstate = {...action.payload, "userLocation":state.globalstate.userLocation } ;
        }

        
      },
  }
});

export const selectSearchParam = (state) => state.global.globalstate;


export const { addTodo } = GlobalSlice.actions;

export default GlobalSlice.reducer;
