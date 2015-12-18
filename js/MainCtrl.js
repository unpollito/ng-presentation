app.controller('MainCtrl', function($http, $scope, $translate)
{
	$http.get('demo/endpoint/index.php').then(function(res)
	{
		$scope.songs1 = res.data;
	});

	$scope.new_song = {
		author: '',
		title: ''
	};

	$scope.addSong = function()
	{
		var author = $scope.new_song.author;
		var title = $scope.new_song.title;
		$http.post('demo/endpoint/index.php',
			{author: author, title: title}).then(
			function(res)
			{
				$scope.songs1.push({
					author: author,
					title: title,
					id: res.data
				});
				$scope.new_song.author = '';
				$scope.new_song.title = '';
			});
	};

	$scope.language = 'es';

	$scope.setLanguage = function(lang)
	{
		$scope.language = lang;
		$translate.use(lang);
	}
});