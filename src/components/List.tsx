import { FC } from 'react';
import './List.css';

type Props = {
  items: string[],
};

const List: FC<Props> = ({ items }) => (
  <div className="list">
    <div className="list-header alter">{`Dictionary: ${items.length}`}</div>
    {
      items.map((item, i) =>
        <div className={i % 2 ? 'list-item alter' : 'list-item'} key={item}>
          {item}
        </div>,
      )
    }
  </div>
);

export default List;
