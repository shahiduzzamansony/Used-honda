import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Modal = ({ modalProduct, setModalProduct }) => {
  const { user, loading } = useContext(AuthContext);
  const { _id, name, resalePrice, email } = modalProduct;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    // const email = form.email.value;
    const buyerEmail = user?.email;
    const buyerName = form.buyerName.value;
    const meetingLocation = form.meetingLocation.value;
    const phoneNumber = form.phoneNumber.value;
    // console.log(meetingLocation, phoneNumber, resalePrice);

    fetch(`https://used-honda-buy-sell-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        buyerEmail,
        buyerName,
        meetingLocation,
        phoneNumber,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setModalProduct(null);
          toast.success("Booked succesfully");
        } else {
          toast.error(data.message);
        }
      });
  };
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <input type="checkbox" id="booknow-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-4">
          <h3 className="font-bold text-lg">{name}</h3>
          <form onSubmit={handleBooking}>
            <div className="flex flex-col justify-center items-center my-4">
              <label
                htmlFor="booknow-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <input
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                value={user.displayName}
                name="buyerName"
                disabled
              />
              <input
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                value={user?.email}
                name="email"
                disabled
              />
              <input
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                value={name}
                disabled
              />
              <input
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                value={resalePrice}
                name="resalePrice"
                disabled
              />
              <input
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                placeholder="Meeting Location"
                name="meetingLocation"
                required
              />
              <input
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                placeholder="Phone Number"
                name="phoneNumber"
                required
              />
            </div>
            <div>
              <input type="submit" className="btn btn-sm btn-accent"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
