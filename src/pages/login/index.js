import './index.scss';
import '../../common/common.scss'
import { Link } from 'react-router-dom';

import logoLogin from '../../assets/image/testelogo-2.png'
import Saida from '../../assets/image/Foto-saida.png'
export default function Login(){
    return(
        <div className="Pagina-login">
            <main>
                <div class="atalho-saida">
                    <img class="img-saida-topo" src={Saida} alt=""/>
                    <a href="../Home/index.html">Exit</a>
                </div>
                <div class="cont-principal">
                    <div class="logo-empresa">
                        <img class="logo-empresa-img" src={logoLogin} alt=""/> 
                    </div>
                    <div class="caixas-entrada">
                        <input type="email" placeholder='E-mail'></input>
                        <input type="text" placeholder='Senha'></input>
                        
                    </div>
                    <div class="botao-login">
                        <a href=""> Login </a>
                    </div>
                </div>
            </main>
        </div>
        
    )
}