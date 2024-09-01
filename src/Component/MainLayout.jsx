import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-3/4 p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
