import { inherit } from "@uirouter/core";

export default class CampoEdicaoController {

  constructor(campoEdicaoService, $stateParams) {
    var vm = this;
    vm.titulo = 'Editar campo';
    vm.idCampo = $stateParams.idCampo;
    consultar();

    function consultar() {
      campoEdicaoService.consultarCampo(vm.idCampo).then(function abc(resp) {
        vm.campo = resp.data;
      });
    }

    vm.redirecionar = function() {
      window.location.href = 'http://localhost:9001/#!/campo';
    }

    vm.editar = function() {
      campoEdicaoService.editarCampo(vm.campo, vm.campo.id).then(function abc(resp) {
        vm.redirecionar();
      });
    }
  }
  
}
CampoEdicaoController.$inject = ['campoEdicaoService', '$stateParams'];
