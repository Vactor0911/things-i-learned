import PropTypes from "prop-types";

const List = (props) => {
  const aryFruit = props.items;
  const category = props.category;

  aryFruit.sort((a, b) => a.name.localeCompare(b.name)); // 이름을 기준으로 정렬 | a와 b의 위치를 바꾸면 내림차순으로 정렬
  //sort 메소드는 a와 b를 비교하여 0보다 작으면 a를 b보다 앞으로, 0보다 크면 a를 b보다 뒤로, 같으면 순서를 바꾸지 않는다.

  //const lowCalFruits = aryFruit.filter((fruit) => fruit.calories < 90); // 90칼로리 미만 과일만 필터링

  const listItems = aryFruit.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;<b>{fruit.calories}</b>
    </li>
  ));

  return (
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
  category: PropTypes.string,
};

List.defaultProps = {
  items: [],
  category: "Category",
};

export default List;
