import type {FormData} from "./model"
import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Result from "./components/Result"
import Footer from "./components/Footer"

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    year: "",
    special: null,
    large: null,
    memory: null,
    price: 0
  })

  const [graphImg, setGraphImg] = useState("")
  
  return (
    <>
    <Header />
    <main style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",

    }}>
    <Form setFormData={setFormData} setGraphImg={setGraphImg}/>
    <Result formData={formData} graphImg={graphImg}/>
    <Footer />
    </main>
    </>
  );
}
