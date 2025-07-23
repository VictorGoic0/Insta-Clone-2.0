import "../CSS/Login.css";
import { createLazyFileRoute } from "@tanstack/react-router";
import login from "../api/login";
import { useNavigate } from "@tanstack/react-router";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts";

export const Route = createLazyFileRoute("/login")({
	component: LoginRoute,
});

export default function LoginRoute() {
	const navigate = useNavigate();
	const [currentUser, setCurrentUser ] = useContext(CurrentUserContext);

	useEffect(() => {
		console.log("currentUser", currentUser, "<--- effect fired!")
		if (currentUser) {
			// navigate to home page on login
			navigate({ to: "/" })
		}
	}, [currentUser])

	const submitLogin = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const userInfo = {
			username: formData.get("username"),
			password: formData.get("password"),
		};
		const response = await login(userInfo);
		
		// set token to localStorage
		localStorage.setItem("token", response.token);
		// set currentUser state to context and localStorage
		const user = {
			username: userInfo.username,
			userID: response.userID
		}
		setCurrentUser(user)
		localStorage.setItem("currentUser", JSON.stringify(user))
	};

	const switchLogin = () => {
		navigate({ to: "/signup" });
	};

	return (
		<div className="login">
			<img src="/images/iglogo.png" alt="Instagram logo" />
			<form onSubmit={submitLogin}>
				<input type="text" name="username" placeholder="Username" required />
				<input type="password" name="password" placeholder="Password" required />
				<button>Log In</button>
			</form>
			<h3>
				Don't Have An Account? <span onClick={switchLogin}>Sign Up</span>
			</h3>
		</div>
	);
}
