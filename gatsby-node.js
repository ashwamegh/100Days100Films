const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const { data: movieResults } = await graphql(`
		query allFilmsQuery {
			allFilmsJson {
				edges {
					node {
						movieId
					}
				}
			}
		}
	`);

	const movieTemplate = path.resolve(`src/templates/movie.js`);
	movieResults.allFilmsJson.edges.forEach(({ node }) => {
		createPage({
			path: `/movie/${node.movieId}`,
			component: movieTemplate,
			context: {
				// This time the entire product is passed down as context
				movieId: node.movieId
			}
		});
	});
};