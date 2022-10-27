import { useRouteError } from "react-router-dom";
import {Screen, Text} from '../components/base';

export const Error = ({}) => {
  const error = useRouteError();
  console.error(error);
  return (
    <Screen>
      <Text>Oops!</Text>
      <Text>Sorry, an unexTextected error has occurred.</Text>
      <Text>
        <i>{error.statusText || error.message}</i>
      </Text>
    </Screen>
  );
};

export default Error;