import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import ReportedItemCard from "./ReportedItemCard";

const ReportedItems = () => {
  const { data: reportedItems = [], refetch } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: () =>
      fetch("http://localhost:5000/reported").then((res) => res.json()),
  });
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you really want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted");
            refetch();
          }
        });
    }
  };
  return (
    <div className=" my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-6">
      {reportedItems?.map((reportedItem) => (
        <ReportedItemCard
          key={reportedItem._id}
          reportedItem={reportedItem}
          handleDelete={handleDelete}
        ></ReportedItemCard>
      ))}
    </div>
  );
};

export default ReportedItems;
