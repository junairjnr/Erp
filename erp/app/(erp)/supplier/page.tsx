'use client';
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import ListSupplier from "./List";
import AddSupplier from "./Create";
import EditSupplier from "./Edit";



export default function Supplier() {
    const [suppliers, setSuppliers] = useState([
        {
            id: 1,
            name: "John Doe",
            phone: "123-456-7890",
            email: "john.doe@example.com",
            place: "New York",
        },
        {
            id: 2,
            name: "Jane Smith",
            phone: "234-567-8901",
            email: "jane.smith@example.com",
            place: "Los Angeles",
        },
        {
            id: 3,
            name: "Michael Johnson",
            phone: "345-678-9012",
            email: "michael.johnson@example.com",
            place: "Chicago",
        },
        {
            id: 4,
            name: "Emily Davis",
            phone: "456-789-0123",
            email: "emily.davis@example.com",
            place: "Houston",
        },
    ]);



    const [addForm, setAddForm] = useState(false)
    const [editForm, setEditForm] = useState(false)
    const [editingSupplier, setEditingSupplier] = useState(null);

    const addSupplier = (newSupplier: any) => {
        setSuppliers([...suppliers, { ...newSupplier, id: suppliers.length + 1 }]);
    };


    const updateSupplier = (updatedSupplier: any) => {

        setSuppliers(suppliers.map((supp) => (supp.id === updatedSupplier.id ? updatedSupplier : supp)));
    };

    const deleteSupplier = (id: any) => {
        setSuppliers(suppliers.filter((sup) => sup.id !== id));
    };

    return (
        <div className="w-full h-auto">
            <div className="w-full h-full flex justify-center items-center  bg-gray-200">
                <div className="bg-white w-[400px] md:w-[800px] h-full flex justify-center items-start flex-col md:rounded-md md:shadow-md">
                    {!addForm && !editingSupplier && <Fragment><div className="w-full flex justify-between items-center p-6">
                        <h1 className="text-2xl font-semibold pl-6">Supplier</h1>
                        <button hidden={addForm} onClick={() => setAddForm(true)} className="bg-green-400  h-[40px] w-[150px] rounded-md text-gray-900 hover:text-gray-100 cursor-pointer shadow-md">
                            Add Supplier
                        </button>
                    </div><div className="px-2 py-2 w-full">
                            <ListSupplier supplier={suppliers} onDelete={deleteSupplier}
                                onEdit={setEditingSupplier} />
                        </div></Fragment>}
                    {addForm && <AddSupplier onCreate={addSupplier} setAddForm={setAddForm} />}
                    {!addForm && editingSupplier && <EditSupplier supplier={editingSupplier} updateSupplier={updateSupplier} setEditingSupplier={setEditingSupplier} />}
                </div>
            </div>
        </div>
    )
}