import './chart.scss'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 450 },
    { name: "May", value: 600 },
    { name: "Jun", value: 700 },
];


const Chart = () => {


    return (
        <div className="chart">
            <div className="title">Last 6 Months (Revenue)</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid className='chartGrid'/>
                    <XAxis dataKey="name" stroke='gray'/>
                    
                    <Tooltip />

                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        fill="url(#colorValue)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart