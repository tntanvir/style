import React from 'react';
import { Bounce, toast } from 'react-toastify';

const AdminApproveStatus = ({ status, id, load, setLoad }) => {


    const updateStatus = (newStatus) => {

        fetch(`https://api-store-iota.vercel.app/store/admin/orders/${id}/status/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
            body: JSON.stringify({ status: newStatus }),
        })
            .then(res => res.json())
            .then(data => {
                setLoad(!load);
                toast.success(data.message, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce

                });
            })

    };
    const handleStatusChange = (e) => {
        const selectedStatus = e.target.value;
        updateStatus(selectedStatus);
    };
    return (
        <div>
            {/* <strong>Status:</strong> <span className="text-blue-600">{status}</span> */}
            <div className=''>

                <div className='w-fit'>
                    <select
                        value={status}
                        onChange={handleStatusChange}
                        className="p-2 border rounded-md w-full mb-4 "
                    // disabled={loadingm}
                    >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>


            </div>
        </div>
    );
};

export default AdminApproveStatus;