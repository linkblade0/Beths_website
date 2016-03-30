angular.module('bethSite')
.factory('authService', function($q, $timeout, $http) {

  var user = null;

  return ({
    isLoggedIn: isLoggedIn,
    getUserStatus: getUserStatus,
    login: login,
    logout: logout,
    register: register
  });



  function isLoggedIn() {
    console.log(user);
    if(user) {
      return true;
    } else {
      return false;
    }
  };

  function getUser() {
    
  }


  function getUserStatus() {
    $http.get('/user/status')
    // handle success
    .success(function (data) {
      if(data.status){
        user = true;
      } else {
        user = false;
      }
      return user;
    })
    // handle error
    .error(function (data) {
      user = false;
    });
  }



  function login(username, password) {
    var deferred = $q.defer();
    $http.post('/user/login',
      {username: username, password: password})
      //handle success
      .success(function (data, status) {
        if(status === 200 && data.status) {
          user = true;
          deferred.resolve();
        } else {
          user = false;
          deferred.reject();
        }
      })
      //handle error
      .error(function(data) {
        user = false;
        deferred.reject();
      });
      //return promise object
      return deferred.promise;
  }


  function logout() {
    //create a new instance of deferred
    var deferred = $q.defer();

    //send a get request to the server
    $http.get('/user/logout')
    //handle success
    .success(function (data) {
      user = false;
      deferred.resolve();
    })
    //handle error
    .error(function (data){
      user = false;
      deferred.reject();
    });
    //return promise object
    return deferred.promise;
  }


  function register(username, password, firstName, lastName, email, number, street, city, state, zip) {
    //create a new instance of deferred
    var deferred = $q.defer();

    //send a post request to the server
    $http.post('/user/register',
      { username: username,
        password: password,
        name: {
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        number: number,
        address: {
          street: street,
          city: city,
          state: state,
          zip: zip
        }
      })
      //handle success
      .success(function(data, status) {
        if(status === 200 && data.status) {
          deferred.resolve();
        } else {
          deferred.reject();
        }
      })
      //handle error
      .error(function (data) {
        deferred.reject();
      });
      return deferred.promise;
  }
});
