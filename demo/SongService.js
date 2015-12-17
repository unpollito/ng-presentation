app.service('SongService', function($http, $q)
{
	var ENDPOINT = 'endpoint/index.php';

	var srv = {
		getAll: function()
		{
			var deferred = $q.defer();
			$http.get(ENDPOINT).then(function(res)
			{
				deferred.resolve(res.data);
			}, function()
			{
				deferred.reject();
			});
			return deferred.promise;
		},
		create: function(author, title)
		{
			var deferred = $q.defer();
			$http.post(ENDPOINT, {author: author, title: title}).then(function(res)
			{
				deferred.resolve(res.data);
			});
			return deferred.promise;
		},
		delete: function(id)
		{
			var deferred = $q.defer();
			$http.post(ENDPOINT, {delete: true, id: id}).then(function(res)
			{
				deferred.resolve();
			});
			return deferred.promise;
		}
	};

	return srv;
});