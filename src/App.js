import { Routes, useRoutes } from "react-router-dom";
import {routes} from "./routes";
import {useEffect} from "react";

export default function App() {

  const element = useRoutes(routes)

  return element
}