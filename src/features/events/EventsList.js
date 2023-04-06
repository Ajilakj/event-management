import React, { useState, useEffect } from "react";
import EventsExcerpt from "./EventsExcerpt";
import { useGetEventsQuery } from './eventsSlice';
import { useEventsSearchQuery } from './eventsSlice';
import EventSerachForm from "./EventSearchForm";
import CategoryList from "./CategoryList";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,selectSearchParam } from "./GlobalSlice";
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import EventsListCity from "./EventsListCity";



const EventsList = () => {
    const { category='all',keyword='all',location='all' } = useParams();
    
    console.log(" catetory--"+category);
    console.log(" keyword--"+keyword);
    console.log(" location--"+location);

 
    const sp = useSelector(selectSearchParam);

    const {
        data: Events,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch
    } = useGetEventsQuery({"keyword":sp.keyword,"category":sp.category,"location":sp.location})



    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        
        if(!Events.length)
        {
           
            content = <p className="center">No events found for the keyword entered!!</p>
        }
        else 
        {
            content = Events.map(event => event.location.city!=sp.userLocation && <EventsExcerpt key={event.id} event={event}  />)
        }
       
    
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return (
        <>
        
     
        <section className="bg-white">
         
          <div className="inner-wrapper">

          <h2>More events</h2>
       
          <div className="event-list grid">
            {content}
          </div>  

          </div>
        </section>

       
        </>
    )
}
export default EventsList