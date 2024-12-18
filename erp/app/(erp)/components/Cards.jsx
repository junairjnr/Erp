// import React, { Fragment } from "react";

// export default function Cards() {
//   return (
//     <Fragment>
//       <div className="grid grid-cols-4 gap-6 mb-8">
//         <div className="bg-pink-100 p-6 rounded-lg text-center shadow-md">
//           <h3 className="text-4xl font-bold text-pink-600">1259</h3>
//           <p className="text-gray-600">Total Employees</p>
//         </div>
//         <div className="bg-yellow-100 p-6 rounded-lg text-center shadow-md">
//           <h3 className="text-4xl font-bold text-yellow-600">23</h3>
//           <p className="text-gray-600">Job Openings</p>
//         </div>
//         <div className="bg-green-100 p-6 rounded-lg text-center shadow-md">
//           <h3 className="text-4xl font-bold text-green-600">123</h3>
//           <p className="text-gray-600">New Applicants</p>
//         </div>
//         <div className="bg-blue-500 p-6 rounded-lg text-white shadow-md">
//           <h3 className="text-lg font-bold">Upcoming Company Event</h3>
//           <p className="text-sm">Watch a thriller</p>
//         </div>
//       </div>
//     </Fragment>
//   );
// }
import React, { Fragment } from "react";

export default function Cards({ }) {

  const cardsData = [
    { value: "1259", description: "Total Employees", bgColor: "bg-pink-100", textColor: "text-pink-600" },
    { value: "23", description: "Job Openings", bgColor: "bg-yellow-100", textColor: "text-yellow-600" },
    { value: "123", description: "New Applicants", bgColor: "bg-green-100", textColor: "text-green-600" },
    { value: "Upcoming Company Event", description: "Watch a thriller", bgColor: "bg-blue-500", textColor: "text-white", isTextSmall: true },
  ];
  return (
    <Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} p-6 rounded-lg text-center shadow-md`}
          >
            <h3
              className={`text-4xl font-bold ${card.textColor} ${card.isTextSmall ? "text-lg" : ""
                }`}
            >
              {card.value}
            </h3>
            <p
              className={`${card.textColor === "text-white" ? "text-gray-200" : "text-gray-600"
                }`}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
