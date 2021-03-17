import React from 'react';
import './List.css';

const List = ({ items }) => (
  <div className="list">
    <div className="list-header alter">{`当前词库：${items.length}`}</div>
    {
      items.map((item, i) =>
        <div className={i % 2 ? 'list-item alter' : 'list-item'} key={item}>
          {item}
        </div>
      )
    }
  </div>
);

export default List;
