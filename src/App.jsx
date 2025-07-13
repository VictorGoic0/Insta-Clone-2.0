import "./components/CSS/App.css";
// import { Route } from "react-router-dom";
// import PostsFeed from "./components/PostContainer/PostsFeed";
// import PostPage from "./components/PostContainer/PostPage";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import PrivateRoute from "./components/Authentication/PrivateRoute";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree })
const queryClient = new QueryClient()


const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      {/* <PrivateRoute exact path="/" component={PostsFeed} />
      <PrivateRoute path="/posts/:id" component={PostPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} /> */}
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
