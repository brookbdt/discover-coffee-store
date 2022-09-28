import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const CoffeStore = () => {
	const router = useRouter();
	console.log("router", router);
	return (
		<div>
			Coffee Store Page {router.query.id}
			<Link href="/">
				<a>Back to home</a>
			</Link>
			<Link href="/coffee-store/dynamic">
				<a>Go to page dynamic</a>
			</Link>
		</div>
	);
};

export default CoffeStore;
