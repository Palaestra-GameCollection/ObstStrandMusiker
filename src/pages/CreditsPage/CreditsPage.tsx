import React from "react";
import "./CreditsPage.css";
import * as seedrandom from "seedrandom";
import { Button } from "../../components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/reducer";

export interface CreditsProps {}

const Credits: React.FunctionComponent<CreditsProps> = (props) => {
  const { cardId }: { cardId: string } = useParams();
  const history = useHistory();
  const words = useSelector((state: RootStateType) => state.game.words);
  const cards = useSelector((state: RootStateType) => state.game.cards);
  let currentCard = cards.filter((card) => card.Id === cardId)[0];

  if (words.length === 0 || cards.length === 0) {
    return <div>loading....</div>;
  }

  if (currentCard == null) {
    let shuffledWordIndices = shuffle(Array.from(words.keys()), cardId);
    currentCard = {
      Id: "nn",
      Words: shuffledWordIndices.slice(0, 12),
      FinalRound: shuffledWordIndices[13],
    };
  }

  return (
    <main className='credits'>
      <Button
        value='zurück'
        edge='top'
        className='button--back'
        onClick={() => {
          history.push("/");
        }}
      />
      <div>not implemented yet</div>
    </main>
  );
};

export default Credits;

function shuffle(array: Array<any>, seed?: string) {
  if (seed == null) {
    seed = Math.random().toString().replace(".", "");
  }
  const rng = seedrandom.alea(seed);
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(rng() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
