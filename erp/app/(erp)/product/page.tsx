"use client"

import { Fragment, useState } from "react";
import ProductList from "./List";
import CreateProduct from "./Create";
import EditProduct from "./Edit";

export default function Product() {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", price: 50, quantity: 10 },
        { id: 2, name: "Product 2", price: 100, quantity: 5 },
    ]);

    const [addForm, setAddForm] = useState(false)
    const [editingProduct, setEditingProduct] = useState(null);

    const addProduct = (newProduct: any) => {
        setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    };

    const updateProduct = (updatedProduct: any) => {
        setProducts(products.map((prod) => (prod.id === updatedProduct.id ? updatedProduct : prod)));
    };

    const deleteProduct = (id: any) => {
        setProducts(products.filter((prod) => prod.id !== id));
    };

    return (
        <div className="w-full h-auto">
            <div className="w-full h-full flex justify-center items-center  bg-gray-200">
                <div className="bg-white w-[400px] md:w-[800px] h-full flex justify-center items-start flex-col md:rounded-md md:shadow-md">
                    {!addForm && !editingProduct &&
                        <Fragment>
                            <div className="w-full flex justify-between items-center p-6">
                                <h1 className="text-2xl font-semibold pl-6">Product</h1>
                                <button hidden={addForm} onClick={() => setAddForm(true)} className="bg-green-400  h-[40px] w-[150px] rounded-md text-gray-900 hover:text-gray-100 cursor-pointer shadow-md">
                                    Add Product
                                </button>
                            </div>
                            <div className="px-2 py-2 w-full">
                                <ProductList products={products} onDelete={deleteProduct}
                                    onEdit={setEditingProduct} />
                            </div>
                        </Fragment>}
                    {addForm && <CreateProduct onCreate={addProduct} setAddForm={setAddForm} />}
                    {!addForm && editingProduct && <EditProduct product={editingProduct} onUpdate={updateProduct} setEditingProduct={setEditingProduct} />}
                </div>
            </div>
        </div>
    );

}