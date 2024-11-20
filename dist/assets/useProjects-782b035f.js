import { r as reactExports, j as jsxRuntimeExports, m as matter } from "./vendor-a6d6e3e5.js";
import { _ as __vitePreload } from "./index-98a04af7.js";
const Image = ({ src, alt, className }) => {
  const [isError, setIsError] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: !isError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src,
      alt,
      className,
      onError: (e) => {
        console.error("Image load error:", {
          src,
          alt,
          target: e.target
        });
        setIsError(true);
      }
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "error-placeholder", children: [
    "Image failed to load: ",
    alt
  ] }) });
};
const useProjects = () => {
  const [projects, setProjects] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const loadProjects = async () => {
      const projectFiles = /* @__PURE__ */ Object.assign({ "/content/projects/анимация-диаграма-круто-бизнес.md": () => __vitePreload(() => import("./анимация-диаграма-круто-бизнес-e035fb81.js"), true ? [] : void 0).then((m) => m["default"]), "/content/projects/иллюстрация-на-основе-ai-для-боулинг-клуба.md": () => __vitePreload(() => import("./иллюстрация-на-основе-ai-для-боулинг-клуба-7fbdca6f.js"), true ? [] : void 0).then((m) => m["default"]), "/content/projects/копия-платка-18-века.md": () => __vitePreload(() => import("./копия-платка-18-века-2a9cdf8a.js"), true ? [] : void 0).then((m) => m["default"]), "/content/projects/мемы-смешные.md": () => __vitePreload(() => import("./мемы-смешные-d920e0a1.js"), true ? [] : void 0).then((m) => m["default"]), "/content/projects/обложки-для-рэперов-жесткие.md": () => __vitePreload(() => import("./обложки-для-рэперов-жесткие-a1edfa67.js"), true ? [] : void 0).then((m) => m["default"]), "/content/projects/упаковка-и-логотип-чая.md": () => __vitePreload(() => import("./упаковка-и-логотип-чая-ace77a11.js"), true ? [] : void 0).then((m) => m["default"]) });
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
