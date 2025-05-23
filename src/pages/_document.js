import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var $zoho = $zoho || {};
              $zoho.salesiq = $zoho.salesiq || {
                widgetcode: "siq205cce79fa394c1908e1dea8ae2fc07c413ed2de875262a553b4370fd1a9b20e",
                values: {},
                theme: {
                  "color": "#f97316",  // Set Orange color
                  "position": "right", // You can change this if needed
                },
                ready: function () {
                  console.log("Zoho SalesIQ Loaded with Orange Theme");
                },
              };
              (function() {
                var d = document;
                var s = d.createElement("script");
                s.type = "text/javascript";
                s.id = "zsiqscript";
                s.defer = true;
                s.src = "https://salesiq.zoho.com/widget";
                var t = d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s, t);
              })();
            `,
          }}
        ></script>
      </body>
    </Html>
  );
}






/*
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript className="bg-orange"/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var $zoho = $zoho || {};
              $zoho.salesiq = $zoho.salesiq || {
                widgetcode: "siq205cce79fa394c1908e1dea8ae2fc07c413ed2de875262a553b4370fd1a9b20e", 
                values: {},
                ready: function () {},
              };
              (function() {
                var d = document;
                var s = d.createElement("script");
                s.type = "text/javascript";
                s.id = "zsiqscript";
                s.defer = true;
                s.src = "https://salesiq.zoho.com/widget";
                var t = d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s, t);
              })();
            `,
          }}
        ></script>
      </body>
    </Html>
  );
}
*/