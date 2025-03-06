// import { useState } from 'react';
// import { useContext } from 'react';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import { contextAPI } from '../App';
// import { CgProfile } from 'react-icons/cg';
// import { MdLibraryAdd } from 'react-icons/md';
// import { FaHistory } from 'react-icons/fa';
// import { IoBagAddSharp } from 'react-icons/io5';
// import { VscGitPullRequestGoToChanges } from 'react-icons/vsc';
// import { IoIosLogOut } from 'react-icons/io';

// const Sidebar = () => {
//     const [pageLoad, setPageLoad] = useContext(contextAPI);



//     const navigate = useNavigate()
//     const [userdata, setUserdata] = useState(null);
//     useEffect(() => {
//         const username = sessionStorage.getItem("username");
//         if (username) {
//             fetch(`https://api-store-iota.vercel.app/authore/user/${username}/`)
//                 .then(res => res.json())
//                 .then(data => setUserdata(data))
//         }
//     }, []);



//     const handleLogout = () => {
//         fetch('https://api-store-iota.vercel.app/authore/logout/', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Token ${sessionStorage.getItem('token')}`
//             },

//         })
//             .then(res => {
//                 if (res.ok) {

//                     sessionStorage.removeItem("id");
//                     sessionStorage.removeItem("token");
//                     sessionStorage.removeItem("username");
//                     setPageLoad(!pageLoad)
//                     navigate("/singin");
//                 } else {
//                     console.error('Failed to log out');
//                 }
//             })
//             .catch(err => console.error('Logout error:', err));
//     };
//     return (
//         <div className="w-1/4 min-h-screen bg-gray-100 p-4">

//             <aside className="">
//                 {userdata ? <div className="mb-8 text-center">
//                     <img
//                         src={userdata.image}
//                         alt="User Avatar"
//                         className="rounded-full w-32 h-32 mx-auto"
//                     />
//                     <h2 className="text-xl font-semibold mt-4">{userdata.name}</h2>
//                     <p className="text-gray-600">{userdata.user_type}</p>
//                     <p className="text-gray-600">{userdata.user.username}</p>
//                 </div> :
//                     <div className='flex justify-center items-center flex-col gap-3 mb-12'>
//                         <div className='w-32 h-32 animate-pulse rounded-full bg-blue-gray-200'>

//                         </div>
//                         <div className='w-full h-2 animate-pulse  bg-blue-gray-200'>

//                         </div>
//                         <div className='w-32 h-2 animate-pulse  bg-blue-gray-200'>

//                         </div>

//                     </div>
//                 }
//                 <nav>
//                     <ul>
//                         <li className="p-3 bg-blue-500 text-white rounded-lg mt-2 ">
//                             <NavLink to="/profile" activeClassName="font-bold" className="flex justify-center items-center gap-3 p-2 ">
//                                 <CgProfile className='text-2xl' /> Profile
//                             </NavLink>
//                         </li>

//                         {userdata?.user_type === 'seller' || userdata?.user_type !== 'admin' && userdata?.user_type !== 'admin' && <li className="p-3 bg-white text-blue-500 rounded-lg mt-2 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition">
//                             <NavLink to="addproduct" activeClassName="font-bold" className="flex justify-center items-center gap-3 p-2">
//                                 <MdLibraryAdd className='text-2xl' />  Add Product
//                             </NavLink>
//                         </li>}
//                         {userdata?.user_type === 'seller' || userdata?.user_type !== 'admin' && userdata?.user_type !== 'admin' && <li className="p-3 bg-white text-blue-500 rounded-lg mt-2 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition">
//                             <NavLink to="myaddedproduct" activeClassName="font-bold" className="flex justify-center items-center gap-3 p-2">
//                                 <IoBagAddSharp className='text-2xl' />  MY Added Product
//                             </NavLink>
//                         </li>}

