import React, {Component} from 'react'
import './contacts.css'
import Contatos from '../../assets/contatos.jpg'

class Contacts extends Component {
    render() {
        return (

            <div className="conteiner-fluid">

                <header header className="masthead-contacts text-center text-white">
                    <div className="masthead-content">
                        <div className="content">
                            <h1 className="masthead-contacts-heading mb-0">Contatos</h1>
                            <h2 className="masthead-contacts-subheading mb-0">Entre em contato conosco e siga-nos nas redes sociais</h2> 
                        </div>
                    </div>
                </header>

              <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                <img className="img-fluid rounded-circle" src={Contatos} alt="contatos"></img>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5 paddingContacts">
                                    <h3 className="titleContacts">Contatos</h3>
                                <div className="socialMediasContacts">
                                    <i className="fa fa-instagram InstaColor" aria-hidden="true">
                                        <a className="nameIconContacts" href="#">Instagram/techno</a>
                                    </i>
                                    <hr></hr>
                                    <i class="fa fa-whatsapp WhatsColor" aria-hidden="true">
                                        <a className="nameIconContacts" href="#">WhatsApp: (35) 99732-0332</a>
                                    </i>
                                    <hr></hr>
                                    <i class="fa fa-facebook" aria-hidden="true">
                                        <a className="nameIconContacts" href="#">Facebook/techno</a>
                                    </i>
                                    <hr></hr>
                                    <i class="fa fa-envelope" aria-hidden="true">
                                        <a className="nameIconContacts" href="#">Gmail/techno</a>
                                    </i>
                                    <hr></hr>
                                    <i class="fa fa-linkedin" aria-hidden="true">
                                        <a className= "nameIconContacts" href="#">Linkedin/techno</a>    
                                    </i>                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
              </section>
                <hr></hr>
            </div>             
        )
    }
}

export default Contacts