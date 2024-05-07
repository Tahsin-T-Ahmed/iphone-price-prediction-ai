import type {FormData} from "./model"
import type {ForecastData} from "./infrastructure/iphone4cast-api"
import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Result from "./components/Result"
import Footer from "./components/Footer"
import { getPrice, getGraph } from "./infrastructure/iphone4cast-api"

export default function Home() {
  const [graphImg, setGraphImg] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [price, setPrice] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    year: "",
    special: null,
    large: null,
    memory: null
  })

  const handleSubmit = async (formData:FormData) => {
    setIsLoading(true)

    const price = await getPrice(formData as ForecastData)
    setPrice(price)
    
    const img = await getGraph({
      ...formData,
      price,
    } as ForecastData)

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
