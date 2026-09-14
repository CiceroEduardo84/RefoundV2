import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth.route";
import { EmployeeRoutes } from "./employee.route";
import { ManagerRoutes } from "./manager.route";

export function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}
