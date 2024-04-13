import React from "react";
import AppRouter from './appRouter.jsx';
import AuthProvider  from "./contexts/authContext/index.jsx";
function App() {  

  return (
    <>
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
    </>
  );
}

export default App
