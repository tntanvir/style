import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { contextAPI } from '../App';

const Sidebar = () => {
    const [userdata, setUserdata] = useState(null);
    const [pageLoad, setPageLoad] = useContext(contextAPI);



    const navigate = useNavigate()
    useEffect(() => {
        const username = sessionStorage.getItem("username");
        if (username) {
            fetch(`https://api-clothify.onrender.com/authore/user/${username}/`)
                .then(res => res.json())
                .then(data => setUserdata(data))
        }
    }, []);



    const handleLogout = () => {
        fetch('https://api-clothify.onrender.com/authore/logout/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            },

        })
            .then(res => {
                if (res.ok) {

                    sessionStorage.removeItem("id");
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("username");
                    setPageLoad(!pageLoad)
                    navigate("/login");
                } else {
                    console.error('Failed to log out');
                }
            })
            .catch(err => console.error('Logout error:', err));
    };
    return (
        <div className="w-1/4 min-h-screen bg-gray-100 p-4">

            <aside className="">
                {userdata && <div className="mb-8 text-center">
                    <img
                        src={userdata.image}
                        alt="User Avatar"
                        className="rounded-full w-32 h-32 mx-auto"
                    />
                    <h2 className="text-xl font-semibold mt-4">{userdata.name}</h2>
                    <p className="text-gray-600">{userdata.user_type}</p>
                    <p className="text-gray-600">{userdata.user.username}</p>
                </div>
                }
                <nav>
                    <ul>
                        <li className="p-3 bg-blue-500 text-white rounded-lg mt-2 ">
                            <NavLink to="/profile" activeClassName="font-bold" className="block p-2 text-center">
                                Profile
                            </NavLink>
                        </li>

                        {userdata?.user_type === 'seller' && <li className="p-3 bg-white text-blue-500 rounded-lg mt-2 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition">
                            <NavLink to="addproduct" activeClassName="font-bold" className="block p-2 text-center">
                                Add Product
                            </NavLink>
                        </li>}

                        <li className="p-3 bg-white text-blue-500 rounded-lg mt-2 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition">
                            <NavLink to="orderhistory" activeClassName="font-bold" className="block p-2 text-center">
                                My  Order History
                            </NavLink>
                        </li>
                        {userdata?.user_type !== 'buyer' && userdata?.user_type !== 'admin' && <li className="p-3 bg-white text-blue-500 rounded-lg mt-2 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition">
                            <NavLink to="orderproduct" activeClassName="font-bold" className="block p-2 text-center">
                                Request Order Product
                            </NavLink>
                        </li>}
                        <li className="p-3 bg-red-500 text-white rounded-lg mt-2 cursor-pointer text-center hover:bg-red-700 transition">
                            <button onClick={handleLogout} className="block p-2 text-center w-full">
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div >
    );
};

export default Sidebar;
