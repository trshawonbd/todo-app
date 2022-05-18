import React from 'react';
import { useForm } from 'react-hook-form';

const AddTask = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data)
        /* navigate('/appointment'); */
       
        
    
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
                            placeholder="Gist of Your Task"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
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