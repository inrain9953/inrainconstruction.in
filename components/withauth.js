import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const decoded = jwt_decode(token);
          // Check token expiration
          if (decoded.exp * 1000 < Date.now()) {
            localStorage.removeItem("token");
            router.push("/admin");
          }
        } catch (error) {
          setLoading(false);
        }
      } else {
        router.push("/admin");
      }
    }, []);

    if (loading) {
      return (
        <>
          <Navbar />
          <div className="text-center text-2xl">Loading...</div>
          <Footer />
        </>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
