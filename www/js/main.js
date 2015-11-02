document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
        Ads.initAds();
        Ads.android.banner = '';
        Ads.android.interstitial = '';
        Ads.ios.banner = '';
        Ads.ios.interstitial = '';
        Ads.startBannerAds();
        Ads.showBannerAds();
      }, false);

  $(function(){
    
  });
