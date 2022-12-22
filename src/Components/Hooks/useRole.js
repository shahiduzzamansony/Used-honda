import { useEffect, useState } from "react";

const useRole = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/role/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.role === "Seller") {
            setIsSeller(true);
          }
          if (data.role === "Buyer") {
            setIsBuyer(true);
          }
          if (data.role === "Admin") {
            setIsAdmin(true);
          }
        });
    }
  }, [email]);
  return [isSeller, isBuyer, isAdmin];
};
export default useRole;
