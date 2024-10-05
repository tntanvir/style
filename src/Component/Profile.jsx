import { useState } from "react";
import { useEffect } from "react";

const profile = () => {

    const [userdata, setUserdata] = useState(null);



    useEffect(() => {
        const username = sessionStorage.getItem("username");
        if (username) {
            fetch(`https://api-clothify.onrender.com/authore/user/${username}/`)
                .then(res => res.json())
                .then(data => setUserdata(data))
        }
    }, []);
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}


            {/* Main Content */}
            <main className="flex-1 p-10">
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

                {/* Dashboard Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Orders Overview */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h2 className="text-xl font-semibold mb-4">Orders Overview</h2>
                        <p className="text-gray-700">Total Orders: <span className="font-bold">10</span></p>
                        <p className="text-gray-700">Pending: <span className="font-bold">2</span></p>
                        <p className="text-gray-700">Completed: <span className="font-bold">8</span></p>
                    </div>

                    {/* Wishlist */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
                        <p className="text-gray-700">Items in Wishlist: <span className="font-bold">5</span></p>
                    </div>

                    {/* Account Info */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                        <p className="text-gray-700">Name: <span className="font-bold">{userdata?.name}</span></p>
                        <p className="text-gray-700">Email: <span className="font-bold">{userdata?.user?.email}</span></p>
                        <p className="text-gray-700">Phone: <span className="font-bold">{userdata?.phone}</span></p>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default profile;