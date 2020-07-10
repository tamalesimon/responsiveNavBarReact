import React from 'react'

function Search () {
    return (
        <div>
            <form className="sm:flex sm:justify-between px-5 ">
                <div class="border-b border-b-2 border-gray-500 py-2 mr-1 md:w-5/6">
                        <div class="relative">                        
                            <input class="appearance-none bg-transparent border-none text-gray-700 mr-3 text-2xl pl-10 py-1 px-2 leading-tight focus:outline-none" placeholder="Search by keyword" />
                            <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg class="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                            </div>
                        </div>   
                </div>
                <div class="border-b border-b-2 border-gray-500 py-2 ml-1">
                    <div class="relative">
                        <div className="absolute inset-y-0 px-4 left-0 flex items-center text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0l20 8-8 4-2 8z"/></svg>    
                        </div>                       
                        <select class="appearance-none bg-transparent border-none text-gray-700 mr-3 pl-10 py-1 px-2 leading-tight focus:outline-none">
                            <option>Muyenga</option>
                            <option>Kulambiro</option>
                            <option>Ntinda</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>  
                </div>
            </form>
        </div>

    )
}

export default Search;
