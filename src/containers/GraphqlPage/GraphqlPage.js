import React from 'react';
import { Helmet } from 'react-helmet-async';

import GraphiQLExample from '../../components/GraphiQLExample';
// import LinkTest from '../../components/jestTest/LinkTest';


const GraphqlPage = () => {

	const styles = require('./scss/GraphqlPage.scss');

	return (

		<div className={styles.graphqlPage}>

			<Helmet title="GraphQL Page" />

			<div className="bg-color-ivory container-padding-border-radius-1 text-break">
				<div>
					Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx11111111xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2222222222xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx! Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?
				</div>
			</div>

			<h1 className={styles.uniqueColor}>GraphQL Page Test!</h1>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>

			{/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

			<div>

				<GraphiQLExample />

			</div>

			{/* (>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) */}

		</div>
	);
}

export default GraphqlPage;
