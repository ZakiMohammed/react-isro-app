const Home = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-9xl mb-5 animate-bounce">
              <div className="-rotate-45">🚀</div>
            </h1>
            <h1 className="text-5xl font-bold py-6">
              👋 Hello <span className="text-primary">ISRO</span>
            </h1>
            <p className="pb-3">
              This app is consuming the public API created by Indian Space
              Research Organization (ISRO).
            </p>
            <p className="pb-6">
              Through this app, we extend our heartfelt gratitude to the
              brilliant minds at ISRO for their invaluable contributions,
              elevating{' '}
              <img
                className="w-10 inline rounded"
                src="https://flagcdn.com/in.svg"
                alt=""
              />{' '}
              India's presence in space research.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="https://github.com/isro/api"
                target="_blank"
                className="btn btn-neutral">
                GitHub
              </a>
              <a
                href="https://isro.vercel.app/"
                target="_blank"
                className="btn btn-primary">
                Application
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
