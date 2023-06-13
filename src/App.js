import React from "react";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

import Nav from "./components/Nav";
import Mainpage from "./components/Mainpage";

const App = () => {

  const queryClient = new QueryClient();

  return (
    // all the child components of QueryClientProvide can access hooks provided by React Query Library
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ToastContainer />
        <Nav />
        <Mainpage />
      </div>
    </QueryClientProvider>
  );
};
export default App;