//                         <li className="p-3 bg-white text-blue-500 rounded-lg mt-2 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition">
//                             <NavLink to="orderhistory" activeClassName="font-bold" className="flex justify-center items-center gap-3 p-2">
//                                 <FaHistory className='text-2xl' />  My  Order History
//                             </NavLink>
//                         </li>
//                         {userdata?.user_type !== 'buyer' || userdata?.user_type !== 'admin' && userdata?.user_type !== 'admin' && <li className="p-3 bg-white text-blue-500 rounded-lg mt-2 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition">
//                             <NavLink to="orderproduct" activeClassName="font-bold" className="flex justify-center items-center gap-3 p-2">
//                                 <VscGitPullRequestGoToChanges className='text-2xl' />  Request Order Product
//                             </NavLink>
//                         </li>}
//                         <li className="p-3 bg-red-500 text-white rounded-lg mt-2 cursor-pointer text-center hover:bg-red-700 transition flex justify-center items-center">
//                             <button onClick={handleLogout} className="flex justify-center items-center gap-3 p-2 text-center">
//                                 Logout <IoIosLogOut className='text-2xl' />
//                             </button>
//                         </li>
//                     </ul>
//                 </nav>
//             </aside>
//         </div >
//     );
// };

// export default Sidebar;


import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { contextAPI } from '../App';
import { CgProfile } from 'react-icons/cg';
import { MdLibraryAdd } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';
import { IoBagAddSharp } from 'react-icons/io5';
import { VscGitPullRequestGoToChanges } from 'react-icons/vsc';
import { IoIosLogOut } from 'react-icons/io';

const Sidebar = () => {
    const [pageLoad, setPageLoad] = useContext(contextAPI);



    const navigate = useNavigate()
    const [userdata, setUserdata] = useState(null);
    useEffect(() => {
        const username = sessionStorage.getItem("username");
        if (username) {
            fetch(`https://api-store-iota.vercel.app/authore/user/${username}/`)
                .then(res => res.json())
                .then(data => setUserdata(data))
        }
    }, []);



    const handleLogout = () => {
        fetch('https://api-store-iota.vercel.app/authore/logout/', {
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
                    navigate("/singin");
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
                            <NavLink to="/profile" activeClassName="font-bold" className="flex justify-center items-center gap-3 p-2 ">
                                <CgProfile className='text-2xl' /> Profile
                            </NavLink>
                        </li>

                        <li className="p-3 bg-white text-blue-500 rounded-lg mt-2 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition">
                            <NavLink to="dashboard" activeClassName="font-bold" className="flex justify-center items-center gap-3 p-2">
                                <MdLibraryAdd className='text-2xl' />  Dashboard
                            </NavLink>
                        </li>
                        {userdata?.user_type === 'seller' && <li className="p-3 bg-white text-blue-500 rounded-lg mt-2 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition">
                            <NavLink to="addproduct" activeClassName="font-bold" className="flex justify-center items-center gap-3 p-2">
                                <MdLibraryAdd className='text-2xl' />  Add Product
                            </NavLink>
                        </li>}
                        {userdata?.user_type === 'seller' && <li className="p-3 bg-white text-blue-500 rounded-lg mt-2 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition">
                            <NavLink to="myaddedproduct" activeClassName="font-bold" className="flex justify-center items-center gap-3 p-2">
                                <IoBagAddSharp className='text-2xl' />  MY Added Product
                            </NavLink>
                        </li>}

                        <li className="p-3 bg-white text-blue-500 rounded-lg mt-2 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition">
                            <NavLink to="orderhistory" activeClassName="font-bold" className="flex justify-center items-center gap-3 p-2">
                                <FaHistory className='text-2xl' />  My  Order History
                            </NavLink>
                        </li>
                        {userdata?.user_type !== 'buyer' && userdata?.user_type !== 'admin' && <li className="p-3 bg-white text-blue-500 rounded-lg mt-2 cursor-pointer text-center hover:bg-blue-500 hover:text-white transition">
                            <NavLink to="orderproduct" activeClassName="font-bold" className="flex justify-center items-center gap-3 p-2">
                                <VscGitPullRequestGoToChanges className='text-2xl' />  Request Order Product
                            </NavLink>
                        </li>}
                        <li className="p-3 bg-red-500 text-white rounded-lg mt-2 cursor-pointer text-center hover:bg-red-700 transition flex justify-center items-center">
                            <button onClick={handleLogout} className="flex justify-center items-center gap-3 p-2 text-center">
                                Logout <IoIosLogOut className='text-2xl' />
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div >
    );
};

export default Sidebar;