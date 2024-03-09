function ListGroup() {
  const items = ["Glen", "Suzy", "James", "Sam"];

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
