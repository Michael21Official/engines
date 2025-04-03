import React from 'react';
import { Button, Box, Typography, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  margin: '20px 0'
});

const DownloadButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
}));

const PowerPointViewer: React.FC = () => {
  const presentationUrl = "https://upkrakow-my.sharepoint.com/personal/s174103_student_uken_krakow_pl/_layouts/15/Doc.aspx?sourcedoc={4571e6e7-c227-4a3b-957f-3baeb64b2fa4}&action=download";

  return (
    <StyledContainer>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" component="h2">
          Prezentacja: Zasady działania maszyn elektrycznych
        </Typography>
        <a href={presentationUrl} download="Silniki_Elektryczne_Prezentacja.pptx">
          <DownloadButton
            variant="contained"
            startIcon={<DownloadIcon />}
          >
            Pobierz prezentację
          </DownloadButton>
        </a>
      </Stack>

      <Box sx={{
        height: '600px',
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <iframe
          src="https://upkrakow-my.sharepoint.com/personal/s174103_student_uken_krakow_pl/_layouts/15/Doc.aspx?sourcedoc={4571e6e7-c227-4a3b-957f-3baeb64b2fa4}&action=embedview&wdAr=1.7777777777777777"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="Prezentacja o silnikach elektrycznych"
        />
      </Box>
    </StyledContainer>
  );
};

export default PowerPointViewer;
