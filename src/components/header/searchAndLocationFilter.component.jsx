import React from 'react'

const searchAndLocationFilter = () => {
    return (
        <div className="bg-gray-400">
            <div className="flex flex-row">
            <form>
                <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <h2>Testing</h2>
                    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Place, Neighbourhood and Street" aria-label="Full name"/>
                        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                        </svg>
                        </button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default searchAndLocationFilter;
