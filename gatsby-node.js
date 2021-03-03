const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      allStrapiCareGuides {
        nodes {
          slug
        }
      }
    }
  `);
  result.data.allStrapiCareGuides.nodes.forEach((guide) => {
    createPage({
      path: `/careGuide/${guide.slug}`,
      component: path.resolve(`src/templates/care-guide-template.js`),
      context: {
        slug: `${guide.slug}`,
      },
    });
  });
};
