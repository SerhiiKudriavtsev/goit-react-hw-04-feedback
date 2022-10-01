import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({mems, options, onLeaveFeedback }) => {

  return (
    <ul className={css.feedback__list}>
      {options.map((option, index) => (
        <li className={css.feedback__item} key={index}>
        <button
          type="button"
          className={`${css.feedback__btn} ${css['feedback__' + option]}`}
          name={option}
          onClick={onLeaveFeedback}
          >
          {option} {mems[index]} 
        </button>
      </li>  
      ))}
    </ul>
  )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  mems: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FeedbackOptions;