import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="md:w-3/4 md:p-4 w-full p-1">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
