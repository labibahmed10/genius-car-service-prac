import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://shrouded-depths-33292.herokuapp.com/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data);
      });
  }, []);

  return [service];
};

export default useServiceDetail;
