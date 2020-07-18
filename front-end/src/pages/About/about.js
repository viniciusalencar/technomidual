import React, {Component} from 'react'
import './about.css'

class About extends Component {
    render() {
        return (
            <div className="conteiner-fluid">
                <header header className="masthead-about text-center text-white">
                    <div className="masthead-content">
                        <div className="content">
                            <h1 className="masthead-about-heading mb-0">Sobre nós</h1>
                            <h2 className="masthead-about-subheading mb-0">Conheça um pouco mais sobre a empresa</h2> 
                        </div>
                    </div>
                </header>

                <section>
                    <div clasName="company-profile">
                        <div className="heading-company-profile">
                            <h1 className="title-heading-company-profile">Sobre a empresa</h1>
                            <hr></hr>
                            <p className="text-heading-company-profile">A Techno é um empreendimento direcionado a trabalhos de
                                                                        edição de conteúdos audiovisuais. À medida em que o meio
                                                                        digital destaca-se, e posiciona-se, enquanto principal forma
                                                                        de apresentar projetos dos mais variados segmentos, mais necessita-se
                                                                        de uma empresa que atenda à esta crescente demanda. Em vista disto,
                                                                        a Techno busca por oferecer um serviço que proporcione ao cliente,
                                                                        e seu público-alvo, uma experiência única ao desfrutar de materiais das
                                                                        mais diversas finalidades, sejam estas de caráter educativo, formador ou
                                                                        de entretenimento. Confira nossos serviços e assegure a qualidade de seu
                                                                        projeto.</p>
                        </div> 
                        
                    </div>
                </section>

                <section>
                    <div className="mission-vision-values">
                        <div className="row mission-vision-values">
                            <div className="col-md-4 box-mission-vision-values">
                                <h2 className="text-mission-vision-values">Missão</h2>
                                <p className="misson">Ser a melhor empresa em oferecer edições de mídias audiovisuais com qualidade, segurança
                                    e sempre dentro dos prazos estipulados aos seus clientes, satisfazendo suas necessidades.  
                                </p>
                            </div>
                            <div className="col-md-4 box-mission-vision-values">  
                                <h2 className="text-mission-vision-values">Visão</h2>
                                <p className="vision">Ser um negócio de referência dentro do âmbito tecnológico e de mídias, reconhecido como 
                                    melhor opção à comunidade, pela qualidade do serviço prestado.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h2 className="text-mission-vision-values">Valores</h2>
                                <p className="values">Honestidade</p>
                                <p className="values">Integridade</p>
                                <p className="values">Criatividade</p>
                                <p className="values">Segurança</p>
                                <p className="values">Paixão</p>
                                <p className="values">Preservação do Meio Ambiente</p>
                                <p className="values">Respeito e reconhecimento da diversidade</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About