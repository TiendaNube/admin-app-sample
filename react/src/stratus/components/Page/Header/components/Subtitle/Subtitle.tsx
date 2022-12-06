import { Text } from '@tiendanube/components';

import './Subtitle.scss';

export interface SubtitleProps {
  text: string | 'skeleton';
}

function Subtitle({ text }: SubtitleProps): JSX.Element | null {
  return (
    <div className="stratus--page-header__subtitle">
      {text === 'skeleton' ? <Text.Skeleton /> : <Text>{text}</Text>}
    </div>
  );
}

export default Subtitle;
