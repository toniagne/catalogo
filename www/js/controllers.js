angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicScrollDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

   $scope.$on("$ionicView.afterLeave", function(event, data){
   // handle event
   $ionicScrollDelegate.scrollTop();
});



  // Form data for the login modal
  $scope.loginData = {};
  


//profile settings data

  $scope.user = {
    first_name : 'Nadia',
    last_name : 'Badiuk',
    address_line1: '16-28 Tabernacle Street'
  }



  // Create the search modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modal/search-product.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.searchModal = modal;
  });
  $scope.closeSearchModal = function() {
    $scope.searchModal.hide();
  };

  $scope.openSearchModal = function() {
    $scope.searchModal.show();
  };

  // Create the wishlist modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modal/wishlist.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.wishlistModal = modal;
  });
  $scope.closeWishlistModal = function() {
    $scope.wishlistModal.hide();
  };

  $scope.openWishlistModal = function() {
    $scope.wishlistModal.show();
  };

  // Create the wishlist modal that we will use later

$scope.editWishlist = false;

  $ionicModal.fromTemplateUrl('templates/modal/cart.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.cartModal = modal;
  });
  $scope.closeCartModal = function() {
    $scope.cartModal.hide();
  };

  $scope.openCartModal = function() {
    $scope.cartModal.show();
  };

  // Create the profile modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modal/profile.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.profileModal = modal;
  });
  $scope.closeProfileModal = function() {
    $scope.profileModal.hide();
  };

  $scope.openProfileModal = function() {
    $scope.profileModal.show();
  };

  // Create the settings modal
  $ionicModal.fromTemplateUrl('templates/modal/settings.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.settingsModal = modal;
  });
  $scope.closeSettingsModal = function() {
    $scope.settingsModal.hide();
  };

  $scope.openSettingsModal = function() {
    $scope.settingsModal.show();
  };

  // Create the edit profile modal
  $ionicModal.fromTemplateUrl('templates/modal/edit-profile.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.editProfileModal = modal;
  });
  $scope.closeEditProfileModal = function() {
    $scope.editProfileModal.hide();
  };

  $scope.openEditProfileModal = function() {
    $scope.editProfileModal.show();
  };

  // Create the change password modal
  $ionicModal.fromTemplateUrl('templates/modal/change-password.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.changePasswordModal = modal;
  });
  $scope.closeChangePasswordModal = function() {
    $scope.changePasswordModal.hide();
  };

  $scope.openChangePasswordModal = function() {
    $scope.changePasswordModal.show();
  };



  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeSearchModal();
    }, 1000);
  };


//shopping cart
$scope.cartItemsTotal = 2;



})

.controller('LoginCtrl', function($scope, $stateParams) {


})
.controller('EditorialCtrl', function($scope, $state, $ionicScrollDelegate) {
$scope.order = 'name'; //for product list filtering
$scope.layout = 'grid'; // for layout controll
$scope.show = 'orders'; //to show and hide orders and offer in profile


$scope.scrollToTop = function(){
  $ionicScrollDelegate.scrollTop();
}



$scope.goToProduct = function(id){ //close all open modal and go to product page
  $scope.cartModal.isShown() ? $scope.cartModal.hide() : null;
  $scope.searchModal.isShown() ? $scope.searchModal.hide() : null;
  $scope.profileModal.isShown() ? $scope.profileModal.hide() : null;
 $scope.wishlistModal.isShown() ? $scope.wishlistModal.hide() : null;
  $state.go('app.single', {productId: id});
}

  $scope.productList = [
    { name: '55/44 Cruiser Jacket', category: 'Coats & Jackets', price: 145, imgUrl: 'img/products/image.png'  },
    { name: 'Thor Light Poplin', category: 'Bags', price: 90, imgUrl: 'img/products/image2.png'  },
    { name: 'Linen Jacket', category: 'Coats & Jackets', price: 45, imgUrl: 'img/products/image5.png'  },
    { name: 'Thor Light Poplin', category: 'Knitwear', price: 155, imgUrl: 'img/products/image6.png'  },
    { name: 'Linen Jacket', category: 'Accessories', price: 45, imgUrl: 'img/products/image1.png'  },
    { name: 'Thor Light Poplin', category: 'Skirts', price: 155, imgUrl: 'img/products/image3.png'  }
  ];

 $scope.promotionalProductList = [
    { name: 'Thor Light Poplin', category: 'Bags', price: '90', imgUrl: 'img/products/cat-image-2.png'  },
    { name: 'Thor Light Poplin', category: 'Skirts', price: '265', imgUrl: 'img/products/cat-image-3.png'  }
  ];

  $scope.offerImages = [{
    url: 'img/Offer3.png'
  }, {
    url: 'img/Offer1.png'
  },{
    url: 'img/Offer2.png'
  }];

})

.controller('SingleProductCtrl', function($scope, $stateParams, $timeout) {

  $scope.product = {
    name: "Skagway Slip-On Black",
    category: 'Knitwear',
    price: '450.00',
    description: `visvim® releases a new Skagway iteration as a part of this season's footwear options. Crafted in all suede, the slip-ons
					comes accented with native inspired motifs at the collar and rear heel`,
    images: [{
      url: 'img/products/image2.png'
    },{
      url: 'img/products/image3.png'
    },{
      url: 'img/products/image4.png'
    },{
      url: 'img/products/image5.png'
    }]
  };


$scope.addToCart = function(){
    var cart = angular.element(document.getElementsByClassName("shopping-cart"));
    cart.css({'opacity': '1','animation': 'bounceIn 0.5s linear'});

    $timeout(function(){
      cart.css({'animation': ''});
    }, 500)


}


})

.controller('PaymentCtrl', function($scope, $stateParams, $ionicHistory,$state) {

//go to main page clearing history
$scope.goToMain = function(){
   $ionicHistory.nextViewOptions({
    disableBack: true
  });

  $state.go('app.editorial');
}

});
