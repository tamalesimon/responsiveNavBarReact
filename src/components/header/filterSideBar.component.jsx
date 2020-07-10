import React from 'react'


class FilterSideBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state ={

        }
    }
    

    render() {
        return (
            <div className=" bg-yellow-400 sm:w-72 flex flex-col align-middle">
                <div className="px-4 py-4 mx-2">
                    <h2>Filter</h2>
                    <form>
                        <div className="relative w-64 min-w-xl">
                            <div className=" justify-evenly">
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-500">Neigbourhood</span>
                                    <select className="mt-1 form-select block w-full text-gray-700 shadow leading-tight hover:bg-transparent focus:bg-transparent">
                                        <option>Surbub</option>
                                    </select>
                                </label>
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-500">Interior type</span>
                                    <select className="mt-1 form-select block w-full text-gray-700 shadow leading-tight hover:bg-transparent focus:bg-transparent">
                                        <option>self contained</option>
                                    </select>
                                </label>
                                <label className="block">
                                    <span className="text-sm font-semibold text-gray-500">Bathrooms</span>
                                    <select className="mt-1 form-select block w-full text-gray-700 shadow leading-tight hover:bg-transparent focus:bg-transparent">
                                        <option>2</option>
                                    </select>
                                </label>
                            </div>
                            <div className="border-t border-gray-900">
                                <label className=" block">
                                    <span className="text-sm font-semibold text-gray-500">
                                        Price 
                                    </span>
                                    <input className=" form-range" type="range" min="300000" max="2000000" value="100000" step="10"/>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FilterSideBar;
