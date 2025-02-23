import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { timeSlots } from "./timeslots";
import { ChangeEvent, FC, useState } from "react";

const TimeSlot: FC<any> = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(timeSlots[0].value);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleTimeSlotChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedTimeSlot(event.target.value);
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  const handleEdit = () => {
    setIsConfirmed(false);
  };

  return (
    <FormControl sx={{ marginBottom: "5%" }}>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <FormLabel>
          Time Slot
          {isConfirmed
            ? `: ${
                timeSlots.find((slot) => slot.value === selectedTimeSlot)?.label
              }`
            : ""}
        </FormLabel>
        {isConfirmed ? (
          <Typography
            fontWeight={500}
            onClick={handleEdit}
            color={"primary"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.dark",
                fontWeight: 600,
              },
            }}
          >
            EDIT
          </Typography>
        ) : (
          ""
        )}
      </Stack>

      {isConfirmed ? (
        <></>
      ) : (
        <>
          <RadioGroup
            value={selectedTimeSlot}
            onChange={handleTimeSlotChange}
            sx={{ marginBottom: "2.5%" }}
          >
            {timeSlots.map((slot) => (
              <FormControlLabel
                key={slot.value}
                value={slot.value}
                control={<Radio />}
                label={slot.label}
              />
            ))}
          </RadioGroup>
          <Button variant="contained" color="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </>
      )}
    </FormControl>
  );
};

export default TimeSlot;
