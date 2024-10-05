
// Orderproduct.jsx
import { useState, useEffect } from "react";
import { Chip } from "@material-tailwind/react";
import ProductStatus from "./ProductStatus";

const Orderproduct = () => {
    const [items, setItems] = useState([]); // State for storing items
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error handling


    // Fetch orders filtered by seller
    useEffect(() => {
        fetch(`https://api-clothify.onrender.com/store/orders/filter-by-seller/?seller=${sessionStorage.getItem('username')}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to fetch orders.");
                }
                return res.json();
            })
            .then(data => {
                setItems(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [loading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }



    return (
        <div className="p-4 max-h-screen overflow-y-scroll">
            <h2 className="text-2xl font-semibold mb-4">Order Products</h2>

            {items.length > 0 ? (
                <div>
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow rounded-lg p-4 mb-6 border border-gray-200"
                        >
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">{item.product.name}</h3>
                                <p>Ordered By: {item.product.user.username}</p>
                                <p>Price: ${item.price}</p>
                                <div className="flex gap-4">Subtotal: ${item.subTotal}</div>
                                <div className="flex gap-4 items-center">Status:


                                    <ProductStatus loading={loading} setLoading={setLoading} statuss={item.status} orderId={item.id} /></div>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium mb-2">Order Details:</h4>
                                <div
                                    className="flex items-center bg-gray-50 p-3 mb-3 rounded-lg border"
                                >
                                    <img
                                        src={item.product.image}
                                        alt={item.product.name}
                                        className="w-16 h-16 object-cover rounded mr-4"
                                    />
                                    <div>
                                        <p className="font-semibold">{item.product.name}</p>
                                        <p>Size: {item.size} / Color: {item.color}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price per item: ${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default Orderproduct;
