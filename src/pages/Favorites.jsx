// Components;
import BackButton from "../components/BackButton";
import Container from "../components/Container";

export default function Favorites() {
  return (
    <section className="bg-bg dark:bg-bg-dark min-h-screen py-6 md:py-8">
      <Container>
        <BackButton />
      </Container>
    </section>
  );
}
