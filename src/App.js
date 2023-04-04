import Events from "./components/Events";
import ManageEventsList from "./manage/events/ManageEventList";
import SingleEventPage from "./features/events/SingleEventPage";
import TodoList from "./features/events/ToDoList";
import Layout from "./components/Layout";
import ManageLayout from "./components/manage/Layout";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Events />} />

        <Route path="events">
           <Route path="/events/:location/:category/:keyword" element={<Events />}></Route>
        </Route>
        
        <Route path="event">
          <Route path=":id" element={<SingleEventPage />} />
        </Route>


        {/* Catch all - replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>

      <Route path="/manage" element={<ManageLayout />}>

        <Route index element={<ManageEventsList />} />
      
      </Route>
    </Routes>
  );
}

export default App;
