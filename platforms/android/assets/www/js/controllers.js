angular.module('starter.controllers', ['ionic','ngCordova'])




.controller('searchCtrl',['$scope','$rootScope','$window','$http','$ionicLoading','$ionicPopup',function($scope,$rootScope,$window,$http,$ionicLoading,$ionicPopup,$cordovaSocialSharing, $cordovaSms) {

 $scope.master = {};

 var obj;
    var request = $http({
          method: "post",
          url: "http://apnakawardha.in/login/home",
          data: obj,
          headers : {'Content-Type':undefined,} 
          });
      
           $ionicLoading.show({
            template: '<ion-spinner icon="android"></ion-spinner>'
          });
       
          request.success(function(data, status, headers, config) {
             $ionicLoading.hide();
             console.log(data);
            // console.log(data[0].hashKey);
       
       
             // $window.location="#/donorDetails";
              $rootScope.s=data;
                $scope.$broadcast('scroll.refreshComplete');
                 $scope.get=function(titles)
              {
               console.log("sds");
               console.log(titles);
               for(var i=(data.length-1);i>=0;i--)
               {
                if(data[i].title==titles)
                {
                 // console.log(data[i].description);
                  $rootScope.pin=(data[i].image);
                  $rootScope.pina=(data[i].description);
                  $rootScope.pinb=(data[i].title);

                }
               }
               $window.location='#app/detail';

              };
              });
          request.error(function(data, status, headers, config) {
              $ionicLoading.hide();
              $scope.$broadcast('scroll.refreshComplete');
            $ionicPopup.alert({
                             title: 'Alert',
                             template: 'No internet connection.Exiting'
                            
                           });

             ionic.Platform.exitApp();
          });


var obj;
       var request = $http({
          method: "post",
          url: "http://apnakawardha.in/login/allads",
          data: obj,
          headers : {'Content-Type':undefined,} 
          });
      
           $ionicLoading.show({
            template: '<ion-spinner icon="android"></ion-spinner>'
          });
       
          request.success(function(data, status, headers, config) {
            console.log(data);
            $rootScope.add=data;
            
          //   $ionicLoading.hide();
             $scope.$broadcast('scroll.refreshComplete');
           
          });


          request.error(function(data, status, headers, config) {
             // $ionicLoading.hide();
              $scope.$broadcast('scroll.refreshComplete');
              $ionicPopup.alert({
                             title: 'Alert',
                             template: 'Poor internet connection'
                           });
            console.log("error",data);
          });

        //   }

   
    $scope.search = function(user) {
   
   // $scope.master = angular.copy(user);
 
   /* var obj= [{
                            'citycode': user.citycode,
                            'bloodgroup': user.bloodgroup,
    }]; */
  var obj;
    var request = $http({
          method: "post",
          url: "http://apnakawardha.in/login/home",
          data: obj,
          headers : {'Content-Type':undefined,} 
          });
      
         /*  $ionicLoading.show({
            template: '<ion-spinner icon="android"></ion-spinner>'
          });*/
       
          request.success(function(data, status, headers, config) {
          //   $ionicLoading.hide();
             console.log(data);
             console.log(data[1].image);

           // if (data.status==1) {
             
       
       
             // $window.location="#/donorDetails";
              $rootScope.s=data;
              
                $scope.$broadcast('scroll.refreshComplete');
        //   }
            $scope.get=function(titles)
              {
               console.log("sds");
               console.log(titles);
               for(var i=0;i<data.length;i++)
               {
                if(data[i].title==titles)
                {
                  console.log(data[i].description);
                  $rootScope.pin=(data[i].image);
                  $rootScope.pina=(data[i].description);
                  $rootScope.pinb=(data[i].title);

                }
               }
               $window.location='#app/detail';

              };
   
          });

          request.error(function(data, status, headers, config) {
             // $ionicLoading.hide();
              $scope.$broadcast('scroll.refreshComplete');
            $ionicPopup.alert({
                             title: 'Alert',
                             template: 'Poor internet connection'
                           });
          });

      };
       

      }])
  .controller('AddsCtrl', ['$scope','$rootScope','$http','$window','$ionicLoading','$ionicPopup',function($scope,$rootScope,$http, $window,$ionicLoading,$ionicPopup) {
   
        
      $scope.master = {};
       var obj;
       var request = $http({
          method: "post",
          url: "http://apnakawardha.in/login/allclassified",
          data: obj,
          headers : {'Content-Type':undefined,} 
          });
      
           $ionicLoading.show({
            template: '<ion-spinner icon="android"></ion-spinner>'
          });
       
          request.success(function(data, status, headers, config) {
            console.log(data);
            $rootScope.classi=data;
             $ionicLoading.hide();
             $scope.$broadcast('scroll.refreshComplete');
           
          });


          request.error(function(data, status, headers, config) {
              $ionicLoading.hide();
              $scope.$broadcast('scroll.refreshComplete');
              $ionicPopup.alert({
                             title: 'Alert',
                             template: 'Poor internet connection'
                           });
            console.log("error",data);
          });


      $scope.update = function(user) {
     // $scope.master = angular.copy(user);
 
       /*var obj= [{
                            'username_register':user.nick,
                            'email_register'   :user.email,
                            'mobile_register'  :user.mobile,
                            'password_register':user.pass,
                            'cpassword_register':user.cpass
                            }]; */
        var obj;
       var request = $http({
          method: "post",
          url: "http://apnakawardha.in/login/allads",
          data: obj,
          headers : {'Content-Type':undefined,} 
          });
      
          /* $ionicLoading.show({
            template: '<ion-spinner icon="android"></ion-spinner>'
          });*/
       
          request.success(function(data, status, headers, config) {
            console.log(data);
            $rootScope.classi=data;
             $ionicLoading.hide();
             $scope.$broadcast('scroll.refreshComplete');
           
          });


          request.error(function(data, status, headers, config) {
            //  $ionicLoading.hide();
              $scope.$broadcast('scroll.refreshComplete');
              $ionicPopup.alert({
                             title: 'Alert',
                             template: 'Poor internet connection'
                           });
            console.log("error",data);
          });
      };

}]);
