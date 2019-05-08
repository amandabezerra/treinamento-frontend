import { inherit } from "@uirouter/core";

export default class CampoCadastroController {

  constructor(campoCadastroService) {
    var vm = this;
    vm.titulo = 'Cadastrar campo';
    vm.campo = {nome: ''};

    vm.cadastrar = function() {
      campoCadastroService.cadastrarCampo(vm.campo).then(function abc(resp) {
        vm.resposta = resp.data;
      });
    }
  }
  
}
CampoCadastroController.$inject = ['campoCadastroService'];
