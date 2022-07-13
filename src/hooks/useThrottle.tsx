import {useState} from 'react';

type TProps = {
  handler: () => void;
  delay: number;
};

export default function useThrottle({handler, delay}: TProps) {
  const [timeoutState, setTimeoutState] = useState<NodeJS.Timeout | null>(null);

  const throttled = () => {
    timeoutState && clearTimeout(timeoutState);

    setTimeoutState(
      setTimeout(() => {
        handler();
      }, delay),
    );
  };

  return throttled;
}
