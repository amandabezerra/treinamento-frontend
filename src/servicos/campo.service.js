import angular from 'angular';

class CampoService {

    constructor($http) {
        this.$http = $http;
        const apiBase = "http://localhost:8080";
        this.pathListar =  apiBase + "/campo/listar";
        this.pathPesquisar = apiBase + "/campo/consultarPorNome/";
    }
    
    listarCampos() {
        return this.$http.get(this.pathListar);
    }

    pesquisarCampoPorNome(nomeCampo) {
        return this.$http.get(this.pathPesquisar + nomeCampo);
    }
}

export default angular.module('services.campo-service', [])
.service('campoService', CampoService)
.name;