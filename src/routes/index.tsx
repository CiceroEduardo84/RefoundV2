import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth.route";
import { EmployeeRoutes } from "./employee.route";

export function Routes() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  );
}
