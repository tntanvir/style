import { useState, useEffect } from "react";
import ShowUserInfo from "./ShowUserInfo";
import { Chip } from "@material-tailwind/react";
import UpdateOrderStatus from "./UpdateOrderStatus";
import ProductStatus from "./ProductStatus";

const Orders = () => {
    const [orders, setOrders] = useState([]); // Renamed `setOrder` to `setOrders` to match the array
    const [adminHistory, setAdminHistory] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false); // Tracks if the user is an admin
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track errors

    // Fetch customer order history
    useEffect(() => {
        fetch('https://api-clothify.onrender.com/store/orders/history/customer/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to fetch customer orders.");
                }
                return res.json();
            })
            .then(data => {
                setOrders(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Fetch admin product history if user is admin
    useEffect(() => {
        const username = sessionStorage.getItem("username");
        if (username) {
            fetch(`https://api-clothify.onrender.com/authore/user/${username}/`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Failed to fetch user info.");
                    }
                    return res.json();
                })
                .then(data => {
                    if (data.user_type === "admin") {
                        setIsAdmin(true);
                        console.log('admin');
                        fetch('https://api-clothify.onrender.com/store/admin/porducthistory/', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Token ${sessionStorage.getItem('token')}`
                            }
                        })
                            .then(res => {
                                if (!res.ok) {
                                    throw new Error("Failed to fetch admin history.");
                                }
                                return res.json();
                            })
                            .then(adminData => {
                                setAdminHistory(adminData);
                                setLoading(false);
                            })
                            .catch(error => {
                                setError(error.message);
                                setLoading(false);
                            });
                    }
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="p-4 max-h-screen overflow-y-scroll">
            <h2 className="text-2xl font-semibold mb-4">Order History</h2>

            {isAdmin ? (
                adminHistory && adminHistory.length > 0 ? (
                    <div>
                        {adminHistory.map((product) => (
                            (product.items).length > 0 && <div
                                key={product.id}
                                className="bg-white shadow rounded-lg p-4 mb-6 border border-gray-200"
                            >
                                <div className="flex justify-between items-start ">

                                    <ShowUserInfo usermore={product?.usermore} />
                                    <div >
                                        <UpdateOrderStatus statuss={product?.status} orderId={product?.id} />
                                    </div>
                                </div>
                                <p><span className='font-semibold'>Price: </span> ${product.total}</p>
                                <div>
                                    <h4 className="text-lg font-medium mb-2">Items:</h4>
                                    {product.items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center bg-gray-50 p-3 mb-3 rounded-lg border"
                                        >
                                            <img
                                                src={item.product.image}
                                                alt={item.product.name}
                                                className="w-16 h-16 object-cover rounded mr-4"
                                            />
                                            <div>
                                                <p className="font-semibold">{item.product.name}</p>
                                                <p>{item.size} / {item.color}</p>
                                                <p>Quantity: {item.quantity}</p>
                                                <p>Price: ${item.price}</p>
                                                <p>Status: {item.status}</p>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No product history found for admin.</p>
                )
            ) : (
                orders.length > 0 ? (
                    <div>
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white shadow rounded-lg p-4 mb-6 border border-gray-200"
                            >
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold">Order ID: {order.id}</h3>
                                    <p>Ordered At: {new Date(order.ordered_at).toLocaleString()}</p>
                                    <p>Total: ${order.total}</p>
                                    <div className="flex gap-4">status : <Chip value={`${order?.status}`} /> </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium mb-2">Items:</h4>
                                    {order.items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center bg-gray-50 p-3 mb-3 rounded-lg border"
                                        >
                                            <img
                                                src={item.product.image}
                                                alt={item.product.name}
                                                className="w-16 h-16 object-cover rounded mr-4"
                                            />
                                            <div>
                                                <p className="font-semibold">{item.product.name}</p>
                                                <p>{item.size} / {item.color}</p>
                                                <p>Quantity: {item.quantity}</p>
                                                <p>Price: ${item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No orders found.</p>
                )
            )}
        </div>
    );
};

export default Orders;
