import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "../lib/query-client";

export default function QueryClientProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
