import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth.route";
import { EmployeeRoutes } from "./employee.route";
import { ManagerRoutes } from "./manager.route";
import { Loading } from "../components/Loading";

const isLoading = true;

export function Routes() {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}
