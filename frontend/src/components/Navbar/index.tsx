import { ReactComponent as Githubicon } from 'assets/img/github.svg'
import './styles.css'
function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Arthur-Soares">
                        <div className="dsmovie-contact-container">
                            <Githubicon />
                            <p className="dsmovie-contact-link">/Arthur-Soares</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;