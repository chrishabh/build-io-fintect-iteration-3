import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#333333]">404</h1>
        <p className="text-xl text-[#666666] mb-4">Oops! Page not found</p>
        <a href="/" className="text-[#00A3E1] hover:text-[#0072FF] underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
