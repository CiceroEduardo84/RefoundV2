import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth.route";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
