
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetEventsQuery } from  '../../features/events/eventsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchParam } from "../../features/events/GlobalSlice";
import EventsDate from '../../features/events/EventsDate';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useEffect } from 'react';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { TextField } from '@mui/material';

const EditEvent = () => {
    const { id } = useParams()
    console.log("Edit Event ->"+id);

    const [errors, setErrors] = useState({});
  

    const validate = (fieldValues) => {
        let temp = { ...errors }
        if ('title' in fieldValues)
            temp.title = fieldValues.title ? "" : "This field is required."
        if ('intro' in fieldValues)
        {
            console.log("infro value="+fieldValues.intro)
            temp.intro = fieldValues.intro ? "" : "This field is required."   
        }
                     
        // if ('email' in fieldValues)
        //     temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        // if ('mobile' in fieldValues)
        //     temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        // if ('departmentId' in fieldValues)
        //     temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })
        

        if ('form' in fieldValues)
        {
            return Object.values(temp).every(x => x == "")
        }
            
    }

    const eventDefault = {
        "id": 0,
        "title": "",
        "location": {
            "lat": "",
            "lon": "",
            "city": "",
            "State": "",
            "Country": "",
            "address": ""
        },
        "category": [],
        "data": {
            "desc": "",
            "intro": ""
        },
        "tag": null,
        "dates": {
        "date": [
            {
                "date": "",
                "endTime": "",
                "acvitity": [
                    {
                    "schedule": ""
                    }
                ],
                "startTime": ""
            }
        ]
        },
        "endDate": "",
        "virtual": "",
        "timeZone": "",
        "image": "",
        "dateCreated": null,
        "clientId": 1
        }

    let  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    const [dateRanges, setDateRanges] = useState([]);
    const [title, setTitle] = useState('');

    const [eventJson, setEventJson] = useState(eventDefault);

      const handleStartDateChange = (index, date) => {
        setDateRanges((prevDateRanges) => {
          const newDateRanges = [...prevDateRanges];
          newDateRanges[index].startDate = date;
          return newDateRanges;
        });
      };
    
      const handleEndDateChange = (index, date) => {
        setDateRanges((prevDateRanges) => {
          const newDateRanges = [...prevDateRanges];
          newDateRanges[index].endDate = date;
          return newDateRanges;
        });
      };
    
      const handleAddDateRange = () => {
        setDateRanges((prevDateRanges) => [
          ...prevDateRanges,
          { startDate: null, endDate: null },
        ]);
      };
    
      const handleRemoveDateRange = (index) => {
        setDateRanges((prevDateRanges) =>
          prevDateRanges.filter((_, i) => i !== index)
        );
      };

      //First level properties
      const handleChange =(event) => {
        const {name,value} = event.target;
        
         setEventJson((prevEventJson) => 
           
             ({ ...prevEventJson, [name]: value })
          
          );
         validate({ [name]: value }) 
      }

      const handleChangeIntro =(event) => {
        const {name,value} = event.target;
        console.log("value--"+value);
         setEventJson((prevEventJson) => 
          
             ({ ...prevEventJson, data:{...prevEventJson.data,intro: value  }})
           
          );
         
         validate({ [name]: value }) 
      }

    
      const handleSubmit = (event) => {
        event.preventDefault();
        let formValid = validate({ "form": "form" }) 
        console.log( formValid + '----------'+ JSON.stringify(eventJson));
        
      };
      

      const setEventDates = (eventDates) => {
            const dateArray = [];
            
            eventDates.dates.date.map((eventDate,index) => 
            {
                dateArray.push(
                    {
                        startDate: new Date(eventDate.date),
                        endDate: new Date(eventDate.date),
                        }
                )
            });
            setDateRanges(dateArray);
      }

    const sp = useSelector(selectSearchParam);

    const { event, isLoading } = useGetEventsQuery({"keyword":sp.keyword,"category":sp.category,"location":sp.location}, {
        selectFromResult: ({ data, isLoading }) => ({
            event: data?.find(item => item.id==id),
            isLoading
        }),
    })
  

    if (isLoading) return <p>Loading...</p>

    if (!event) {
        return (
            <section>
                <h2>event not found!</h2>
            </section>
        )
    }

  
    if(dateRanges.length==0) {

        setTitle(event.title);
        setEventDates(event);
        setEventJson(event);
       
    }
  

    return (
        <article className='event-detail bg-white'>


            <div className='inner-wrapper'>


            <form className="event-form" onSubmit={handleSubmit}>

                <fieldset>
                    <legend>Event Base</legend>
                    <TextField   
                    name="title" 
                    value={eventJson.title} 
                    onChange={handleChange} 
                    id="outlined-basic" 
                    label="Title" 
                    variant="outlined" 
                    {... (errors.title && {error:true, helperText:errors.title})}
                    />

                    <TextField required  
                    name="intro" 
                    value={eventJson.data.intro} 
                    onChange={handleChangeIntro} 
                    id="outlined-basic" 
                    label="Intro" 
                    variant="outlined" 
                    {... (errors.intro && {error:true, helperText:errors.intro})}
                    />
                </fieldset>

            <fieldset>
          <legend>Event Dates</legend>
      {dateRanges.map((dateRange, index) => (
        <div key={index}>

      
          <DatePicker
            selected={dateRange.startDate}
            onChange={(date) => handleStartDateChange(index, date)}
            selectsStart
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            placeholderText="Start Date"
            showTimeSelect
            dateFormat="Pp"
          />
          <DatePicker
            selected={dateRange.endDate}
            onChange={(date) => handleEndDateChange(index, date)}
            selectsEnd
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            minDate={dateRange.startDate}
            placeholderText="End Date"
            showTimeSelect
            showTimeSelectOnly
            dateFormat="p"
          />
          <button type="button" onClick={() => handleRemoveDateRange(index)}>
            Remove Date Range
          </button>
        </div>
        
      ))}
      <button type="button" onClick={handleAddDateRange}>
        Add Date Range
      </button>
      </fieldset>
      <button type="submit">Submit</button>
    </form>

             <img src={event.image} />
            <h2>{event.title}</h2>
           
            <p><em>Timezone</em>: <strong>{event.timeZone}</strong></p>
        
       
           

            {
                event.location && 
                <p className='event-location'><em>Location:</em><strong> {event.location.city}</strong></p>
            }
            <p><em>Category</em>: <strong>{event.category.join(', ')}</strong></p>
            <p>{event.body}</p>
            <div className='event-descriptoin'>{event.data.desc}</div>
            </div>
            <Link to="/manage">Back</Link>
        </article>

    )
}

export default EditEvent