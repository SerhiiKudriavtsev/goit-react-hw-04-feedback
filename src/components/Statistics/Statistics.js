import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, countTotal, countPercentage }) => {
  return (
    <ul className={css.statistics__list}>
      <li className={css.statistics__item}>
        <p className={css.statistics__text}> Good: {good} 🤩</p>
      </li>
      <li className={css.statistics__item}>
        <p className={css.statistics__text}> Neutral: {neutral} 🤔</p>
      </li>
      <li className={css.statistics__item}>
        <p className={css.statistics__text}> Bad: {bad} 😥</p>
      </li>
      <li className={css.statistics__item}>
        <h3 className={css.statistics__title}>Total: {countTotal}</h3>
      </li>
      <li className={css.statistics__item}>
        <h3 className={css.statistics__title}>
          Positive feedback: {countPercentage}%
        </h3>
      </li>
    </ul>
  );
}
  
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotal: PropTypes.number.isRequired,
  countPercentage: PropTypes.number.isRequired,
};

export default Statistics;