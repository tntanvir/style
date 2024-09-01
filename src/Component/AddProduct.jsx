import { useState } from 'react';
import { Button, Input, Textarea, Select as MaterialSelect, Option } from '@material-tailwind/react';
import Select from 'react-select';
import { useEffect } from 'react';

const AddProduct = () => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [isAvailable, setIsAvailable] = useState(true);
    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);

    const sizeOptions = [
        { value: 'xl', label: 'Extra Large' },
        { value: 'm', label: 'Medium' },
        { value: 'l', label: 'Large' },
    ];

    const colorOptions = [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();


        console.log(sessionStorage.getItem('token'))

        // Create a new FormData object
        const formData = new FormData();

        // Append form data to the FormData object
        formData.append('image', image);
        formData.append('name', name);
        formData.append('brand', brand);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('quantity', quantity);
        formData.append('is_available', isAvailable);
        formData.append('size', size.map(s => s.value).join(',')); // Join multiple values with a comma
        formData.append('color', color.map(c => c.value).join(',')); // Join multiple values with a comma

        try {
            const response = await fetch('https://api-clothify.onrender.com/store/products/', {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${sessionStorage.getItem('token')}`,
                    // Note: 'Content-Type' header should not be set when sending FormData
                },
                body: formData,
            });

            const data = await response.json();
            console.log(data)

        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const [cata, setCata] = useState(null)
    useEffect(() => {
        fetch('https://api-clothify.onrender.com/store/category/')
            .then(res => res.json())
            .then(data => {
                setCata(data)
            })
    }, [])


    return (
        <div className="min-h-screen flex justify-center py-5">
            <div className="w-full md:w-2/3 lg:w-1/2 p-5 shadow-lg bg-white rounded-md">
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <Input
                        type="url"
                        label="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        label="Brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        required
                    />
                    <Textarea
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <Input
                        type="number"
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <MaterialSelect label="Category" value={category} onChange={(e) => setCategory(e)}>
                        {/* Add your category options here */}
                        {
                            cata && cata.map((e, i) => (
                                <Option key={i} value={e.name}>{e.name}</Option>

                            ))
                        }
                        {/* Add more options as needed */}
                    </MaterialSelect>
                    <Input
                        type="number"
                        label="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                    <MaterialSelect label="Available" value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)}>
                        <Option value={true}>Yes</Option>
                        <Option value={false}>No</Option>
                    </MaterialSelect>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Size</label>
                        <Select
                            isMulti
                            options={sizeOptions}
                            value={size}
                            onChange={(selected) => setSize(selected)}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Color</label>
                        <Select
                            isMulti
                            options={colorOptions}
                            value={color}
                            onChange={(selected) => setColor(selected)}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>
                    <Button type="submit" className="mt-5" fullWidth>
                        Add Product
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
