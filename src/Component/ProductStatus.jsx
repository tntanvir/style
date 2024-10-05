

// ProductStatus.jsx
import { useState } from 'react';
import { toast } from 'react-toastify';

const ProductStatus = ({ statuss, orderId, loading, setLoading }) => {
    const [status, setStatus] = useState(statuss);
    const [loadingm, setLoadingm] = useState(false);
    const [error, setError] = useState('');
    const [id, setId] = useState(orderId);

    // Function to update the order status
    const updateStatus = (newStatus) => {
        if (!newStatus) {
            toast.error('Please select a status');
            return;
        }

        console.log('Updating status to:', newStatus);

        setLoadingm(true);
        setError('');

        // Make the API request using fetch
        fetch(`https://api-clothify.onrender.com/store/orders/update-status/${id}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
            body: JSON.stringify({ status: newStatus }),
        })
            .then(response => {
                console.log('Response Status:', response.status);
                return response.json();
            })
            .then(data => {
                console.log('Response Data:', data);
                toast.success('Order status updated successfully');
                setLoading(!loading);
            })
            .catch(error => {
                console.error('Error:', error);
                setError(error.message || 'Failed to update the status');
                toast.error('Failed to update the status');
            })
            .finally(() => {
                setLoadingm(false);
            });
    };


    // Handle status change
    const handleStatusChange = (e) => {
        const selectedStatus = e.target.value;
        setStatus(selectedStatus);
        updateStatus(selectedStatus);
    };

    return (
        <div className='flex justify-center items-center'>

            <div className=''>
                <select
                    value={status}
                    onChange={handleStatusChange}
                    className="p-2 border rounded-md w-full mb-4 "
                    disabled={loadingm}
                >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="rejected">Rejected</option>
                </select>
            </div>


        </div>
    );
};

export default ProductStatus;

