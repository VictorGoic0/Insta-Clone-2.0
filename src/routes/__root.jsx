import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CurrentUserContext } from "../contexts";
import { useState } from "react";

export const Route = createRootRoute({
	component: () => {
		const currentUser = useState(null)
		return (
			<>
				<CurrentUserContext.Provider value={currentUser}>
					<Outlet />
				</CurrentUserContext.Provider>
				<TanStackRouterDevtools />
				<ReactQueryDevtools />
			</>
		);
	},
});
