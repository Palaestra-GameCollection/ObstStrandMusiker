import React from "react";
import "./Instructions.css";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Button } from "../../components";

export interface InstructionsProps extends RouteComponentProps<any> {}

const Instructions: React.FunctionComponent<InstructionsProps> = (props) => {
  return (
    <main className="instructions">
      <Button
        value="zurück"
        edge="top"
        className="button--back"
        onClick={() => {
          props.history.push("/");
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
          Sobald der Buchstabe bestimmt ist habt ihr 1min (oder länger) Zeit zu
          jeder Kategorie ein Wort zu finden, das mit dem entsprechenden
          Buchstaben beginnt.
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
          zu der untersten Kategorie passen.
        </li>
        <li>
          Ansonsten findet es mit einem neuen Buchstaben genau wie Runde 1 &amp;
          2 statt.
        </li>
        <li>
          Auch hier bringen nur Antworten einen PUnkt die nur von einem Spieler
          genannt wurden.
        </li>
      </ul>
    </main>
  );
};

export default withRouter(Instructions);
