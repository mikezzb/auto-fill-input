import './List.css';

type IListProps = {
  items: string[],
};

const List = ({ items }: IListProps) => (
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
