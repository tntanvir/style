import React, { useState, useEffect } from "react";
import AdminApproveStatus from "./AdminApproveStatus";

const OrderList = () => {
    // JSON data (replace this with API fetch if needed)
    const [orders, setOrders] = useState([]);
    const [load, setLoad] = useState(true);



    useEffect(() => {
        // Replace with actual API call if needed
        fetch('https://api-store-iota.vercel.app/store/admin/porducthistory/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [load]);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Order List</h2>

            {orders.length === 0 ? (
                <p>Loading orders...</p>
            ) : (
                orders.map((order) => (
                    <div key={order.id} className="border p-4 mb-6 rounded-lg shadow-md">
                        {/* User Details */}
                        <div className="mb-3">
                            <h3 className="text-xl font-semibold">Order ID: {order.id}</h3>
                            <p><strong>Buyer:</strong> {order.usermore.name} ({order.user.username})</p>
                            <p><strong>Location:</strong> {order.usermore.location}</p>
                            <p><strong>Phone:</strong> {order.usermore.phone}</p>
                            <p><strong>Total Price:</strong> ${order.total}</p>
                            <p>
                                <AdminApproveStatus status={order.status} id={order.id} load={load} setLoad={setLoad} />
                            </p>
                        </div>

                        {/* Ordered Items */}
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Ordered Items:</h4>
                            {order.items.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-3 border-b last:border-none">
                                    <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded" />
                                    <div>
                                        <p><strong>Product:</strong> {item.product.name}</p>
                                        <p><strong>Category:</strong> {item.product.category}</p>
                                        <p><strong>Brand:</strong> {item.product.brand}</p>
                                        <p><strong>Price:</strong> ${item.price}</p>
                                        <p><strong>Quantity:</strong> {item.quantity}</p>
                                        <p><strong>Size:</strong> {item.size}</p>
                                        <p><strong>Color:</strong> {item.color}</p>
                                        <p><strong>Status:</strong> <span className="text-red-500">{item.status}</span></p>
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

export default OrderList;
