const List = ({ list }) => {
  return (
    <div className="list">
      <h2>Sample List</h2>

      {list.map((lists) => (
        <div className="listEntry" key={lists.key}>
          <ul>
            <li>{lists.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default List;
