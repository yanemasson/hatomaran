import { u as useParams, j as jsxRuntimeExports } from "./vendor-a6d6e3e5.js";
import { T as Text, a as TextVariant } from "./index-b29bba1b.js";
import { u as useProjects, I as Image } from "./useProjects-603073cf.js";
const ProjectPage = () => {
  const projects = useProjects();
  const { title } = useParams();
  const project = projects.find((p) => p.title === title);
  if (!project) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.H1, children: "404" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " mt-20 flex flex-col lg:flex-row gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex lg:flex-col lg:w-1/2 gap-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        project.images[0] && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { isHref: true, src: project.images[0].url, alt: project.images[0].url }),
          project.images[0].title && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.P, children: project.images[0].title })
        ] }),
        project.animations[0] && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("video", { autoPlay: true, loop: true, muted: true, playsInline: true, src: project.animations[0].url }),
          project.animations[0].title && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.P, children: project.animations[0].title })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-10 lg:w-1/2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.H1, children: project.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.P, children: project.description })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      project.images[1] && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: project.images.slice(1).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { src: item.url, isHref: true, alt: item.url }),
        item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.P, children: item.title })
      ] })) }),
      project.animations[1] && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: project.animations.slice(1).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("video", { className: "lg:h-96", autoPlay: true, loop: true, muted: true, playsInline: true, src: item.url }),
        item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.P, children: item.title })
      ] })) })
    ] })
  ] });
};
export {
  ProjectPage as default
};
