"use client";
import React from 'react';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const COMPANY_LINKS = ['About Us', 'Careers', 'Contact Us', 'Journal'];
const SERVICE_LINKS = ['Tour packages', 'Hotel', 'Vehicles', 'Guides'];

const footerLinkSx = {
  display: 'block',
  color: 'rgba(218, 231, 241, 0.58)',
  fontFamily: 'Manrope, system-ui, sans-serif',
  fontSize: '0.80rem',
  lineHeight: 1,
  textDecoration: 'none',
  mb: 2.1,
  transition: 'color 0.2s ease',
  '&:hover': { color: '#fff' }
};

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#002132', color: '#fff', px: { xs: 2.5, sm: 3 }, pt: { xs: 6, md: 8 }, pb: { xs: 3, md: 5 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1.7fr 0.8fr 0.8fr 1.2fr' }, gap: { xs: 5, sm: 3, md: 10 } }}>
          <Box>
            <Typography component="div" sx={{ fontFamily: 'Noto Serif, serif', fontWeight: 800, fontSize: { xs: '1.3rem', sm: '1.15rem' }, mb: 2.2 }}>
              SriLankaHotel.lk
            </Typography>
            <Typography sx={{ maxWidth: 330, color: 'rgba(218, 231, 241, 0.62)', fontFamily: 'Manrope, system-ui, sans-serif', fontSize: '0.80rem', lineHeight: 1.65 }}>
              Redefining Sri Lankan travel. We curate high-end, immersive discovery journeys for the modern traveler seeking authenticity and luxury in equal measure.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, mt: 3 }}>
              <Button aria-label="Facebook" component={NextLink} href="#" sx={{ minWidth: 0, width: 27, height: 27, p: 0, color: '#fff', border: '1px solid rgba(67, 161, 217, 0.3)', borderRadius: '50%', '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}>
                <FacebookIcon sx={{ fontSize: 16, color: '#287be0' }} />
              </Button>
              <Button aria-label="Instagram" component={NextLink} href="#" sx={{ minWidth: 0, width: 27, height: 27, p: 0, color: '#fff', border: '1px solid rgba(67, 161, 217, 0.3)', borderRadius: '50%', '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}>
                <InstagramIcon sx={{ fontSize: 16, color: '#f14491' }} />
              </Button>
              <Button aria-label="Twitter" component={NextLink} href="#" sx={{ minWidth: 0, width: 27, height: 27, p: 0, color: '#fff', border: '1px solid rgba(67, 161, 217, 0.3)', borderRadius: '50%', '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}>
                <TwitterIcon sx={{ fontSize: 16, color: '#1599d4' }} />
              </Button>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ color: '#fff', fontFamily: 'Manrope, system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 800, letterSpacing: 1.1, mb: 3.2 }}>COMPANY</Typography>
            {COMPANY_LINKS.map((link) => <Box key={link} component={NextLink} href="#" sx={footerLinkSx}>{link}</Box>)}
          </Box>

          <Box>
            <Typography sx={{ color: '#fff', fontFamily: 'Manrope, system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 800, letterSpacing: 1.1, mb: 3.2 }}>SERVICES</Typography>
            {SERVICE_LINKS.map((link) => <Box key={link} component={NextLink} href="#" sx={footerLinkSx}>{link}</Box>)}
          </Box>

          <Box>
            <Typography sx={{ color: '#fff', fontFamily: 'Manrope, system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 800, letterSpacing: 1.1, mb: 3.2 }}>THE INSIDER</Typography>
            <Typography sx={{ maxWidth: 210, color: 'rgba(218, 231, 241, 0.62)', fontFamily: 'Manrope, system-ui, sans-serif', fontSize: '0.75rem', lineHeight: 1.55, mb: 2.2 }}>
              Join our private circle for early access to curated collections and travel insights.
            </Typography>
            <Box component="form" sx={{ display: 'flex', height: 30, maxWidth: 225 }}>
              <InputBase placeholder="Email Address" inputProps={{ 'aria-label': 'Email Address' }} sx={{ flex: 1, minWidth: 0, px: 1.2, color: '#fff', bgcolor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '7px 0 0 7px', fontFamily: 'Manrope, system-ui, sans-serif', fontSize: '0.65rem', '& input::placeholder': { color: 'rgba(218,231,241,0.5)', opacity: 1 } }} />
              <Button type="submit" sx={{ minWidth: 50, px: 1, color: 'var(--brand-color)', bgcolor: '#fff', borderRadius: '0 7px 7px 0', textTransform: 'none', fontFamily: 'Manrope, system-ui, sans-serif', fontSize: '0.70rem', fontWeight: 800, '&:hover': { bgcolor: '#edf6ff' } }}>Join</Button>
            </Box>
            <Typography sx={{ color: 'rgba(218, 231, 241, 0.38)', fontFamily: 'Manrope, system-ui, sans-serif', fontSize: '0.6rem', mt: 1 }}>BY JOINING, YOU AGREE TO OUR PRIVACY POLICY.</Typography>
          </Box>
        </Box>
        <Divider sx={{ mt: { xs: 5, md: 8 }, borderColor: 'rgba(255,255,255,0.06)' }} />
      </Container>
    </Box>
  );
}
