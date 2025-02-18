// import React, { useEffect, useState } from "react";
// import { toast, Bounce } from 'react-toastify';

// import {
//     Button,
//     Dialog,
//     DialogHeader,
//     DialogBody,
//     DialogFooter,
// } from "@material-tailwind/react";

// const MyAddedProduct = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch(`http://127.0.0.1:8000/store/products/?user=${sessionStorage.getItem('username')}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setProducts(data.results);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching products:", error);
//                 setLoading(false);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         fetch(`http://127.0.0.1:8000/store/products/${id}/`, {
//             method: "DELETE",
//         })
//             .then((res) => {
//                 if (res.status === 204) {
//                     setProducts(products.filter((product) => product.id !== id));
//                     toast.success("Delete Success", {
//                         position: "top-center",
//                         autoClose: 5000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "light",
//                         transition: Bounce,

//                     });

//                 } else {
//                     console.error("Failed to delete product");
//                 }
//             })
//             .catch((error) => console.error("Error deleting product:", error));
//     };

//     const [open, setOpen] = useState(false);

//     const handleOpen = () => setOpen(!open);
//     const handleUpdate = (id) => {
//         setOpen(true)
//         console.log("Update product with ID:", id);
//         // Navigate to update form or open a modal for editing
//         // fetch(`http://127.0.0.1:8000/store/products/${id}/`)
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
//                                 <th className="border border-gray-300 p-2">Availability</th>
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
//                                     <td
//                                         className={`border border-gray-300 p-2 font-semibold ${product.is_available ? "text-green-500" : "text-red-500"
//                                             }`}
//                                     >
//                                         {product.is_available ? "Available" : "Out of Stock"}
//                                     </td>
//                                     <td className="border border-gray-300 p-2 space-x-2 flex flex-col gap-3">
//                                         <button
//                                             onClick={() => handleUpdate(product.id)}
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
//             <div>
//                 <Button onClick={handleOpen} variant="gradient">
//                     Open Modal
//                 </Button>
//                 <Dialog open={open} handler={handleOpen}>
//                     <DialogHeader>Its a simple modal.</DialogHeader>
//                     <DialogBody>
//                         The key to more success is to have a lot of pillows. Put it this way,
//                         it took me twenty five years to get these plants, twenty five years of
//                         blood sweat and tears, and I&apos;m never giving up, I&apos;m just
//                         getting started. I&apos;m up to something. Fan luv.
//                     </DialogBody>
//                     <DialogFooter>
//                         <Button
//                             variant="text"
//                             color="red"
//                             onClick={handleOpen}
//                             className="mr-1"
//                         >
//                             <span>Cancel</span>
//                         </Button>
//                         <Button variant="gradient" color="green" onClick={handleOpen}>
//                             <span>Confirm</span>
//                         </Button>
//                     </DialogFooter>
//                 </Dialog>
//             </div>
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
        fetch(`http://127.0.0.1:8000/store/products/?user=${sessionStorage.getItem('username')}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:8000/store/products/${id}/`, {
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
        fetch(`http://127.0.0.1:8000/store/products/${currentProduct.id}/`, {
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

    if (loading) {
        return <p className="text-center text-lg font-semibold">Loading...</p>;
    }
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Added Products</h2>

            {products.length === 0 ? (
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
