import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from '../Footer';

const ManageLayout = () => {
 
    return (
        <>
            <Header />
            <main className="App">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default ManageLayout