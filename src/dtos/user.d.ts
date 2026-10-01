type UserAPIRole = "employee" | "manager";

type UserAPIResponse = {
  token: string;
  user: {
    name: string;
    email: string;
    role: UserAPIRole;
  };
};
