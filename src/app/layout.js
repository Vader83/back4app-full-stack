import "./globals.css";
import {Providers} from "@/app/providers";
import {Container} from "@chakra-ui/react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export const metadata = {
  title: "back4app-frontend",
  description: "A simple blog application.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header/>
          <Container maxW="container.lg">
            {children}
          </Container>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
