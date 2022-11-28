import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { GoVerified } from "react-icons/go";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MySellers = () => {
  const { user } = useContext(AuthContext);
  const query = "Seller";

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(
        `https://used-honda-buy-sell-server.vercel.app/users?role=${query}`
      ).then((res) => res.json()),
  });
  const handleVerify = (id) => {
    fetch(`https://used-honda-buy-sell-server.vercel.app/users/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Verified Successfully");
        } else {
          toast.error("Already verified");
        }
        // refetch();
      });
  };

  const handleProductVerify = (email) => {
    fetch(
      `https://used-honda-buy-sell-server.vercel.app/products/verify/${email}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.upsertedCount > 0) {
          toast.success("Verified Successfully");
        } else {
          toast.error("Already verified");
        }
        refetch();
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Do you want to delete this seler? N.B: It can to be undone... "
    );
    if (proceed) {
      fetch(`https://used-honda-buy-sell-server.vercel.app/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Buyer deleted...");
            refetch();
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-red-500 font-semibold my-7">Sellers List</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {seller.isVerified === "Verified" ? (
                    <GoVerified className="text-blue-600" />
                  ) : (
                    <button
                      onClick={() => {
                        handleVerify(seller._id);
                        handleProductVerify(seller.email);
                      }}
                      className="btn btn-accent btn-sm"
                    >
                      Verify
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn btn-accent btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySellers;
