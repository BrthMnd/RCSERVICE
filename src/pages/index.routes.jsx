import { Header } from "./templates/Header";
import { Aside } from "./templates/Aside";
import { Content } from "./templates/Content";
import { Footer } from "./templates/Footer";

export function Index() {
  return (
    <>
      <Header />
      <Aside />
      <Content />
      <Footer />
    </>
  );
}
