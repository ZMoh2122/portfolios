import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Profile from "./pages/Profile.tsx";
import Projects from "./pages/Projects.tsx";
import Achievements from "./pages/Achievements.tsx";
import Hobbies from "./pages/Hobbies.tsx";
import Blog from "./pages/Blog.tsx";

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
