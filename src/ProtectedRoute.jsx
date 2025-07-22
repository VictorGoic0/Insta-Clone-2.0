import { useContext, useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { CurrentUserContext } from "./contexts";

export function ProtectedRoute({ children }) {
  const [currentUser] = useContext(CurrentUserContext);
  const router = useRouter();

  useEffect(() => {
    if (currentUser === null) {
      router.navigate({ to: "/login" });
    }
  }, [currentUser, router]);

  if (currentUser === undefined) {
    // TODO: add spinner here instead of div
    return <div>Loading...</div>;
  }

  return children;
}