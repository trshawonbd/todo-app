import React from 'react';

const CompleteModal = ({singleTask,completing, refetch, setCompleting}) => {
    const{_id} = completing;
    /* const {taskName} = completing; */
    const handleComplete = (id) =>{
        console.log(id)
    }
    return (
        <div>
            <input type="checkbox" id="confirm-modal-complete" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-green-700">Are you sure to complete {/* {taskName} */}</h3>
                    <p class="py-4">congrates, you have completed your task. Keep it up.</p>
                    <div class="modal-action">
                    <button onClick={() => handleComplete(_id)} class="btn btn-success btn-xs">Complete Task</button>
                        <label for="confirm-modal-complete" class="btn btn-xs">close</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CompleteModal;