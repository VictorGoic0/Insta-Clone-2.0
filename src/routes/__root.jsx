import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CurrentUserContext } from "../contexts";
import { useState, useEffect } from "react";

export const Route = createRootRoute({
	component: RootRoute,
});

function RootRoute() {
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		const currentUser = localStorage.getItem("currentUser");
		if (currentUser) {
			setCurrentUser(JSON.parse(currentUser));
		}
	}, []);

	return (
		<>
			<CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
				<Outlet />
			</CurrentUserContext.Provider>
			<TanStackRouterDevtools />
			<ReactQueryDevtools />
		</>
	);
}