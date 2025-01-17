import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoutesLayout from "./Layout/Layout";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RoutesLayout />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
      <Toaster />
    </>
  );
}

export default App;
