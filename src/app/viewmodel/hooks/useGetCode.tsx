// import api  from "@/utils/server/api";

import { useEffect, useRef, useState } from "react";

// import { ENPOINT_MOBILE } from "react-native-dotenv";

type InputState = {
  value: string;
}

export const useGetDriverCode = async () => {
  const [values, setValues] = useState<InputState[]>(new Array(5).fill({ value: '' }));
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [code, setCode] = useState<string>()

  function handleInputChange(index: number, text: string){
      const newValues = [...values];
      newValues[index] = {value: text};
      setValues(newValues);
  
      if (!text && index > 0) {
          const inputRef = inputRefs.current; // Type assertion
          inputRef[index - 1].focus();
          setFocusedIndex(index - 1);
      } else if (text && index < values.length - 1) {
          const inputRef = inputRefs.current; // Type assertion
          inputRef[index + 1].focus();
          setFocusedIndex(index + 1);
      }
  };

    const calculateCode = () => {
      const newCode = values.map((item) => item.value).join('');
      return newCode.length > 4 ? newCode : undefined;
    };
  
    useEffect(() => {
      const newDriverCode = calculateCode();
      console.log("New Code", newDriverCode);
      if(newDriverCode === undefined){
        return
      }
      setCode(newDriverCode);
    }, [values]);


    
    const data = {
      driverCredential: code,
      plataformId: "58984eaf-d1e6-4e61-a69b-c77fc2205519"
    }

    const {driverCredential, plataformId} = data;

    if(!driverCredential){
      console.log("Valor:", data);

      const payload = {
        driverCredential,
        plataformId
      }
      console.log("Valor:", payload);

      try {

        // const {data} = await axios.post("/check-driver", ENPOINT_MOBILE )

      } catch (error) {
        console.log("Xihh deu erro: ", error)
      }
      return
    }



  const inputRefs: any = useRef<any>([]);

  return{
    values,
    setValues,
    setFocusedIndex,
    handleInputChange, 
    inputRefs
  }

}

export const useGetVehicleCode = () => {

  
  
}