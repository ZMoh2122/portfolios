import { Routes, Route } from "react-router-dom";
import Layout from "../app/layout";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";
import Achievements from "../pages/Achievements";
import Hobbies from "../pages/Hobbies";
import Blog from "../pages/Blog";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Profile />} />
        <Route path="projects" element={<Projects />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}
