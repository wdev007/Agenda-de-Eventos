import React from "react";

import "./index.css";

export default class Formulario extends React.Component {
  render() {
    return (
      <div className="container container-formulario">
        <form id="cadastro-evento">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="formNomeEvento">Nome do evento</label>
              <input
                type="text"
                class="form-control"
                id="formNomeEvento"
                placeholder="Nome do evento"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="formCategorias">Categorias</label>
              <select id="formCategorias" class="form-control">
                <option selected>Selecione a categoria</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label for="formArea">Área</label>
              <select id="formArea" class="form-control">
                <option selected>Selecione a Área</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="formDescricao">Descrição</label>
              <textarea
                class="form-control"
                id="formDescricao"
                rows="3"
                placeholder="Descrição"
              ></textarea>
            </div>
          </div>
          <div className="form-row">
            <div class="form-group col-md-2">
              <label for="formInicio">Inicio</label>
              <input type="date" class="form-control" id="formInicio" />
            </div>
            <div class="form-group col-md-2">
              <label for="formHoraInicio">Hora</label>
              <input type="time" class="form-control" id="formHoraInicio" />
            </div>
            <div class="form-group col-md-2">
              <label for="formTermino">Termino</label>
              <input type="date" class="form-control" id="formTermino" />
            </div>
            <div class="form-group col-md-2">
              <label for="formHoraTermino">Hora</label>
              <input type="time" class="form-control" id="formHoraTermino" />
            </div>
          </div>
          <div className="form-row">
            <div class="form-group col-md-4">
              <label for="formTipo">Tipo</label>
              <input
                type="text"
                class="form-control"
                id="formTipo"
                placeholder="Tipo do evento"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="formLocal">Local</label>
              <input
                type="text"
                class="form-control"
                id="formLocal"
                placeholder="Local do evento"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="formSite">Site</label>
              <input
                type="text"
                class="form-control"
                id="formSite"
                placeholder="exemplo.com.br"
              />
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-12">
              <label for="formEndereco">Endereço</label>
              <input
                type="text"
                class="form-control"
                id="formEndereco"
                placeholder="Av. Rua, Logradouro, 928"
              />
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-3">
              <label for="formCep">CEP</label>
              <input
                type="text"
                class="form-control"
                id="formCep"
                placeholder="Informe o CEP"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="formBairro">Bairro</label>
              <input
                type="text"
                class="form-control"
                id="formBairro"
                placeholder="Informe o Bairro"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="formCidade">Cidade</label>
              <input
                type="text"
                class="form-control"
                id="formCidade"
                placeholder="Informe a cidade"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="formEstado">Estado</label>
              <input
                type="text"
                class="form-control"
                id="formEstado"
                placeholder="Informe o estado"
              />
            </div>
          </div>

          <div className="area-btns">
            <button
              type="button"
              class="btn"
              id="formCancelar"
              onClick={e => {
                e.preventDefault();
                window.location.href = "www.google.com.br";
              }}
            >
              Cancelar
            </button>
            <button type="submit" class="btn" id="formSalvar">
              Salvar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
