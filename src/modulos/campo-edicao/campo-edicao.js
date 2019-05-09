import angular from 'angular';
import uirouter from 'angular-ui-router';

import CampoEdicaoController from './campo-edicao.controller';

import campoEdicaoService from '../../servicos/campo-edicao.service';

export default angular.module('myApp.campoEdicao', [uirouter, campoEdicaoService])
  .controller('CampoEdicaoController', CampoEdicaoController)
  .name;

  