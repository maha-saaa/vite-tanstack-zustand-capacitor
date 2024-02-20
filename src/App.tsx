import QueryClientProviderWrapper from "./providers/query-client-provider";
import RouterProviderWrapper from "./providers/router-provider";

function App() {
  return (
    <QueryClientProviderWrapper>
      <RouterProviderWrapper />
    </QueryClientProviderWrapper>
  );
}

export default App;
