import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isVerified, setIsVerified] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`https://used-honda-buy-sell-server.vercel.app/users/role/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.isVerified === "Verified") {
            setIsVerified("Verified");
          }
        });
    }
  }, [email]);
  return [isVerified];
};
export default useSeller;
