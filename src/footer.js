const feather = require('feather-icons');

feather.replace();
setTimeout(() => {
    feather.replace();
}, 100);
const Footer = () => {
    return <footer className="footer">
    <div className="footer-content">
        <div className="footer-section">
            <h3>Síguenos en redes sociales</h3>
            <a href="https://www.facebook.com/davidmontana"><i data-feather="facebook"></i> Facebook</a>
            <br />
            <a href="https://twitter.com/davidmontana"><i data-feather="twitter"></i> Twitter</a>
            <br />
            <a href="https://www.instagram.com/davidmontana"><i data-feather="instagram"></i> Instagram</a>
        </div>
        <div className="footer-section">
            <h3>Informacion acerca de nosotros</h3>
            <p> Email: info@davidmontana.com</p>
            <p>Teléfono: 9999999999</p>
            <p> Dirección: Wilson 184</p>
        </div>
    </div>
    <div className="footer-bottom">
        <p>© {new Date().getFullYear()} David Montana y asociados - Todos los derechos reservados</p>
    </div>
</footer>
}

export default Footer;