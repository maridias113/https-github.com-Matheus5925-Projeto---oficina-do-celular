import './index.scss';
import '../../common/common.scss'

import setaFuncionario from '../../assets/image/Polygon 9.png';
import FuncionarioEntrar from '../../assets/image/Logo-cadastro-novo.png';
import LupaLateral from '../../assets/image/logo-consulta-novo.png';
import PortaSaida from '../../assets/image/Foto-saida.png';
import FundoMenu from '../../assets/image/fundo-menu-novo.png'
import { Link } from 'react-router-dom';


export default function Menu(){
    return(
        <div className="Pagina-menu">
            <header>
                <div class="conteudo-header">
                    <div class="img-seta-div">
                        <img class="img-seta" src={setaFuncionario} alt=""/>
                    </div>
                    <div class="image-header">
                        <input type="image" id="campo-imagem-funcionario" class="campo-imagem-funcionario" />
                    </div>
                    <div class="dados-funcionario-header">
                        <a href="" class="nome-funcionario">Nome do funcionario</a>
                        <a href="" class="status-funcionario">Status</a>
                    </div>
                </div>
            </header>
            <main>
                <section class="primeira-parte">
                    <div class="dahsboard-lateral">
                        <div class="cadastro-consulta">
                            <a href="">Cadastrar</a>
                            <img class="imgs-cadas-consult" src={FuncionarioEntrar} alt=""/>
                        </div>
                        <hr class="linha-divisoria"></hr>
                        <div class="cadastro-consulta">
                            <a href="../Consulta/index.html">Consulta</a>
                            <img class="imgs-cadas-consult" src={LupaLateral} alt=""/>
                        </div>
                        <hr class="linha-divisoria"></hr>
                    </div>
                </section>
                <section class="segunda-parte">
                    
                </section>
            </main>
        </div>
    )
}