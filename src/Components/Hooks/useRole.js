import { useEffect, useState } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";

const useRole = (email) => {
  // const { user, loading } = useContext(AuthContext);
  // const{loading}=use
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(
        `https://used-honda-buy-sell-server.vercel.app/users/role/${email}`
        // , {
        //   headers: {
        //     authorization: `bearer ${localStorage.getItem("accessToken")}`,
        //   },
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);

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
  }, [email]);
  return [isSeller, isBuyer, isAdmin];
};
export default useRole;
