import { useDispatch } from "react-redux"; // Aquí estás importando useDispatch
import { setModelValue } from "../../store/modalSlice";

const OpenAdd = () => {
  const dispatch = useDispatch(); // Aquí intentas usar useDispatch

  const onClick = () => {
    dispatch(setModelValue());
  };

  return <button onClick={onClick}>Open Add</button>;
};

export default OpenAdd;
