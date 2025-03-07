// import { useState, useEffect } from "react";
// import DashboardChart from "./DashboardChart";

// const Profile = () => {
//     const [userdata, setUserdata] = useState(null);
//     const [formData, setFormData] = useState({
//         image: "",
//         name: "",
//         phone: "",
//         location: "",
//     });
//     const [showImageInput, setShowImageInput] = useState(false);

//     useEffect(() => {
//         const username = sessionStorage.getItem("username");
//         if (username) {
//             fetch(`https://api-store-iota.vercel.app/authore/user/${username}/`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setUserdata(data);
//                     setFormData({
//                         image: data.image || "",
//                         name: data.name || "",
//                         phone: data.phone || "",
//                         location: data.location || "",
//                     });
//                 })
//                 .catch(err => console.error("Error fetching user data:", err));
//         }
//     }, []);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleUpdate = () => {
//         const username = sessionStorage.getItem("username");
//         if (!username) return;

//         fetch(`https://api-store-iota.vercel.app/authore/user/${username}/`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//         })
//             .then(res => res.json())
//             .then(data => {
//                 setUserdata(data);
//                 setShowImageInput(false);
//                 alert("Profile updated successfully!");
//             })
//             .catch(err => console.error("Error updating profile:", err));
//     };

//     return (
//         <div className="relative flex justify-center items-center min-h-screen ">

//             {/* Background Grid */}
//             <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

//             <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative z-10">
//                 <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Profile</h1>

//                 {/* Profile Image */}
//                 <div className="flex flex-col items-center mb-4">
//                     <img
//                         src={formData.image || "https://via.placeholder.com/100"}
//                         alt={userdata?.name || "User"}
//                         className="rounded-full w-24 h-24 object-cover border-4 border-blue-500 shadow-lg"
//                     />
//                     <button
//                         onClick={() => setShowImageInput(!showImageInput)}
//                         className="mt-2 px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//                     >
//                         Change Image
//                     </button>

//                     {showImageInput && (
//                         <input
//                             type="text"
//                             name="image"
//                             value={formData.image}
//                             onChange={handleChange}
//                             placeholder="Enter image URL"
//                             className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
//                         />
//                     )}
//                 </div>

//                 {/* User Information */}
//                 <div className="space-y-3">
//                     <div>
//                         <label className="block text-gray-600 font-medium">Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-gray-600 font-medium">Email</label>
//                         <p className="w-full p-2 bg-gray-100 rounded-md">{userdata?.user?.email || "Not available"}</p>
//                     </div>

//                     <div>
//                         <label className="block text-gray-600 font-medium">Phone</label>
//                         <input
//                             type="text"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-gray-600 font-medium">Location</label>
//                         <input
//                             type="text"
//                             name="location"
//                             value={formData.location}
//                             onChange={handleChange}
//                             className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-gray-600 font-medium">User Type</label>
//                         <p className="w-full p-2 bg-gray-100 rounded-md">{userdata?.user_type || "Not available"}</p>
//                     </div>
//                 </div>

//                 {/* Update Button */}
//                 <button
//                     onClick={handleUpdate}
//                     className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
//                 >
//                     Update Profile
//                 </button>
//             </div>
//             {/* <DashboardChart /> */}
//         </div>
//     );
// };

// export default Profile;


import { useState, useEffect } from "react";
import { toast, Bounce } from 'react-toastify';

const Profile = () => {
    const [userdata, setUserdata] = useState(null);
    const [formData, setFormData] = useState({
        image: "",
        name: "",
        phone: "",
        location: "",
    });
    const [showImageInput, setShowImageInput] = useState(false);

    useEffect(() => {
        const username = sessionStorage.getItem("username");
        if (username) {
            fetch(`https://api-store-iota.vercel.app/authore/user/${username}/`)
                .then(res => res.json())
                .then(data => {
                    setUserdata(data);
                    setFormData({
                        image: data.image || "",
                        name: data.name || "",
                        phone: data.phone || "",
                        location: data.location || "",
                    });
                })
                .catch(err => console.error("Error fetching user data:", err));
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        const username = sessionStorage.getItem("username");
        if (!username) return;

        fetch(`https://api-store-iota.vercel.app/authore/user/${username}/`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                setUserdata(data);
                setShowImageInput(false);
                toast.success('Profile updated successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    onClose: () => navigate('/profile'),
                });
            })
            .catch(err => console.error("Error updating profile:", err));
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gray-100 w-full">

            {/* Background Grid */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] bg-[size:5rem_3rem]"></div>

            {formData.image ? (<div className="bg-white p-10 rounded-xl shadow-2xl md:max-w-4xl w-full flex flex-col items-center relative z-10">
                <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Profile
                </h1>

                {/* Profile Image */}
                <div className="flex flex-col items-center mb-6">
                    <img
                        src={formData.image || "https://via.placeholder.com/150"}
                        alt={userdata?.name || "User"}
                        className="rounded-full w-28 h-28 object-cover border-4 border-blue-500 shadow-md"
                    />
                    <button
                        onClick={() => setShowImageInput(!showImageInput)}
                        className="mt-3 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Change Image
                    </button>

                    {showImageInput && (
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                            className="w-full mt-3 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    )}
                </div>

                {/* User Information */}
                <div className="md:grid  grid-cols-2 gap-6 w-full">
                    <div>
                        <label className="block text-gray-600 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Email</label>
                        <p className="w-full p-3 bg-gray-100 rounded-md">{userdata?.user?.email || "Not available"}</p>
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-600 font-medium">User Type</label>
                        <p className="w-full p-3 bg-gray-100 rounded-md">{userdata?.user_type || "Not available"}</p>
                    </div>
                </div>

                {/* Update Button */}
                <button
                    onClick={handleUpdate}
                    className="w-full mt-6 p-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Update Profile
                </button>
            </div>) : (<div className="animate-pulse w-full flex flex-col items-center">
                <div className="w-28 h-28 bg-gray-300 rounded-full mb-4"></div>
                <div className="h-4 w-32 bg-gray-300 rounded mb-6"></div>
                <div className="grid grid-cols-2 gap-6 w-full">
                    <div className="h-12 bg-gray-300 rounded"></div>
                    <div className="h-12 bg-gray-300 rounded"></div>
                    <div className="h-12 bg-gray-300 rounded"></div>
                    <div className="h-12 bg-gray-300 rounded"></div>
                    <div className="col-span-2 h-12 bg-gray-300 rounded"></div>
                </div>
                <div className="mt-6 h-12 w-full bg-gray-300 rounded"></div>
            </div>)}
            {/* <DashboardChart /> */}
        </div>
    );
};

export default Profile;
