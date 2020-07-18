import React, {Component} from 'react'
import './servicing.css'

import EdicaoVideo from '../../assets/edicaoVideo.jpg'
import EdicaoImagem from '../../assets/edicaoImagem.jpg'
import EdicaoAudio from '../../assets/edicaoAudio.jpg'
import Drive from '../../assets/drive.png'

class Servicing extends Component {
    render() {
        return (
            <div className="conteiner-fluid">
                <header header className="masthead-servicing text-center text-white">
                    <div className="masthead-content">
                        <div className="content">
                            <h1 className="masthead-servicing-heading mb-0">Serviços</h1>
                            <h2 className="masthead-servicing-subheading mb-0">Conheça nossos serviços</h2> 
                        </div>
                    </div>
                </header>

                <section>
                    <div className="servicings">
                        <div className="row space">
                            <div className="col-md-4">
                                <h1 className="title-servicing">Edições de Vídeos</h1>
                                <img className="img-fluid rounded-circle img-custom" src={EdicaoVideo} alt="edicaoVideo"></img>
                            </div>
                            <div className="col-md-4">
                                <h1 className="title-servicing">Edições de Imagens</h1>
                                <img className="img-fluid rounded-circle img-custom" src={EdicaoImagem} alt="edicaoVideo"></img>
                            </div>
                            <div className="col-md-4">
                                <h1 className="title-servicing">Edições de Áudios</h1>
                                <img className="img-fluid rounded-circle img-custom" src={EdicaoAudio} alt="edicaoVideo"></img>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="drive">
                        <div className="row space">
                            <div className="col-md-12">
                                <h1 className="titleDrive">Armazenamento</h1>
                                <a href="https://www.google.com.br/drive/apps.html"><img className="image-drive" src={Drive} /></a>
                                <br></br>
                                <span>Seu trabalho seguro no Google Drive</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="tolls">
                        <div className="heading-tolls">
                            <h1>Ferramentas</h1>
                                <a href="https://www.adobe.com/br/products/aftereffects.html"><img src="https://img.icons8.com/fluent/96/000000/adobe-after-effects.png" alt="AE"/></a>
                                <a href="https://www.adobe.com/br/products/illustrator.html"><img src="https://img.icons8.com/color/96/000000/adobe-illustrator.png"/></a>
                                <a href="https://www.adobe.com/br/products/audition.html"><img src="https://img.icons8.com/fluent/96/000000/adobe-audition.png"/></a>
                                <a href="https://www.adobe.com/br/products/premiere.html"><img src="https://img.icons8.com/fluent/96/000000/adobe-premiere-pro.png"/></a>
                                <a href="https://www.adobe.com/br/products/photoshop.html"><img src="https://img.icons8.com/fluent/96/000000/adobe-photoshop.png"/></a>
                            </div>
                        </div>
                </section>
            </div>
        )
    }
}

export default Servicing