import { createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import "react";
const Route$5 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tayo Adebayo — Product Designer" },
      {
        name: "description",
        content: "Product designer and founder based in Lagos, Nigeria. Leading design at Rivy and building products for African businesses."
      }
    ]
  }),
  shellComponent: RootDocument,
  component: RootLayout
});
function RootLayout() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$3 = () => import("./resume-ooP-YZ6B.js");
const Route$4 = createFileRoute("/resume")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./projects-CG19KGn3.js");
const Route$3 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./contact-WiKvVM2d.js");
const Route$2 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const Route$1 = createFileRoute("/")({
  component: Portfolio
});
const projects = [
  {
    name: "Rivy",
    description: "Climate finance infrastructure powering clean energy access in Africa.",
    category: "Climate · Finance",
    url: "https://rivy.co"
  },
  {
    name: "EnergyStack",
    description: "A curated storefront for reliable solar products in Nigeria.",
    category: "E-commerce · Energy",
    url: "https://energystack.rivy.co/"
  },
  {
    name: "Leafmover",
    description: "A modern platform helping African businesses run and grow online.",
    category: "SaaS · Commerce",
    url: "https://leafmover.com"
  },
  {
    name: "Copicart",
    description: "An ecommerce marketplace built for modern African brands.",
    category: "Marketplace",
    url: "#"
  }
];
const media = [
  {
    publication: "The Guardian",
    title: "The designers reimagining African digital infrastructure",
    year: "2024",
    url: "https://guardian.ng/features/how-firstangles-tayo-adebayo-is-making-a-difference-in-the-nigerian-tech-space/"
  },
  {
    publication: "Vanguard",
    title: "How Tayo Adebayo is shaping the future of clean energy design in Nigeria",
    year: "2023",
    url: "https://guardian.ng/features/how-firstangles-tayo-adebayo-is-making-a-difference-in-the-nigerian-tech-space/"
  }
];
const socials = [
  { label: "Instagram", href: "https://www.instagram.com/tayoadebayo.m/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tayoadebayo/" },
  { label: "Email", href: "mailto:hi@tayo.work" }
];
function Portfolio() {
  return /* @__PURE__ */ jsxs(
    "main",
    {
      style: {
        backgroundColor: "var(--bg)",
        minHeight: "100vh"
      },
      children: [
        /* @__PURE__ */ jsx(
          "section",
          {
            style: {
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "80px 40px 100px"
            },
            children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: "640px" }, children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "animate-in",
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "40px"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#5A8A5A",
                          display: "inline-block"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          fontSize: "13px",
                          color: "var(--ink-secondary)",
                          letterSpacing: "0.03em"
                        },
                        children: "Lagos, Nigeria"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "h1",
                {
                  className: "animate-in delay-1",
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(24px, 3.5vw, 34px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "var(--ink)",
                    margin: "0 0 12px",
                    whiteSpace: "nowrap"
                  },
                  children: "Tayo Adebayo"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "animate-in delay-2",
                  style: {
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--ink-secondary)",
                    margin: "0 0 40px"
                  },
                  children: "Product Designer"
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "animate-in delay-3",
                  style: { marginBottom: "56px" },
                  children: [
                    "I live in Lagos, Nigeria.",
                    "I founded Firstangle, a design agency company. We worked on a couple of brand identity projects for company in Nigeria, UK and the US. But, we are pivoting to industrial design agency.",
                    "I currently work at Rivy, where I lead design for product like Energystack and Rivy, leading the adoption of clean energy and making energy, power accessible for Africans through financing.",
                    "I founded Leafmover, an AI-driven tool that helps small businesses sell their products and services online. We created Copicart, an ecommerce store for gadgets and everyday essentials.",
                    "At my core, I'm a designer who loves crafting products with a high level of polish."
                  ].map((para, i) => /* @__PURE__ */ jsx(
                    "p",
                    {
                      style: {
                        fontSize: "17px",
                        lineHeight: 1.75,
                        color: i === 0 ? "var(--ink-secondary)" : "var(--ink)",
                        marginBottom: i < 4 ? "20px" : 0,
                        fontWeight: 300
                      },
                      children: para
                    },
                    i
                  ))
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "animate-in delay-4",
                  style: {
                    display: "flex",
                    gap: "24px",
                    flexWrap: "wrap"
                  },
                  children: socials.map((s) => /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: s.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "link-underline",
                      style: {
                        fontSize: "13px",
                        color: "var(--ink-secondary)",
                        textDecoration: "none",
                        fontWeight: 400,
                        transition: "color 0.2s ease",
                        letterSpacing: "0.01em"
                      },
                      onMouseEnter: (e) => e.target.style.color = "var(--ink)",
                      onMouseLeave: (e) => e.target.style.color = "var(--ink-secondary)",
                      children: s.label
                    },
                    s.label
                  ))
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "0 40px"
            },
            children: /* @__PURE__ */ jsx("div", { style: { height: "1px", backgroundColor: "var(--rule)" } })
          }
        ),
        /* @__PURE__ */ jsxs(
          "section",
          {
            id: "work",
            style: {
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "100px 40px"
            },
            children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    marginBottom: "60px"
                  },
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "section-label animate-in", children: "Projects" }),
                    /* @__PURE__ */ jsxs(
                      "span",
                      {
                        className: "animate-in",
                        style: { fontSize: "12px", color: "var(--ink-tertiary)" },
                        children: [
                          projects.length,
                          " projects"
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { children: projects.map((project, i) => /* @__PURE__ */ jsxs(
                "a",
                {
                  href: project.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: `project-row animate-in delay-${i + 2}`,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "32px 0",
                    textDecoration: "none",
                    color: "inherit",
                    gap: "24px"
                  },
                  children: [
                    /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
                      /* @__PURE__ */ jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "baseline",
                            gap: "20px",
                            marginBottom: "8px",
                            flexWrap: "nowrap"
                          },
                          children: [
                            /* @__PURE__ */ jsx(
                              "h3",
                              {
                                style: {
                                  fontFamily: "var(--font-display)",
                                  fontSize: "24px",
                                  fontWeight: 400,
                                  color: "var(--ink)",
                                  margin: 0,
                                  letterSpacing: "-0.015em"
                                },
                                children: project.name
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "span",
                              {
                                style: {
                                  fontSize: "11px",
                                  fontWeight: 500,
                                  letterSpacing: "0.08em",
                                  textTransform: "uppercase",
                                  color: "var(--ink-tertiary)",
                                  whiteSpace: "nowrap"
                                },
                                children: project.category
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "p",
                        {
                          style: {
                            fontSize: "15px",
                            color: "var(--ink-secondary)",
                            margin: 0,
                            fontWeight: 300,
                            lineHeight: 1.5
                          },
                          children: project.description
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "project-arrow",
                        style: {
                          flexShrink: 0,
                          color: "var(--ink-secondary)"
                        },
                        children: /* @__PURE__ */ jsx(
                          "svg",
                          {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: /* @__PURE__ */ jsx("path", { d: "M4 10h12M11 5l5 5-5 5", strokeLinecap: "round", strokeLinejoin: "round" })
                          }
                        )
                      }
                    )
                  ]
                },
                project.name
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "0 40px"
            },
            children: /* @__PURE__ */ jsx("div", { style: { height: "1px", backgroundColor: "var(--rule)" } })
          }
        ),
        /* @__PURE__ */ jsxs(
          "section",
          {
            id: "writing",
            style: {
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "100px 40px"
            },
            children: [
              /* @__PURE__ */ jsx("div", { style: { marginBottom: "60px" }, children: /* @__PURE__ */ jsx("span", { className: "section-label animate-in", children: "Press & Writing" }) }),
              /* @__PURE__ */ jsx("div", { children: media.map((item, i) => /* @__PURE__ */ jsxs(
                "a",
                {
                  href: item.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: `media-row animate-in delay-${i + 2}`,
                  style: {
                    display: "grid",
                    gridTemplateColumns: "140px 1fr 60px",
                    alignItems: "center",
                    gap: "32px",
                    padding: "28px 0",
                    textDecoration: "none",
                    color: "inherit"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          fontSize: "12px",
                          fontWeight: 500,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--ink-tertiary)"
                        },
                        children: item.publication
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          fontSize: "16px",
                          color: "var(--ink)",
                          fontWeight: 300,
                          lineHeight: 1.45,
                          transition: "opacity 0.2s ease"
                        },
                        className: "link-underline",
                        children: item.title
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          fontSize: "13px",
                          color: "var(--ink-tertiary)",
                          textAlign: "right",
                          fontVariantNumeric: "tabular-nums"
                        },
                        children: item.year
                      }
                    )
                  ]
                },
                item.title
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsx("style", { children: `
        @media (max-width: 640px) {
          .site-nav > div {
            padding: 0 20px !important;
          }
          .media-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .media-row > span:last-child {
            text-align: left !important;
          }
        }
      ` })
      ]
    }
  );
}
const $$splitComponentImporter = () => import("./_slug-dZ2Wvr8Z.js");
const Route = createFileRoute("/blog/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ResumeRoute = Route$4.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$5
});
const ProjectsRoute = Route$3.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const BlogSlugRoute = Route.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  ProjectsRoute,
  ResumeRoute,
  BlogSlugRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
