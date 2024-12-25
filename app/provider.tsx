import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./_components/Header";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ClerkProvider>
        <NextUIProvider>
          {/* Header */}
          <Header />
          {children}
        </NextUIProvider>
      </ClerkProvider>
    </div>
  );
}

export default Provider;
