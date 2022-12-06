import { Stack, Button } from '@tiendanube/components';

interface CancelAndCofirmButtonsProps {
  onCancel: () => void;
  onSave: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  cancelText?: string;
  saveText?: string;
}

function CancelAndSaveButtons({
  onCancel,
  onSave,
  isLoading,
  isDisabled,
  cancelText,
  saveText,
}: CancelAndCofirmButtonsProps): JSX.Element {
  return (
    <Stack spacing="base" justify="flex-end">
      <Stack.Item>
        <Button disabled={isDisabled} onClick={onCancel}>
          {cancelText}
        </Button>
      </Stack.Item>
      <Stack.Item>
        <Button
          spinner={isLoading}
          disabled={isDisabled || isLoading}
          onClick={onSave}
          appearance="primary"
        >
          {saveText}
        </Button>
      </Stack.Item>
    </Stack>
  );
}

export default CancelAndSaveButtons;
