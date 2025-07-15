import { createLazyFileRoute } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'
import login from "../api/login"

export const Route = createLazyFileRoute('/login')({
  component: LoginRoute,
})

export default function LoginRoute () {
    const mutation = useMutation({
    mutationFn: function(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const userInfo = {
        username: formData.get("username"),
        password: formData.get("password")
      }
      return login(userInfo)
    }
  })

  const switchLogin = () => {
    // route to signup
    // this.props.history.push("/signup");
  }

  return (
      <div className="login">
        {/* <img src="/Images/iglogo.png" alt="Instagram" /> */}
        <form onSubmit={mutation.mutate}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button>Sign In</button>
        </form>
        <h3>
          Don't Have An Account? <span onClick={switchLogin}>Sign Up</span>
        </h3>
      </div>
    );

}