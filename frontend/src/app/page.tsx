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
    price: null
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
    justifyContent: "center",
    gap: "2rem"
  }}>
    <Form setFormData={setFormData}/>
    <Result formData={formData}/>
    </main>
    </>
  );
}
