var app = angular.module('ng-presentation', ['pascalprecht.translate']);

app.config(function($translateProvider)
{
	$translateProvider.useStaticFilesLoader({
		prefix: 'i18n/',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage('es');
});