import React from "react";

const AddProduct = () => {
  const addProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const type = form.type.value;
    const name = form.name.value;
    const img = form.img.value;
    const location = form.location.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const createdProduct = {
      type,
      name,
      img,
      location,
      originalPrice,
      resalePrice,
    };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createdProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
      });
  };
  return (
    <div>
      <form onSubmit={addProduct}>
        <div className="flex flex-col justify-center items-center my-14">
          <input
            className="input w-1/2 input-bordered input-accent input-sm mb-3"
            placeholder="Item Type"
            name="type"
            required
          />
          <input
            className="input w-1/2 input-bordered input-accent input-sm mb-3"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="input w-1/2 input-bordered input-accent input-sm mb-3"
            placeholder="Image url"
            name="img"
            required
          />
          <input
            className="input w-1/2 input-bordered input-accent input-sm mb-3"
            placeholder="Location"
            name="location"
            required
          />
          <input
            className="input w-1/2 input-bordered input-accent input-sm mb-3"
            placeholder="Original Price"
            name="originalPrice"
            required
          />
          <input
            className="input w-1/2 input-bordered input-accent input-sm mb-3"
            placeholder="ResalePrice"
            name="resalePrice"
            required
          />
          <input
            type="submit"
            value="ADD"
            className="btn btn-sm btn-accent"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
