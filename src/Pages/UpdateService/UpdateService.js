import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateService = () => {
  const { uid } = useParams();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch(`http://localhost:5000/service/${uid}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>Here we will update service datas</h1>

      <div className="mx-auto w-25">
        <form className="d-flex flex-column gap-4 mt-5" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
          <input placeholder="description" {...register("description")} />
          <input placeholder="price" type="number" {...register("price")} />
          <input placeholder="image" {...register("lastName")} />
          <input placeholder="text" type="submit" value="Update service" />
        </form>
      </div>
    </div>
  );
};

export default UpdateService;

// {"_id":{"$oid":"626285a52d894eb3d830e35c"},"name":"OIL CHANGING","price":"150","description":"Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.","img":"https://i.ibb.co/Yh04YVw/3.jpg"}

// {"_id":{"$oid":"626285a52d894eb3d830e35d"},"name":"BRAKE REPARING","price":"180","description":"Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.","img":"https://i.ibb.co/ZX2Cbkn/4.jpg"}

// {"_id":{"$oid":"626285a52d894eb3d830e35f"},"name":"COMPLETE ANALYSIS","price":"300","description":"Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa","img":"https://i.ibb.co/zJy5ZDd/6.jpg"}

// {"_id":{"$oid":"6262aeafb97504ab84595ec3"},"name":"vip service","description":"normal service man why so serious","price":"120","img":"https://i.ibb.co/tY8dmnP/2.jpg"}
