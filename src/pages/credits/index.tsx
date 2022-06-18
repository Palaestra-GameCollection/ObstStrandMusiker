import * as seedrandom from "seedrandom";

import { Button } from "../../components";
import React from "react";
import styles from "./CreditsPage.module.css";
import { useRouter } from "next/router";

export interface CreditsProps {
  history: any;
}

const Credits: React.FunctionComponent<CreditsProps> = (props) => {
  const router = useRouter();

  return (
    <main className={styles.credits}>
      <Button
        value="zurück"
        edge="top"
        className={styles["button--back"]}
        onClick={() => {
          router.push("/");
        }}
      />
      <ul className={styles.credits__list}>
        <li>
          <a href="https://reactjs.org/">react</a>
        </li>
        <li>
          <a href="https://redux.js.org/">redux</a>
        </li>
        <li>
          <a href="https://redux-saga.js.org/">redux saga</a>
        </li>
        <li>
          <a href="https://www.framer.com/motion/">framer motion</a>
        </li>
        <li>
          <a href="https://github.com/davidbau/seedrandom">seedrandom.js</a>
        </li>
        <li>
          <a href="https://tomeckardt.com">tom eckardt</a>
        </li>
      </ul>
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
