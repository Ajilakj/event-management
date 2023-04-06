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

const EventsListCity = () => {
  

    const sp = useSelector(selectSearchParam);

    console.log("user. locaiton "+sp.userLocation);

    const {
        data: Events,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch
    } = useGetEventsQuery({"keyword":sp.keyword,"category":"all","location":sp.userLocation})



    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        
        if(!Events.length)
        {
           
            content = <p className="center">No events found near {sp.userLocation}!</p>
        }
        else 
        {
            content = Events.map((event,index) => index<5 && <EventsExcerpt key={event.id} event={event}  />)
        }
       
    
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return (
        <>
  
  <section className="bg-white">
         
         <div className="inner-wrapper">
         
          <h2>Events in {sp.userLocation}</h2>
         
          <div className="event-list grid">
            {content}
          </div>  
          </div>
        </section>
        </>
    )
}
export default EventsListCity