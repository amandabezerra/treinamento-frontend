import angular from 'angular';
import uirouter from 'angular-ui-router';

import CampoController from './campo.controller';

import campoService from '../../servicos/campo.service';

export default angular.module('myApp.campo', [uirouter, campoService])
  .controller('CampoController', CampoController)
  .name;

  