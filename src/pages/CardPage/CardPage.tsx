import React from "react";
import "./CardPage.css";
import * as seedrandom from "seedrandom";
import { Button, InfoBox, Card } from "../../components";
import { useParams, RouteComponentProps, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/reducer";
import { motion } from "framer-motion";

export interface CardPageProps extends RouteComponentProps<any> {}

const CardPage: React.FunctionComponent<CardPageProps> = (props) => {
  const { cardId }: { cardId: string } = useParams();
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
    <main className='cardpage'>
      <Button
        value='zurück'
        edge='top'
        className='button--back'
        onClick={() => {
          props.history.push("/");
        }}
      />

      <motion.div
        animate={{ y: ["100%", "7%"] }}
        transition={{
          delay: 0.5,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 1 },
        }}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // translateY: "100%",
        }}
      >
        <Card
          className='cardpage__card'
          values={currentCard.Words.map((index) => words[index].toLowerCase())}
        />
      </motion.div>
      <InfoBox
        className='cardpage__infobox'
        infoNumber={cardId.length <= 2 ? cardId : "nn"}
        infoText={words[currentCard.FinalRound].toLowerCase()}
      />
    </main>
  );
};

export default withRouter(CardPage);

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
