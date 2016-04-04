angular.module('bethSite')
.factory('authService', function($q, $timeout, $http) {

  var user = null;

  var userInfo = 'stuff';

  return ({
    isLoggedIn: isLoggedIn,
    getUserStatus: getUserStatus,
    getUser: getUser,
    login: login,
    logout: logout,
    register: register,
    makeOrder: makeOrder
  });



  function isLoggedIn() {
    console.log(user + ' from service');
    if(user) {
      return true;
    } else {
      return false;
    }
  };

  function getUser() {
    console.log(userInfo + ' from service');
    if(user) {
      return userInfo;
    } else {
      return false;
    }
  }


  function getUserStatus() {
    $http.get('/user/status')
    // handle success
    .success(function (data) {
      if(data){
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

        if(status === 200 && data) {
          user = true;
          console.log(userInfo)
          userInfo = data
          console.log(userInfo + " from userInfo")

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

  function makeOrder(userInfo, product) {
    var deferred = $q.defer();

    var items = function() {

    $http.post('/api/order/' ,
      { user: userInfo,
        products:
          function() {
            var list = [];
            for(var i = 0; i < product.length; i++) {
              list.push({ name : product[i]._name,
                          quantity: product[i]._quantity
                        })
            }
            return list
          }()
      })
      //handle success
      .success(function(data, status) {
        if(status === 200 && data) {
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
        if(status === 200 && data) {
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
