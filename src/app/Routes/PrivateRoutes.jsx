import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

export const PrivateRoutes = (WrappedComponent) => {
  return function authenticated(props) {
    const userToken = localStorage.getItem("token");
    const publicRoutes = ["/","/register"]
    const pathName = usePathname()

    useEffect(() => {
      if (!userToken && publicRoutes.includes(pathName)) {
        redirect("/");
      }
    }, [userToken]);

    if (!userToken) {
      return null;
    }
    return <WrappedComponent {...props} />;
};
};