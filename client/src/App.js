import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import StudentHome from "./pages/student/Home";
import CourseBrowsing from "./pages/student/CourseBrowsing";
import Profile from "./pages/student/Profile";
import TeacherHome from "./pages/teacher/Home";
import AdminHome from "./pages/admin/Home";
import "./style.scss"

const router = createBrowserRouter([
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
