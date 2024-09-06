import React from 'react';
import Link from 'next/link';
import RecipeList from "@/app/dashboard/recipeList/page";

export default function Dashboard() {
    return (
        <div className="w-full">
            <div
                className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-r-0 border-b-gray-600"
                aria-label="Global"
            >
                <Link href="/dashboard/addRecipe" className="mr-4">Add Recipe</Link>
                <input type="text" className="p-2 border" placeholder="Search Recipe" />
            </div>
            <div className="mt-5">
            <RecipeList/>
            </div>
        </div>
    );
}