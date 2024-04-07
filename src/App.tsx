import "./App.css";
import Router from "./router/router";
import { QueryClient , QueryClientProvider, useQuery } from "react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient();

function App() {
  return(
  <>
  <QueryClientProvider client={queryClient}>
  <Router />  {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
  </>
  )
  
}

export default App;
