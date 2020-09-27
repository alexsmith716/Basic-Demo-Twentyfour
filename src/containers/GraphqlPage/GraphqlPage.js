import React from 'react';
import { Helmet } from 'react-helmet-async';
//  import * as Styles from './styles';

import GraphiQLExample from '../../components/GraphiQLExample';
import LinkTest from '../../components/jestTest/LinkTest';


const GraphqlPage = () => {

	return (
		<>

			<Helmet title="GraphiQL Page" />

			{/* ---------------------------------------------- */}

			<div className="container">

				{/* ---------------------------------------------- */}

				<h1 className="mt-4 mb-3">GraphiQL Page And More!</h1>

				{/* ---------------------------------------------- */}

				<div className="bg-color-ivory container-padding-border-radius-1 mb-5 text-break">
					Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx11111111xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2222222222xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx! Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?
				</div>

				<div className="mb-5">
					Ugly now, but GraphQL Looks on the way! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?
				</div>

				<div className="mb-5">
					<LinkTest>Github</LinkTest>
				</div>

				<div className="mb-5">
					<GraphiQLExample />
				</div>

			</div>
		</>
	);
}

export default GraphqlPage;
