'use client';

import React from 'react';
import NextLink from 'next/link';
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import StarIcon from '@mui/icons-material/Star';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';

const properties = {
  'cloud-nine-retreat': {
    name: 'Cloud Nine Retreat',
    location: 'Ella, Central Highlands, Sri Lanka',
    rating: '4.9',
    reviews: '1,420 Reviews',
    price: 'LKR 45,000',
    originalPrice: 'LKR 53,000',
    discount: '15% OFF',
    image: '/Hotel%201.png',
    gallery: ['/Hotel%201.png', '/Hotel%202.png', '/Hotel%203.png'],
    description: 'Perched atop the verdant peaks of Ella, Cloud Nine Retreat offers unparalleled escape into the heart of Sri Lanka\'s hill country. This boutique sanctuary blends contemporary tropical architecture with the individuality of its surroundings. Each villa is thoughtfully designed to provide panoramic views of the lush green valleys and tea estates that define Ella.',
  },
  'azure-shore-villa': {
    name: 'Azure Shore Villa',
    location: 'Bentota, South Coast, Sri Lanka',
    rating: '4.8',
    reviews: '986 Reviews',
    price: 'LKR 68,000',
    originalPrice: 'LKR 80,000',
    discount: '15% OFF',
    image: '/Hotel%202.png',
    gallery: ['/Hotel%202.png', '/Hotel%201.png', '/Hotel%204.png'],
    description: 'A calm beachfront stay on Sri Lanka\'s southern coast, Azure Shore Villa pairs private spaces with warm service, ocean views and easy access to the sand.',
  },
  'safari-sky-lodge': {
    name: 'Safari Sky Lodge',
    location: 'Yala National Park, Sri Lanka',
    rating: '4.7',
    reviews: '742 Reviews',
    price: 'LKR 38,000',
    originalPrice: 'LKR 45,000',
    discount: '15% OFF',
    image: '/Hotel%203.png',
    gallery: ['/Hotel%203.png', '/Hotel%201.png', '/Hotel%204.png'],
    description: 'Wake up beside the wilderness at Safari Sky Lodge, a thoughtful retreat for slow mornings, memorable game drives and open skies.',
  },
  'the-fort-manor': {
    name: 'The Fort Manor',
    location: 'Galle Fort, South Coast, Sri Lanka',
    rating: '5.0',
    reviews: '530 Reviews',
    price: 'LKR 52,000',
    originalPrice: 'LKR 61,000',
    discount: '15% OFF',
    image: '/Hotel%204.png',
    gallery: ['/Hotel%204.png', '/Hotel%202.png', '/Hotel%201.png'],
    description: 'History and quiet luxury meet inside the walls of Galle Fort at The Fort Manor, with intimate rooms, courtyards and thoughtful local details.',
  },
} as const;

type Property = (typeof properties)[keyof typeof properties];

const amenities = [
  { label: 'Free Wi-Fi', icon: <WifiOutlinedIcon /> },
  { label: 'Heated Infinity Pool', icon: <PoolOutlinedIcon /> },
  { label: 'All-day Restaurant', icon: <RestaurantOutlinedIcon /> },
  { label: 'Private Parking', icon: <DirectionsCarOutlinedIcon /> },
  { label: 'Wellness & Spa', icon: <SpaOutlinedIcon /> },
  { label: 'Concierge Service', icon: <StarIcon /> },
];

function Recommendation({ property }: { property: Property }) {
  return (
    <Box sx={{ minWidth: 0, border: '1px solid #e7edf5', borderRadius: 3, overflow: 'hidden', background: '#fff', boxShadow: '0 10px 24px rgba(15, 23, 42, 0.03)' }}>
      <Box component="img" src={property.image} alt={property.name} sx={{ display: 'block', width: '100%', height: { xs: 86, sm: 102 }, objectFit: 'cover' }} />
      <Box sx={{ p: 1 }}>
        <Typography sx={{ fontFamily: 'Noto Serif, serif', fontSize: '.68rem', fontWeight: 800, lineHeight: 1.2 }}>{property.name}</Typography>
        <Typography sx={{ color: '#0056D2', fontSize: '.58rem', fontWeight: 800, mt: .65 }}>{property.price}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: .25, mt: .35 }}><StarIcon sx={{ fontSize: 11, color: '#f59e0b' }} /><Typography sx={{ fontSize: '.55rem', color: '#374151' }}>{property.rating}</Typography></Box>
      </Box>
    </Box>
  );
}

