import React, {useContext} from 'react'

import Link from 'next/link';

const categories = [
    {name: 'CONTACT', slug: 'contact'},
    {name: 'ABOUT', slug: 'about'},
    {name: 'WEB-SERIES', slug: 'web-series'},
    {name: 'MOVIES', slug: 'movies'},
];

const Header = () => {
    return (
        <div className="container lg:sticky relative top-8mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-4">
                <div   div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer text-5xl text-mtitle font-title">
                            Anemoia
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                <ul className = "flex md:float-right mt-6 align-middle text-text ml-20 font-headers cursor-pointer">
                    <li className="mr-2 lg:mr-8 ">
                        <Link href = '/'>HOME</Link>
                    </li>
                    <li className="mr-2 lg:mr-8">
                        <Link href = '/recommendations'>RECOMMENDATIONS</Link>
                    </li>
                    <li className="mr-2 lg:mr-8">
                        <Link href = '/trailer'>TRAILER</Link>
                    </li>
                    <li className="mr-2 lg:mr-8">
                        <Link href = '/about'>ABOUT</Link>
                    </li>   
                    <li className="mr-2 lg:mr-8">
                        <Link href = '/contact'>CONTACT</Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Header


// {categories.map((category) => (
//     <Link key={category.slug} href={`/category/${category.slug}`}>
//         <span className="md:float-right mt-6 align-middle text-text ml-8 font-headers cursor-pointer">{category.name}</span>
//     </Link>
// ))}