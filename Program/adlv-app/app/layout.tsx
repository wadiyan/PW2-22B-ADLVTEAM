import "@/styles/globals.css";
import LoadingWrapper from "@/components/animate-bg/LoadingWrapper";
import ConditionalLayout from "./ConditonalLayout";
import { ClerkProvider } from "@clerk/nextjs";
import { getAuthData } from "@/utils/getAuthData";

export const metadata = {
  title: "ADLV Store",
  description: "E-Katalog ADLV Store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { isLoggedIn, isAdmin } = await getAuthData();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/ADLV.png" type="image/x-icon" />
      </head>
      <body className="flex flex-col min-h-screen">
        <ClerkProvider>
          <ConditionalLayout isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
            <LoadingWrapper>{children}</LoadingWrapper>
          </ConditionalLayout>
        </ClerkProvider>
      </body>
    </html>
  );
}