export default function HotelDetailPage() {
  const params = useParams<{ slug: string }>();
  const property = properties[params.slug as keyof typeof properties] ?? properties['cloud-nine-retreat'];
  const recommendations = Object.values(properties).filter((item) => item.name !== property.name).slice(0, 4);
  const [guestAnchor, setGuestAnchor] = React.useState<null | HTMLElement>(null);
  const [adults, setAdults] = React.useState(2);
  const [children, setChildren] = React.useState(0);
  const [checkIn, setCheckIn] = React.useState('2026-05-12');
  const [checkOut, setCheckOut] = React.useState('2026-05-16');
  const checkInRef = React.useRef<HTMLInputElement>(null);
  const checkOutRef = React.useRef<HTMLInputElement>(null);
  const guestMenuOpen = Boolean(guestAnchor);
  const guestCount = adults + children;
  const openDatePicker = (input: HTMLInputElement | null) => {
    input?.showPicker?.();
  };

  return (
    <Box sx={{ minHeight: '100vh', background: '#f3f3f3', pb: { xs: 4, md: 7 } }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 2, md: 3 }, px: { xs: 2, md: 3 } }}>
        <Button component={NextLink} href="/hotel" startIcon={<ArrowBackIcon sx={{ fontSize: 16 }} />} sx={{ color: '#4b5563', textTransform: 'none', fontSize: '.72rem', mb: 1.5, px: 0, '&:hover': { bgcolor: 'transparent', color: '#0056D2' } }}>Back to stays</Button>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 1, height: { xs: 300, sm: 390, md: 420 }, overflow: 'hidden', borderRadius: 3, boxShadow: '0 10px 24px rgba(15, 23, 42, 0.04)' }}>
          <Box component="img" src={property.gallery[0]} alt={`${property.name} exterior`} sx={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 0 }} />
          <Box sx={{ display: { xs: 'none', md: 'grid' }, gridTemplateRows: '1fr 1fr', gap: 1 }}>
            {property.gallery.slice(1).map((image, index) => <Box key={image} component="img" src={image} alt={`${property.name} gallery ${index + 2}`} sx={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 0 }} />)}
          </Box>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: { xs: 2, md: 3 } }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: .6, color: '#f59e0b', mb: .45 }}><StarIcon sx={{ fontSize: 16 }} /><Typography sx={{ fontSize: '.65rem', color: '#374151', fontWeight: 700 }}>{property.rating} ({property.reviews})</Typography></Box>
                <Typography component="h1" sx={{ fontFamily: 'Noto Serif, serif', fontWeight: 800, fontSize: { xs: '1.7rem', md: '2rem' }, color: '#252525', lineHeight: 1.15 }}>{property.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: .45, mt: .7, color: '#53657a' }}><LocationOnOutlinedIcon sx={{ fontSize: 14, color: '#0056D2' }} /><Typography sx={{ fontSize: '.65rem' }}>{property.location}</Typography></Box>
              </Box>
              <Button aria-label="Save property" sx={{ minWidth: 34, width: 34, height: 34, borderRadius: '50%', color: '#FF383C', border: '1px solid #dbe5f2', p: 0 }}><FavoriteBorderOutlinedIcon sx={{ fontSize: 18 }} /></Button>
            </Box>

            <Divider sx={{ my: 2.5 }} />
            <Typography sx={{ fontFamily: 'Noto Serif, serif', fontWeight: 800, fontSize: '1.10rem', mb: 1 }}>About this property</Typography>
            <Typography sx={{ color: '#536070', fontSize: '.80rem', lineHeight: 1.75, maxWidth: 760 }}>{property.description}</Typography>

            <Typography sx={{ fontFamily: 'Noto Serif, serif', fontWeight: 800, fontSize: '1.10rem', mt: 3, mb: 1.3 }}>World-class Amenities</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)' }, gap: 1.2 }}>
              {amenities.map((amenity) => <Box key={amenity.label} sx={{ display: 'flex', alignItems: 'center', gap: .55, color: '#0056D2' }}><Box sx={{ display: 'flex', '& svg': { fontSize: 20 } }}>{amenity.icon}</Box><Typography sx={{ fontSize: '.78rem', color: '#536070' }}>{amenity.label}</Typography></Box>)}
            </Box>

            <Typography sx={{ fontFamily: 'Noto Serif, serif', fontWeight: 800, fontSize: '1.10rem', mt: 3, mb: 1.2 }}>Explore the Area</Typography>
            <Box sx={{ position: 'relative', height: { xs: 190, md: 225 }, borderRadius: 1.5, overflow: 'hidden', border: '1px solid #e7edf5', background: '#e8eef5' }}>
              <Box
                component="iframe"
                title={`Map showing ${property.location}`}
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.985%2C6.82%2C81.02%2C6.88&layer=mapnik&marker=6.8667%2C81.0466"
                sx={{ display: 'block', width: '100%', height: '100%', border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <Box sx={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(255,255,255,.94)', p: 1, borderRadius: 1, boxShadow: '0 4px 10px rgba(0,0,0,.12)', pointerEvents: 'none' }}>
                <Typography sx={{ fontSize: '.58rem', fontWeight: 800 }}>Nearby landmarks</Typography>
                <Typography sx={{ fontSize: '.52rem', color: '#64748b' }}>Ella town · 8 min</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: { md: 'sticky' }, top: 86, background: '#fff', border: '1px solid #e7edf5', borderRadius: 3, p: { xs: 2, md: 2.2 }, boxShadow: '0 10px 24px rgba(15,23,42,.06)', fontFamily: 'Noto Serif, serif', '& .MuiTypography-root, & .MuiInputBase-root, & .MuiInputLabel-root, & .MuiButton-root, & span': { fontFamily: 'Noto Serif, serif' } }}>
              <Box sx={{ width: 'fit-content' }}>
                <Typography sx={{ color: '#0056D2', fontFamily: 'Noto Serif, serif', fontSize: '1.7rem', lineHeight: 1.05, fontWeight: 800 }}>{property.price}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', mt: .35 }}>
                    <Typography sx={{ color: '#252525', fontSize: '.58rem', fontWeight: 800 }}>{property.discount}</Typography>
                    <Typography sx={{ color: '#8b95a5', fontSize: '.6rem', textDecoration: 'line-through' }}>{property.originalPrice}</Typography>
                  </Box>
              </Box>
              <Typography sx={{ color: '#6b7280', fontSize: '.7rem', mt: .3 }}>per night · includes taxes</Typography>
              <Divider sx={{ my: 1.5 }} />
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                <TextField
                  label="Check-in"
                  type="date"
                  value={checkIn}
                  onChange={(event) => setCheckIn(event.target.value)}
                  size="small"
                  inputRef={checkInRef}
                  slotProps={{ inputLabel: { shrink: true }, input: { endAdornment: <InputAdornment position="end"><IconButton aria-label="Open check-in calendar" onClick={() => openDatePicker(checkInRef.current)} edge="end" size="small"><CalendarMonthOutlinedIcon sx={{ color: '#0056D2', fontSize: 17 }} /></IconButton></InputAdornment> } }}
                  sx={{ '& .MuiInputBase-root': { fontSize: '.82rem' }, '& .MuiInputLabel-root': { fontSize: '.76rem' }, '& input': { cursor: 'pointer' }, '& input::-webkit-calendar-picker-indicator': { display: 'none' } }}
                />
                <TextField
                  label="Check-out"
                  type="date"
                  value={checkOut}
                  onChange={(event) => setCheckOut(event.target.value)}
                  size="small"
                  inputRef={checkOutRef}
                  slotProps={{ htmlInput: { min: checkIn }, inputLabel: { shrink: true }, input: { endAdornment: <InputAdornment position="end"><IconButton aria-label="Open check-out calendar" onClick={() => openDatePicker(checkOutRef.current)} edge="end" size="small"><CalendarMonthOutlinedIcon sx={{ color: '#0056D2', fontSize: 17 }} /></IconButton></InputAdornment> } }}
                  sx={{ '& .MuiInputBase-root': { fontSize: '.82rem' }, '& .MuiInputLabel-root': { fontSize: '.76rem' }, '& input': { cursor: 'pointer' }, '& input::-webkit-calendar-picker-indicator': { display: 'none' } }}
                />
              </Box>
              <Button
                fullWidth
                onClick={(event) => setGuestAnchor(event.currentTarget)}
                endIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
                sx={{ justifyContent: 'space-between', alignItems: 'center', mt: 1.5, px: 0, color: '#536070', fontSize: '.72rem', fontWeight: 400, textTransform: 'none', '&:hover': { bgcolor: 'transparent' } }}
              >
                <Box sx={{ textAlign: 'left' }}>
                  <Typography sx={{ color: '#536070', fontSize: '.76rem', lineHeight: 1.3 }}>{guestCount} {guestCount === 1 ? 'guest' : 'guests'}</Typography>
                  <Typography sx={{ color: '#8b95a5', fontSize: '.66rem', lineHeight: 1.4 }}>{adults} {adults === 1 ? 'adult' : 'adults'} · {children} {children === 1 ? 'child' : 'children'}</Typography>
                </Box>
              </Button>
              <Menu
                anchorEl={guestAnchor}
                open={guestMenuOpen}
                onClose={() => setGuestAnchor(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                slotProps={{ paper: { sx: { mt: .7, minWidth: 250, borderRadius: 2, border: '1px solid #e7edf5', boxShadow: '0 10px 24px rgba(15,23,42,.12)' } } }}
              >
                {[
                  { label: 'Adults', caption: 'Age 13+', value: adults, setValue: setAdults, minimum: 1 },
                  { label: 'Children', caption: 'Age 2 - 12', value: children, setValue: setChildren, minimum: 0 },
                ].map((guestType) => (
                  <MenuItem key={guestType.label} disableRipple sx={{ display: 'flex', justifyContent: 'space-between', gap: 3, py: 1.1, '&:hover': { bgcolor: '#f8fbff' } }}>
                    <Box><Typography sx={{ color: '#252525', fontSize: '.72rem', fontWeight: 700 }}>{guestType.label}</Typography><Typography sx={{ color: '#8b95a5', fontSize: '.58rem' }}>{guestType.caption}</Typography></Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: .8 }}>
                      <Button aria-label={`Decrease ${guestType.label}`} onClick={() => guestType.setValue(Math.max(guestType.minimum, guestType.value - 1))} sx={{ minWidth: 25, width: 25, height: 25, borderRadius: '50%', border: '1px solid #dbe1ea', p: 0, color: '#0056D2', fontSize: '1rem' }}>-</Button>
                      <Typography sx={{ minWidth: 12, textAlign: 'center', fontSize: '.7rem', fontWeight: 700 }}>{guestType.value}</Typography>
                      <Button aria-label={`Increase ${guestType.label}`} onClick={() => guestType.setValue(guestType.value + 1)} sx={{ minWidth: 25, width: 25, height: 25, borderRadius: '50%', border: '1px solid #dbe1ea', p: 0, color: '#0056D2', fontSize: '1rem' }}>+</Button>
                    </Box>
                  </MenuItem>
                ))}
                <Box sx={{ px: 2, pb: 1.3 }}><Button fullWidth onClick={() => setGuestAnchor(null)} sx={{ height: 30, borderRadius: 1.2, bgcolor: '#0056D2', color: '#fff', textTransform: 'none', fontSize: '.62rem', fontWeight: 700, '&:hover': { bgcolor: '#004ab7' } }}>Done</Button></Box>
              </Menu>
              <Divider sx={{ my: 1.5 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#536070', fontSize: '.76rem' }}><span>4 nights</span><span>{property.price}</span></Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#536070', fontSize: '.76rem', mt: .8 }}><span>Service fee</span><span>LKR 4,500</span></Box>
              <Divider sx={{ my: 1.5 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '.84rem' }}><span>Total</span><span>{property.price}</span></Box>
              <Button fullWidth variant="contained" sx={{ mt: 2, height: 38, borderRadius: 1.2, textTransform: 'none', fontSize: '.78rem', fontWeight: 800, boxShadow: 'none' }}>Book Your Stay Now</Button>
              <Typography sx={{ textAlign: 'center', color: '#8b95a5', fontSize: '.62rem', mt: 1 }}>You won&apos;t be charged yet</Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontFamily: 'Noto Serif, serif', fontWeight: 800, fontSize: '1.10rem', mb: 1.3 }}>Recommended for You</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, gap: 1.2 }}>{recommendations.map((item) => <Recommendation key={item.name} property={item} />)}</Box>
        </Box>
      </Container>
    </Box>
  );
}
