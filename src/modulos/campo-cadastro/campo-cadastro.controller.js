import { inherit } from "@uirouter/core";

export default class CampoCadastroController {

  constructor(campoCadastroService) {
    var vm = this;
    vm.titulo = 'Cadastrar campo';
    vm.listaLinhas = [];
    vm.campo = '';

    vm.adicionaLinha = function(linha) {
      vm.listaLinhas.push(linha)
    }

    vm.cadastrar = function() {
      vm.dado = {nome: vm.campo, linhas: vm.listaLinhas};
      campoCadastroService.cadastrarCampo(vm.dado).then(function abc(resp) {
        vm.redirecionar();
      });
    }

    vm.redirecionar = function() {
      window.location.href = 'http://localhost:9001/#!/campo';
    }
  }
  
}
CampoCadastroController.$inject = ['campoCadastroService'];
