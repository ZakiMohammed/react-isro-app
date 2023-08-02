import Icon from './Icon';

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center py-20">
        <div>
          <p>
            2023 - Developed by{' '}
            <a href="https://codeomelet.com" target="_blank" className="link">
              <b>CodeOmelet</b>
            </a>{' '}
            with <Icon icon="heart" classes='w-4' />.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
