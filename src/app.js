'use strict';

import angular from 'angular'
import uirouter from 'angular-ui-router';
var blockUI = require('angular-block-ui');

import 'bootstrap';
import './scss/app.scss';

import routing from './app.config';

import campo from './modulos/campo/campo.js';
import home from './modulos/home/home.js';
import campoCadastro from './modulos/campo-cadastro/campo-cadastro.js';
import campoEdicao from './modulos/campo-edicao/campo-edicao.js';

angular
.module('myApp', [
  uirouter,
  blockUI,
  campo,
  campoCadastro,
  campoEdicao,
  home
])
.config(routing);