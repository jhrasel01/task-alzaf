import Header from "./commons/header/header";
import TopHeader from "./commons/topHeader";

export default function Layout({ children }) {
  return (
    <>
      <TopHeader />
      <Header />
      <main>{children}</main>
    </>
  );
}
