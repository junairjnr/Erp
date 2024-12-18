"use client"

import { Fragment } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


export default function PieCharts() {
    const pieData = [
        { name: "Completed", value: 40 },
        { name: "Pending", value: 25 },
        { name: "In Progress", value: 35 },
    ];
    const COLORS = ["#0088FE", "#FFBB28", "#FF8042"];

    return (
        <Fragment>
            <div className="bg-white flex justify-center items-center w-full max-w-xl mx-auto">
                <PieChart width={300} height={300}>
                    <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </Fragment>
    )
}