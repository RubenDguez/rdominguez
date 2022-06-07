import { ReactNode, createContext, useState, useEffect } from "react";

export const colors = [
  "tomato",
  "magenta",
  "blue",
  "teal",
  "green",
  "red",
  "darkorange",
  "hotpink",
  "deeppink",
  "crimson",
  "fuchsia",
  "steelblue",
  "salmon",
];

export const ColorContext = createContext<String>("");

export interface IColors {
  children: ReactNode;
}

export const Colors = ({ children }: IColors) => {
  const [colorIndex, setColorIndex] = useState<number>(0);

  useEffect(() => {
    const index = Math.floor(Math.random() * colors.length);
    // const index = 12;
    setColorIndex(index);
  }, []);

  //  * For testing only

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       if (colorIndex === colors.length - 1) setColorIndex(0);
  //       else setColorIndex((prev) => prev + 1);
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   });

  return (
    <ColorContext.Provider value={colors[colorIndex]}>
      {children}
    </ColorContext.Provider>
  );
};
