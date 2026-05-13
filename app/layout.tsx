"use client";
import "./globals.css";
import Header from "@/components/Header";
import { UserProvider, useUserContext } from "@/context/UserName";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { savedUserName } = useUserContext();

  return (
    <>
      {/* HEADER ONLY IF LOGGED IN */}
      {savedUserName && <Header />}

      {/* LOGIN OR APP */}
      {!savedUserName ? (<LoginForm />) : ( <><main>{children}</main><Footer/></> )}
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <LayoutContent>{children}</LayoutContent>
        </UserProvider>
      </body>
    </html>
  );
}