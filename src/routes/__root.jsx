import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UserProfileContext } from "../contexts";
import { useState } from "react";

export const Route = createRootRoute({
	component: () => {
		const userProfileHook = useState(null)
		return (
			<>
				<UserProfileContext.Provider value={userProfileHook}>
					<Outlet />
				</UserProfileContext.Provider>
				<TanStackRouterDevtools />
				<ReactQueryDevtools />
			</>
		);
	},
});
