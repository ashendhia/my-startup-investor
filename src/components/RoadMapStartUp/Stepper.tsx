import { Stepper } from "@mui/material";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Select master blaster campaign settings",
  "Secure funding ",
  "Navigate the judical landscape ",
  "Create Marketing strategy ",
  "Keep your finance in order",
];

export default function Roadmap({ Stepnum, setStepnum }) {
  return (
    <Box sx={{ marginTop: "100px", width: "100%" }}>
      <Stepper activeStep={Stepnum - 1} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>
              <h1 className="text-2xl">{index + 1}</h1>
              <span className="text-lg">{label}</span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
