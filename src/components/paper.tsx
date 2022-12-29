import React from 'react';
import Border from './border';
import { main, content, menuTitle, list, cardPaper, cardPrice, a4Paper, a4Price } from './paper.module.css'

type Props = {
    children: React.ReactElement | React.ReactElement[],
    color: string,
    format: 'a4'|'card',
}
const Paper = ({ children, color, format }: Props) => {

    return (
      <main className={main}>
          <article className={format === 'a4' ? a4Paper : cardPaper}>
              <Border color={color}>
                  <div className={content}>
                      <div className={menuTitle}>
                          <h1 style={{ color: color }}>Menu de la mer</h1>
                          <h2>Seulement le midi</h2>
                          <p className={format === 'a4' ? a4Price : cardPrice}>175,02€</p>
                      </div>
                      <div className={list}>
                          {children}
                      </div>
                  </div>
              </Border>
          </article>
      </main>
    );
}

Paper.defaultProps = {
    format: 'card',
}
export default Paper;
