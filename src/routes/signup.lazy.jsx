import "../CSS/Login.css";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import signup from "../api/signup";
import { useNavigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/signup")({
	component: SignUpRoute,
});

export default function SignUpRoute() {
	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: function (e) {
			e.preventDefault();
			const formData = new FormData(e.target);
			const userInfo = {
				username: formData.get("username"),
				password: formData.get("password"),
			};
			return signup(userInfo);
		},
	});

	const switchLogin = () => {
		navigate({ to: "/login" });
	};

	return (
		<div className="login">
			{/* <img src="/Images/iglogo.png" alt="Instagram logo" /> */}
			<form onSubmit={mutation.mutate}>
				<input type="text" name="username" placeholder="Username" required />
				<input type="password" name="password" placeholder="Password" required />
				<button>Sign Up</button>
			</form>
			<h3>
				Already Have An Account? <span onClick={switchLogin}>Sign In</span>
			</h3>
		</div>
	);
}
