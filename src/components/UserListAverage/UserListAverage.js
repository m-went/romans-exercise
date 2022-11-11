import './UserListAverage.scss';

function UserListAverage(props) {
  const average = parseFloat(props.average);
  let bgColor;

  if (average <= 2.0) {
    bgColor = 'badAvr';
  } else if (average <= 4.0) {
    bgColor = 'mediumAvr';
  } else if (average <= 5.0) {
    bgColor = 'goodAvr';
  } else {
    bgColor = 'noAvr';
  }

  return <div className={`UserListAverage ${bgColor}`}>{props.average}</div>;
}

export default UserListAverage;
