import angular from 'angular';
import uirouter from 'angular-ui-router';

import CampoCadastroController from './campo-cadastro.controller';

import campoCadastroService from '../../servicos/campo-cadastro.service';

export default angular.module('myApp.campoCadastro', [uirouter, campoCadastroService])
  .controller('CampoCadastroController', CampoCadastroController)
  .name;

  