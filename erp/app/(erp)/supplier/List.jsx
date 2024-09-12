
export default function ListSupplier({ supplier, onEdit, onDelete }) {
    return (
        <div className="w-full">
            <table className="w-full border-collapse border border-slate-400">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="font-normal py-2 px-2 text-center">#</th>
                        <th className="font-normal py-2 px-2 text-left">Name</th>
                        <th className="font-normal py-2 px-2 text-left">Phone</th>
                        <th className="font-normal py-2 px-2 text-left">Email</th>
                        <th className="font-normal py-2 px-2 text-left">Place</th>
                        <th className="font-normal py-2 px-2 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {supplier?.map((item, index) => (
                        <tr key={item.id}>
                            <td className="py-2 px-2 text-center">{index + 1}</td>
                            <td className="py-2 px-2">{item.name}</td>
                            <td className="py-2 px-2">{item.email}</td>
                            <td className="py-2 px-2">{item.phone}</td>
                            <td className="py-2 px-2">{item.place}</td>
                            <td className="flex gap-3 items-center p-2 text-center">
                                <button
                                    className="w-full h-full bg-green-500 p-1 rounded-md shadow-md"
                                    onClick={() => onEdit(item)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="w-full h-full bg-red-500 p-1 rounded-md shadow-md"
                                    onClick={() => onDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
