import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import SingleTask from './SingleTask';

const AllTasks = () => {
    const [deleting, setDeleting] = useState(null);
    const { data: tasks, isLoading, refetch } = useQuery('tasks', () => fetch('http://localhost:5000/task', {

    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl'>Task List : {tasks.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks?.map((singleTask, index) => <SingleTask
                                key={index}
                                index={index}
                                singleTask={singleTask}
                                refetch={refetch}
                                setDeleting = {setDeleting}
                                
                            ></SingleTask>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deleting && <DeleteModal
                deleting={deleting}
                refetch={refetch}
                setDeleting = {setDeleting}
                ></DeleteModal>
            }
        </div>
    );
};

export default AllTasks;