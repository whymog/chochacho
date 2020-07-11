import React, { useEffect } from "react";
import styles from "./App.module.scss";

async function getComic() {
  let response = await fetch("http://achewood.com/comic.php?date=12252016");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let myBlob = await response.blob();

    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement("img");
    image.src = objectURL;

    const comicContainer = document.querySelector(`.${styles.Comic}`);
    comicContainer.appendChild(image);
  }
}

function App() {
  // getComic().catch((e) => {
  //   console.log(
  //     "There has been a problem with your fetch operation: " + e.message
  //   );
  // });

  useEffect(() => {
    const iFrame = document.querySelector("iframe");
    iFrame.width = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;

    console.log(iFrame);
    console.log(iFrame.contentWindow.document.body.scrollWidth);
  });

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <h1 className={styles.Title}>Chochacho dot Cool</h1>
      </header>
      <div className={styles.Comic}>
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="300"
          height="200"
          src="http://achewood.com/comic.php?date=12252016"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
