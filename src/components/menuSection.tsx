import React from 'react';
import { titleText, subtitleText } from './menuSection.module.css'
const MenuSection = ({color, type, title, subtitle}) => {

  return (
    <section>
      <h3 style={{ color: color }}>{type}</h3>
      <h4 className={titleText}>{title}</h4>
      <p className={subtitleText}>{subtitle}</p>
    </section>
  );
}


export default MenuSection;
