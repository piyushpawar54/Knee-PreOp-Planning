import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from '@mui/material';
import { useConfigurator } from './context/Configurator.jsx';
export const Interface = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Typography variant="caption">Controls</Typography>

        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Create Landmarks</FormLabel>
            <RadioGroup
              value={0}
              onChange={(e) => {
                console.log('Legs');
              }}
            >
              <FormControlLabel control={<Radio />} label="Femur Center" />
              <FormControlLabel control={<Radio />} label="Hip Center" />
              <FormControlLabel
                control={<Radio />}
                label="Femur Proximal Canal"
              />
              <FormControlLabel
                control={<Radio />}
                label="Femur Distal Canal"
              />
              <FormControlLabel control={<Radio />} label="Medial Epicondyle" />
              <FormControlLabel
                control={<Radio />}
                label="Lateral Epicondyle"
              />
              <FormControlLabel control={<Radio />} label="Distal Medial Pt" />
              <FormControlLabel control={<Radio />} label="Distal Lateral Pt" />
              <FormControlLabel
                control={<Radio />}
                label="Posterior Medial Pt"
              />
              <FormControlLabel
                control={<Radio />}
                label="Posterior Lateral Pt"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Update Controls</FormLabel>
            <RadioGroup
              onChange={(e) => {
                console.log('Leg Color');
              }}
            >
              <FormControlLabel control={<Radio />} label="Update" />
              <FormControlLabel control={<Radio />} label="Varus/Valgus" />
              <FormControlLabel control={<Radio />} label="Flexion/Extension" />
              <FormControlLabel control={<Radio />} label="Distal Resection" />
              <FormControlLabel control={<Radio />} label="Resection" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};
