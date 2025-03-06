// import React, { useEffect, useState } from "react";
// import { toast, Bounce } from 'react-toastify';
// import {
//     Button,
//     Dialog,
//     DialogHeader,
//     DialogBody,
//     DialogFooter,
//     Input,
//     Textarea
// } from "@material-tailwind/react";

// const MyAddedProduct = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [open, setOpen] = useState(false);
//     const [currentProduct, setCurrentProduct] = useState(null);

//     useEffect(() => {
//         fetch(`https://api-store-iota.vercel.app/store/products/?user=${sessionStorage.getItem('username')}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setProducts(data?.results);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching products:", error);
//                 setLoading(false);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         fetch(`https://api-store-iota.vercel.app/store/products/${id}/`, {
//             method: "DELETE",
//         })
//             .then((res) => {
//                 if (res.status === 204) {
//                     setProducts(products.filter((product) => product.id !== id));
//                     toast.success("Delete Success", {
//                         position: "top-center",
//                         autoClose: 5000,
//                         theme: "light",
//                         transition: Bounce,
//                     });
//                 } else {
//                     console.error("Failed to delete product");
//                 }
//             })
//             .catch((error) => console.error("Error deleting product:", error));
//     };

//     const handleOpen = () => setOpen(!open);

//     const handleUpdate = (product) => {
//         setCurrentProduct(product);
//         setOpen(true);
//     };

//     const updateProduct = () => {
//         fetch(`https://api-store-iota.vercel.app/store/products/${currentProduct.id}/`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(currentProduct)
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 setProducts(products.map((p) => (p.id === data.id ? data : p)));
//                 setOpen(false);
//                 toast.success("Update Successful", {
//                     position: "top-center",
//                     autoClose: 3000,
//                     theme: "light",
//                     transition: Bounce,
//                 });
//             })
//             .catch((error) => console.error("Error updating product:", error));
//     };

//     if (loading) {
//         return <p className="text-center text-lg font-semibold">Loading...</p>;
//     }
//     return (
//         <div className="container mx-auto p-4">
//             <h2 className="text-2xl font-bold mb-4">My Added Products</h2>

//             {products.length === 0 ? (
//                 <p className="text-center text-gray-500">No products added yet.</p>
//             ) : (
//                 <div className="overflow-x-auto">
//                     <table className="w-full border-collapse border border-gray-200">
//                         <thead className="bg-gray-100">
//                             <tr>
//                                 <th className="border border-gray-300 p-2">Image</th>
//                                 <th className="border border-gray-300 p-2">Name</th>
//                                 <th className="border border-gray-300 p-2">Category</th>
//                                 <th className="border border-gray-300 p-2">Brand</th>
//                                 <th className="border border-gray-300 p-2">Price</th>
//                                 <th className="border border-gray-300 p-2">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {products.map((product) => (
//                                 <tr key={product.id} className="text-center">
//                                     <td className="border border-gray-300 p-2">
//                                         <img
//                                             src={product.image}
//                                             alt={product.name}
//                                             className="w-16 h-16 object-cover rounded-md mx-auto"
//                                         />
//                                     </td>
//                                     <td className="border border-gray-300 p-2">{product.name}</td>
//                                     <td className="border border-gray-300 p-2">{product.category}</td>
//                                     <td className="border border-gray-300 p-2">{product.brand}</td>
//                                     <td className="border border-gray-300 p-2 font-bold text-blue-600">
//                                         ${product.price}
//                                     </td>
//                                     <td className="border border-gray-300 h-full p-2 space-x-2 flex flex-col gap-2">
//                                         <button
//                                             onClick={() => handleUpdate(product)}
//                                             className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
//                                         >
//                                             Update
//                                         </button>
//                                         <button
//                                             onClick={() => handleDelete(product.id)}
//                                             className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//             <Dialog open={open} handler={handleOpen}>
//                 <DialogHeader>Update Product</DialogHeader>
//                 <DialogBody>
//                     {currentProduct && (
//                         <div className="flex flex-col gap-4">
//                             <Input
//                                 label="Name"
//                                 value={currentProduct.name}
//                                 onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
//                             />
//                             <Textarea
//                                 label="Description"
//                                 value={currentProduct.description}
//                                 onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
//                             />
//                             <Input
//                                 label="Price"
//                                 type="number"
//                                 value={currentProduct.price}
//                                 onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
//                             />
//                         </div>
//                     )}
//                 </DialogBody>
//                 <DialogFooter>
//                     <Button variant="text" color="red" onClick={handleOpen}>
//                         Cancel
//                     </Button>
//                     <Button variant="gradient" color="green" onClick={updateProduct}>
//                         Save Changes
//                     </Button>
//                 </DialogFooter>
//             </Dialog>
//         </div>
//     );
// };

