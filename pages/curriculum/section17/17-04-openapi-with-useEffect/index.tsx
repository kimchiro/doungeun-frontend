import axios from "axios";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function RestGetPage(): JSX.Element {
  const [image, setImage] = useState("");



     useEffect(() => {
      const onClickSync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result.data.message); //정상적인 결과
      setImage(result.data.message);
    };
    void onClickSync();
  }, []);  
  
  return (
    <div>
      <Image src={image} alt="dog" />
      {/* <button onClick={onClickSync}>REST-API(동기) 요청하기</button> */}
    </div>
  );
}

