import "./App.css";
import Items from "../features/items/Items";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [showBtn, setShowBtn] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  window.onscroll = () => handleScroll();

  return (
    <>
      <header>
        <h1>楽天ランキング</h1>
      </header>
      <section>
        <Items />
      </section>
      <footer>
        {/* <!-- Rakuten Web Services Attribution Snippet FROM HERE --> */}
        <a href="https://developers.rakuten.com/" target="_blank">
          Supported by Rakuten Developers
        </a>
        {/* <!-- Rakuten Web Services Attribution Snippet TO HERE --> */}
      </footer>
      <a href="#top" id="to-top" className={showBtn ? "show" : ""}>
        <AiOutlineVerticalAlignTop />
      </a>
    </>
  );
}

export default App;
