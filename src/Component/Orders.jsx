import { useState, useEffect } from "react";

const Orders = () => {
    const [orders, setOrder] = useState([])

    useEffect(() => {

        fetch('https://api-clothify.onrender.com/store/orders/history/customer/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            }
        })

            .then(res => res.json())
            .then(data => setOrder(data))
            .catch(error => console.error('Error fetching cart:', error));
    }, []);

    return (
        <div className="p-4 max-h-screen overflow-y-scroll">
            <h2 className="text-2xl font-semibold mb-4">Order History</h2>
            {orders?.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders?.map((order) => (
                    <div
                        key={order.id}
                        className="bg-white shadow rounded-lg p-4 mb-6 border border-gray-200"
                    >
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Order ID: {order.id}</h3>
                            <p>Ordered At: {new Date(order.ordered_at).toLocaleString()}</p>
                            <p>Total: ${order.total}</p>
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
                                        <p>
                                            {item.size} / {item.color}
                                        </p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ${item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>

    );
};

export default Orders;