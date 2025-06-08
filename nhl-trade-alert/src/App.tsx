import React, { useEffect } from "react";
import "./style.css";

function App() {
  useEffect(() => {
    console.log("Loading Twitter widget script...");
    // Dynamically load Twitter widget script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    script.onload = () => {
      console.log(
        "Twitter widgets.js loaded. Attempting to render timeline..."
      );
      setTimeout(() => {
        const iframe = document.querySelector("iframe.twitter-timeline");
        if (iframe) {
          console.log("Timeline iframe rendered!");
        } else {
          console.log("Timeline iframe NOT rendered.");
        }
      }, 2000); // wait a bit for rendering
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <header>
        <h1>NHL Trade Alert</h1>
        <p>Team filters coming soon…</p>
      </header>
      <nav id="team-filter"></nav>
      <main>
        <div id="twitter-feed">
          <a
            className="twitter-timeline"
            href="https://x.com/NHLTradeAlert"
            data-width="400"
            data-height="600"
            data-chrome="nofooter noborders"
            data-tweet-limit="5"
          >
            Tweets by @NHLTradeAlert
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
