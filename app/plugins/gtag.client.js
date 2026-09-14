export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-9W65FG66T1";
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-9W65FG66T1", {
      anonymize_ip: true,
    });
  }
});
