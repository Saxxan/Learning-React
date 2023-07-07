const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <article className={className} onClick={handleClick}>
      {children}
    </article>
  );
};

export default Square;
