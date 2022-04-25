import { async } from "@firebase/util";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const OrderHistory = () => {
  const [user, loading] = useAuthState(auth);
  const [order, setOrder] = useState([]);
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      try {
        //ekhane age axios chilo shudhu and headers e auth er bearer soho token pathaicilo but ekhn axiosPrivate e sob kora hcche
        await axiosPrivate
          .get(`http://localhost:5000/orderhistory?email=${user?.email}`)
          .then((res) => setOrder(res?.data));
      } catch (error) {
        console.log(error.response.status);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1>Your Order History here</h1>

      {order.map((data) => (
        <p key={data._id}>{data?.service}</p>
      ))}
    </div>
  );
};

export default OrderHistory;
