import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Modal = ({ modalProduct }) => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  //   console.log(modalProduct);
  const { name, resalePrice } = modalProduct;
  //   console.log(name);
  return (
    <div>
      <input type="checkbox" id="booknow-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-4">
          <h3 className="font-bold text-lg">{name}</h3>
          <form onSubmit={handleSubmit()}>
            <div className="flex flex-col justify-center items-center my-4">
              <input
                {...register("name")}
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                value={user.displayName}
                disabled
              />
              <input
                {...register("email")}
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                value={user.email}
                disabled
              />
              <input
                {...register("itemName")}
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                value={name}
                disabled
              />
              <input
                {...register("price")}
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                value={resalePrice}
                disabled
              />
              <input
                {...register("meetingLocation")}
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                placeholder="Meeting Location"
              />
              <input
                {...register("phoneNumber")}
                className="input w-3/4 input-bordered input-accent input-sm mb-3"
                placeholder="Phone Number"
              />
            </div>
          </form>
          <div className="modal-action">
            <label
              type="submit"
              htmlFor="booknow-modal"
              className="btn btn-sm btn-accent"
            >
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
