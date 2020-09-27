import React, { useState, useEffect, useCallback } from 'react';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import { 
	gql,
	useQuery,
	useMutation,
	useApolloClient,
} from '@apollo/client';
import * as Styles from './styles';

import {
	fragmentTypeDroid,
} from "../../graphql/fragments/fragments";


export const GraphiQLExample = () => {

	return (

		<Styles.GraphiQLExample>

			<GraphiQL
				fetcher={async graphQLParams => {
					const data = await fetch(
						'http://localhost:4000/graphql',
						{
							method: 'POST',
							headers: {
								Accept: 'application/json',
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(graphQLParams),
						},
					);
					return data.json().catch(() => data.text());
				}}
			/>

		</Styles.GraphiQLExample>
	);
}
