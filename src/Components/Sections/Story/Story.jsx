import React from "react";

const Story = ({ click }) => {
  const button_click1 = (event) => {
    click("ehr5-hVjEqQ");
  };
  const button_click2 = (event) => {
    click("4_8CHy3suRA");
  };
  return (
    <div id="story" className="story-section">
      <h1>STORY</h1>
      <div className="story-blocks">
        <div className="story-content">
          <h2>Season 1</h2>
          <p>
            Based on a light novel series written by Shirakome Ryou and
            illustrated by Takayaki.When a classroom of students is transported
            to another world to act as its saviors, Nagumo Hajime finds himself
            the weakest link. As his friends and classmates are granted strong
            classes and impressive abilities due to their existing skills, he is
            given the weak title of Synergist. When a dungeon quest leaves him
            separated from his group, Hajime must discover his own talents or be
            left to rot in this world forever.
          </p>
          <button onClick={button_click1}>Watch Season1 Trailer</button>
        </div>
        <div className="story-content">
          <h2>Season 2</h2>
          <p>
            Transported to another world and left behind by his former friends,
            Hajime had to make his rise from literal rock bottom. It was in the
            labyrinth where he strengthened his weak magic and found several
            beautiful allies. Now after saving his classmates, he ventures for
            Erisen to escort Myuu and her mother. He'll fight and defeat anyone
            he has to in order to find a way home—including a god!
          </p>
          <button onClick={button_click2}>Watch Season2 Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default Story;
