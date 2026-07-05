import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          Built with React &amp; Vite &mdash; Owen &copy; {new Date().getFullYear()}
        </p>
        <div className="footer__links">
          <a href="https://github.com/turtle-dev-nz" target="_blank" rel="noreferrer" className="footer__link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nicholowen" target="_blank" rel="noreferrer" className="footer__link">
            LinkedIn
          </a>
          <a href="mailto:hello@owennicholson.com" className="footer__link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
