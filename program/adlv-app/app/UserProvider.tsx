import { UserProvider } from "@/context/provider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: any) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
