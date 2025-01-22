import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button, ButtonProps, styled } from "@mui/material";

interface FInputFileProps {
  innerText?: string;
  options?: ButtonProps;
  onUploadFile?: (files: FileList) => void;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export function FInputFile(props: FInputFileProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log(event.target.files);

      props.onUploadFile(files);
      event.target.value = "";
      event.target.files = null;
    }
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput type="file" onChange={handleFileChange} multiple />
    </Button>
  );
}
