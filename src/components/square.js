export default function Square(props) {
  // Concept 2: State of the component
  // const [value, setValue] = useState(props.value);

  return (
    <button onClick={props.onClick} className="square">
      {props.value}
    </button>
  );
}
