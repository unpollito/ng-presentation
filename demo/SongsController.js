app.controller('SongsController', function($http, $scope, $location, $translate, SongService)
{
	SongService.getAll().then(function(res)
	{
		$scope.songs = res;
	}, function()
	{
		console.log('Could not fetch songs from the server');
	});

	$scope.new_song = {
		author: '',
		title: ''
	};

	$scope.delete = function(id)
	{
		var song_index = null;
		for (var i = 0; i < $scope.songs.length && song_index === null; i++)
		{
			if ($scope.songs[i].id === id)
			{
				song_index = i;
			}
		}
		if (song_index !== null)
		{
			SongService.delete(id).then(function()
			{
				// Remove this song from $scope.songs
				$scope.songs.splice(song_index, 1);
			});
		}
	};

	$scope.addSong = function()
	{
		var author = $scope.new_song.author;
		var title = $scope.new_song.title;
		SongService.create(author, title).then(function(res)
		{
			var new_song = {
				id: res.data,
				author: author,
				title: title
			};
			$scope.songs.push(new_song);
			$scope.new_song.author = '';
			$scope.new_song.title  = '';
			$location.path('#/list');
		});
	};

	$scope.language = 'es';
	$scope.switchLanguage = function(lang)
	{
		$scope.language = lang;
		$translate.use(lang);
	}
});