import "@/styles/globals.css";
import LoadingWrapper from "@/components/navbar/LoadingWrapper";
import ConditionalLayout from "./ConditonalLayout";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import CreateProfilePage from "./profile/page";

export const metadata = {
  title: "ADLV Store",
  description: "E-Katalog ADLV Store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdminUser = (await auth()).userId;
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/assets/icons/ADLV.png" type="image/x-icon" />
        </head>
        <body className="flex flex-col min-h-screen">
          <ConditionalLayout userId={isAdminUser}>
            <LoadingWrapper>{children}</LoadingWrapper>
          </ConditionalLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
