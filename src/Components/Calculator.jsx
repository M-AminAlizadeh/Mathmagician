import Button from './Button';
import Result from './Result';

const Calculator = () => {
  const btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-',
    '1', '2', '3', '+', '0', '.', '='];
  return (
    <section className='calculator'>
      <Result value="0" />
      {btns.map((btn) => <Button key={btn} value={btn} />)}

    </section>
  );
};

export default Calculator;
