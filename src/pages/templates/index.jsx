import { Footer } from "./Footer";
import { Aside } from "./Aside";
import { Header } from "./Header";

function HeaderAndAside({logged}) {
  return (
    <>
      <Header />
      <Aside logged={logged} />
    </>
  );
}
export { Footer, HeaderAndAside };
