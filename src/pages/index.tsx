import { Button, NumberInput } from "../components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootStateType } from "../redux/reducer";
import { fetchData } from "../redux/game/gameActions";
import { motion } from "framer-motion";
import styles from "./MenuPage.module.css";
import { useRouter } from "next/router";

export interface MenuPageProps {
  history: any;
}

const MenuPage: React.FunctionComponent<MenuPageProps> = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const cards = useSelector((state: RootStateType) => state.game.cards);
  const [cardValue, setCardValue] = useState(1);
  const [selectCard, setSelectCard] = useState(false);

  return (
    <main className={styles.menu}>
      <img
        className={styles.logo}
        src="/img/logo.svg"
        alt="Logo von Obst Strand Musiker"
      />
      <Button
        value={"zufällige\nbegriffe"}
        onClick={() => {
          router.push("/card/" + Math.random().toString().replace(".", ""));
        }}
      />
      <Button
        value={"zufällige\nkarte"}
        onClick={() => {
          router.push("/card/" + getRandomInt(0, cards.length - 1));
        }}
      />

      <motion.div
        className={styles.inputgroup}
        key="content"
        initial="collapsed"
        animate={selectCard ? "open" : "collapsed"}
        exit="collapsed"
        variants={{
          open: { opacity: 1, height: "100px" },
          collapsed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        <NumberInput
          min={1}
          max={12}
          step={1}
          value={cardValue}
          onChange={(value) => {
            console.log(value);
            setCardValue(value);
          }}
          onEnter={() => {
            router.push("/card/" + cardValue.toString());
          }}
        />
        <Button
          value="auswählen"
          edge="top"
          className={styles["button--cardselect"]}
          onClick={() => {
            router.push("/card/" + cardValue.toString());
          }}
        />
      </motion.div>
      <motion.div
        className={styles.nooverflow}
        key="content"
        initial="collapsed"
        animate={selectCard ? "collapsed" : "open"}
        exit="collapsed"
        variants={{
          open: { opacity: 1, height: "100px" },
          collapsed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        <Button
          value={"karte\nwählen"}
          onClick={() => {
            setSelectCard(!selectCard);
          }}
        />
      </motion.div>

      <Button
        value={"anleitung"}
        onClick={() => {
          router.push("/instructions/");
        }}
      />

      <Button
        value="credits"
        edge="bottom"
        className={styles["button--credits"]}
        onClick={() => {
          router.push("/credits");
        }}
      />
    </main>
  );
};

export default MenuPage;

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
