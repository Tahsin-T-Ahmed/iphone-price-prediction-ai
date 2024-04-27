import Header from "@/components/Header"
import Form from "@/components/Form"

export default function Home() {
  return (
    <>
    <Header />
  <main style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }}>
      <Form />
    </main>
    </>
  );
}
