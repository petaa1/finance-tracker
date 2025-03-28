import DonutChart from "../components/DonutChart";

const Home: React.FC = () => {
    return (
    <>
        <div className="flex flex-col items-center">
            <h2 className="text-xl mt-4">Spending Breakdown</h2>
            <DonutChart />
        </div>
    </>
    );
};

export default Home;