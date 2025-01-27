import LoadingWrapper from "@/components/navbar/LoadingWrapper";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConditionalLayout from "./ConditonalLayout";

export const metadata = {
  title: "ADLV Store",
  description: "E-Katalog ADLV Store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/assets/icons/ADLV.png" type="image/x-icon" />
        </head>
        <body className="flex flex-col min-h-screen">
          <ConditionalLayout>
            <LoadingWrapper>{children}</LoadingWrapper>
          </ConditionalLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
