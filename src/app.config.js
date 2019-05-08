routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    let homeState = {
        name: 'home',
        url: '/home',
        templateUrl: './modulos/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }
      $stateProvider.state(homeState);
      
    let campoState = {
      name: 'campo',
      url: '/campo',
      templateUrl: './modulos/campo/campo.view.html',
      controller: 'CampoController',
      controllerAs: 'vm'
    }
    $stateProvider.state(campoState);

    let campoCadastroState = {
      name: 'campoCadastro',
      url: '/campo/cadastrar',
      templateUrl: './modulos/campo-cadastro/campo-cadastro.view.html',
      controller: 'CampoCadastroController',
      controllerAs: 'vm'
    }
    $stateProvider.state(campoCadastroState);
    
    $urlRouterProvider.otherwise('/home')  
}