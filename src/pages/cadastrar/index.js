import './index.scss';
import '../../common/common.scss'
import { Link } from 'react-router-dom';

import setaFuncionario from '../../assets/image/Polygon 9.png';
import FuncionarioEntrar from '../../assets/image/Logo-cadastro-novo.png';
import LupaLateral from '../../assets/image/logo-consulta-novo.png';
import PortaSaida from '../../assets/image/Foto-saida.png';

export default function Cadastrar(){
    return(
        <div className="Pagina-cadastrar">
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
                            <a href="">Cadastro</a>
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
                <section class="form-parte2">
                    <div class="saida-landing">
                        <a href=""><img class="img-saida" src={PortaSaida} alt=""/></a>
                    </div>
                    <form class="formulario-de-cadastro" action="" method="post">

                        <div class="entrada-formulario">
                            <div class="input-name">
                                <label><strong>Nome:</strong></label>
                                <input type="text" name="nome" id="nome_cliente"/>
                                <hr  width="350" class="separa-cont-consulta"/>
                            </div>
                            <div>
                                <div class="input-name">
                                    <label><strong>E-mail:</strong></label>
                                    <input type="email" name="e-mail" id="email_cliente"/>
                                    <hr  width="350" class="separa-cont-consulta"/>
                                </div>
                            </div>
                        </div>


                        <div class="entrada-formulario">
                            <div class="input-name">
                                <label><strong>Telefone de contato:</strong></label>
                                <input type="tel" name="tel-contato" id="tel-cliente"/>
                                <hr  width="350" class="separa-cont-consulta"/>
                            </div>
                            <div>
                                <div class="input-name">
                                    <label><strong>CPF:</strong></label>
                                    <input type="text" name="cpf" 
                                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                                    title="Digite um CPF no formato: xxx.xxx.xxx-xx" maxlength="14"/>
                                    <hr  width="350" class="separa-cont-consulta"/>
                                </div>
                            </div>
                        </div>

                        <div class="entrada-formulario">
                            <div class="input-name">
                                <label><strong>Marca do celular:</strong></label>
                                <input type="text" name="marca-do-celular" id="marca_celular_cliente"/>
                                <hr  width="350" class="separa-cont-consulta"/>
                            </div>
                            <div>
                                <div class="input-name">
                                    <label><strong>Modelo do celular:</strong></label>
                                    <input type="text" name="mode_celular" id="modelo_celular_cliente"/>
                                    <hr  width="350" class="separa-cont-consulta"/>
                                </div>
                            </div>
                        </div>

                        <div class="entrada-formulario  data-preço">
                            <div class="input-name">
                                <label><strong>Data entrega na loja:</strong></label>
                                <input type="date" name="data-entrega-loja" id="data_entrega_loja_cliente"/>
                                <hr  width="220" class="separa-cont-consulta"/>
                            </div>
                            <div>
                                <div class="input-name">
                                    <label><strong>Data devolução cliente:</strong></label>
                                    <input type="date" name="data-devolu-cliente" id="data_devolu_cliente"/>
                                    <hr  width="250" class="separa-cont-consulta"/>
                                </div>
                            </div>
                            <div>
                                <div class="input-name">
                                    <label><strong>Preço final:</strong></label>
                                    <input type="text"  placeholder='R$'></input>
                                    <hr  width="200" class="separa-cont-consulta"/>
                                </div>
                            </div>
                        </div>

                        <div class="entrada-formulario">
                            <div class="input-name">
                                <label><strong>Problema celular:</strong></label>
                                <textarea class="problema-cllr" cols="30" rows="10"></textarea>
                                <hr  width="350" class="separa-cont-consulta"/>
                            </div>
                        </div>

                        <div class="botao-login">
                            <a href=""> Cadastrar </a>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}