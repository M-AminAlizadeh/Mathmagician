import { useState } from 'react';
import Button from './Button';
import Result from './Result';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-',
    '1', '2', '3', '+', '0', '.', '='];
  const [resultValue, setRresultValue] = useState('');

  const handleClick = (e) => {
    setRresultValue(calculate(resultValue, e.target.innerText));
  };

  const showCalculator = () => {
    if (!resultValue.total && resultValue.next) {
      return resultValue.next;
    }
    if (resultValue.total && !resultValue.next && resultValue.operation) {
      return `${resultValue.total} ${resultValue.operation}`;
    }
    if (resultValue.total && resultValue.next && resultValue.operation) {
      return `${resultValue.total} ${resultValue.operation} ${resultValue.next}`;
    }
    if (resultValue.total && !resultValue.next && !resultValue.operation) {
      return resultValue.total;
    }
    return 0;
  };

  return (
    <section className="calculator">
      <Result value={showCalculator()} />
      {btns.map((btn) => {
        if (['÷', '-', '=', '+', 'x'].includes(btn)) {
          return <Button key={btn} value={btn} className="btn border bg-2" onClick={(e) => handleClick(e)} />;
        }
        if (btn === '0') {
          return <Button key={btn} value={btn} className="btn border zero-btn bg-1" onClick={(e) => handleClick(e)} />;
        }
        return <Button key={btn} value={btn} className="btn border bg-1" onClick={(e) => handleClick(e)} />;
      })}
    </section>
  );
};

export default Calculator;
