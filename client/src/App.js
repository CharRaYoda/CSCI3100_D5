import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DefaultPage from "./pages/common/DefaultPage";
import BugReport from "./pages/common/BugReport";
import ChangePassword from "./pages/common/ChangePassword";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

import ContactAdmin from "./pages/ContactAdmin/ContactAdmin";

import StudentHome from "./pages/student/Home";
import CourseBrowsing from "./pages/student/CourseBrowsing";
import Profile from "./pages/student/Profile";

import TeacherHome from "./pages/teacher/Home";
import GradeUpload from "./pages/teacher/GradeUpload";
import CourseUpdate from "./pages/teacher/CourseUpdate";
import CourseTeaching from "./pages/teacher/CourseTeaching";
import SpecialAddDrop from "./pages/teacher/SpecialAddDrop";
import ClassroomBooking from "./pages/teacher/ClassroomBooking";
import ClassroomShow from "./pages/teacher/ClassroomShow";

import AdminHome from "./pages/admin/Home";
import AdminEnrollmentSetting from "./pages/admin/EnrollmentSetting";
import AdminViewEditCourses from "./pages/admin/ViewEditCourses";
import AdminAddCourses from "./pages/admin/AddCourse";
import AdminViewEditUsers from "./pages/admin/ViewEditUsers";
import AdminDeleteCourse from "./pages/admin/DeleteCourse";
import AdminDeleteUser from "./pages/admin/DeleteUser";
import AdminAddUser from "./pages/admin/AddUser";

import "./style.scss"

//Routes for the website
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
    path: "/student/CourseBrowsing",
    element: <CourseBrowsing />,
  },
  {
    path: "/student/profile",
    element: <Profile />,
  },
  {
    path: "/teacher/home",
    element: <TeacherHome />,
  },
  {
    path: "/teacher/GradeUpload",
    element: <GradeUpload />,
  },
  {
    path: "/teacher/CourseUpdate",
    element: <CourseUpdate />,
  },
  {
    path: "/teacher/CourseTeaching",
    element: <CourseTeaching />,
  },
  {
    path: "/teacher/SpecialAddDrop",
    element: <SpecialAddDrop />,
  },
  {
    path: "/teacher/ClassroomBooking",
    element: <ClassroomBooking />,
  },
  {
    path: "/teacher/ClassroomBooking/show",
    element: <ClassroomShow />,
  },
  {
    path: "/admin/home",
    element: <AdminHome />,
  },
  {
    path: "/admin/EnrollmentSetting",
    element: <AdminEnrollmentSetting />,
  },
  {
    path: "/admin/ViewEditCourses",
    element: <AdminViewEditCourses />,
  },
  {
    path: "/admin/ViewEditCourses/AddCourses",
    element: <AdminAddCourses />,
  },
  {
    path: "/admin/ViewEditCourses/DeleteCourses",
    element: <AdminDeleteCourse />,
  },
  {
    path: "/admin/ViewEditUsers",
    element: <AdminViewEditUsers />,
  },
  {
    path: "/admin/ViewEditUsers/AddUsers",
    element: <AdminAddUser />,
  },
  {
    path: "/admin/ViewEditUsers/DeleteUsers",
    element: <AdminDeleteUser />,
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
    path: "/ChangePassword",
    element: <ChangePassword />,
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
