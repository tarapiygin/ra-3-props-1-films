import './Stars.css';
import PropTypes from 'prop-types';
import Star from '../Star/Star';

export default function Stars(props) {
  if (Number.isNaN(props.count) || props.count < 1 || props.count > 5) {
    return null;
  }
  const renderStars = (count) => {
    let content = [];
    for (let i = 0; i < count; i += 1) {
      content.push(<Star />);
    }
    return content;
  }
  return (
    <ul class="card-body-stars u-clearfix">
      {renderStars(props.count)}
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}