import Login from "@/components/Login";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import UserContext from "@/context/UserContext";

export default function LoginPage() {
  const router = useRouter();
  const { token } = useContext(UserContext);

  useEffect(() => {
    if (token) router.push("/");
  }, [token]);

  return <Login></Login>;
}
