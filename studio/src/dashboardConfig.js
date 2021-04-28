export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60899f11c9da810ff95d7533",
                  title: "Sanity Studio",
                  name: "the-deck-menu-studio",
                  apiId: "e5898ae6-f7ba-4f0c-a642-2e2b0e385b1f",
                },
                {
                  buildHookId: "60899f1148ac561432f2d8c9",
                  title: "Blog Website",
                  name: "the-deck-menu",
                  apiId: "4da3fe80-ff6d-44cf-b247-4881ca9bfc35",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ncaudill27/the-deck-menu",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://the-deck-menu.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
