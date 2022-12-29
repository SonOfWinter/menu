import React from 'react';
import {outside, inside} from './border.module.css'
type Props = {
  color: string,
  children: React.ReactElement | React.ReactElement[]
}
const Border = ({ color, children }: Props) => {

  return (
    <div className={outside} style={{ borderColor: color }}>
      <div className={inside} style={{ borderColor: color }}>
        { children }
      </div>
    </div>
  );
}

export default Border;
