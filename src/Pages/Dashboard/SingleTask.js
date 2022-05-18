import React from 'react';

const SingleTask = ({ index, singleTask, refetch, setDeleting }) => {
    const{taskName, taskDescription} = singleTask
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{taskName}</td>
            <td>{taskDescription}</td>
            <td>
            <label  onClick={() => setDeleting(singleTask)}  for="confirm-modal-complete" class="btn btn-success btn-xs">Complete</label>

            </td>


            <td>
                <label  onClick={() => setDeleting(singleTask)}  for="confirm-modal-delete" class="btn btn-error btn-xs">Delete</label>
            </td>

        </tr>
    )
};

export default SingleTask;