import React, { useState, useEffect } from "react";
import EventSerachForm from "../features/events/EventSearchForm";
import { useParams } from 'react-router-dom';
import EventsList from "../features/events/EventsList";
import EventsListCity from "../features/events/EventsListCity";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,selectSearchParam } from "../features/events/GlobalSlice";

const Events = () => {
    const { category='all',keyword='all',location='all' } = useParams();
    
    console.log(" catetory--"+category);
    console.log(" keyword--"+keyword);
    console.log(" location--"+location);
    const sp = useSelector(selectSearchParam);

    let first = null;
    let second = null;

   
    if (sp.location=="all") {
        first = <EventsListCity/>;
        second = <EventsList/>;
    }
    else {
        first =  <EventsList/>;
        second = <EventsListCity/>;
    }

    return (
        <>
        
        <EventSerachForm/>
        {first}
        {second}
        
        
        </>
    )
}
export default Events