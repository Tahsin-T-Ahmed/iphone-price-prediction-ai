import type {FormData} from "./model"
import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Result from "./components/Result"
import Footer from "./components/Footer"
import { getPrice, getGraph } from "./infrastructure/iphone4cast-api"
import ContentWrapper from "./components/ContentWrapper"

export default function Home() {
  const [graphImg, setGraphImg] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [price, setPrice] = useState(0)

  const handleSubmit = async (formData:FormData) => {
    setIsLoading(true)

    const price = await getPrice(formData)
    setPrice(price)

    const img = await getGraph({
      ...formData,
      price,
    })

    setGraphImg(img)
    setIsLoading(false)
    
}
  
  return (
    <>
    <Header />
    <main style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",

    }}>
    <Form handleSubmit={handleSubmit} />
    <Result price={price} graphImg={graphImg} isLoading={isLoading}/>
    <Footer />
    </main>
    </>
  );
}
