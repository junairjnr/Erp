

export default function ProductList({ products, onDelete, onEdit }) {
  return (
    <div className="w-full">
      <table className="w-full border-collapse border border-slate-400">
        <thead>
          <tr className="bg-gray-300">
            <th className="font-normal py-2 px-2 text-center">#</th>
            <th className="font-normal py-2 px-2 text-left">Name</th>
            <th className="font-normal py-2 px-2 text-left">Price</th>
            <th className="font-normal py-2 px-2 text-left">Quantity</th>
            <th className="font-normal py-2 px-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => (
            <tr key={item.id}>
              <td className="py-2 px-2 text-center">{index + 1}</td>
              <td className="py-2 px-2">{item.name}</td>
              <td className="py-2 px-2">{item.price}</td>
              <td className="py-2 px-2">{item.quantity}</td>
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
