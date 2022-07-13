import {useSelector} from 'react-redux';

function ElementList() {
    // grab element list from redux store
    const elementList = useSelector(state => state.elementList);

  return (
    <ul>
      {elementList.map((element, i) => (
        <li key={i}>{element}</li>
      ))}
    </ul>
  );
}

export default ElementList;
