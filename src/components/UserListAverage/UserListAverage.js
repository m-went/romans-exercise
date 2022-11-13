import './UserListAverage.scss';

function UserListAverage({ average, isInModal = false }) {
  const averageNum = parseFloat(average);
  let bgColor;

  if (averageNum <= 2.0) {
    bgColor = 'badAvr';
  } else if (averageNum <= 4.0) {
    bgColor = 'mediumAvr';
  } else if (averageNum <= 5.0) {
    bgColor = 'goodAvr';
  } else {
    bgColor = 'noAvr';
  }

  return <div className={isInModal ? `modalAverage ${bgColor}` : `UserListAverage ${bgColor}`}>{average}</div>;
}

export default UserListAverage;
