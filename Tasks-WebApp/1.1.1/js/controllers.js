//General Area Controllers

angularApp.controller("user_homeCtrl", function ($scope) {

    console.log('Home Controller Processed');

});

angularApp.controller("user_dashboardCtrl", function ($scope,$http,$location) {
    
    $scope.initialize = function () {
             
        $http.get('http://localhost:15790/api/TaskLists', 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }).then(function(response){
            
             $scope.tasklists = response.data;
            console.log(response);
            
        }, function errorCallback(response){
            
                console.log("Add Tasklist Failed");
            });
     
    }; 
    
    $scope.addtasklist = function () {
        console.log($scope.addtasklist.tasklistname);
        var dataObj = {
                name : $scope.addtasklist.tasklistname
        };        

        $http.post('http://localhost:15790/api/TaskLists', dataObj,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }).then(function(response){
            
            console.log(response);
            $location.path('/dashboard');
            
        }, function errorCallback(response){
            
                console.log("Add Tasklist Failed");
            });
     
    };    
    
    $scope.initialize();

    console.log('Dashboard Controller Processed');

});

angularApp.controller("user_tasklistCtrl", function ($scope,$http,$routeParams) {
    
    $scope.initialize = function () {
                      
        $http.get('http://localhost:15790/api/TaskLists/' + $routeParams.listId, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }).then(function(response){
            
            $scope.tasklist = response.data;
            console.log(response);
            
        }, function errorCallback(response){
            
                console.log("Add Tasklist Failed");
            });
     
    }; 

    $scope.initialize();
    
    console.log('Tasklist Controller Processed');

});

angularApp.controller("user_editlistCtrl", function ($scope,$http,$routeParams,$location) {
    
    $scope.initialize = function () {
        //get tasklist              
        $http.get('http://localhost:15790/api/TaskLists/' + $routeParams.listId, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }).then(function(response){
            
            $scope.tasklist = response.data;

                var dataObj = {
                        listid : $scope.tasklist.id,
                };   
                //get tasks for tasklist
                $http.get('http://localhost:15790/api/Tasks?listid=' + $scope.tasklist.id,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                    }
                }).then(function(response){

                    $scope.tasks = response.data;
                    console.log($scope.tasks);

                }, function errorCallback(response){

                        console.log("Get Tasks Failed");
                    });            
            
        }, function errorCallback(response){
            
                console.log("Get Tasklist Failed");
            });
     
    }; 
    
    $scope.addtask = function () {

        var dataObj = {
                name : $scope.addtask.taskname,
                listid: $scope.tasklist.id
        };        

        $http.post('http://localhost:15790/api/Tasks', dataObj,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }).then(function(response){
            
            console.log(response);
            $location.path('/editlist/' + $routeParams.listId);
            
        }, function errorCallback(response){
            
                console.log("Add Task Failed");
            });
     
    };   
    
    $scope.edittask = function (id) {
        
     console.log('Edit ID = ' + id);
        
    };   
    
    $scope.deletetask = function (id) {
        
        $http.delete('http://localhost:15790/api/Tasks/' + id,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
            
        }).then(function(response){
            
     console.log("Deleted Task: " + id);
            $location.path('/editlist/' + $routeParams.listId);
            
        }, function errorCallback(response){
            
                console.log("Delete Task Failed");
            });        

    };   
    
    $scope.initialize();    
    
    console.log('Editlist Controller Processed');

});

angularApp.controller("user_settingsCtrl", function ($scope) {

    console.log('User Settings Controller Processed');

});

angularApp.controller("user_helpCtrl", function ($scope) {

    console.log('User Help Controller Processed');

});

angularApp.controller("admin_homeCtrl", function ($scope) {

    console.log('Admin Home Controller Processed');

});

angularApp.controller("admin_usersCtrl", function ($scope, $http, $location) {

    $scope.initialize = function () {

        $scope.adduser.useremail = '';
        $scope.orgusers = {};
        //$scope.orgid - {};

        $http.get('http://localhost:15790/api/organizationusers',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }
            }).then(function (response) {

                $scope.orgusers = response.data;
                //$scope.orgid = $scope.orgusers[0].orgId;

                console.log(response.data);

            }, function errorCallback(response) {

                console.log("Failed");
            });

    };

    $scope.maxusers = function () {

        if ($scope.orgusers.length > 5) {

            return true;

        }
        else {

            return false;

        }
    };

    $scope.adduser = function () {

        var dataObj = {
            email: $scope.adduser.useremail,

        };

        $http.post('http://localhost:15790/api/account/registeruser', dataObj,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }
            }).then(function (response) {

                console.log(response);
                $scope.initialize();

            }, function errorCallback(response) {

                console.log("Add Users Failed");
            });

    };

    $scope.initialize();

    console.log('Admin Users Controller Processed');

});

angularApp.controller("admin_settingsCtrl", function ($scope) {

    console.log('Admin Settings Controller Processed');

});

angularApp.controller("admin_helpCtrl", function ($scope) {

    console.log('Admin Help Controller Processed');

});

angularApp.controller("loginCtrl", function ($scope,$http) {
        
    $scope.loginemail = function () {
             
        var dataObj = {
                email : $scope.loginemail.email,
        };        

        $http.post('http://localhost:15790/api/Authenticate', dataObj,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response){
            
             $scope.secureloginlink = response.data;
            console.log(response);
            
        }, function errorCallback(response){
            
                console.log("Login Failed");
            });
     
    };   
      
    console.log('Login Controller Processed');
    
});

angularApp.controller("authCtrl", function ($scope,$http,$routeParams,$location,$rootScope) {
    
    //Get querystring parameters and send on to checkin 
    console.log($routeParams);
    var UserId = $routeParams.UserId;
    var Authkey01 = $routeParams.Authkey01;
    var Authkey02 = $routeParams.Authkey02;
    
    console.log(UserId + '&Authkey01=' + Authkey01 + '&Authkey02=' + Authkey02);
    
    
    $http({
      method: 'GET',
      url: 'http://localhost:15790/api/Authenticate?UserId=' + UserId + '&Authkey01=' + Authkey01 + '&Authkey02=' + Authkey02
    }).then(function successCallback(response) {
        
        localStorage.setItem('accessToken', response.data.access_token);
        localStorage.setItem('userName', response.data.userName);
        localStorage.setItem('userId', response.data.userId);
        $rootScope.user = response.data;
        $location.path('/');
        console.log($rootScope.user);
        
      }, function errorCallback(response) {
        
        console.log("ERROR: " + response);
      
    });
     
    console.log('Auth Controller Processed');
   
});

angularApp.controller("registerCtrl", function ($scope,$location,$http) {
    
    
    $scope.register = function () {
             
        var dataObj = {
                email : $scope.register.email,
                organization: $scope.register.organization,
        };        

        $http.post('http://localhost:15790/api/account/registeradmin', dataObj,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response){
            
            console.log(response);
            localStorage.setItem('accessToken', response.data.access_token);
            localStorage.setItem('userName', response.data.userName);    
            localStorage.setItem('userId', response.data.userId); 
            $location.path('/');
            
        }, function errorCallback(response){
            
                console.log("Register Failed");
            });
     
    };      
    
    
    console.log('Register Controller Processed');
    
});
