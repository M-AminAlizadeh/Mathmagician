import Button from './Button';
import Result from './Result';

const Calculator = () => {
  const btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-',
    '1', '2', '3', '+', '0', '.', '='];
  return (
    <section className="calculator">
      <Result value="0" />
      {btns.map((btn) => {
        if (['÷', '-', '=', '+', 'X'].includes(btn)) {
          return <Button key={btn} value={btn} className="btn border bg-2" />;
        }
        if (btn === '0') {
          return <Button key={btn} value={btn} className="btn border zero-btn bg-1" />;
        }
        return <Button key={btn} value={btn} className="btn border bg-1" />;
      })}
    </section>
  );
};

export default Calculator;
