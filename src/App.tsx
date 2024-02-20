import TanstackQueryProvider from "./providers/query-client-provider";
import TanstackRouterProvider from "./providers/router-provider";

function App() {
  return (
    <TanstackQueryProvider>
      <TanstackRouterProvider />
    </TanstackQueryProvider>
  );
}

export default App;
