import "@/styles/globals.css";
import LoadingWrapper from "@/components/LoadingWrapper";
import ConditionalLayout from "./ConditonalLayout";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "ADLV Store",
  description: "E-Katalog ADLV Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/ADLV.png" type="image/x-icon" />
      </head>
      <body className="flex flex-col min-h-screen">
        <ClerkProvider>
          <ConditionalLayout>
            <LoadingWrapper>{children}</LoadingWrapper>
          </ConditionalLayout>
        </ClerkProvider>
      </body>
    </html>
  );
}
