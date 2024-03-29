import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChartCompoent = ({ data }) => {
  return (
    <ResponsiveContainer width="95%" height={330}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="var(--blue)" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartCompoent;
