import React, { useCallback } from "react";
import axios from "axios";

const useCropRates = () => {
  const getCropRates = useCallback(async (state, district) => {
    //get crop rates
    if(!district){
      const response = await axios.get(
        `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000019cc5262213d84923411e10187a500460&format=json&limit=50&filters[state]=${state}`
      );
      console.log(response, "this is rates response");
      return response.data.records;
    }
    console.log(state);
    const response = await axios.get(
      `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000019cc5262213d84923411e10187a500460&format=json&limit=50&filters[state]=${state}&filters[district]=${district}`
    );
    console.log(response, "this is rates response");
    return response.data.records;
  }, []);

  return {
    getCropRates,
  };
};

export default useCropRates;
