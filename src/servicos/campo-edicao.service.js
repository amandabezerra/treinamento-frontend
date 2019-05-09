import angular from 'angular';

class CampoEdicaoService {

    constructor($http) {
        this.$http = $http;
        const apiBase = "http://localhost:8080";
        this.pathAlterar =  apiBase + "/campo/alterar/";
        this.pathConsultar = apiBase + "/campo/consultar/";
        this.pathExcluir = apiBase + "/campo/excluir/";
    }
    
    consultarCampo(idCampo) {
        return this.$http.get(this.pathConsultar + idCampo);
    }

    editarCampo(campo, idCampo) {
        return this.$http.put(this.pathAlterar + idCampo, campo);
    }

    excluirCampo(idCampo) {
        return this.$http.delete(this.pathExcluir + idCampo);
    }
}

export default angular.module('services.campo-edicao-service', [])
.service('campoEdicaoService', CampoEdicaoService)
.name;