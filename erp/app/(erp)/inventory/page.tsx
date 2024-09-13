"use client"

import { Fragment, useEffect, useState } from "react";

import useStore from '../../Store'
import ProductListSock from './List'
import EditProductStock from './Edit'



export default function Inventory() {
    const [products, setProducts] = useState([
        { id: 1, name: "Water Bottle", price: 15, stock: 6, type: "Purchase" },
        { id: 2, name: "Notebook", price: 5, stock: 120, type: "Sales" },
        { id: 3, name: "Smartphone", price: 699, stock: 8, type: "Purchase" },
        { id: 4, name: "Wireless Mouse", price: 20, stock: 4, type: "Sales" },
        { id: 5, name: "Headphones", price: 150, stock: 25, type: "Sales" },
        { id: 6, name: "Laptop", price: 1200, stock: 6, type: "Purchase" },
        { id: 7, name: "Desk Chair", price: 99, stock: 5, type: "Purchase" },
        { id: 8, name: "LED Monitor", price: 300, stock: 12, type: "Sales" },
        { id: 9, name: "Gaming Console", price: 499, stock: 7, type: "Purchase" },
        { id: 10, name: "Bluetooth Speaker", price: 85, stock: 8, type: "Sales" }
    ]
    );

    const [editingProduct, setEditingProduct] = useState(null);

    const { setProductes } = useStore();



    const updateProduct = (updatedProduct: any) => {
        setProducts(products.map((prod) => (prod.id === updatedProduct.id ? updatedProduct : prod)));
    };

    useEffect(() => {
        setProductes(products)
    }, [products]);

    return (
        <div className="w-full h-auto">
            <div className="w-full h-full flex justify-center items-center  bg-gray-200">
                <div className="bg-white w-[400px] md:w-[800px] h-full flex justify-center items-start flex-col md:rounded-md md:shadow-md">
                    {!editingProduct &&
                        <Fragment>
                            <div className="w-full flex justify-between items-center p-6">
                                <h1 className="text-2xl font-semibold pl-6">Product</h1>
                            </div>
                            <div className="px-2 py-2  w-full">
                                <ProductListSock products={products} 
                                    onEdit={setEditingProduct} />
                            </div>
                        </Fragment>}
                    {editingProduct && <EditProductStock product={editingProduct} onUpdate={updateProduct} setEditingProduct={setEditingProduct} />}
                </div>
            </div>
        </div>
    );

}