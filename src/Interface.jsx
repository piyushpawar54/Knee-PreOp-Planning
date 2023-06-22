import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { ConfiguratorContext } from './Configurator';
import { useEffect, useState } from 'react';
import { useContext } from 'react';

export const Interface = () => {
  const { selected, setSelect, handleUpdateClick } =
    useContext(ConfiguratorContext);
  useEffect(() => {
    console.log(selected);
  }, [selected]);
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
              value={selected}
              onChange={(e) => {
                setSelect(e.target.value);
              }}
            >
              <FormControlLabel
                value="Femur Center"
                control={<Radio />}
                label="Femur Center"
              />
              <FormControlLabel
                value="Hip Center"
                control={<Radio />}
                label="Hip Center"
              />
              <FormControlLabel
                value="Femur Proximal Canal"
                control={<Radio />}
                label="Femur Proximal Canal"
              />
              <FormControlLabel
                value="Femur Distal Canal"
                control={<Radio />}
                label="Femur Distal Canal"
              />
              <FormControlLabel
                value="Medial Epicondyle"
                control={<Radio />}
                label="Medial Epicondyle"
              />
              <FormControlLabel
                value="Lateral Epicondyle"
                control={<Radio />}
                label="Lateral Epicondyle"
              />
              <FormControlLabel
                value="Distal Medial Pt"
                control={<Radio />}
                label="Distal Medial Pt"
              />
              <FormControlLabel
                value="Distal Lateral Pt"
                control={<Radio />}
                label="Distal Lateral Pt"
              />
              <FormControlLabel
                value="Posterior Medial Pt"
                control={<Radio />}
                label="Posterior Medial Pt"
              />
              <FormControlLabel
                value="Posterior Lateral Pt"
                control={<Radio />}
                label="Posterior Lateral Pt"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box className="glass" p={3}>
          <Button onClick={handleUpdateClick}>Update</Button>
        </Box>
      </Stack>
    </Box>
  );
};
