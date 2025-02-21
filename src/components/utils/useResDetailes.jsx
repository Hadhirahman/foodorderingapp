import { useEffect, useState } from "react";
import { RESTAURENT_DETAILS } from "./Constant";

const useResDetailes = (resid) => {
  const [resDetailes, setResDetailes] = useState(null);

  useEffect(() => {
    fetchResDetailes();
  },[]);

  const fetchResDetailes = async () => {
    const data = await fetch(RESTAURENT_DETAILS+resid);
    const json = await data.json();
    setResDetailes(json.data);
};
return resDetailes;
};

export default useResDetailes;
