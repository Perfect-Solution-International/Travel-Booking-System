"use client";
import React from 'react';
import NextLink from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 10,
  backgroundColor: alpha('#fff', 0.06),
  '&:hover': { backgroundColor: alpha('#fff', 0.08) },
  marginLeft: 0,
  width: '100%',
  maxWidth: 190,
  height: 39,
  [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(1), width: 200 },
  [theme.breakpoints.up('md')]: { width: 240 },
  border: '1px solid rgba(16,24,40,0.04)',
  paddingLeft: theme.spacing(1),
  display: 'flex',
  alignItems: 'center'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    fontSize: '0.95rem',
    padding: theme.spacing(0.75, 1, 0.75, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    '&::placeholder': {
      fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      fontSize: '0.78rem',
      opacity: 0.8
    }
  }
}));

const LinkBehavior = React.forwardRef<HTMLAnchorElement, any>(function LinkBehavior(props, ref) {
  const { href, children, ...other } = props;
  return (
    <NextLink href={href} ref={ref} {...other}>
      {children}
    </NextLink>
  );
});

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const mobileOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(8px)',
        background: 'linear-gradient(180deg, #fbfdff 0%, #f1f9ff 55%, #eaf4ff 100%)',
        borderBottom: '1px solid rgba(0,0,0,0.03)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64, position: 'relative' }}>

          {/* Brand - left (pushed further left) */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2, ml: { xs: 0, sm: -1, md: -17 } }}>
            <Button component={LinkBehavior} href="/" disableRipple sx={{ textTransform: 'none', color: 'var(--brand-color)', px: 0, '&:hover': { background: 'transparent' } }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ width: 46, height: 46, borderRadius: 2, bgcolor: 'linear-gradient(135deg,#eaf4ff,#fff)', color: 'var(--brand-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 26px rgba(3,102,214,0.12)', fontWeight: 800, fontFamily: 'Noto Serif, serif' }}>SL</Box>
                <Typography variant="h6" component="span" sx={{ fontFamily: 'Noto Serif, serif', fontWeight: 800, fontSize: '1.08rem', letterSpacing: 0.2 }}>SriLanakaHotel.lk</Typography>
              </Box>
            </Button>
          </Box>

          {/* Center - links (robustly centered in the toolbar) */}
          <Box sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            mx: 'auto',
            width: 'fit-content',
            display: { xs: 'none', md: 'flex' },
            gap: 3,
            '& .MuiButton-root': { fontSize: '0.9rem' }
          }}>
            <Button component={LinkBehavior} href="#" color="inherit" disableRipple sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', textTransform: 'none', fontWeight: 600, position: 'relative', transition: 'color .18s ease', backgroundColor: 'transparent !important', boxShadow: 'none', '&:after': { content: '""', position: 'absolute', left: 0, right: 0, height: 3, bg: 'transparent', bottom: -8, borderRadius: 2, transformOrigin: 'left', transform: 'scaleX(0)', transition: 'transform .18s ease, background .18s ease' }, '&:hover': { color: 'var(--brand-color)', backgroundColor: 'transparent', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } }, '&:focus, &:focus-visible, &.Mui-focusVisible': { color: 'var(--brand-color)', backgroundColor: 'transparent', outline: 'none', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } }, '&:active': { color: 'var(--brand-color)', backgroundColor: 'transparent', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } } }}>Hotels</Button>
            <Button component={LinkBehavior} href="#" color="inherit" disableRipple sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', textTransform: 'none', fontWeight: 600, position: 'relative', transition: 'color .18s ease', backgroundColor: 'transparent !important', boxShadow: 'none', '&:after': { content: '""', position: 'absolute', left: 0, right: 0, height: 3, bottom: -8, borderRadius: 2, transformOrigin: 'left', transform: 'scaleX(0)', transition: 'transform .18s ease, background .18s ease' }, '&:hover': { color: 'var(--brand-color)', backgroundColor: 'transparent', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } }, '&:focus, &:focus-visible, &.Mui-focusVisible': { color: 'var(--brand-color)', backgroundColor: 'transparent', outline: 'none', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } }, '&:active': { color: 'var(--brand-color)', backgroundColor: 'transparent', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } } }}>Tours</Button>
            <Button component={LinkBehavior} href="#" color="inherit" disableRipple sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', textTransform: 'none', fontWeight: 600, position: 'relative', transition: 'color .18s ease', backgroundColor: 'transparent !important', boxShadow: 'none', '&:after': { content: '""', position: 'absolute', left: 0, right: 0, height: 3, bottom: -8, borderRadius: 2, transformOrigin: 'left', transform: 'scaleX(0)', transition: 'transform .18s ease, background .18s ease' }, '&:hover': { color: 'var(--brand-color)', backgroundColor: 'transparent', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } }, '&:focus, &:focus-visible, &.Mui-focusVisible': { color: 'var(--brand-color)', backgroundColor: 'transparent', outline: 'none', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } }, '&:active': { color: 'var(--brand-color)', backgroundColor: 'transparent', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } } }}>Vehicles</Button>
            <Button component={LinkBehavior} href="#" color="inherit" disableRipple sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', textTransform: 'none', fontWeight: 600, position: 'relative', transition: 'color .18s ease', backgroundColor: 'transparent !important', boxShadow: 'none', '&:after': { content: '""', position: 'absolute', left: 0, right: 0, height: 3, bottom: -8, borderRadius: 2, transformOrigin: 'left', transform: 'scaleX(0)', transition: 'transform .18s ease, background .18s ease' }, '&:hover': { color: 'var(--brand-color)', backgroundColor: 'transparent', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } }, '&:focus, &:focus-visible, &.Mui-focusVisible': { color: 'var(--brand-color)', backgroundColor: 'transparent', outline: 'none', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } }, '&:active': { color: 'var(--brand-color)', backgroundColor: 'transparent', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } } }}>Guides</Button>
            <Button component={LinkBehavior} href="#" color="inherit" disableRipple sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', textTransform: 'none', fontWeight: 600, position: 'relative', transition: 'color .18s ease', backgroundColor: 'transparent !important', boxShadow: 'none', '&:after': { content: '""', position: 'absolute', left: 0, right: 0, height: 3, bottom: -8, borderRadius: 2, transformOrigin: 'left', transform: 'scaleX(0)', transition: 'transform .18s ease, background .18s ease' }, '&:hover': { color: 'var(--brand-color)', backgroundColor: 'transparent', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } }, '&:focus, &:focus-visible, &.Mui-focusVisible': { color: 'var(--brand-color)', backgroundColor: 'transparent', outline: 'none', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } }, '&:active': { color: 'var(--brand-color)', backgroundColor: 'transparent', '&:after': { transform: 'scaleX(1)', background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)' } } }}>Offers</Button>
          </Box>

          {/* Right - search + auth + mobile menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: 'auto', mr: { xs: -1, sm: -2, md: -16 } }}>
            <Search sx={{ display: { xs: 'none', sm: 'block' }, boxShadow: '0 6px 18px rgba(2,6,23,0.06)' }}>
              <SearchIconWrapper>
                <SearchIcon fontSize="small" sx={{ color: 'rgba(15,23,42,0.6)' }} />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search hotels, tours..." inputProps={{ 'aria-label': 'search' }} />
            </Search>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center', '& .MuiButton-root': { fontSize: '0.8rem' } }}>
              <Button component={LinkBehavior} href="#" color="inherit" size="small" sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', textTransform: 'none', bgcolor: 'rgba(255,255,255,0.95)', color: '#0f172a', border: '1px solid rgba(16,24,40,0.06)', boxShadow: '0 2px 6px rgba(2,6,23,0.04)', borderRadius: 2, px: 1.5, py: 0.5, minWidth: 0 }}>Login</Button>
              <Button component={LinkBehavior} href="#" variant="contained" size="small" sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', borderRadius: 2, background: 'linear-gradient(90deg,var(--brand-color),#2b8bf6)', fontWeight: 700, boxShadow: '0 10px 30px rgba(3,102,214,0.12)', px: 1.5, py: 0.5, minWidth: 0 }}>Sign Up</Button>
            </Box>

            <IconButton size="large" edge="end" color="inherit" aria-label="menu" sx={{ display: { md: 'none' } }} onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Menu anchorEl={anchorEl} open={mobileOpen} onClose={handleMenuClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <MenuItem onClick={handleMenuClose} component={LinkBehavior} href="#" sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: '0.9rem' }}>Hotels</MenuItem>
        <MenuItem onClick={handleMenuClose} component={LinkBehavior} href="#" sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: '0.9rem' }}>Tours</MenuItem>
        <MenuItem onClick={handleMenuClose} component={LinkBehavior} href="#" sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: '0.9rem' }}>Vehicles</MenuItem>
        <MenuItem onClick={handleMenuClose} component={LinkBehavior} href="#" sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: '0.9rem' }}>Guides</MenuItem>
        <MenuItem onClick={handleMenuClose} component={LinkBehavior} href="#" sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: '0.9rem' }}>Offers</MenuItem>
        <MenuItem onClick={handleMenuClose} component={LinkBehavior} href="#" sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: '0.9rem' }}>Login</MenuItem>
        <MenuItem onClick={handleMenuClose} component={LinkBehavior} href="#" sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: '0.9rem' }}>Sign Up</MenuItem>
      </Menu>
    </AppBar>
  );
}