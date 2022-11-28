import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const MyBuyers = () => {
  const query = "Buyer";

  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`http://localhost:5000/users?role=${query}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  //   console.log(buyers);
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Do you want to delete this buyer? N.B: It can to be undone... "
    );
    if (proceed) {
      fetch(`http://localhost:5000/users/${id}`, {
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
      <h2 className="text-3xl text-red-500 font-semibold my-7">Buyers List</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {buyers?.map((buyer, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(buyer._id)}
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

export default MyBuyers;
