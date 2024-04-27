"use client"
import { useState } from "react"
import Header from "@/components/Header"
import Form from "@/components/Form"
import Result from "@/components/Result"

export default function Home() {
  const [formData, setFormData] = useState({
    year: null,
    special: null,
    large: null,
    memory: null,
    price: null,
    graph: null
  })

  function handleFormReturn(data) {
    setFormData(data)
  }
  
  return (
    <>
    <Header />
  <main style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",

  }}>
    <Form setFormData={setFormData}/>
    <Result formData={formData}/>
    </main>
    </>
  );
}
