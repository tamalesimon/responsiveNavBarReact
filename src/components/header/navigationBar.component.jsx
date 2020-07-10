import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons'



class NavigationBar extends React.Component {
    constructor (){
        super()

        this.state = {
            isOpen: false
        };

        this.toggleNavMenu = this.toggleNavMenu.bind(this);

    } toggleNavMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        let menuIcon;

        if (this.state.isOpen){
            menuIcon = (
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
               );
        } else {
            menuIcon = (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            );
            
        }

    return (
        <>
            <div className="bg-gray-900">
                <header className="sm:flex sm:justify-between py-1">
                    <div className="flex items-center justify-between px-4 py-2">
                        <div class="px-4 flex items-center text-xl text-white">
                            <FontAwesomeIcon icon={faHome} className="pr-1" />
                            <h1 class=" text-white text-xl">Real-Estate</h1>
                        </div>
                        <div className="sm:hidden">
                            <div onClick={this.toggleNavMenu} className="text-gray-400 hover:text-white block focus:text-white focus:outline-none">
                                <svg className=" h-5 w-5 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    {menuIcon}
                                </svg>
                            </div>
                        </div>
                        
                    </div>
                    <div className={!this.state.isOpen? `block`: `hidden`}>
                        <div  className=" text-sm px-5 text-white mt-2 hidden sm:flex sm:items-center">
                            <a href="/contactless" class="lg:mt-0  block  hover:text-blue-600 mr-4">
                                Create Ads
                        </a>
                            <a href="#responsive-header" class=" mt-4  block  sm:mt-0 lg:mt-0  hover:text-blue-600 mr-4">
                                About Us
                        </a>
                            <a href="#responsive-header" class=" mt-4  block sm:mt-0 lg:mt-0  hover:text-blue-600 mr-4">
                                Log In
                        </a>
                            <a href="people" class=" inline-block text-sm sm:mt-0 font-semibold px-4 py-2 leading-none text-white border rounded border-white hover:border-transparent hover:text-white hover:bg-blue-500 mt-4 lg:mt-0">Register</a>
                        </div>

                    </div>
                </header>
            </div>

        </>
    );
  }
}

export default NavigationBar;

