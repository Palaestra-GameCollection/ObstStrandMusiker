import { RouteComponentProps, withRouter } from "react-router-dom";

import { Button } from "../../components";
import React from "react";
import styles from "./Instructions.module.css";
import { useRouter } from "next/router";

export interface InstructionsProps extends RouteComponentProps<any> {}

const Instructions: React.FunctionComponent<InstructionsProps> = (props) => {
  const router = useRouter();
  return (
    <main className={styles.instructions}>
      <Button
        value="zurück"
        edge="top"
        className={styles["button--back"]}
        onClick={() => {
          router.push("/");
        }}
      />

      <h1>Anleitung</h1>

      <h3>Ziel des Spiels</h3>
      <p>Der Spieler der nach drei Runden die meisten Punkte hat gewinnt.</p>

      <h3>Ablauf</h3>
      <p>Das Spiel ist in drei Runden unterteilt.</p>

      <h3>Runde 1</h3>
      <ul>
        <li>
          Wählt eine Karte mit Kategorisieren aus (entweder zufällig oder wählt
          eine bestimmte Karte)
        </li>
        <li>
          Bestimmt einen Anfangsbuchstaben, durch würfeln oder durch stummes
          Alphabet aufsagen und eine andere Person sagt Stopp
        </li>
        <li>
          Sobald der Buchstabe bestimmt ist, habt ihr 2&nbsp;min (oder länger)
          Zeit zu jeder Kategorie (01 - 12) ein Wort zu finden, das mit dem
          entsprechenden Buchstaben beginnt.
        </li>
        <li>
          Ist die Zeit um, werden alle Worte verglichen. haben zwei Personen das
          gleiche Wort erhält man keinen Punkt. Ansonsten bringt jedes richtige
          Wort einen Punkt.
        </li>
      </ul>

      <h3>Runde 2</h3>
      <ul>
        <li>
          Wird genauso gespielt wie Runde 1 (auch mit der gleichen Karte), es
          muss nur ein neuer Buchstabe bestimmt werden.
        </li>
      </ul>

      <h3>Runde 3</h3>
      <ul>
        <li>
          In dieser Runde müssen möglichst viele Begriffe gefunden werden, die
          zu der untersten, schwarz hinterlegten Kategorie passen.
        </li>
        <li>
          Ebenso wie in Runde 1 und 2 findet Runde 3 mit einem neuen Buchstaben
          statt, wobei es hier kein Problem darstellt, wenn dieser buchstabe
          schon in einer der Vorrunden ausgewählt wurde.
        </li>
        <li>
          Auch hier bringen nur Antworten einen PUnkt die nur von einem Spieler
          genannt wurden.
        </li>
      </ul>
    </main>
  );
};

export default Instructions;
