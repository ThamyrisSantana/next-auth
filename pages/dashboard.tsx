import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { api } from "../services/api";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return <div>Dashboard {user?.email}</div>;
}
