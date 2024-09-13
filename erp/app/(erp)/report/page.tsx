"use client"

import { useState } from "react";
import useStore from "@/app/Store";
import { LuSearch } from "react-icons/lu";

export default function Report() {

    const { products } = useStore();

    const [search, setSearch] = useState("");

    const data = products.filter((prod: any) => prod.stock < 10);
    const fileterd = data?.filter((x: any) => {
        if (!search) {
            return true;
        }
        const name = x.name?.toLowerCase().includes(search.toLowerCase());
        const type = x.type?.toLowerCase().includes(search.toLowerCase());

        return name || type;
    })
    return (

        <div className="w-full h-auto">
            <div className="w-full h-full flex justify-center items-center  bg-gray-200">
                <div className="bg-white w-[400px] md:w-[800px] h-full flex justify-center items-start flex-col md:rounded-md md:shadow-md">

                    <div className="w-full flex justify-between items-center p-6">
                        <h1 className="text-2xl font-semibold pl-6">Product Report</h1>
                    </div>
                    <div className="px-2 py-2  w-full">
                        <div className="w-full flex flex-col">
                            <div className=" text-white h-[50px] flex flex-row bg-gray-200 p-2">
                                <div className="flex gap-1 w-full">
                                    <LuSearch
                                        size={30}
                                        className=" mt-1 text-white rounded-md bg-green-600"
                                    />
                                    <input
                                        className="h-[35px] w-full bg-white text-gray-700  pl-2 outline-none ml-1  rounded-md"
                                        type="text"
                                        placeholder="search name or type....."
                                        onChange={(e) => setSearch(e.target.value)}
                                        value={search}
                                    />
                                </div>
                            </div>
                            <table className="w-full border-collapse border border-slate-400">
                                <thead>
                                    <tr className="bg-gray-300">
                                        <th className="font-normal py-2 px-2 text-center">#</th>
                                        <th className="font-normal py-2 px-2 text-left">Name</th>
                                        <th className="font-normal py-2 px-2 text-left">Price</th>
                                        <th className="font-normal py-2 px-2 text-left">Stock</th>
                                        <th className="font-normal py-2 px-2 text-left">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fileterd.length > 0 ? fileterd?.map((item: any, index: any) => (
                                        <tr key={item.id}>
                                            <td className="py-2 px-2 text-center">{index + 1}</td>
                                            <td className="py-2 px-2">{item.name}</td>
                                            <td className="py-2 px-2">{item.price}</td>
                                            <td className="py-2 px-2">{item.stock}</td>
                                            <td className="py-2 px-2">{item.type}</td>

                                        </tr>
                                    )) : <tr>
                                        <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                                            No products are low in stock.
                                        </td></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}