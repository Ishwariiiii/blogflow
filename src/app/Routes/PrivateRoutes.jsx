import { redirect } from "next/navigation";
import { useEffect } from "react";

export const PrivateRoutes = (WrappedComponent) => {
  return function authenticated(props) {
    const userToken = localStorage.getItem("token");

    useEffect(() => {
      if (!userToken) {
        redirect("/");
      }
    }, [userToken]);

    if (!userToken) {
      return null;
    }
    return <WrappedComponent {...props} />;
};
};