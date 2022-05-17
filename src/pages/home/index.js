import './index.scss';
import '../../common/common.scss'

import ImgMenuHome from '../../assets/image/logo-menu-home.png';
import ImgOndasUm from '../../assets/image/Primeiraonda-landingpage.png';
import foneBlue from '../../assets/image/fone-produto.png';
import Caixinha from '../../assets/image/caixasom-produto.png';
import Carregador from '../../assets/image/carregador-portatil.png';
import relogio from '../../assets/image/relogio-produto.png';
import SetaEsquerda from '../../assets/image/porta-2.png';
import SetaDireira from '../../assets/image/porta-1.png';

export default function Home(){
    return(
        <div className="Pagina-home">
            <main>
                <section className='faixa-1'>
                    <header className='header-fx1'>
                        <div className='menu-home'>
                            <img className='img-menu-home' src={ImgMenuHome} alt=''></img>
                            <a>Menu</a>
                        </div>
                        
                        <div className='login-home'>
                            <a>Nossa Historia</a>
                            <a>Login</a>
                        </div>
                    </header>
                    <main className='main-fx1'>
                        <div className='ondas-fx1'>
                          
                       </div>
                    </main>
                       
                            
                </section>
                <section className='faixa-2-produtos'>
                        <div className='titulo-fx2'>
                            <h1>Produtos</h1>
                        </div>
                        <div className='parte-produtos'>
                            <div className='img-seta-esquer-fx2'>
                                <img className='img-seta-produto' src={SetaEsquerda}></img>
                            </div>
                        
                            <div className='card-produtos'>
                                <img className='imgs-produtos' src={foneBlue} alt=''></img>
                                <div className='text-cards'>
                                    <p>Fone Bluetooth</p>
                                    <h4>R$189,90</h4>
                                </div>
                            </div>
                            <div className='card-produtos'>
                                <img className='imgs-produtos' src={Caixinha} alt=''></img>
                                <div className='text-cards'>
                                    <p>Caixa de Som</p>
                                    <h4>R$139,90</h4>
                                </div>
                               
                            </div>

                            <div className='card-produtos'>
                                <img className='imgs-produtos' src={relogio} alt=''></img>
                                <div className='text-cards'>
                                    <p>Relogio Cassio</p>
                                    <h4>R$279,90</h4>
                                </div>
                            </div>
                            <div className='card-produtos'>
                                <img className='imgs-produtos' src={Carregador} alt=''></img>
                                <div className='text-cards'>
                                    <p>Carregador portátil</p>
                                    <h4>R$159,90</h4>
                                </div>
                            </div>

                            <div className='img-seta-direita-fx2'>
                                <img className='img-seta-produto' src={SetaDireira} alt=''></img>
                            </div>
                        </div>

                       
                </section>
            </main>
        </div>
    )
}