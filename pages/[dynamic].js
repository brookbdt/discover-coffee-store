import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const DynamicRoute = () => {
	const router = useRouter();
	const query = router.query.dynamic;

	console.log("query", router.query);
	return (
		<div>
			<Head>
				<title>{query}</title>
			</Head>
			DynamicRoute: {query}
		</div>
	);
};

export default DynamicRoute;
