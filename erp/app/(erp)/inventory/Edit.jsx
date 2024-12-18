
// import { useState } from "react";

// export default function EditProductStock({ product, onUpdate, setEditingProduct }) {
//     const [name, setName] = useState(product.name);
//     const [price, setPrice] = useState(product.price);
//     const [stock, setStock] = useState(product.stock);
//     const [type, setType] = useState(product.type);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const updatedProduct = { ...product, name, price: parseFloat(price), stock: parseInt(stock), type };
//         onUpdate(updatedProduct);
//         setEditingProduct(null)
//     };
//     return (
//         <div className="pt-10">
//             <div className="flex flex-row pl-10 items-center gap-11">
//                 <div className="ml-3">
//                     <h1 className="text-lg font-semibold">Update Product</h1>
//                 </div>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <div className="w-full h-auto">
//                     <div className="w-full h-full flex justify-center items-center  bg-gray-200">
//                         <div className="bg-white w-[400px] md:w-[800px] h-full flex justify-center items-start flex-col md:rounded-md md:shadow-md">
//                             <div className=" w-full h-full flex justify-center items-center flex-col pt-10">
//                                 <div className="w-full h-[40px] flex flex-row  p-10">
//                                     <label className="pl-2 text-gray-700 w-[150px]">Name</label>
//                                     <input className="w-[400px] h-[40px] p-1 outline-none border border-slate-400 rounded-md"
//                                         type="text"
//                                         name="name"
//                                         value={name}
//                                         onChange={(e) => setName(e.target.value)}
//                                         disabled
//                                     />
//                                 </div>
//                                 <div className="w-full h-[40px] flex flex-row  p-10">
//                                     <label className="pl-2 text-gray-700 w-[150px]">Price</label>
//                                     <input className="w-[400px] h-[40px] p-1 outline-none border border-slate-400 rounded-md"
//                                         type="text"
//                                         name="price"
//                                         value={price}
//                                         onChange={(e) => setPrice(e.target.value)}
//                                         disabled
//                                     />
//                                 </div>
//                                 <div className="w-full h-[40px] flex flex-row p-10">
//                                     <label className="pl-2 text-gray-700 w-[150px]">Stock</label>
//                                     <input className="w-[400px] h-[40px] p-1 outline-none border border-slate-400 rounded-md"
//                                         type="number"
//                                         name="stock"
//                                         value={stock}
//                                         onChange={(e) => setStock(e.target.value)}
//                                         required

//                                     />
//                                 </div>
//                                 <div className="w-full h-[40px] flex flex-row p-10">
//                                     <label className="pl-2 text-gray-700 w-[150px]">Stock</label>
//                                     <select
//                                         className="w-[400px] h-[40px] p-1 outline-none border border-slate-400 rounded-md"
//                                         value={type}
//                                         onChange={(e) => setType(e.target.value)}
//                                     >
//                                         <option value="">Select</option>
//                                         <option value="Purchase">Purchase</option>
//                                         <option value="Sales">Sales</option>
//                                     </select>

//                                 </div>

//                                 <div className="w-full h-[40px] flex gap-3 justify-start items-center p-14">
//                                     <button className="bg-green-400  h-[50px] w-[150px] rounded-md text-gray-900 hover:text-gray-100 cursor-pointer shadow-md"
//                                         type="submit">
//                                         Submit
//                                     </button>
//                                     <button className="bg-red-400  h-[50px] w-[150px] rounded-md text-gray-900 hover:text-gray-100 cursor-pointer shadow-md"
//                                         type="submit" onClick={() => setEditingProduct(null)}>
//                                         Cancel
//                                     </button>
//                                 </div>

//                             </div>

//                         </div>


//                     </div>
//                 </div>


//             </form>
//         </div>
//     )
// }

import { useState } from "react";

export default function EditProductStock({ product, onUpdate, setEditingProduct }) {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [stock, setStock] = useState(product.stock);
    const [type, setType] = useState(product.type);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { ...product, name, price: parseFloat(price), stock: parseInt(stock), type };
        onUpdate(updatedProduct);
        setEditingProduct(null)
    };

    return (
        <div className="pt-10">
            <div className="flex flex-row pl-10 items-center gap-11">
                <div className="ml-3">
                    <h1 className="text-lg font-semibold">Update Product</h1>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-auto">
                    <div className="w-full h-full flex justify-center items-center bg-gray-200">
                        <div className="bg-white w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-full flex justify-center items-start flex-col rounded-md shadow-md p-6">
                            <div className="w-full flex flex-col items-center pt-10">
                                <div className="w-full flex items-center gap-4 p-4">
                                    <label className="w-[150px] text-gray-700">Name</label>
                                    <input
                                        className="w-full sm:w-[350px] md:w-[400px] h-[40px] p-2 outline-none border border-slate-400 rounded-md"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled
                                    />
                                </div>

                                <div className="w-full flex items-center gap-4 p-4">
                                    <label className="w-[150px] text-gray-700">Price</label>
                                    <input
                                        className="w-full sm:w-[350px] md:w-[400px] h-[40px] p-2 outline-none border border-slate-400 rounded-md"
                                        type="text"
                                        name="price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        disabled
                                    />
                                </div>

                                <div className="w-full flex items-center gap-4 p-4">
                                    <label className="w-[150px] text-gray-700">Stock</label>
                                    <input
                                        className="w-full sm:w-[350px] md:w-[400px] h-[40px] p-2 outline-none border border-slate-400 rounded-md"
                                        type="number"
                                        name="stock"
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="w-full flex items-center gap-4 p-4">
                                    <label className="w-[150px] text-gray-700">Type</label>
                                    <select
                                        className="w-full sm:w-[350px] md:w-[400px] h-[40px] p-2 outline-none border border-slate-400 rounded-md"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="Purchase">Purchase</option>
                                        <option value="Sales">Sales</option>
                                    </select>
                                </div>

                                <div className="w-full flex gap-4 justify-start items-center p-6">
                                    <button
                                        className="bg-green-400 h-[50px] w-full sm:w-[150px] md:w-[200px] rounded-md text-gray-900 hover:text-gray-100 cursor-pointer shadow-md"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        className="bg-red-400 h-[50px] w-full sm:w-[150px] md:w-[200px] rounded-md text-gray-900 hover:text-gray-100 cursor-pointer shadow-md"
                                        type="button"
                                        onClick={() => setEditingProduct(null)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
