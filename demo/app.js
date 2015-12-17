var app = angular.module('songs-demo', ['ngRoute', 'pascalprecht.translate']);


app.config(['$routeProvider', function($routeProvider)
{
	$routeProvider.
	when('/list', {
		templateUrl: 'views/list.html'
	}).
	when('/add', {
		templateUrl: 'views/add.html',
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);

app.config(function ($translateProvider) {
	$translateProvider.translations('en', {
		MY_SONGS: 'My songs',
		AUTHOR: 'Author',
		TITLE: 'Title',
		DELETE: 'Delete',
		ADD: 'Add',
		SEARCH: 'Search',
		SEARCH_ALL_FIELDS: 'Search by any field...',
		ADD_A_NEW_SONG: 'Add a new song',
		VIEW_ALL_SONGS: 'View all my songs'
	});
	$translateProvider.translations('es', {
		MY_SONGS: 'Mis canciones',
		AUTHOR: 'Autor',
		TITLE: 'Título',
		ADD: 'Añadir',
		DELETE: 'Eliminar',
		SEARCH: 'Buscar',
		SEARCH_ALL_FIELDS: 'Buscar por cualquier campo...',
		ADD_A_NEW_SONG: 'Añadir una canción nueva',
		VIEW_ALL_SONGS: 'Ver todas mis canciones'
	});
	$translateProvider.preferredLanguage('es');
});