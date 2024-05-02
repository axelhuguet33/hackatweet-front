import Home from "@/components/Home";
import Login from "@/components/Login";
import { Search } from "@/components/Search";
import UserContext from "@/context/UserContext";
import { useContext } from "react";

export default function HomePage() {
  const { token } = useContext(UserContext);
  return <>{token ? <Home /> : <Login />}</>;
}
