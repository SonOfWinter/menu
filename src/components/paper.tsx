import React from 'react';
import _ from 'lodash';
import Border from './border';
import './paper.css'
import {
    ComplementEdge,
    MenuEdge,
} from '../data/types';

type Props = {
    children: React.ReactElement | React.ReactElement[],
    color: string,
    format: 'a4'|'card',
    menuList: MenuEdge[],
    complementList: ComplementEdge[]
}
const Paper = ({ children, color, format, menuList, complementList }: Props) => {

    const randomMenuTitle: MenuEdge = menuList[_.random(0, menuList.length - 1)];
    const randomComplementTitle: ComplementEdge = complementList[_.random(0, complementList.length - 1)];
    return (
      <main className="main">
          <article className={format === 'a4' ? 'a4Paper' : 'cardPaper'}>
              <Border color={color}>
                  <div className="content">
                      <div className="menuTitle">
                          <h1 style={{ color: color }}>{randomMenuTitle.node.data.Nom}</h1>
                          <h2>{randomComplementTitle.node.data.Nom}</h2>
                          <p className={format === 'a4' ? 'a4Price' : 'cardPrice'}>
                              {`${_.round(_.random(60.0, 250.0, true), 2)}€`}
                          </p>
                      </div>
                      <div className='list'>
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
