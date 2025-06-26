import { Line } from "@ant-design/charts";
import { LineStrokeColorVar } from "antd/es/progress/style";

function ChartComponent({ sortedTransactions }) {
  const data = sortedTransactions.map((item) => ({
    date: item.date,
    amount: item.amount,
  }));

  const config = {
    data,
    autoFit: true,
    height: 350,
    xField: "date",
    yField: "amount",
    smooth: true,
    point: {
      size: 5,
      shape: "circle",
      style: {
        fill: "white",
        stroke: "#5B8FF9",
        lineWidth: 2,
      },
    },
    label: {
      style: {
        fill: "#8c8c8c",
        fontSize: 12,
      },
    },
    tooltip: {
      showMarkers: true,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [{ type: "marker-active" }],
    lineStyle: {
      lineDash: [10, 14], // Dotted line
      lineWidth: 3,     // Bold dotted
      stroke: "#5B8FF9",
    },
    xAxis: {
      title: {
        text: "Date",
        style: { fill: "#555", fontSize: 14 },
      },
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    yAxis: {
      title: {
        text: "Amount",
        style: { fill: "#555", fontSize: 14 },
      },
    },
  };

  return (
    <div>
      <Line {...config} />
    </div>
  );
}

export default ChartComponent;
