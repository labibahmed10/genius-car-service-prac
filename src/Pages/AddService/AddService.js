import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Please add a service you want</h1>

      <div className="mx-auto w-50">
        <form className="d-flex flex-column gap-3 mt-5" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
          <input placeholder="description" {...register("description")} />
          <input placeholder="price" type="number" {...register("price")} />
          <input placeholder="photo" type="text" {...register("img")} />
          <input type="submit" value="Add Service" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
