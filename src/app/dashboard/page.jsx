import Ai from '@/components/Ai';

const DashboardPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
        <p className="mb-5">
          Welcome to Dashboard. This page shows the personal information of the
          logged-in user.
        </p>
      </div>
      <div>
        <Ai />
      </div>
    </div>
  );
};
export default DashboardPage;
