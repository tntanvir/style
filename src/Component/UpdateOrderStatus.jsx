



import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const UpdateOrderStatus = ({ statuss, orderId }) => {
    const [status, setStatus] = useState(statuss);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Function to update the order status
    const updateStatus = (newStatus) => {
        if (!newStatus) {
            toast.error('Please select a status');
            return;
        }

        setLoading(true);
        setError('');

        // Make the API request using fetch
        fetch(`https://api-clothify.onrender.com/store/admin/orders/${orderId}/status/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
            body: JSON.stringify({ status: newStatus }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update the status');
                }
                return response.json();
            })
            .then(data => {
                toast.success('Order status updated successfully');
            })
            .catch(error => {
                setError(error.message || 'Failed to update the status');
                toast.error('Failed to update the status');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // Handle status change with debounce to avoid frequent API calls
    const handleStatusChange = (e) => {
        const selectedStatus = e.target.value;
        setStatus(selectedStatus);

        // Adding a small delay before triggering the API call
        setTimeout(() => {
            updateStatus(selectedStatus);
        }, 500); // Adjust the delay as needed
    };

    return (
        <div className="">
            {/* Dropdown to select status */}
            <select
                value={status}
                onChange={handleStatusChange}
                className="p-2 border rounded-md w-full mb-4"
                disabled={loading} // Disable while updating
            >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="rejected">Rejected</option>
            </select>

            {/* Error Message */}
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
};

export default UpdateOrderStatus;
