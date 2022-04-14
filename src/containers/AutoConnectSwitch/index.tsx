
import { useAutoConnect } from 'contexts/auto-connect-context';

const AutoConnectSwitch = () => {
  const {
    autoConnect,
    setAutoConnect
  } = useAutoConnect();

  const handleAutoConnectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAutoConnect(event.currentTarget.checked);
  };

  return (
    <input
      type='checkbox'
      checked={autoConnect}
      onChange={handleAutoConnectChange} />
  );
};

export default AutoConnectSwitch;
