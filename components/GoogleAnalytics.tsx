import Script from "next/script";

const GA_MEASUREMENT_ID = "G-9CEF3BK5R2";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          document.addEventListener('click', function (e) {
            var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
            if (!a) return;
            var href = a.getAttribute('href') || '';
            var method = href.indexOf('mailto:') === 0 ? 'email'
              : href.indexOf('tel:') === 0 ? 'phone'
              : /wa\\.me|whatsapp\\.com/.test(href) ? 'whatsapp' : '';
            if (method) gtag('event', 'contact_click', { contact_method: method, page_path: location.pathname });
          });
        `}
      </Script>
    </>
  );
}
