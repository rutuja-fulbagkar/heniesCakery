import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Outlet />
    </>
  );
}
