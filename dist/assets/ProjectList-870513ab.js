import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./vendor-a6d6e3e5.js";
import { I as Image, u as useProjects } from "./useProjects-782b035f.js";
import { T as Text, a as TextVariant, u as useMediaBreakpoint } from "./index-98a04af7.js";
const SvgArrowLeft = (props) => /* @__PURE__ */ reactExports.createElement("svg", { width: "200px", height: "200px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));
const SvgArrowRight = (props) => /* @__PURE__ */ reactExports.createElement("svg", { width: "200px", height: "200px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));
const ProjectCard = ({ images, animations, title, isOpen }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " flex flex-col p-3 gap-3 rounded justify-center bg-white", children: [
    images[0] && /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: " lg:h-[85vh]", src: images[0].url, alt: images[0].url }),
    animations[0] && /* @__PURE__ */ jsxRuntimeExports.jsx("video", { className: " lg:h-[85vh]", autoPlay: true, loop: true, muted: true, playsInline: true, src: animations[0].url }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.H6, children: title }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/project/${title}`, children: "Open full project..." })
  ] });
};
const ProjectList = (tag) => {
  const lg = useMediaBreakpoint("lg");
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [currentProjectNumber, setCurrentProjectNumber] = reactExports.useState(0);
  const projects = useProjects().filter((item) => {
    var _a;
    return ((_a = item.tag) == null ? void 0 : _a.value) === tag.value;
  });
  const goBack = () => {
    if (currentProjectNumber === 0) {
      setCurrentProjectNumber(projects.length - 1);
    } else {
      setCurrentProjectNumber(currentProjectNumber - 1);
    }
  };
  const goNext = () => {
    if (currentProjectNumber === projects.length - 1) {
      setCurrentProjectNumber(0);
    } else {
      setCurrentProjectNumber(currentProjectNumber + 1);
    }
  };
  const toggle = (num) => {
    setCurrentProjectNumber(num);
    setIsOpen(!isOpen);
  };
  reactExports.useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        toggle(0);
      }
      if (event.key === "ArrowRight") {
        goNext();
      }
      if (event.key === "ArrowLeft") {
        goBack();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [toggle, goBack, goNext]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:columns-3 gap-4 mt-20 ", children: [
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 transition-opacity z-30", onClick: () => toggle(0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-40 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center pointer-events-auto", children: lg ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SvgArrowLeft, { className: "text-gray-400 hover:text-white mr-5 z-50 items-center justify-center w-16", onClick: () => goBack() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProjectCard,
          {
            animations: projects[currentProjectNumber].animations,
            tag: projects[currentProjectNumber].tag,
            title: projects[currentProjectNumber].title,
            images: projects[currentProjectNumber].images,
            isOpen: projects[currentProjectNumber].isOpen
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SvgArrowRight, { className: "text-gray-400 hover:text-white ml-5 z-50 items-center justify-center w-16", onClick: () => goNext() })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProjectCard,
          {
            animations: projects[currentProjectNumber].animations,
            tag: projects[currentProjectNumber].tag,
            title: projects[currentProjectNumber].title,
            images: projects[currentProjectNumber].images,
            isOpen: projects[currentProjectNumber].isOpen
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex mt-8 justify-around", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SvgArrowLeft, { className: "text-gray-400  z-50 items-center justify-center h-16 w-16", onClick: () => goBack() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SvgArrowRight, { className: "text-gray-400  z-50 items-center justify-center h-16 w-16", onClick: () => goNext() })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-item row-span-2", children: projects.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => toggle(index), children: [
      item.images[0] && /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { alt: item.title, className: "py-2", src: item.images[0].url }),
      item.animations[0] && /* @__PURE__ */ jsxRuntimeExports.jsx("video", { autoPlay: true, loop: true, muted: true, playsInline: true, src: item.animations[0].url })
    ] }, item.title)) })
  ] });
};
export {
  ProjectList as P
};
