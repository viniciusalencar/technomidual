import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'

import './footer.css'

class Footer extends Component{
    render() {
        return ( 
            <footer className="footer footer-custom text-light ">
                <div className="conteiner-fluid">
                    <div className="social-medias-div-footer">
                        <a href="#"><img className="social-medias-footer" src={Facebook}></img></a>
                        <a href="#"><img className="social-medias-footer" src={Instagram}></img></a>
                        <a href="#"><img className="social-medias-footer" src={Linkedin}></img></a>
                    </div>

                    <div className="information-footer">
                        <div className="row">
                            <div className="col-md-6 first-column">
                                <h1 className="name-site-footer">TECHNO</h1>
                                <span className="description-site">- Mídia e Audiovisual -</span>
                            </div>
                            <div className="col-md-3 second-column">
                                <h1 className="name-contacts-footer">Contatos</h1>
                                <i class="fa fa-whatsapp contacts-footer" aria-hidden="true">
                                    <a className="nameIcon" href="#"><span className="contacts-name-footer">WhatsApp: (35) 99732-0332</span></a>
                                </i>
                                <br></br>
                                <i class="fa fa-envelope contacts-footer" aria-hidden="true">
                                    <a className="nameIcon" href="#"><span className="contacts-name-footer">Gmail: technomidual@gmail.com</span></a>
                                </i>
                            </div>
                            <div className="col-md-2 third-column">
                                <Link to="/" className="link-footer">Página Inicial</Link>
                                <br></br>
                                <Link to="/about" className="link-footer">Quem somos?</Link>
                                <br></br>
                                <Link to="/servicing" className="link-footer">O que fazemos?</Link>
                                <br></br>
                                <Link to="/contacts" className="link-footer">Nossos contatos</Link>
                            </div>
                        </div>
                      
                    </div>
                    
                    <div className="creator-site">
                        <a className="link-creator" href="#"><i class="fa fa-copyright" aria-hidden="true"> Desenvolvido em linguagem JavaScript com React por Vinicius Alencar</i></a>
                    </div>
                
                </div>    
            </footer>
            )
        }   
    }

export default Footer