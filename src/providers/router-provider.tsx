import { RouterProvider, createRouter } from "@tanstack/react-router";
import { queryClient } from "./query-client-provider";
import { routeTree } from "../routeTree.gen";


// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function TanstackRouterProvider() {
  return <RouterProvider router={router} />;
}
