import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  styled
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import BookIcon from '@mui/icons-material/Book';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(0.5, 0),
}));

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleMotorsClick = () => {
    setOpen(!open);
    navigate('/motors');
  };

  return (
    <List>
      <ListItem disablePadding>
        <StyledListItemButton onClick={() => handleNavigate('/')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </StyledListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <StyledListItemButton onClick={() => handleNavigate('/basics')}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Podstawy" />
        </StyledListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <StyledListItemButton onClick={handleMotorsClick}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Silniki" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </StyledListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem disablePadding>
            <StyledListItemButton onClick={() => handleNavigate('/motors/dc')} sx={{ pl: 4 }}>
              <ListItemText primary="Silniki DC" />
            </StyledListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <StyledListItemButton onClick={() => handleNavigate('/motors/ac')} sx={{ pl: 4 }}>
              <ListItemText primary="Silniki AC" />
            </StyledListItemButton>
          </ListItem>
        </List>
      </Collapse>

      <ListItem disablePadding>
        <StyledListItemButton onClick={() => handleNavigate('/resources')}>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Zasoby" />
        </StyledListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <StyledListItemButton onClick={() => handleNavigate('/contact')}>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Kontakt" />
        </StyledListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <StyledListItemButton onClick={() => handleNavigate('/prezentacja')}>
          <ListItemIcon>
            <SlideshowIcon />
          </ListItemIcon>
          <ListItemText primary="Prezentacja" />
        </StyledListItemButton>
      </ListItem>
    </List>
  );
};

export default Sidebar;
