import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartCompoent = ({ data }) => {
  return (
    <ResponsiveContainer width="95%" height={330}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="count"
          fill="var(--blue)"
          stroke="var(--darkBlue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default AreaChartCompoent;
