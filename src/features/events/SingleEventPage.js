
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetEventsQuery } from './eventsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchParam } from "./GlobalSlice";
import EventsDate from './EventsDate';

const SingleEventtPage = () => {
    const { id } = useParams()
    console.log("event details ->"+id);

    let  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


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

    const eventDateContent = event.dates.date.map((eventDate,index) => <EventsDate key={index} eventDate={eventDate} />);

    return (
        <article className='event-detail bg-white'>
            <div className='inner-wrapper'>
             <img src={event.image} />
            <h2>{event.title}</h2>
           
            <p><em>Timezone</em>: <strong>{event.timeZone}</strong></p>
        
            {eventDateContent}
           

            {
                event.location && 
                <p className='event-location'><em>Location:</em><strong> {event.location.city}</strong></p>
            }
            <p><em>Category</em>: <strong>{event.category.join(', ')}</strong></p>
            <p>{event.body}</p>
            <div className='event-descriptoin'>{event.data.desc}</div>
            </div>
         
        </article>
    )
}

export default SingleEventtPage