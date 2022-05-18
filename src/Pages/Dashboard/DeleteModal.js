import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deleting, refetch, setDeleting}) => {
    console.log('deleting', deleting)
    const {taskName, _id} = deleting;

    const handleDelete = () =>{
        fetch(`http://localhost:5000/task/${_id}`,{
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log("DeletedData", data);
            if(data.deletedCount){
                toast.success(` ${taskName} is deleted`);
                setDeleting(null);
                refetch();
                
                
            }
        })

    }
    return (
        <div>
            {/* <!-- The button to open modal --> */}
            

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="confirm-modal-delete" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-700">Are you sure to delete {taskName}</h3>
                    <p class="py-4">If you delete, this will be removed permanently. There will be no other way to get back the data.</p>
                    <div class="modal-action">
                    <button onClick={() => handleDelete()} class="btn btn-error btn-xs">Remove Task</button>
                        <label for="confirm-modal-delete" class="btn btn-xs">close</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;