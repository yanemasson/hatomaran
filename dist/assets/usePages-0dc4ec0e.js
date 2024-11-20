import { _ as __vitePreload } from "./index-98a04af7.js";
import { r as reactExports, m as matter } from "./vendor-a6d6e3e5.js";
const usePages = (path) => {
  const [pageContent, setPageContent] = reactExports.useState({});
  reactExports.useEffect(() => {
    const loadPage = async () => {
      const pageFiles = /* @__PURE__ */ Object.assign({ "/content/pages/about.md": () => __vitePreload(() => import("./about-dad1b4c3.js"), true ? [] : void 0).then((m) => m["default"]), "/content/pages/contact.md": () => __vitePreload(() => import("./contact-3b59dfce.js"), true ? [] : void 0).then((m) => m["default"]) });
      const fullPath = `/content/pages/${path}.md`;
      const loader = pageFiles[fullPath];
      if (!loader) {
        console.warn(`File not found: ${fullPath}`);
        return;
      }
      const fileContent = await loader();
      const { data } = matter(fileContent);
      setPageContent(data);
    };
    loadPage();
  }, [path]);
  return pageContent;
};
export {
  usePages as u
};
