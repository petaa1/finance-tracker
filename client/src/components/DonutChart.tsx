import { PieChart, Pie, Cell } from "recharts";

interface Category {
  name: string;
  value: number;
}

const data: Category[] = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 300 },
  { name: "Entertainment", value: 300 },
  { name: "Transportation", value: 200 },
  { name: "Utilities", value: 100 },
]

const COLOURS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const renderCenteredText = (total: number) => {
  return (
    <text x="50%" y="50%"
    textAnchor="middle"
    dominantBaseline="middle"
    fontSize="20px"
    fontWeight="bold"
    fill="#FFFFFF">
      <tspan x={"50%"} dy={"-10"}>${total}</tspan>
      <tspan x={"50%"} dy={"20"} fontSize="12px" fill="#FFFFFF">Total Spending</tspan>
    </text>

  )
}

const DonutChart: React.FC = () => {
  const totalSpending = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((_,index) => (
          <Cell key={`cell-${index}`} fill={COLOURS[index % COLOURS.length]} />
        ))}
      </Pie>
      {renderCenteredText(totalSpending)}
    </PieChart>
  );
};

export default DonutChart;
