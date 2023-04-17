export default ({ app }) => {
    /*
     ** Only run on client-side and in production mode
     */
    if (process.env.NODE_ENV !== "production") return;
  
    /*
     ** Include Google Analytics Script
     */
    (function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", process.env.GA_ID);
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`;
      document.head.appendChild(script);
    })();
  
    /*
     ** Add router hook to track the page view
     */
    app.router.afterEach((to, from) => {
      window.gtag("config", process.env.GA_ID, {
        page_path: to.fullPath,
        page_title: to.name,
        page_location: window.location.href,
        send_page_view: true,
      });
    });
  };