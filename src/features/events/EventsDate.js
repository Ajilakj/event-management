import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const EventsDate = ({ eventDate }) => {
   
    let  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    console.log("event date component =>"+JSON.stringify(eventDate));

    return (
   
        
            <div>
           
                 
             <p className='event-date'>{new Date(eventDate.date).toLocaleDateString("en-US", options)} : {eventDate.startTime } to {eventDate.endTime }</p>
             
          
                
            </div>
    
    )
}

export default EventsDate