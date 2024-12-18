// import {
//     NotebookPen,
//     ShoppingCart,
//     TableProperties,
//     Users,
// } from "lucide-react";
// import Link from "next/link";

// export default function Sidebar() {
//     return (
//         <aside className="w-[250px] h-screen md:flex hidden  flex-col justify-between bg-gray-950">
//             <div className="flex justify-center items-center mt-[50px] ">
//                 <ul className="flex gap-10 flex-col text-white ">
//                     {/* <Link href={"/dashboard"}>
//                         <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
//                             <LayoutDashboard />  Dashboard
//                         </li>
//                     </Link> */}
//                     <Link href={"/supplier"}>
//                         <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
//                             <Users />  Supplier
//                         </li>
//                     </Link>
//                     <Link href={"/product"}>
//                         <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
//                             <ShoppingCart />Product
//                         </li>
//                     </Link>
//                     <Link href={"/inventory"}>
//                         <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
//                             <TableProperties />Inventory
//                         </li>
//                     </Link>
//                     <Link href={"/report"}>
//                         <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
//                             <NotebookPen />Report
//                         </li>
//                     </Link>
//                 </ul>
//             </div>
//             <div className=" justify-end items-end p-2">
//                 <div className=" flex justify-center items-center flex-col gap-">
//                     <p className="text-[13px] text-white text-start">Powered By </p>
//                     <p className="text-xl text-white font-bold">
//                         ERP TEAM
//                     </p>
//                 </div>
//             </div>
//         </aside>
//     );
// }
"use client"
import {
    NotebookPen,
    ShoppingCart,
    TableProperties,
    Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar Toggle for Mobile */}
            <button
                onClick={toggleSidebar}
                className="md:hidden fixed top-4 left-4 z-20 text-white bg-gray-950 p-2 rounded-md shadow-md"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <aside
                className={`${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 fixed md:static w-[250px] h-screen flex flex-col justify-between bg-gray-950 transition-transform duration-300 ease-in-out z-10`}
            >
                {/* Links Section */}
                <div className="flex justify-center items-center mt-[50px]">
                    <ul className="flex gap-10 flex-col text-white">
                        <Link href={"/supplier"} onClick={() => setIsOpen(false)}>
                            <li className="cursor-pointer flex gap-3 hover:text-gray-400">
                                <Users /> Supplier
                            </li>
                        </Link>
                        <Link href={"/product"} onClick={() => setIsOpen(false)}>
                            <li className="cursor-pointer flex gap-3 hover:text-gray-400">
                                <ShoppingCart /> Product
                            </li>
                        </Link>
                        <Link href={"/inventory"} onClick={() => setIsOpen(false)}>
                            <li className="cursor-pointer flex gap-3 hover:text-gray-400">
                                <TableProperties /> Inventory
                            </li>
                        </Link>
                        <Link href={"/report"} onClick={() => setIsOpen(false)}>
                            <li className="cursor-pointer flex gap-3 hover:text-gray-400">
                                <NotebookPen /> Report
                            </li>
                        </Link>
                    </ul>
                </div>

                {/* Footer Section */}
                <div className="p-4">
                    <div className="flex flex-col items-center">
                        <p className="text-[13px] text-white">Powered By</p>
                        <p className="text-xl text-white font-bold">ERP TEAM</p>
                    </div>
                </div>
            </aside>

            {/* Overlay for Mobile when Sidebar is Open */}
            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                />
            )}
        </div>
    );
}


// "use client"
// import {
//     NotebookPen,
//     ShoppingCart,
//     TableProperties,
//     Users,
// } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// export default function Sidebar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="relative">
//             {/* Toggle button for small screens */}
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-950 text-white rounded-lg"
//             >
//                 {isOpen ? "Close" : "Menu"}
//             </button>

//             <aside
//                 className={`fixed top-0 left-0 h-screen bg-gray-950 text-white md:w-[250px] w-[200px] transform ${isOpen ? "translate-x-0" : "-translate-x-full"
//                     } md:translate-x-0 transition-transform duration-300 ease-in-out`}
//             >
//                 <div className="flex flex-col justify-between h-full">
//                     <div className="flex justify-center items-center mt-12">
//                         <ul className="flex flex-col gap-6">
//                             <Link href={"/supplier"}>
//                                 <li className="cursor-pointer flex gap-3 hover:text-gray-400">
//                                     <Users /> Supplier
//                                 </li>
//                             </Link>
//                             <Link href={"/product"}>
//                                 <li className="cursor-pointer flex gap-3 hover:text-gray-400">
//                                     <ShoppingCart /> Product
//                                 </li>
//                             </Link>
//                             <Link href={"/inventory"}>
//                                 <li className="cursor-pointer flex gap-3 hover:text-gray-400">
//                                     <TableProperties /> Inventory
//                                 </li>
//                             </Link>
//                             <Link href={"/report"}>
//                                 <li className="cursor-pointer flex gap-3 hover:text-gray-400">
//                                     <NotebookPen /> Report
//                                 </li>
//                             </Link>
//                         </ul>
//                     </div>
//                     <div className="p-4">
//                         <div className="flex flex-col items-center">
//                             <p className="text-xs text-white">Powered By</p>
//                             <p className="text-lg font-bold">ERP TEAM</p>
//                         </div>
//                     </div>
//                 </div>
//             </aside>

//             {/* Backdrop for small screens */}
//             {isOpen && (
//                 <div
//                     className="fixed inset-0 bg-black bg-opacity-50 z-40"
//                     onClick={() => setIsOpen(false)}
//                 />
//             )}
//         </div>
//     );
// }
