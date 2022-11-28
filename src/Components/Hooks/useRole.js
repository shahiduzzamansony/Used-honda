import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useRole = () => {
  const { user, loading } = useContext(AuthContext);
  // const{loading}=use
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://used-honda-buy-sell-server.vercel.app/users/role/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (loading) {
            <p>Loading</p>;
          }
          if (data?.role === "Seller") {
            setIsSeller(true);
          }
          if (data?.role === "Buyer") {
            setIsBuyer(true);
          }
          if (data?.role === "Admin") {
            setIsAdmin(true);
          }
        });
    }
  }, [user?.email, loading]);
  return [isSeller, isBuyer, isAdmin];
};
export default useRole;
