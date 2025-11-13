// app/(book)/layout.tsx
import React from "react";
import ProgressBar from "@/components/booking/ProgressBar";

export const metadata = {
  title: "Book a Service",
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <div className="bg-gray-950 min-h-screen">
        <main className=" max-w-4xl min-w-full mx-auto px-4 py-6">{children}</main>
      </div>
    </html>
  );
}
