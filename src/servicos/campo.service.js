import angular from 'angular';

class CampoService {

    constructor($http) {
        this.$http = $http;
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/campo/listar";
    }
    
    listarCampos() {
        return this.$http.get(this.path);
    }
}

export default angular.module('services.campo-service', [])
.service('campoService', CampoService)
.name;