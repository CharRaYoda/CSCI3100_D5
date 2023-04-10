import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import DefaultPage from "./pages/common/DefaultPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ContactAdmin from "./pages/ContactAdmin/ContactAdmin";
import BugReport from "./pages/common/BugReport";
import StudentHome from "./pages/student/Home";
import CourseBrowsing from "./pages/student/CourseBrowsing";
import Profile from "./pages/student/Profile";
import TeacherHome from "./pages/teacher/Home";
import AdminHome from "./pages/admin/Home";
import ForgetPassword from "./pages/common/ForgetPassword";
import "./style.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/student/home",
    element: <StudentHome />,
  },
  {
    path: "/teacher/home",
    element: <TeacherHome />,
  },
  {
    path: "/admin/home",
    element: <AdminHome />,
  },
  {
    path: "/student/CourseBrowsing",
    element: <CourseBrowsing />,
  },
  {
    path: "/student/profile",
    element: <Profile />,
  },
  {
    path: "/ContactAdmin",
    element: <ContactAdmin />,
  },
  {
    path: "/BugReport",
    element: <BugReport />,
  },
  {
    path: "/ForgetPassword",
    element: <ForgetPassword />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
