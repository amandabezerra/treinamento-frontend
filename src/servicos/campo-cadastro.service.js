import angular from 'angular';

class CampoCadastroService {

    constructor($http) {
        this.$http = $http;
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/campo/cadastrar";
    }
    
    cadastrarCampo(campo) {
        return this.$http.post(this.path, campo);
    }
}

export default angular.module('services.campo-cadastro-service', [])
.service('campoCadastroService', CampoCadastroService)
.name;