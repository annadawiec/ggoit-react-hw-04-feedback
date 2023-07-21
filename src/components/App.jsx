import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import Section from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

//export class App extends Component {
// state = {
// good: 0,
//neutral: 0,
//bad: 0,
//};

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateCountFeedback = event => {
    //  this.setState(prevState => ({
    // [value]: prevState[value] + 1,
    // }));
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    //Object.values(this.state).reduce((total, value) => total + value, 0);
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // return this.countTotalFeedback()
    // ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
    //  : '0';
    //};

    const total = countTotalFeedback();

    //render() {
    //const { good, neutral, bad } = this.state;

    return total ? ((good / total) * 100).toFixed(0) : '0';
  };
  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please, leave feedback">
        <Feedback options={options} onFeedback={updateCountFeedback} />
      </Section>

      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
