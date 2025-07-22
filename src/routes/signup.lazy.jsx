import "../CSS/Login.css";
import { createLazyFileRoute } from "@tanstack/react-router";
import signup from "../api/signup";
import { useNavigate } from "@tanstack/react-router";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts";

export const Route = createLazyFileRoute("/signup")({
	component: SignUpRoute,
});

export default function SignUpRoute() {
	const navigate = useNavigate();
	const [, setCurrentUser ] = useContext(CurrentUserContext);

	const submitSignup = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const userInfo = {
			username: formData.get("username"),
			password: formData.get("password"),
		};
		const response = await signup(userInfo);

		// set token and userId to localStorage
		localStorage.setItem("token", response.token);
		localStorage.setItem("userID", response.userID);

		// set currentUser state to context 
		const user = {
			username: userInfo.username,
			userID: response.userID
		}
		setCurrentUser(user)

		// navigate to home page
		navigate({ to: "/" })
	};

	const switchLogin = () => {
		navigate({ to: "/login" });
	};

	return (
		<div className="login">
			<img src="/images/iglogo.png" alt="Instagram logo" />
			<form onSubmit={submitSignup}>
				<input type="text" name="username" placeholder="Username" required />
				<input type="password" name="password" placeholder="Password" required />
				<button>Sign Up</button>
			</form>
			<h3>
				Already Have An Account? <span onClick={switchLogin}>Log In</span>
			</h3>
		</div>
	);
}
