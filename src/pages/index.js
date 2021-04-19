import React, { useEffect, useState } from "react"

export default function Home() {

  const [data, setData] = useState("")

  useEffect(() => {
    const call = async () => {
      const response = await fetch(`/.netlify/functions/hello`);
      const tempData = await response.json();
      setData(tempData);
    }
    call();
  }, [])

  return (
    <div>the content is here as {data.message}</div>
  )
}
