import React, {Component} from 'react';
import './home.css';
import edicaoVideo from '../../assets/edicaoVideo.jpg'
import edicaoImagem from '../../assets/edicaoImagem.jpg'
import edicaoAudio from '../../assets/edicaoAudio.jpg'

class Home extends Component {
    render() {
        return (
          <div className="conteiner-fluid">      
            <header className="masthead text-center text-white">
              <div className="masthead-content">
                <div className="content">
                  <h1 className="masthead-heading mb-0">Techno</h1>
                  <h2 className="masthead-subheading mb-0">- Mídia e Audiovisual -</h2>
                  <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Contatos</a>
                </div>
                <div className="socialMedias">
                <i className="fa fa-instagram InstaColor" aria-hidden="true">
                  <a className="nameIcon" href="#">Instagram/techno</a>
                </i>
                <i class="fa fa-whatsapp WhatsColor" aria-hidden="true">
                  <a className="nameIcon" href="#">WhatsApp: (35) 99732-0332</a>
                </i>
                <i class="fa fa-facebook" aria-hidden="true">
                  <a className="nameIcon" href="#">Facebook/techno</a>
                </i>
                <i class="fa fa-envelope" aria-hidden="true">
                  <a className="nameIcon" href="#">Gmail/techno</a>
                </i>
                
                </div>
                </div>
            </header>
              
          <section>
            <div className="container">
              <div className="row align-itens-center">
                <div className="col-lg-6 order-lg-1">
                  <div className="p-5">
                    <h2>Quem somos?</h2>
                    <hr></hr>
                    <h6>Acessa o botão abaixo e conheça um pouco sobre nó</h6>
                    <a href="#" className="btn btn-custom btn-xl rounded-pill mt-5">Sobre</a>
                  </div>
                </div>
                <div className="col-lg-6 ordern-lg-2">
                  <div className="p-5">
                    <h2>O que fazemos?</h2>
                    <hr></hr>
                    <h6>Acesse o botão abaixo e conheça o que fazemos</h6>
                    <a href="#" className="btn btn-custom btn-xl rounded-pill mt-5">Serviços</a>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={edicaoVideo} alt="edicaoVideo"></img>
                </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <div className="p-5">
                    <h2 className="display-4">Edições de Vídeos</h2>
                    <p>Aqui vai um textinho falando sobre as edições de vídeos.</p>
                    <a href="#" className="btn btn-custom btn-xl rounded-pill mt-5">Serviços</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr></hr>
          <section>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={edicaoImagem} alt="edicaoVideo"></img>
                </div>
                </div>
                <div className="col-lg-6 order-lg-2">
                  <div className="p-5">
                    <h2 className="display-4">Edições de Imagens</h2>
                    <p>Aqui vai um textinho falando sobre as edições de imagens.</p>
                    <a href="#" className="btn btn-custom btn-xl rounded-pill mt-5">Serviços</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={edicaoAudio} alt="edicaoAudio"></img>
                </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <div className="p-5">
                    <h2 className="display-4">Edições de Áudio em vídeo</h2>
                    <p>Aqui vai um textinho falando sobre as edições de imagens.</p>
                    <a href="#" className="btn btn-custom btn-xl rounded-pill mt-5">Serviços</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
    
        );
        }
    }

export default Home;