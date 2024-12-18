import { j as jsxRuntimeExports, r as reactExports, L as Link, H as HashRouter, R as Routes, a as Route, c as createRoot } from "./vendor-a6d6e3e5.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const App$1 = "";
const BurgerButton = ({ isOpen, toggleMenu }) => {
  const SpanClassName = " block w-[36px] h-[3px] rounded bg-black transition-all duration-300 ease-out";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: toggleMenu, className: `flex flex-col justify-center items-center h-10 ${!isOpen && "gap-1.5"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${SpanClassName} ${isOpen && "rotate-45 translate-y-[3px]"}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${SpanClassName} ${isOpen && "opacity-0"}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${SpanClassName} ${isOpen && "-rotate-45 -translate-y-[3px]"}` })
  ] });
};
const breakpointValuesMap = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
const useMediaBreakpoint = (breakpoint) => {
  const [isUp, setIsUp] = reactExports.useState(false);
  const mediaQueryList = reactExports.useRef(matchMedia(`(min-width: ${breakpointValuesMap[breakpoint]}px)`));
  reactExports.useEffect(() => {
    const screenTest = (e) => {
      return setIsUp(e.matches);
    };
    setIsUp(mediaQueryList.current.matches);
    mediaQueryList.current.addEventListener("change", screenTest);
    return () => mediaQueryList.current.removeEventListener("change", screenTest);
  }, [mediaQueryList]);
  return isUp;
};
var TextVariant = /* @__PURE__ */ ((TextVariant2) => {
  TextVariant2["H1"] = "H1";
  TextVariant2["H6"] = "H6";
  TextVariant2["P"] = "P";
  return TextVariant2;
})(TextVariant || {});
const Text = ({ children, variant }) => {
  const variantStyle = variantStyleMap[variant];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${variantStyle}`, children });
};
const variantStyleMap = {
  [
    "H1"
    /* H1 */
  ]: "text-[36px] font-bold tracking-[.2px]",
  [
    "H6"
    /* H6 */
  ]: "text-[18px] font-bold tracking-[.2px]",
  [
    "P"
    /* P */
  ]: "text-[18px] font-normal tracking-[.2px]"
};
const Header = () => {
  const lg = useMediaBreakpoint("lg");
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const menuItems = [
    { path: "/", label: "Projects" },
    { path: "/animation", label: "Animation" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  if (lg) {
    return (
      //desktop
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "bg-white h-20 w-full gap-20 flex justify-center items-center fixed left-0 top-0", children: menuItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "hover:underline", to: item.path, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.H6, children: item.label }) }, item.path)) })
    );
  }
  return (
    //mobile
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "bg-white fixed top-0 left-0 w-full h-20 z-50 flex justify-center items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed justify-center top-5 left-5 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BurgerButton, { isOpen, toggleMenu }) }),
      isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "fixed inset-0 bg-black bg-opacity-50 transition-opacity z-30",
          onClick: toggleMenu
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `fixed top-0 left-0 h-full bg-white w-64 transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col text-2xl p-4 mt-16", children: menuItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 w-28", onClick: toggleMenu, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.path, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.H6, children: item.label }) }) }, item.path)) })
        }
      )
    ] })
  );
};
const Anchor = ({ children, to, ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { ...props, className: "text-[18px] font-normal hover:underline ", target: "_blank", rel: "noopener noreferrer", href: to, children });
};
const SvgIcBehance = (props) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 50 50", width: "50px", height: "50px", ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 12 18 L 18.730469 18 C 19.460469 18 23.410156 17.950312 23.410156 21.570312 C 23.410156 23.490313 22.099766 24.139688 21.509766 24.429688 C 22.389766 24.709688 24 25.52 24 28 C 24 31.83 19.609531 32 19.019531 32 L 12 32 L 12 18 z M 29 18 L 36 18 L 36 20 L 29 20 L 29 18 z M 15 20.429688 L 15 23.710938 L 18.220703 23.710938 C 18.660703 23.710938 20.119141 23.47 20.119141 22 C 20.119141 20.53 18.219687 20.429688 17.929688 20.429688 L 15 20.429688 z M 32.730469 21 C 36.630469 21 37.689609 24.039766 37.849609 24.759766 C 37.999609 25.489766 38 26.13 38 27 L 30.099609 27 C 30.099609 27.87 30.560625 29.830078 32.890625 29.830078 C 33.510625 29.830078 33.969453 29.680625 34.439453 29.390625 C 34.899453 29.100625 35.060938 28.819297 35.210938 28.529297 L 37.839844 28.529297 C 37.379844 29.679297 36.760078 30.550859 35.830078 31.130859 C 34.900078 31.710859 33.820078 32 32.580078 32 C 31.800078 32 31.03 31.850547 30.25 31.560547 C 29.63 31.270547 29.010781 30.840156 28.550781 30.410156 C 28.090781 29.970156 27.780703 29.389922 27.470703 28.669922 C 27.160703 28.089922 27 27.22 27 26.5 C 27 25.78 27.290469 21 32.730469 21 z M 32.730469 23.029297 C 30.470469 23.029297 30.099609 25.199844 30.099609 25.339844 L 35.060547 25.339844 C 34.900547 24.619844 34.250469 23.029297 32.730469 23.029297 z M 15 25.710938 L 15 29.570312 L 18.351562 29.570312 C 18.640563 29.570312 20.679688 29.480937 20.679688 27.710938 C 20.679687 25.950937 19.077562 25.710938 18.351562 25.710938 L 15 25.710938 z" }));
const SvgIcInstagram = (props) => /* @__PURE__ */ reactExports.createElement("svg", { width: "50px", height: "50px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ reactExports.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z", fill: "#000000" }));
const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-4 lg:mx-48", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.H6, children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { to: "mailto:hato3650@gmail.com", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.P, children: "hato3650@gmail.com" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { to: "https://t.me/hatomarano", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.P, children: "tg: @hatomarano" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center items-center lg:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { to: "https://www.instagram.com/hatomaran", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SvgIcInstagram, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { to: "https://www.behance.net/hatomar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SvgIcBehance, {}) })
    ] })
  ] });
};
const Loader = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-40 flex justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-40 w-40 border-8 border-gray-200 border-t-black" }) });
};
function App() {
  const ProjectListPage = reactExports.lazy(() => __vitePreload(() => import("./ProjectListPage-419b6de3.js"), true ? ["assets/ProjectListPage-419b6de3.js","assets/vendor-a6d6e3e5.js","assets/ProjectList-e798f184.js","assets/useProjects-603073cf.js"] : void 0));
  const AnimationListPage = reactExports.lazy(() => __vitePreload(() => import("./AnimationListPage-4d47fad2.js"), true ? ["assets/AnimationListPage-4d47fad2.js","assets/vendor-a6d6e3e5.js","assets/ProjectList-e798f184.js","assets/useProjects-603073cf.js"] : void 0));
  const ProjectPage = reactExports.lazy(() => __vitePreload(() => import("./ProjectPage-4e976a48.js"), true ? ["assets/ProjectPage-4e976a48.js","assets/vendor-a6d6e3e5.js","assets/useProjects-603073cf.js"] : void 0));
  const AboutPage = reactExports.lazy(() => __vitePreload(() => import("./AboutPage-09a710d4.js"), true ? ["assets/AboutPage-09a710d4.js","assets/vendor-a6d6e3e5.js","assets/usePages-f202a9dd.js"] : void 0));
  const ContactPage = reactExports.lazy(() => __vitePreload(() => import("./ContactPage-4665f087.js"), true ? ["assets/ContactPage-4665f087.js","assets/vendor-a6d6e3e5.js","assets/usePages-f202a9dd.js"] : void 0));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HashRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-grow px-4 lg:px-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectListPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/animation", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimationListPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/project/:title", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectPage, {}) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const index = "";
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
);
export {
  Text as T,
  __vitePreload as _,
  TextVariant as a,
  useMediaBreakpoint as u
};
