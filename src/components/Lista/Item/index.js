import '../../Lista/style.scss';

//  FUNÇÃO + DESESTRUTURAÇÃO
//export default function Item({ tarefa, tempo } : { tarefa: string, tempo: string}) {

// FUNÇÃO
export default function Item(props) { 
  // DESESTRUTURAÇÃO
  const { tarefa, tempo } = props;
  return (
    <li className="item">
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
} 