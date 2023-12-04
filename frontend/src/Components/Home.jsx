import Login from "./Login"
import Register from "./Register"

function Home() {
  return (
    <>
      <h1>Home</h1>
      <nav>
        <Login />
        <Register />
      </nav>
    </>
  )
}

export default Home