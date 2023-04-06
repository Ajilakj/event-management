import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const EventsExcerpt = ({ event }) => {
   
    let  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const navigate = useNavigate();

    const singleEventPage = (id) => {
        
        navigate(`/event/${id}`);
    }

    return (
        <div className="module card">  
        <button onClick={() => singleEventPage(event.id)}>
            <img src={event.image} />
            <div>
           
                <h3>{event.title}</h3>
             
                {
                    event.dates && 
                    event.dates.date &&
                    event.dates.date.length >0 &&
                    <p className='event-date'>{new Date(event.dates.date[0].date).toLocaleDateString("en-US", options)} : {event.dates.date[0].startTime } to {event.dates.date[0].endTime }</p>
                }
               
                {
                    event.location && 
                    <p className='event-location'> {event.location.city}</p>
                }
                <p className='event-intro'>{event.data.intro}</p>
                
            </div>
        </button>
        </div>
    )
}

export default EventsExcerpt