/*!
 * Package: adblock-detection
 * Version: 1.0.29
 * Build Date: 2024-07-25T05:16:40.030Z
 */
var fakeAd=document.createElement("div"),x_width=(fakeAd.className="textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox",fakeAd.style.height="1px",document.body.appendChild(fakeAd),fakeAd.offsetHeight);window.utag_data=window.utag_data||{},window.utag_data.no_adblocker=!!x_width,document.body.removeChild(fakeAd);