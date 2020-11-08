import React from 'react';
import Link from 'next/link'
import {useRouter } from 'next/router'

const Sidebar = () => {

    const router = useRouter()
    

    return (
        
            <aside className="bg-gray-800 sm:w-1/4 xl:w-1/5 sm:min-h-screen p-5">
                <div>
                <p className="text-white text-2x1 font-black"> CRM Clientes</p>
                </div>

                <nav className="list-none mt-5">
                    <li className={router.pathname === "/" ? "bg-blue-800 p-3": "p-3"}> 
                     <Link href="/">
                         <a className="text-white mb-5 block" >Clientes</a>             
                    </Link>
                    </li>
                   <li className={router.pathname === "/pedidos" ? "bg-blue-800 p-3": "p-3"}>
                     <Link href="/pedidos">
                         <a className="text-white mb-5 block">Pedidos</a>
                     </Link>
                   </li>
                    <li className={router.pathname === "/productos" ? "bg-blue-800 p-3": "p-3"}>
                    <Link href="/productos">
                        <a className="text-white mb-5 block"> Productos </a>
                        </Link>
                    </li>
                    
                </nav>
            </aside>
        
    );
}

export default Sidebar;