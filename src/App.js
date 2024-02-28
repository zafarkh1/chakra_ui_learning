import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Rootlayout from "./layouts/Rootlayout";
import Dashboard from "./pages/Dashboard";
import Create, { createAction } from "./pages/Create";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/create" element={<Create />} action={createAction} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
