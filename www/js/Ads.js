/*admob.createBannerView({publisherId: "ca-app-pub-XXXXXXXXXXXXXXXX/BBBBBBBBBB"});*/
Ads = {
	ios : {
        banner: '',
        interstitial: ''
     },
     android : {
        banner: '',
        interstitial: ''
    },
    options: {
      publisherId: '',
      interstitialAdId: '',
      bannerAtTop: false, // set to true, to put banner at top
      overlap: false, // set to true, to allow banner overlap webview
      offsetStatusBar: true, // set to true to avoid ios7 status bar overlap
      isTesting: true, // receiving test ads (do not test with real ads as your account will be banned)
      autoShowBanner: true, // auto show banners ad when loaded
      autoShowInterstitial: true // auto show interstitials ad when loaded
    },
	startBannerAds: function () {
    	admob.createBannerView(function (){}, function (e) {
      		alert(JSON.stringify(e));
    	});
  	},
	  removeBannerAds: function () {
	    admob.destroyBannerView();
	  },
	  showBannerAds: function () {
	    admob.showBannerAd(true, function (){}, function (e) {
	      alert(JSON.stringify(e));
	    });
	  },
	  hideBannerAds: function () {
	    admob.showBannerAd(false);
	  },
	  requestInterstitial: function (autoshow) {
	    //app.autoShowInterstitial = autoshow;
	    admob.requestInterstitialAd(function (){}, function (e) {
	      alert(JSON.stringify(e));
	    });
	  },
	  showInterstitial: function() {
	    admob.showInterstitialAd(function (){}, function (e) {
	      Ads.requestInterstitial();
	    });
	  },
	  onAdLoaded: function (e) {
	    if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
	      if (app.autoShowInterstitial) {
	        admob.showInterstitialAd();
	      } else {
	        //alert("Interstitial is available. Click on 'Show Interstitial' to show it.");
	      }
	    }
	  },
    bindAdEvents: function () {
    //document.addEventListener("orientationchange", this.onOrientationChange, false);
    document.addEventListener(admob.events.onAdLoaded, this.onAdLoaded, false);
    document.addEventListener(admob.events.onAdFailedToLoad, function (e) { console.log(e)}, false);
    document.addEventListener(admob.events.onAdOpened, function (e) {}, false);
    document.addEventListener(admob.events.onAdClosed, function (e) {}, false);
    document.addEventListener(admob.events.onAdLeftApplication, function (e) {}, false);
    document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {}, false);
  },
  // Must be called when deviceready is fired so AdMobAds plugin will be ready
  initAds: function () {
    var isAndroid = (/(android)/i.test(navigator.userAgent));
    var adPublisherIds = {
      ios : this.ios,
      android : this.android
    };
    if (isAndroid) {
      Ads.options.publisherId = adPublisherIds.android.banner;
      Ads.options.interstitialAdId = adPublisherIds.android.interstitial;
    } else {
      Ads.options.publisherId = adPublisherIds.ios.banner;
      Ads.options.interstitialAdId = adPublisherIds.ios.interstitial;
    }
    if (Ads.options.publisherId.length == 0  || Ads.options.interstitialAdId.length == 0){
    	//alert("Please set the adPublisherIds")
    	return false;
    }
    admob.setOptions(Ads.options);
    if (window.admob) {
	    //console.log('Binding ad events...');
	    Ads.bindAdEvents();
	    //console.log('Initializing ads...');
	    Ads.initAds();
	} else {
	    //alert('AdMobAds plugin not ready');
	}
  }
}
