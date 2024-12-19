import { j as jsxRuntimeExports, r as reactExports, m as matter } from "./vendor-a6d6e3e5.js";
import { _ as __vitePreload } from "./index-b29bba1b.js";
const Image = ({ src, alt, isHref = false, className }) => {
  if (isHref)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { target: "_blank", href: src, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt, className }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt, className });
};
const useProjects = () => {
  const [projects, setProjects] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const loadProjects = async () => {
      const projectFiles = /* @__PURE__ */ Object.assign({ "/content/projects/иллюстрация-на-основе-ai-для-боулинг-клуба.md": () => __vitePreload(() => import("./иллюстрация-на-основе-ai-для-боулинг-клуба-7fbdca6f.js"), true ? [] : void 0).then((m) => m["default"]), "/content/projects/копия-платка-18-века.md": () => __vitePreload(() => import("./копия-платка-18-века-2a9cdf8a.js"), true ? [] : void 0).then((m) => m["default"]), "/content/projects/упаковка-и-логотип-чая.md": () => __vitePreload(() => import("./упаковка-и-логотип-чая-ace77a11.js"), true ? [] : void 0).then((m) => m["default"]) });
      const loadedProjects = [];
      for (const path in projectFiles) {
        const fileContent = await projectFiles[path]();
        const { data } = matter(fileContent);
        const project = {
          title: data.title || "Без названия",
          description: data.description || "",
          images: data.images || [],
          animations: data.animation || [],
          isOpen: data.isOpen || false,
          tag: { value: data.tag || "project" }
        };
        console.log(data);
        loadedProjects.push(project);
      }
      setProjects(loadedProjects);
    };
    loadProjects();
  }, []);
  return projects;
};
export {
  Image as I,
  useProjects as u
};
