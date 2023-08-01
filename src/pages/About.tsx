import Container from '../components/Container';

const About = () => {
  return (
    <Container>
      <article className="prose prose-base max-w-none">
        <h1 className="mb-0">💖 About</h1>
        <p>
          Through this app, we extend our heartfelt gratitude to the brilliant
          minds at ISRO for their invaluable contributions, elevating{' '}
          <img
            className="w-10 inline rounded"
            src="https://flagcdn.com/in.svg"
            alt=""
          />{' '}
          India's presence in space research.
        </p>
      </article>
    </Container>
  );
};

export default About;
