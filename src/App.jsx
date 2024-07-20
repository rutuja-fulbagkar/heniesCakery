import { useEffect } from "react";
import Layout from "./Layout";
import { getAuth, signInAnonymously } from "firebase/auth";

function App() {
  const auth = getAuth();

  useEffect(() => {
    signInAnonymously(auth)
      .then((res) => {
        // Signed in..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }, [auth]);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
