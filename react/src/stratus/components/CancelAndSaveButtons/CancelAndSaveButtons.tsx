import { Box, Button, Spinner } from '@nimbus-ds/components';

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
    <Box display="flex" gap="2" justifyContent="flex-end" width="100%">
      <Button disabled={isDisabled} onClick={onCancel}>
        {cancelText}
      </Button>
      <Button
        disabled={isDisabled || isLoading}
        onClick={onSave}
        appearance="primary"
      >
        {isLoading && <Spinner color="currentColor" size="small" />}
        {saveText}
      </Button>
    </Box>
  );
}

export default CancelAndSaveButtons;
