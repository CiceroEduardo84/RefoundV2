import { Routes, Route } from "react-router";
import { SignIn } from "../pages/SignIn";
import { AuthLayout } from "../components/authLayout";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
