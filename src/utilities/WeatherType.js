/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  faCloud,
  faCloudBolt,
  faCloudRain,
  faSmog,
  faUmbrella,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import {faSnowflake, faSun} from '@fortawesome/free-regular-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const weatherType = {
  Thunderstorm: {
    icon: <FontAwesomeIcon icon={faCloudBolt} size={100} color="white" />,
    message: 'It could get noisy!',
    backgroundColor: '#000000',
  },
  Drizzle: {
    icon: <FontAwesomeIcon icon={faCloudRain} size={100} color="white" />,
    message: 'It might rain a little',
    backgroundColor: '#36454f',
  },
  Rain: {
    icon: <FontAwesomeIcon icon={faUmbrella} size={100} color="white" />,
    message: 'You will need an umbrella',
    backgroundColor: '#71daff',
  },
  Snow: {
    icon: <FontAwesomeIcon icon={faSnowflake} size={100} color="white" />,
    message: 'Lets build a snowman!',
    backgroundColor: '#7f6065',
  },
  Clear: {
    icon: <FontAwesomeIcon icon={faSun} size={100} color="white" />,
    message: 'It is perfect t-shirt weather',
    backgroundColor: '#e47200',
  },
  Clouds: {
    icon: <FontAwesomeIcon icon={faCloud} size={100} color="white" />,
    message: 'You could live in the clouds',
    backgroundColor: '#363636',
  },
  Haze: {
    icon: <FontAwesomeIcon icon={faWind} size={100} color="white" />,
    message: 'It might be a bit damp',
    backgroundColor: '#58586e',
  },
  Mist: {
    icon: <FontAwesomeIcon icon={faSmog} size={100} color="white" />,
    message: 'It might be hard to see',
    backgroundColor: '#3e3e37',
  },
};
