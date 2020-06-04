import React, { useState, FormEvent } from 'react';

import {
  Header,
  InputSection,
  Form,
  Row,
  ResultsSection,
  Footer,
} from './style';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [initialValue, setInitialValue] = useState('');
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [months, setMonths] = useState('');

  const [sumOfInvestments, setSumOfInvestments] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [total, setTotal] = useState('');

  function handleNewSimulation(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // console.log('initialValue: ', initialValue);
    // console.log('monthlyInvestment : ', monthlyInvestment);
    // console.log('interestRate : ', interestRate);
    // console.log('months : ', months);

    const iv = Number(initialValue);
    const mi = Number(monthlyInvestment);
    const ir = Number(interestRate);
    const m = Number(months);

    const applied = mi * m + iv;
    setSumOfInvestments(String(applied));

    // calculate total
    function calculateProfit(iv: number, ir: number, m: number, mi: number) {
      const irp = ir / 100; // interest rate percentage

      let montant = iv;
      let c = montant;
      // mes 1
      montant = c * (1 + irp);

      for (let mon = 0; mon <= m - 1; mon++) {
        montant = c * (1 + irp);
        c = montant + mi;
        console.log('total acumulado: ', montant);
        console.log('mes: ', mon);
        console.log('c: ', c);
      }
      return c;
    }
    const totalProf = calculateProfit(iv, ir, m, mi);
    setTotal(String(totalProf));

    // calculate total interest
    const jutosTotais = totalProf - applied;

    setTotalInterest(String(jutosTotais));
  }

  return (
    <>
      <Header>
        <h1>Juros Compostos</h1>
      </Header>
      <InputSection>
        <Form onSubmit={(e) => handleNewSimulation(e)}>
          <Row>
            <div>
              <span>Valor Inicial:</span>
              <input
                type="text"
                value={initialValue}
                onChange={(e) => setInitialValue(e.target.value)}
              />
            </div>
            <div>
              <span>Aporte Mensal:</span>
              <input
                type="text"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
              />
            </div>
          </Row>
          <Row>
            <div>
              <span>
                Taxa de Juros
                <small> (em meses):</small>
              </span>
              <input
                type="text"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div>
              <span>
                Prazo
                <small> (em meses):</small>
              </span>
              <input
                type="text"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
              />
            </div>
          </Row>
          <button type="submit">Simular</button>
        </Form>
      </InputSection>

      <ResultsSection>
        <div>
          <p>Soma das aplicações:</p>
          <input disabled value={sumOfInvestments} />
        </div>
        <div>
          <p>Juros totais:</p>
          <input disabled value={totalInterest} />
        </div>
        <div>
          <p>Total acumulado:</p>
          <input disabled value={total} />
        </div>
      </ResultsSection>
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;
