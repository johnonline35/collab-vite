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
import CollabPage from "./pages/collabs/CollabPageNotes";
import CollabPageLayout from "./layouts/CollabPageLayout";
import CollabPageTeam from "./pages/collabs/CollabPageTeam";
import CollabPageHome from "./pages/collabs/CollabPageHome";
import CollabPageChallenges from "./pages/collabs/CollabPageChallenges";
import CollabPageNextSteps from "./pages/collabs/CollabPageNextSteps";
import CollabPageProposals from "./pages/collabs/CollabPageProposals";
import CollabPageCurrentState from "./pages/collabs/CollabPageCurrentState";
import CollabPageLegalDocuments from "./pages/collabs/CollabPageLegalDocuments";
import CollabPagePricing from "./pages/collabs/CollabPagePricing";
import CollabPageTimeline from "./pages/collabs/CollabPageTimeline";
import CollabPageQuestions from "./pages/collabs/CollabPageQuestions";
import CollabPageAllAttachments from "./pages/collabs/CollabPageAllAttachments";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/termsofservice' element={<TermsOfService />} />
      <Route path='/collabs/:name' element={<CollabPageLayout />}>
        <Route path='/collabs/:name' element={<CollabPageHome />} />
        <Route path='/collabs/:name/team' element={<CollabPageTeam />} />
        <Route path='/collabs/:name/notes' element={<CollabPage />} />
        <Route
          path='/collabs/:name/nextsteps'
          element={<CollabPageNextSteps />}
        />
        <Route
          path='/collabs/:name/challenges'
          element={<CollabPageChallenges />}
        />
        <Route
          path='/collabs/:name/proposals'
          element={<CollabPageProposals />}
        />
        <Route
          path='/collabs/:name/currentstate'
          element={<CollabPageCurrentState />}
        />
        <Route
          path='/collabs/:name/legaldocuments'
          element={<CollabPageLegalDocuments />}
        />
        <Route path='/collabs/:name/pricing' element={<CollabPagePricing />} />
        <Route
          path='/collabs/:name/timeline'
          element={<CollabPageTimeline />}
        />
        <Route
          path='/collabs/:name/questions'
          element={<CollabPageQuestions />}
        />
        <Route
          path='/collabs/:name/allattachments'
          element={<CollabPageAllAttachments />}
        />
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
