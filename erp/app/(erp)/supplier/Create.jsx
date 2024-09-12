import Link from "next/link";
import { useState } from "react";

export default function AddSupplier({ onCreate, setAddForm }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [place, setplace] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCustomer = { name, email, phone, place };
        onCreate(newCustomer);
        setAddForm(false)
        setName("");
        setEmail("");
        setPhone("");
        setplace("");
    }

    return (
        <div className="pt-10">
            <div className="flex flex-row pl-10 items-center gap-11 pt-10">
                <div className="ml-3">
                    <h1 className="text-lg font-semibold">Create Supplier</h1>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="w-full h-auto">
                    <div className="w-full h-full flex justify-center items-center  bg-gray-200">
                        <div className="bg-white w-[400px] md:w-[800px] h-full flex justify-center items-start flex-col md:rounded-md md:shadow-md">

                            <div className=" w-full h-full flex justify-center items-center flex-col pt-10">
                                <div className="w-full h-[40px] flex flex-row  p-10">
                                    <label className="pl-2 text-gray-700 w-[150px]">Name</label>
                                    <input className="w-[400px] h-[40px] p-1 outline-none border border-slate-400 rounded-md"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="w-full h-[40px] flex flex-row  p-10">
                                    <label className="pl-2 text-gray-700 w-[150px]">Email</label>
                                    <input className="w-[400px] h-[40px] p-1 outline-none border border-slate-400 rounded-md"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="w-full h-[40px] flex flex-row p-10">
                                    <label className="pl-2 text-gray-700 w-[150px]">Phone</label>
                                    <input className="w-[400px] h-[40px] p-1 outline-none border border-slate-400 rounded-md"
                                        type="tel"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required

                                    />
                                </div>

                                <div className="w-full h-[40px] flex flex-row p-10">
                                    <label className="pl-2 text-gray-700 w-[150px]">Place</label>
                                    <input className="w-[400px] h-[40px] p-1 outline-none border border-slate-400 rounded-md"
                                        type="text"
                                        name="place"
                                        value={place}
                                        onChange={(e) => setplace(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="w-full h-[40px] flex gap-3 justify-start items-center p-14">
                                    <button className="bg-green-400  h-[50px] w-[150px] rounded-md text-gray-900 hover:text-gray-100 cursor-pointer shadow-md"
                                        type="submit">
                                        Submit
                                    </button>
                                    <button className="bg-red-400  h-[50px] w-[150px] rounded-md text-gray-900 hover:text-gray-100 cursor-pointer shadow-md"
                                        type="submit" onClick={() => setAddForm(false)}>
                                        Cancel
                                    </button>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>


            </form>
        </div>
    )
}