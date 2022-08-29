import { useState } from "react";
import { characters as tabs } from "./array_utils";
import { motion, AnimatePresence } from "framer-motion";

const Character = (props) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div id="characters" className="character-section">
      <h1>CHARACTERS</h1>
      <div className="window">
        <nav>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? (
                <div className="info-container">
                  {
                    <img
                      className="character-card"
                      alt={selectedTab.label}
                      src={selectedTab.img}
                    ></img>
                  }{" "}
                  <h3>{selectedTab.info}</h3>
                </div>
              ) : (
                <h3>Info not found</h3>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Character;
