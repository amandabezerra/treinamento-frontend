import { inherit } from "@uirouter/core";

export default class CampoController {

  constructor(campoService) {
    var vm = this;
    this.name = 'Campo';

    init();

    function init(){
      campoService.getCampos().then(function abc(resp) {
        vm.campos = resp.data;
      });
    }
  }
  
}
CampoController.$inject = ['campoService'];
