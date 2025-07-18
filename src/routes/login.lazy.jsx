import "../CSS/Login.css";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import login from "../api/login";
import { useNavigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/login")({
	component: LoginRoute,
});

export default function LoginRoute() {
	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: function (e) {
			e.preventDefault();
			const formData = new FormData(e.target);
			const userInfo = {
				username: formData.get("username"),
				password: formData.get("password"),
			};
			return login(userInfo);
		},
	});

	const switchLogin = () => {
		navigate({ to: "/signup" });
	};

	return (
		<div className="login">
			<img src="/images/iglogo.png" alt="Instagram logo" />
			<form onSubmit={mutation.mutate}>
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
