

export default function ProductListStock({ products, onEdit }) {
    return (
        <div className="w-full">
            <table className="w-full border-collapse border border-slate-400">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="font-normal py-2 px-2 text-center">#</th>
                        <th className="font-normal py-2 px-2 text-left">Name</th>
                        <th className="font-normal py-2 px-2 text-left">Price</th>
                        <th className="font-normal py-2 px-2 text-left">Stock</th>
                        <th className="font-normal py-2 px-2 text-left">Type</th>
                        <th className="font-normal py-2 px-2 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item, index) => (
                        <tr key={item.id}>
                            <td className="py-2 px-2 text-center">{index + 1}</td>
                            <td className="py-2 px-2">{item.name}</td>
                            <td className="py-2 px-2">{item.price}</td>
                            <td className="py-2 px-2">{item.stock}</td>
                            <td className="py-2 px-2">{item.type}</td>
                            <td className="flex  justify-center items-center p-2 text-center">
                                <button
                                    className=" bg-green-500 p-2 rounded-md shadow-md"
                                    onClick={() => onEdit(item)}
                                >
                                    update stock
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
