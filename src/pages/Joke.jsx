import { useEffect, useState } from "react";

export default function Joke() {
  const [joke, setJoke] = useState("");
  const url = "https://v2.jokeapi.dev/joke/Any?type=single";

  const getJoke = async () => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    if (data.type === "single") {
      setJoke(data.joke);
    } else {
      setJoke(`${data.setup} - ${data.delivery}`);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
      <div className="flex-col flex justify-center items-center">
        <h1 className="py-5 px-4 my-6 text-xl">{joke}</h1>
      <button onClick={getJoke} className='bg-blue-300 px-4 py-2 rounded-[8px] my-6'>Get Joke</button>
      </div>
    </>
  );
}
