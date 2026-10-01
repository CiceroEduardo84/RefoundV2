import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth.route";
import { EmployeeRoutes } from "./employee.route";
import { ManagerRoutes } from "./manager.route";
import { Loading } from "../components/Loading";
import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { session, isLoading } = useAuth();

  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
