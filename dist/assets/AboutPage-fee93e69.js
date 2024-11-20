import { j as jsxRuntimeExports } from "./vendor-a6d6e3e5.js";
import { T as Text, a as TextVariant } from "./index-98a04af7.js";
import { u as usePages } from "./usePages-0dc4ec0e.js";
const AboutPage = () => {
  const { description } = usePages("about");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.H1, children: "About" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: TextVariant.P, children: description })
  ] });
};
export {
  AboutPage as default
};
