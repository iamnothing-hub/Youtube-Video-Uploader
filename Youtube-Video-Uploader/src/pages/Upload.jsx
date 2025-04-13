import { CloudUpload, Description, Publish, Title, Visibility } from '@mui/icons-material'
import { Box, Button, Container, FormControl, InputAdornment, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const Upload = () => {
  return (
    <Container maxWidth="md" >

      <Paper
        elevation={6}
        sx={{
          padding: 4,
          marginTop: 8,
          borderRadius: 3

        }}
      >
        <Typography
          variant='h5'
          gutterBottom
          align='center'
          fontWeight={'bold'}
        >
          Upload Here
        </Typography>
        <Typography
          gutterBottom
          align='center'

        >
          Please upload your videos file in MP4 format with maximum size of 50MB
        </Typography>

        <Box display={'flex'} flexDirection={'column'} marginTop={3} gap={3}  >

          <TextField

            label={'Title'}
            variant='outlined'
            fullWidth
            slotProps={{
              input: {
                startAdornment: (<InputAdornment position='start'><Title color='primary' ></Title></InputAdornment>)
              }
            }}

          />
          <TextField

            label={'Description'}
            variant='outlined'
            fullWidth
            multiline
            slotProps={{
              input: {
                startAdornment: (<InputAdornment ><Description color='primary'></Description></InputAdornment>)
              }
            }}

          />

          <Box display={'flex'}>
            <input type="file" accept='Video/' id='upload-video' style={{ display: 'none' }} onChange={null} />
            <label htmlFor="upload-video">
              <Button variant='contained' color='secondary' component='span' startIcon={<CloudUpload />}>Upload Video</Button>
            </label>

          </Box>

          <FormControl fullWidth>
            <InputLabel>Visibility</InputLabel>

          <Select
            label={"Visibility"}
            // value={'Visibility'}
            renderValue={() => (
              <Box display={'flex'}  alignItems='center' gap={1}>
                <Visibility color='primary' />
                <Typography>Visibility</Typography>
              </Box>
            )}
            
          >
            <MenuItem aria-valuemax={'public'}>Public</MenuItem>
            <MenuItem aria-valuemax={'private'}>Private</MenuItem>
            <MenuItem aria-valuemax={'unlisted'}>Unlisted</MenuItem>


          </Select>
          </FormControl>

          <Button variant='contained' color='primary' startIcon={<Publish />} fontWeight={'bold'} padding={1.5}>Publish</Button>

        </Box>

      </Paper>

    </Container>
  )
}

export default Upload
