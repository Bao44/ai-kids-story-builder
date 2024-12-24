import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ClerkProvider } from "@clerk/nextjs";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ClerkProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </ClerkProvider>
    </div>
  );
}

export default Provider;
