import {
    NotebookPen,
    ShoppingCart,
    TableProperties,
    Users,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-[250px] h-screen md:flex hidden  flex-col justify-between bg-gray-950">
            <div className="flex justify-center items-center mt-[50px] ">
                <ul className="flex gap-10 flex-col text-white ">
                    {/* <Link href={"/dashboard"}>
                        <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
                            <LayoutDashboard />  Dashboard
                        </li>
                    </Link> */}
                    <Link href={"/supplier"}>
                        <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
                            <Users />  Supplier
                        </li>
                    </Link>
                    <Link href={"/product"}>
                        <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
                            <ShoppingCart />Product
                        </li>
                    </Link>
                    <Link href={"/inventory"}>
                        <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
                            <TableProperties />Inventory
                        </li>
                    </Link>
                    <Link href={"/report"}>
                        <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
                            <NotebookPen />Report
                        </li>
                    </Link>
                </ul>
            </div>
            <div className=" justify-end items-end p-2">
                <div className=" flex justify-center items-center flex-col gap-">
                    <p className="text-[13px] text-white text-start">Powered By </p>
                    <p className="text-xl text-white font-bold">
                        ERP TEAM
                    </p>
                </div>
            </div>
        </aside>
    );
}