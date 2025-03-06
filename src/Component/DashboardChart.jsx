// import {
//     Card,
//     CardBody,
//     CardHeader,
//     Typography,
// } from "@material-tailwind/react";
// import Chart from "react-apexcharts";

// const chartConfig = {
//     series: [
//         {
//             name: "Sales",
//             data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//         },
//     ],
//     options: {
//         chart: {
//             type: "line",
//             height: 240,
//             toolbar: {
//                 show: false,
//             },
//         },
//         dataLabels: {
//             enabled: false,
//         },
//         colors: ["#6366F1"],
//         stroke: {
//             curve: "smooth",
//             width: 2,
//         },
//         markers: {
//             size: 5,
//             colors: ["#6366F1"],
//             strokeColors: "#fff",
//             strokeWidth: 2,
//         },
//         xaxis: {
//             categories: [
//                 "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//             ],
//             labels: {
//                 style: {
//                     colors: "#64748B",
//                     fontSize: "12px",
//                 },
//             },
//         },
//         yaxis: {
//             labels: {
//                 style: {
//                     colors: "#64748B",
//                     fontSize: "12px",
//                 },
//             },
//         },
//         grid: {
//             borderColor: "#E5E7EB",
//             strokeDashArray: 5,
//         },
//         tooltip: {
//             theme: "dark",
//         },
//     },
// };

// export default function DashboardChart() {
//     return (
//         <Card className="shadow-lg rounded-lg p-4">
//             <CardHeader floated={false} shadow={false} color="transparent" className="flex items-center gap-4">
//                 <div className="rounded-lg bg-blue-600 p-4 text-white">
//                     📊
//                 </div>
//                 <div>
//                     <Typography variant="h6" color="blue-gray">
//                         Sales Overview
//                     </Typography>
//                     <Typography variant="small" color="gray">
//                         A visual representation of sales performance.
//                     </Typography>
//                 </div>
//             </CardHeader>
//             <CardBody className="px-2 pb-0">
//                 <Chart options={chartConfig.options} series={chartConfig.series} type="line" height={240} />
//             </CardBody>
//         </Card>
//     );
// }
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";

const salesChartConfig = {
    series: [{ name: "Sales", data: [50, 40, 300, 320, 500, 350, 200, 230, 500] }],
    options: {
        chart: { type: "line", height: 240, toolbar: { show: false } },
        dataLabels: { enabled: false },
        colors: ["#6366F1"],
        stroke: { curve: "smooth", width: 2 },
        markers: { size: 5, colors: ["#6366F1"], strokeColors: "#fff", strokeWidth: 2 },
        xaxis: { categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] },
        grid: { borderColor: "#E5E7EB", strokeDashArray: 5 },
        tooltip: { theme: "dark" },
    },
};

const revenueChartConfig = {
    series: [45, 25, 30],
    options: {
        chart: { type: "pie" },
        labels: ["Product Sales", "Service Revenue", "Subscription"],
        colors: ["#6366F1", "#E11D48", "#10B981"],
        legend: { position: "bottom" },
    },
};

const engagementChartConfig = {
    series: [{ name: "Users", data: [100, 200, 300, 500, 700, 900, 1000, 1200, 1300] }],
    options: {
        chart: { type: "bar", height: 240 },
        colors: ["#F59E0B"],
        xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"] },
        grid: { borderColor: "#E5E7EB", strokeDashArray: 5 },
    },
};

export default function Dashboard() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex flex-col gap-4">

                {/* Sales Overview */}
                <Card className="shadow-lg rounded-lg p-4">
                    <CardHeader floated={false} shadow={false} color="transparent" className="flex items-center gap-4">
                        <div className="rounded-lg bg-blue-600 p-4 text-white">📈</div>
                        <div>
                            <Typography variant="h6" color="blue-gray">Sales Overview</Typography>
                            <Typography variant="small" color="gray">Monthly sales trends</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="px-2 pb-0">
                        <Chart options={salesChartConfig.options} series={salesChartConfig.series} type="line" height={240} />
                    </CardBody>
                </Card>

                {/* Revenue Breakdown */}
                <Card className="shadow-lg rounded-lg p-4">
                    <CardHeader floated={false} shadow={false} color="transparent" className="flex items-center gap-4">
                        <div className="rounded-lg bg-red-600 p-4 text-white">💰</div>
                        <div>
                            <Typography variant="h6" color="blue-gray">Revenue Breakdown</Typography>
                            <Typography variant="small" color="gray">Sales distribution</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="px-2 pb-0">
                        <Chart options={revenueChartConfig.options} series={revenueChartConfig.series} type="pie" height={240} />
                    </CardBody>
                </Card>

                {/* User Engagement */}
                <Card className="shadow-lg rounded-lg p-4">
                    <CardHeader floated={false} shadow={false} color="transparent" className="flex items-center gap-4">
                        <div className="rounded-lg bg-yellow-500 p-4 text-white">👥</div>
                        <div>
                            <Typography variant="h6" color="blue-gray">User Engagement</Typography>
                            <Typography variant="small" color="gray">New users per month</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="px-2 pb-0">
                        <Chart options={engagementChartConfig.options} series={engagementChartConfig.series} type="bar" height={240} />
                    </CardBody>
                </Card>

                {/* Recent Activities */}
                {/* <Card className="shadow-lg rounded-lg col-span-1 lg:col-span-2">
                    <CardHeader floated={false} shadow={false} color="transparent" className="flex items-center gap-4">
                        <div className="rounded-lg bg-green-600 p-4 text-white">📅</div>
                        <div>
                            <Typography variant="h6" color="blue-gray">Recent Activities</Typography>
                            <Typography variant="small" color="gray">Latest user interactions</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="px-4 pb-4">
                        <ul className="space-y-3">
                            <li className="flex justify-between text-gray-700">
                                <span>John Doe purchased "Wireless Headphones"</span>
                                <span className="text-sm text-gray-500">2 mins ago</span>
                            </li>
                            <li className="flex justify-between text-gray-700">
                                <span>New user signed up: Sarah</span>
                                <span className="text-sm text-gray-500">10 mins ago</span>
                            </li>
                            <li className="flex justify-between text-gray-700">
                                <span>Mike completed an order</span>
                                <span className="text-sm text-gray-500">30 mins ago</span>
                            </li>
                        </ul>
                    </CardBody>
                </Card> */}

                {/* Profile Summary */}
                {/* <Card className="shadow-lg rounded-lg">
                    <CardHeader floated={false} shadow={false} color="transparent" className="flex items-center gap-4">
                        <div className="rounded-lg bg-purple-600 p-4 text-white">🙋‍♂️</div>
                        <div>
                            <Typography variant="h6" color="blue-gray">Profile Summary</Typography>
                            <Typography variant="small" color="gray">Your account details</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="px-4 pb-4">
                        <div className="text-gray-700">
                            <p><strong>Name:</strong> John Doe</p>
                            <p><strong>Email:</strong> johndoe@example.com</p>
                            <p><strong>Role:</strong> Admin</p>
                        </div>
                    </CardBody>
                </Card> */}

            </div>
        </div>
    );
}
