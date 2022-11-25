import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Modal = ({ modalProduct, setModalProduct }) => {
  const { user } = useContext(AuthContext);
  const { name, resalePrice } = modalProduct;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const meetingLocation = form.meetingLocation.value;
    const phoneNumber = form.phoneNumber.value;
    const resalePrice = form.resalePrice.value;
    const buyerName = form.buyerName.value;
    // console.log(meetingLocation, phoneNumber, resalePrice);
    setModalProduct(null);
    const bookedProduct = {
      buyerName,
      email: user.email,
      itemName: name,
      meetingLocation,
      phoneNumber,
      resalePrice,
    };
    fetch("http://localhost:5000/booked", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedProduct),
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  return (
    <div>
      <input type="checkbox" id="booknow-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-4">
          <h3 className="font-bold text-lg">{name}</h3>
          <form onSubmit={handleBooking}>
            <div className="flex flex-col justify-center items-center my-4">
              <input
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                value={user.displayName}
                name="buyerName"
                disabled
              />
              <input
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                value={user.email}
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
