import { ReactComponent as GitHub } from 'assets/img/github.svg';
import { ReactComponent as LinkedIn } from 'assets/img/linkedin.svg';
import './Footer.css'

function Footer() {

    return (
        <footer>
            <div className="text-center pb-4">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-6">
                        <h5 >Dev Superior</h5>
                        <p className='mx-3'>Semana Spring React 7.0 - App completo com as tecnologias mais demandadas do mercado, como: Java, 
                            Spring, React, Typescript.</p>
                    </div>

                    <div className="col-md-6 mt-md-0 mb-6">
                        <h5 >Contato</h5>
                        <div >
                            <a href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/">
                                <LinkedIn className='linkedin' />
                            </a>
                            <a href="https://github.com/Biellms" target='_blank' rel="noreferrer">
                                <GitHub className='github' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copy-bottom text-center py-2">
                <a href=""> Desenvolvedor: Gabriel Mendes © 2022</a>
            </div>

        </footer>
    );
}

export default Footer;