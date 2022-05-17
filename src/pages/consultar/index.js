import './index.scss';
import '../../common/common.scss'
import { Link } from 'react-router-dom';

import setaFuncionario from '../../assets/image/Polygon 9.png';
import FuncionarioEntrar from '../../assets/image/Logo-cadastro-novo.png';
import LupaLateral from '../../assets/image/logo-consulta-novo.png';
import PortaSaida from '../../assets/image/Foto-saida.png';
import lapisEdicao from '../../assets/image/pencil-edicao-consulta.png';
import deletarConsulta from '../../assets/image/delete-consulta.png'

export default function Consultar(){
    return(
    <div className="Pagina-consultar">
        
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
            
            <section class="lateral-consulta">
                <div class="dahsboard-lateral">
                    <div class="cadastro-consulta">
                        <a href="../Cadastro/index.html">Cadastro</a>
                        <img class="imgs-cadas-consult" src={FuncionarioEntrar} alt=""/>
                    </div>

                    <hr class="linha-divisoria"></hr>

                    <div class="cadastro-consulta">
                        <a href="../Consulta/index.html"> Consulta </a>
                        <img class="imgs-cadas-consult" src={LupaLateral} alt=""/>
                    </div>

                    <hr class="linha-divisoria"></hr>

                </div>
            </section>
            
            <section class="pesquisa-consulta">
                <div class="saida-landing">
                    <a href="../Menu/index.html"><img class="img-saida" src={PortaSaida} alt=""/></a>
                </div>
                <div class="consulta-pesquisa">
                    <div class="caixa-entrada">
                        <input type='text' placeholder='Nome do Cliente' ></input>
                        <input type='text' pattern='\d{3}\.\d{3}\.\d{3}-\d{2}' 
                        title='Digite um CPF no formato: xxx.xxx.xxx-xx' placeholder='CPF' maxLength='14'></input>
                    </div>
                    <div class="dados-pesquisa">
                        <a id="ID" href=""> <strong>ID:</strong> #01</a>
                        <a id="nome" href=""> <strong>Nome: </strong> Gabrielle Ueda Alencar</a>
                        <a id="ID" href=""> <strong>CPF:</strong> XXX.XXX.XXX-XX</a>
                        <div class="del-edit">
                            <button>
                                <img class="edit-delete-consult" src={lapisEdicao} alt=""/>
                            </button>
                            <button type="reset">
                                <img class="edit-delete-consult" src={deletarConsulta} alt=""/>
                            </button>
                        </div>
                    </div>

                    <hr class="separa-cont-consulta"></hr>

                    <div class="dados-pesquisa">
                        <a id="ID" href=""> <strong>ID:</strong> #02</a>
                        <a id="nome" href=""> <strong>Nome: </strong> Milena Custodio Senna</a>
                        <a id="ID" href=""> <strong>CPF:</strong> XXX.XXX.XXX-XX</a>
                        <div class="del-edit">
                            <button>
                                <img class="edit-delete-consult" src={lapisEdicao} alt=""/>
                            </button>
                            <button type="reset">
                                <img class="edit-delete-consult" src={deletarConsulta} alt=""/>
                            </button>
                        </div>
                    </div>

                    <hr class="separa-cont-consulta"></hr>

                    <div class="dados-pesquisa">
                        <a id="ID" href=""> <strong>ID:</strong> #03</a>
                        <a id="nome" href=""> <strong>Nome: </strong> Felipe Neres</a>
                        <a id="ID" href=""> <strong>CPF:</strong> XXX.XXX.XXX-XX</a>
                        <div class="del-edit">
                            <button>
                                <img class="edit-delete-consult" src={lapisEdicao} alt=""/>
                            </button>
                            <button type="reset">
                                <img class="edit-delete-consult" src={deletarConsulta} alt=""/>
                            </button>
                        </div>
                    </div>

                    <hr class="separa-cont-consulta"></hr>

                    <div class="dados-pesquisa">
                        <a id="ID" href=""> <strong>ID:</strong> #04</a>
                        <a id="nome" href=""> <strong>Nome: </strong> Otavio De Jesus</a>
                        <a id="ID" href=""> <strong>CPF:</strong> XXX.XXX.XXX-XX</a>
                        <div class="del-edit">
                            <button>
                                <img class="edit-delete-consult" src={lapisEdicao} alt=""/>
                            </button>
                            <button type="reset">
                                <img class="edit-delete-consult" src={deletarConsulta} alt=""/>
                            </button>
                        </div>
                    </div>

                    <hr class="separa-cont-consulta"></hr>

                    <div class="dados-pesquisa">
                        <a id="ID" href=""> <strong>ID:</strong> #05</a>
                        <a id="nome" href=""> <strong>Nome: </strong> Mariana Ferreira</a>
                        <a id="ID" href=""> <strong>CPF:</strong> XXX.XXX.XXX-XX</a>
                        <div class="del-edit">
                            <button>
                                <img class="edit-delete-consult" src={lapisEdicao} alt=""/>
                            </button>
                            <button type="reset">
                                <img class="edit-delete-consult" src={deletarConsulta} alt=""/>
                            </button>
                        </div>
                    </div>

                    <hr class="separa-cont-consulta"></hr>

                </div>
            </section>
        </main>
    
    </div>
    )
}