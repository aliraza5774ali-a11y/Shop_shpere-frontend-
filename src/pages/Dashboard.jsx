import { useSelector } from "react-redux";
import AdminDashboard from "./AdminDashboard";
import CustomerDashboard from "./CustomerDashboard";

const Dashboard = () => {
  const { role } = useSelector((s) => s.auth);
  return role === "admin" ? <AdminDashboard /> : <CustomerDashboard />;
};

export default Dashboard;