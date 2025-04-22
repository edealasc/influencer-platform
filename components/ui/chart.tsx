import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { BarChart as RechartsBarChart, Bar } from "recharts"

export const LineChart = ({ data, categories, index, colors, valueFormatter, className }: any) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1a2040" />
        <XAxis dataKey={index} stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip
          contentStyle={{ backgroundColor: "#0f1535", borderColor: "#1a2040", color: "#fff" }}
          labelStyle={{ color: "#fff" }}
        />
        <Legend />
        <Line type="monotone" dataKey={categories[0]} stroke={colors[0]} activeDot={{ r: 8 }} />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

export const BarChart = ({ data, categories, index, colors, valueFormatter, className }: any) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1a2040" />
        <XAxis dataKey={index} stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip
          contentStyle={{ backgroundColor: "#0f1535", borderColor: "#1a2040", color: "#fff" }}
          labelStyle={{ color: "#fff" }}
        />
        <Legend />
        <Bar dataKey={categories[0]} fill={colors[0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

