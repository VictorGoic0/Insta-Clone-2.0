import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CurrentUserContext } from "../contexts";
import { useState, useEffect } from "react";

export const Route = createRootRoute({
	component: RootRoute,
});

function RootRoute() {
	const [currentUser, setCurrentUser] = useState(undefined);

	useEffect(() => {
		const user = localStorage.getItem("currentUser");
		setCurrentUser(user ? JSON.parse(user) : null);
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