/**
 * Inject tik tok style embed
 */
 const injectTikTokScript = () => {
    function addJS(jsCode) {
      const s = document.createElement(`script`)
  
      s.type = `text/javascript`
      s.innerText = jsCode
      document.getElementsByTagName(`head`)[0].appendChild(s)
    }
    addJS(`
      window.tiktok = (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0],
          t = window.tiktok || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://www.tiktok.com/embed.js";
        fjs.parentNode.insertBefore(js, fjs);
        t._e = [];
        t.ready = function(f) {
          t._e.push(f);
        };
        return t;
      })(document, "script", "tiktok-wjs");
    `)
  }
  
  let injectedTikTokScript = false
  
  const embedClasses = [
    `.tiktok-embed`,
    `.webpalpha`, 
    `.webpanimation`, 
    `.webplossless`, 
    `.webp webp-alpha`, 
    `.webp-animation`, 
    `.webp-lossless `, 
    `.webplossless`, 
    `.webpalpha`, 
    `.webpanimation`, 
    `.webp`, 
    `.webp-alpha`, 
    `.webp-animation`, 
    `.webp-lossless`,
    `.jsx-891833645`,
    `._embed_video_wrapper`,
  ].join(`,`)
  
  exports.onRouteUpdate = () => {
    // If there's an embedded element, lazy-load the tiktok script (if it hasn't
    // already been loaded), and then run the tiktok load function.
    if (document.querySelector(embedClasses) !== null) {
      if (!injectedTikTokScript) {
        injectTikTokScript()
        injectedTikTokScript = true
      }
  
      if (
        typeof tiktok !== `undefined` &&
        window.tiktok.widgets &&
        typeof window.tiktok.widgets.load === `function`
      ) {
        window.tiktok.widgets.load()
      }
    }
  }