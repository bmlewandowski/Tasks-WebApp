angularApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider

        //Routes for General Areas 

        .when('/', {
            controller: 'user_homeCtrl',
            templateUrl: '/1.1.1/html/user/user_home.html',
            routedata: {
                secure: false,
                title: 'Home',
                area: 'Public'
            }
        })

        .when('/dashboard/', {
            controller: 'user_dashboardCtrl',
            templateUrl: '/1.1.1/html/user/user_dashboard.html',
            routedata: {
                secure: false,
                title: 'Dashboards',
                area: 'Public'
            }
        })
    
        .when('/tasklist/:listId/', {
            controller: 'user_tasklistCtrl',
            templateUrl: '/1.1.1/html/user/user_tasklist.html',
            routedata: {
                secure: false,
                title: 'Tasklist',
                area: 'Public'
            }
        })
    
        .when('/editlist/:listId/', {
            controller: 'user_editlistCtrl',
            templateUrl: '/1.1.1/html/user/user_editlist.html',
            routedata: {
                secure: false,
                title: 'Edit List',
                area: 'Public'
            }
        })

        .when('/settings/', {
            controller: 'user_settingsCtrl',
            templateUrl: '/1.1.1/html/user/user_settings.html',
            routedata: {
                secure: false,
                title: 'My Settings',
                area: 'Public'
            }
        })

        .when('/help/', {
            controller: 'user_helpCtrl',
            templateUrl: '/1.1.1/html/user/user_help.html',
            routedata: {
                secure: false,
                title: 'Help Area',
                area: 'Public'
            }
        })

        .when('/admin/', {
            controller: 'admin_homeCtrl',
            templateUrl: '/1.1.1/html/admin/admin_home.html',
            routedata: {
                secure: false,
                title: 'Admin Area',
                area: 'Public'
            }
        })

        .when('/adminusers/', {
            controller: 'admin_usersCtrl',
            templateUrl: '/1.1.1/html/admin/admin_users.html',
            routedata: {
                secure: false,
                title: 'User Account Managment',
                area: 'Public'
            }
        })

        .when('/adminsettings/', {
            controller: 'admin_settingsCtrl',
            templateUrl: '/1.1.1/html/admin/admin_settings.html',
            routedata: {
                secure: false,
                title: 'Global Settings',
                area: 'Public'
            }
        })

        .when('/adminhelp/', {
            controller: 'admin_helpCtrl',
            templateUrl: '/1.1.1/html/admin/admin_help.html',
            routedata: {
                secure: false,
                title: 'Admin Help Area',
                area: 'Public'
            }
        })
    
        .when('/login', {
            controller: 'loginCtrl',
            templateUrl: '/1.1.1/html/login/login.html',
            routedata: {
                secure: false,
                title: 'Login',
                area: 'Public'
            }
        })

        .when('/auth', {
            controller: 'authCtrl',
            templateUrl: '/1.1.1/html/login/auth.html',
            routedata: {
                secure: false,
                title: 'Auth',
                area: 'Public'
            }
        })

        .when('/register', {
            controller: 'registerCtrl',
            templateUrl: '/1.1.1/html/register/register.html',
            routedata: {
                secure: false,
                title: 'Register',
                area: 'Public'
            }
        })

        //If the Route is not found
        .otherwise({
            redirectTo: '/'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

});
