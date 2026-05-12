import Header from "@/components/Header";
import HeaderWrapper from "@/components/HeaderWrapper";
import LoginFormWrapper from "@/components/LoginFormWrapper";
import { UserProvider } from "@/context/UserName";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>

          <HeaderWrapper>
            <Header />
          </HeaderWrapper>

          <LoginFormWrapper>
            {children}
          </LoginFormWrapper>

        </UserProvider>
      </body>
    </html>
  );
}