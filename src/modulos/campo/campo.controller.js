import { inherit } from "@uirouter/core";

export default class CampoController {

  constructor(campoService) {
    var vm = this;
    this.name = 'Campo';

    init();

    function init() {
      campoService.listarCampos().then(function abc(resp) {
        vm.campos = resp.data;
      });
    }

    vm.redirecionar = function() {
      window.location.href = 'http://localhost:9001/#!/campo/editar';
    }
  }
  
}
CampoController.$inject = ['campoService'];
