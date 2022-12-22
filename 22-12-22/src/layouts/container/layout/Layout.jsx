import { Header } from "../../../components/header/Header";
import { Footer } from "../../../components/footer/Footer";

export function Layout(props) {
  const { children = "Titolo fantoccio" } = props;
  const { title, paragraph } = children;
  return (
    <>
      <Header />
      <main>
        <div className="page">
          <h1>{title}</h1>
          <p>{paragraph}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
