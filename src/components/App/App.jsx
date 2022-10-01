import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import css from "components/App/App.module.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addVote = event => {
    switch (event.target.name) {
      case 'good':
        setGood((prevState) => prevState + 1);
        break;
      case 'neutral':
        setNeutral((prevState) => prevState + 1);
        break;
      case 'bad':
        setBad((prevState) => prevState + 1);
        break;
    
      default:
        break;
    }
  }

  const countTotalFeedback = () => { 
    return good + bad + neutral;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = Math.round(good /(countTotalFeedback())*100);
    if(total > 0) {
      return total 
    } else return 0
  }

  const options = ["good", "neutral", "bad"];
  const mems = ['🤩', '🤔', '😪'];

  return (
    <div className={css.feedback__container}>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={options} 
            mems={mems}
            onLeaveFeedback={addVote}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            countTotal={countTotalFeedback()}
            countPercentage={countPositiveFeedbackPercentage()}
          /> : <Notification message="There is no feedback" />}
        </Section>       
      </div>
  )
  
};



// class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

    
//   countTotalFeedback = () => { 
//     const {good,neutral,bad} = this.state;
//     return good + bad + neutral;
//   }

//   countPositiveFeedbackPercentage = () => {
//     const total = Math.round(this.state.good /(this.countTotalFeedback())*100);
//     if(total > 0) {
//       return total 
//     } else return 0
//   }

//   addVote = event => {
//     const target = event.currentTarget.name;
//     this.setState(prevState => {
//       return { [target]: prevState[target] + 1 }
//     });
//   };
    
//   render() { 
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     const mems = ['🤩', '🤔', '😪'];
//     return (
//       <div className={css.feedback__container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions 
//             options={options} 
//             mems={mems}
//             onLeaveFeedback={this.addVote}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() ? <Statistics 
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             countTotal={this.countTotalFeedback()}
//             countPercentage={this.countPositiveFeedbackPercentage()}
//           /> : <Notification message="There is no feedback" />}
//         </Section>
        
//       </div>
//     )
//   }
// };

// export default OldApp;