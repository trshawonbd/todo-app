import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddTask = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async ( data, e) => {
        console.log(data)
        /* navigate('/appointment'); */

        const task ={
            taskName: data.title,
            taskDescription: data.description,
        }
        reset();

        fetch(`http://localhost:5000/task`,{
            method: "POST",
            headers: {
                'content-type' : 'application/json',
                
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
                .then (data => {
                    console.log('Inserted', data);
                    if (data.insertedId){
                        toast.success(`Task is added successfully`);
                        
                    }
                    else{
                        toast.error("Something went wrong, please try again")
                        
                    }
                })
       
        
    
    }




    return (
        <div>
            


            <div className='flex h-content justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Please Add Your Task</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Task Title</span>
                        </label>
                        <input type="text"
                        name='title'
                            placeholder="Gist of Your Task"
                            className="input input-bordered w-full max-w-xs"
                            {...register("title", {
                                required:{
                                    value: true,
                                    message: 'Name is required'
                                },
                              })}
                            />
                        <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Task Description</span>
                        </label>
                        <textarea 
                        type="text"
                        name='description'
                        class="textarea w-full max-w-xs textarea-bordered h-24"
                         placeholder="Description"
                        
                            {...register("description", {
                                required:{
                                    value: true,
                                    message: 'Name is required'
                                },
                              })}
                            />
                        <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
            
                        </label>
                    </div>
 

 



                
                    <input className='btn btn-secondary w-full max-w-xs text-white' type="submit" value='Add Task' />
                </form>
                

            </div>
        </div>
    </div>
            
        </div>
    );
};

export default AddTask;