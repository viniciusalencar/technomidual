import React, {Component} from 'react'


import './footer.css'

class Footer extends Component{
    render() {
        return ( 
            <footer className="footer footer-custom text-light ">
                <div className="conteiner-fluid">
    
                    <div className="row col-md-12 col-xs-8 teste">
                        <div className="col-md-2"></div>
                            <div className="col-md-3 space block">
                                <h4 className="nameSite">Techno</h4>
                                <hr></hr>
                                <h6 className="description">Textinho de descrição</h6>
                            </div>
                            <div className="col-md-2 space block">
                                <h4 className="pages">Páginas</h4>
                                <a className="pagesLink" href="#">Início</a> <br></br>
                                <a className="pagesLink" href="#">Serviços</a> <br></br>
                                <a className="pagesLink" href="#">Sobre</a> <br></br>
                                <a className="pagesLink" href="#">Contatos</a>                
                            </div>
                            <div className="col-md-3 space block">
                            <h4 className="contacts">Contatos</h4>
                            <i className="fa fa-instagram" aria-hidden="true">
                                <a className="nameIconFooter" href="#">Instagram/techno</a>
                            </i>
                            <br></br>
                            <i class="fa fa-whatsapp" aria-hidden="true">
                                <a className="nameIconFooter" href="#">WhatsApp: (35) 99732-0332</a>
                            </i>
                            <br></br>
                            <i class="fa fa-facebook" aria-hidden="true">
                                <a className="nameIconFooter" href="#">  Facebook/techno</a>
                            </i>
                            <br></br>
                            <i class="fa fa-envelope" aria-hidden="true">
                                <a className="nameIconFooter" href="#">Gmail/techno</a>
                            </i>
                            </div>
                            <div className="col-md-2 space block"></div>
                    <hr></hr>
                            <div className="copyright">
                                <i class="fa fa-copyright" aria-hidden="true">Desenvolvido por Vinicius Alencar</i>
                            </div>
                    </div>
                 </div>
            </footer>
            )
        }   
    }

export default Footer