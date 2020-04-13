import React from 'react';

export interface IColorContext {
  color: number;
  setColor: React.Dispatch<React.SetStateAction<number>>;
}

const ColorContext = React.createContext<IColorContext>(null);
export default ColorContext;