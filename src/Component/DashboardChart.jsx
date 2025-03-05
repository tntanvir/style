import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
    series: [
        {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    options: {
        chart: {
            type: "line",
            height: 240,
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#6366F1"],
        stroke: {
            curve: "smooth",
            width: 2,
        },
        markers: {
            size: 5,
            colors: ["#6366F1"],
            strokeColors: "#fff",
            strokeWidth: 2,
        },
        xaxis: {
            categories: [
                "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            ],
            labels: {
                style: {
                    colors: "#64748B",
                    fontSize: "12px",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#64748B",
                    fontSize: "12px",
                },
            },
        },
        grid: {
            borderColor: "#E5E7EB",
            strokeDashArray: 5,
        },
        tooltip: {
            theme: "dark",
        },
    },
};

export default function DashboardChart() {
    return (
        <Card className="shadow-lg rounded-lg p-4">
            <CardHeader floated={false} shadow={false} color="transparent" className="flex items-center gap-4">
                <div className="rounded-lg bg-blue-600 p-4 text-white">
                    📊
                </div>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Sales Overview
                    </Typography>
                    <Typography variant="small" color="gray">
                        A visual representation of sales performance.
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="px-2 pb-0">
                <Chart options={chartConfig.options} series={chartConfig.series} type="line" height={240} />
            </CardBody>
        </Card>
    );
}
