import { PageTitle } from '@tiendanube/components';

export interface TitleProps {
  text: string | 'skeleton';
}

function Title({ text }: TitleProps): JSX.Element {
  return (
    <>
      {text === 'skeleton' ? (
        <PageTitle.Skeleton />
      ) : (
        <PageTitle title={text} />
      )}
    </>
  );
}

export default Title;
