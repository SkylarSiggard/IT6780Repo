'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type IFormInput = {
    recipeName: string;
    ingredients: string;
    instructions: string;
    difficulty: string;
};

export default function AddRecipe() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const recipe = { ...data };
        console.log(recipe);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <div className='flex justify-between items-center mb-4'>
                <label htmlFor="recipeName" className='w-1/3 text-right pr-4 text-gray-700'>Name of Recipe</label>
                <div className='w-2/3'>
                    <input
                        id="recipeName"
                        {...register("recipeName", {
                            required: "Recipe name is required.",
                            maxLength: {
                                value: 50,
                                message: "Recipe name must be less than 50 characters.",
                            }
                        })}
                        className={`mt-1 block w-full px-3 py-2 border ${errors.recipeName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900`}
                    />
                    {errors.recipeName && <p className="text-sm text-red-500 mt-1">{errors.recipeName.message}</p>}
                </div>
            </div>

            <div className='flex justify-between items-center mb-4'>
                <label htmlFor="ingredients" className='w-1/3 text-right pr-4 text-gray-700'>Ingredients</label>
                <div className='w-2/3'>
                    <textarea
                        id="ingredients"
                        {...register("ingredients", {
                            required: "Ingredients are required.",
                            maxLength: {
                                value: 500,
                                message: "Ingredients must be less than 500 characters.",
                            }
                        })}
                        className={`mt-1 block w-full px-3 py-2 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900`}
                    />
                    {errors.ingredients && <p className="text-sm text-red-500 mt-1">{errors.ingredients.message}</p>}
                </div>
            </div>

            <div className='flex justify-between items-center mb-4'>
                <label htmlFor="instructions" className='w-1/3 text-right pr-4 text-gray-700'>Instructions</label>
                <div className='w-2/3'>
                    <textarea
                        id="instructions"
                        {...register("instructions", {
                            required: "Instructions are required.",
                            maxLength: {
                                value: 500,
                                message: "Instructions must be less than 500 characters.",
                            }
                        })}
                        className={`mt-1 block w-full px-3 py-2 border ${errors.instructions ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900`}
                    />
                    {errors.instructions && <p className="text-sm text-red-500 mt-1">{errors.instructions.message}</p>}
                </div>
            </div>

            <div className='flex justify-between items-center mb-4'>
                <label htmlFor="difficulty" className='w-1/3 text-right pr-4 text-gray-700'>Difficulty</label>
                <div className='w-2/3'>
                    <select id="difficulty"
                            {...register('difficulty', {
                                required: "Difficulty is required.",
                            })}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.difficulty ? 'border-red-500' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900`}
                    >
                        <option value="">Select difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    {errors.difficulty && <p className="text-sm text-red-500 mt-1">{errors.difficulty.message}</p>}
                </div>
            </div>

            <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >Submit</button>
        </form>
    );
}