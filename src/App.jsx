import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Dashboard, { tasksLoader } from "./pages/Dashboard";
import Create, { createAction } from "./pages/Create";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Privacy from "./pages/compliance/Privacy";
import TermsOfService from "./pages/compliance/TermsOfService";
import CollabPage from "./pages/CollabPage";
import CollabPageLayout from "./layouts/CollabPageLayout";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/termsofservice' element={<TermsOfService />} />
      <Route path='/collabs' element={<CollabPageLayout />}>
        <Route path='/collabs/:name' element={<CollabPage />} />
      </Route>
      <Route path='/console' element={<RootLayout />}>
        <Route index element={<Dashboard />} loader={tasksLoader} />
        <Route
          path='/console/create'
          element={<Create />}
          action={createAction}
        />
        <Route path='/console/profile' element={<Profile />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