// export default MyAddedProduct;



import React, { useEffect, useState } from "react";
import { toast, Bounce } from 'react-toastify';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea
} from "@material-tailwind/react";

const MyAddedProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        fetch(`https://api-store-iota.vercel.app/store/products/?user=${sessionStorage.getItem('username')}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data?.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        fetch(`https://api-store-iota.vercel.app/store/products/${id}/`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.status === 204) {
                    setProducts(products.filter((product) => product.id !== id));
                    toast.success("Delete Success", {
                        position: "top-center",
                        autoClose: 5000,
                        theme: "light",
                        transition: Bounce,
                    });
                } else {
                    console.error("Failed to delete product");
                }
            })
            .catch((error) => console.error("Error deleting product:", error));
    };

    const handleOpen = () => setOpen(!open);

    const handleUpdate = (product) => {
        setCurrentProduct(product);
        setOpen(true);
    };

    const updateProduct = () => {
        fetch(`https://api-store-iota.vercel.app/store/products/${currentProduct.id}/`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(currentProduct)
        })
            .then((res) => res.json())
            .then((data) => {
                setProducts(products.map((p) => (p.id === data.id ? data : p)));
                setOpen(false);
                toast.success("Update Successful", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                    transition: Bounce,
                });
            })
            .catch((error) => console.error("Error updating product:", error));
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Added Products</h2>
            {loading ? (
                <div className="space-y-4">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="animate-pulse flex space-x-4">
                            <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
                            <div className="flex-1 space-y-2 py-1">
                                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : products.length === 0 ? (
                <p className="text-center text-gray-500">No products added yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 p-2">Image</th>
                                <th className="border border-gray-300 p-2">Name</th>
                                <th className="border border-gray-300 p-2">Category</th>
                                <th className="border border-gray-300 p-2">Brand</th>
                                <th className="border border-gray-300 p-2">Price</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="text-center">
                                    <td className="border border-gray-300 p-2">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-16 h-16 object-cover rounded-md mx-auto"
                                        />
                                    </td>
                                    <td className="border border-gray-300 p-2">{product.name}</td>
                                    <td className="border border-gray-300 p-2">{product.category}</td>
                                    <td className="border border-gray-300 p-2">{product.brand}</td>
                                    <td className="border border-gray-300 p-2 font-bold text-blue-600">
                                        ${product.price}
                                    </td>
                                    <td className="border border-gray-300 h-full p-2 space-x-2 flex flex-col gap-2">
                                        <button
                                            onClick={() => handleUpdate(product)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Update Product</DialogHeader>
                <DialogBody>
                    {currentProduct && (
                        <div className="flex flex-col gap-4">
                            <Input
                                label="Name"
                                value={currentProduct.name}
                                onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
                            />
                            <Textarea
                                label="Description"
                                value={currentProduct.description}
                                onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
                            />
                            <Input
                                label="Price"
                                type="number"
                                value={currentProduct.price}
                                onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
                            />
                        </div>
                    )}
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="red" onClick={handleOpen}>
                        Cancel
                    </Button>
                    <Button variant="gradient" color="green" onClick={updateProduct}>
                        Save Changes
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default MyAddedProduct;