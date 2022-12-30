import React from 'react';
import { titleText, subtitleText } from './menuSection.module.css'
import {
  DataType,
  TypePlat,
} from '../data/types';
import { generate } from '../services/entryGenerator';

type Props = {
  title: string,
  type: TypePlat,
  color: string,
  data: DataType
}
const MenuSection = ({color, type, title, data}: Props) => {

  const [main, second] = generate(data, type);
  return (
    <section>
      <h3 style={{ color: color }}>{title}</h3>
      <h4 className={titleText}>{main}</h4>
      <p className={subtitleText}>{second}</p>
    </section>
  );
}


export default MenuSection;
