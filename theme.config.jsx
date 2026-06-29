export default {
  logo: (
    <span style={{ fontWeight: 700, letterSpacing: "-0.01em" }}>
      Rehive <span style={{ color: "#1b3a8b" }}>Docs</span>
    </span>
  ),
  project: {
    link: "https://github.com/rehive",
  },
  docsRepositoryBase: "https://github.com/rehive/docs-portal/tree/main",
  footer: {
    text: "Rehive — the operating layer for stablecoin finance",
  },
  primaryHue: 224,
  primarySaturation: 68,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    float: true,
    backToTop: true,
  },
  darkMode: true,
  useNextSeoProps() {
    return { titleTemplate: "%s – Rehive Docs" };
  },
};
