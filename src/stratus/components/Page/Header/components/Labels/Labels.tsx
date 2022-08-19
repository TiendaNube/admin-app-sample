import { InterfaceLabel, Label, Stack } from '@tiendanube/components';

import './Labels.scss';

export interface LabelsProps {
  children: (InterfaceLabel | 'skeleton')[];
}

function Labels({ children }: LabelsProps): JSX.Element {
  return (
    <div className="stratus--page-header__labels">
      <Stack spacing="tight">
        {children.map((label, index) => (
          <Stack.Item key={index}>
            {label === 'skeleton' ? <Label.Skeleton /> : <Label {...label} />}
          </Stack.Item>
        ))}
      </Stack>
    </div>
  );
}

export default Labels;
