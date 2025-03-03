import ApexChart from '../Components/analyticsCharts'
const Analytics = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <p className="mt-2">Monitor user engagement and key performance indicators.</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Traffic Trends</h3>
        <ApexChart/>
      </div>
    </div>
  );
};

export default Analytics;
