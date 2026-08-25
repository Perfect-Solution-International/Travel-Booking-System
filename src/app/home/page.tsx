"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TABS = ['Hotels', 'Tours', 'Vehicles', 'Guides'];

const DESTINATIONS = [
  {
    name: 'Colombo',
    type: 'City Hub',
    price: 'LKR 8,500',
    image: '/Colombo.png'
  },
  {
    name: 'Kandy',
    type: 'Heritage',
    price: 'LKR 7,500',
    image: '/Kandy.png'
  },
  {
    name: 'Ella',
    type: 'Nature',
    price: 'LKR 6,500',
    image: '/Ella.png'
  },
  {
    name: 'Galle',
    type: 'Coastal',
    price: 'LKR 9,000',
    image: '/Galle.png'
  }
];

const TOUR_PACKAGES = [
  {
    name: 'Cultural Triangle',
    duration: '3 Days / 2 Nights',
    price: 'LKR 25,000',
    image: '/Cultural Triangle.png'
  },
  {
    name: 'Hill Country Escape',
    duration: '4 Days / 3 Nights',
    price: 'LKR 32,000',
    image: '/Hill Country Escape.png'
  },
  {
    name: 'Beach Paradise',
    duration: '3 Days / 2 Nights',
    price: 'LKR 22,000',
    image: '/Beach Paradise.png'
  },
  {
    name: 'Wildlife Adventure',
    duration: '2 Days / 1 Night',
    price: 'LKR 18,000',
    image: '/Wildlife Adventure.png'
  }
];

const VEHICLE_RENTALS = [
  {
    name: 'Economy Sedan',
    price: 'LKR 9,000 / day',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=700&q=85'
  },
  {
    name: 'Luxury Van',
    price: 'LKR 11,000 / day',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=85'
  },
  {
    name: 'Premium SUV',
    price: 'LKR 15,000 / day',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=700&q=85'
  },
  {
    name: 'Safari Jeep',
    price: 'LKR 12,500 / day',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=85'
  }
];

const LOCAL_GUIDES = [
  {
    name: 'Nimal Perera',
    languages: 'ENGLISH · SINHALA',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=420&q=85'
  },
  {
    name: 'Stefani Fernando',
    languages: 'ENGLISH · FRENCH',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=420&q=85'
  },
  {
    name: 'Sunil Jassan',
    languages: 'ENGLISH · TAMIL',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=420&q=85'
  },
  {
    name: 'Sanna Dissanayaka',
    languages: 'SINHALA · ENGLISH · TAMIL',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=420&q=85'
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = React.useState('Hotels');

  return (
    <>
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 480, sm: 520, md: 600 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 65%',
          zIndex: 0
        }}
      />

      {/* Overlay gradient - dark at top for text contrast, fades to white at bottom */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(6,16,30,0.55) 0%, rgba(6,16,30,0.30) 38%, rgba(6,16,30,0.12) 62%, rgba(255,255,255,0.55) 88%, rgba(255,255,255,0.98) 100%)',
          zIndex: 1
        }}
      />

      {/* Content */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', px: { xs: 1, sm: 2 } }}>
          <Typography
            component="h1"
            sx={{
              fontFamily: 'Noto Serif, serif',
              fontWeight: 800,
              color: '#fff',
              fontSize: { xs: '2.2rem', sm: '2.9rem', md: '3.4rem' },
              lineHeight: 1.15,
              letterSpacing: 0.2,
              textShadow: '0 2px 18px rgba(0,0,0,0.35)',
              mb: 4
            }}
          >
            Discover Your Sri Lanka
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
              color: 'rgba(255,255,255,0.92)',
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              mt: 1.5,
              mb: 10,
              textShadow: '0 1px 10px rgba(0,0,0,0.3)'
            }}
          >
            Exquisite curated travel experiences for the discerning modern explorer.
          </Typography>

          {/* White transparent card wrapping tabs + search bar */}
          <Box
            sx={{
              bgcolor: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: '0 8px 32px rgba(2,6,23,0.25)',
              p: { xs: 2, sm: 2.5 },
              mt: { xs: 0, sm: 2, md: 6 }
            }}
          >
            {/* Tabs */}
            <Box sx={{ display: 'inline-flex', gap: 2, mb: 2.5, flexWrap: 'wrap', justifyContent: 'center' }}>
              {TABS.map((tab) => {
                const isActive = tab === activeTab;
                return (
                  <Button
                    key={tab}
                    disableRipple
                    onClick={() => setActiveTab(tab)}
                    sx={{
                      fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      borderRadius: 4,
                      px: 2.5,
                      py: 1,
                      minWidth: 0,
                      color: isActive ? '#fff' : 'rgba(255,255,255,0.85)',
                      bgcolor: isActive ? 'var(--brand-color)' : 'transparent',
                      boxShadow: isActive ? '0 8px 20px rgba(3,102,214,0.35)' : 'none',
                      '&:hover': {
                        bgcolor: isActive ? 'var(--brand-color)' : 'rgba(255,255,255,0.12)'
                      }
                    }}
                  >
                    {tab}
                  </Button>
                );
              })}
            </Box>

            {/* Search bar */}
            <Box
              sx={{
                bgcolor: 'rgba(255,255,255,0.97)',
                borderRadius: 3,
                boxShadow: '0 20px 50px rgba(2,6,23,0.18)',
                p: { xs: 2, sm: 2.5 },
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'stretch', sm: 'center' },
                gap: { xs: 1.5, sm: 0 },
                mt: { xs: 2, sm: 0, mb: 0.3}
              }}
            >
              {/* Destination */}
              <Box sx={{ flex: 1.4, px: { sm: 1.5 }, textAlign: 'left' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                  <RoomOutlinedIcon sx={{ fontSize: 16, color: 'var(--brand-color)' }} />
                  <Typography sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 0.6, color: 'var(--brand-color)', textTransform: 'uppercase' }}>
                    Destination
                  </Typography>
                </Box>
                <Box
                  component="input"
                  placeholder="Where are you going?"
                  sx={{
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                    fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                    fontSize: '0.95rem',
                    color: '#0f172a',
                    bgcolor: 'transparent',
                    '&::placeholder': { color: 'rgba(15,23,42,0.4)' }
                  }}
                />
              </Box>

              <Box sx={{ display: { xs: 'none', sm: 'block' }, width: '1px', alignSelf: 'stretch', bgcolor: 'rgba(16,24,40,0.08)', mx: 1 }} />

              {/* Check in */}
              <Box sx={{ flex: 1, px: { sm: 1.5 }, textAlign: 'left' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                  <CalendarTodayOutlinedIcon sx={{ fontSize: 14, color: 'var(--brand-color)' }} />
                  <Typography sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 0.6, color: 'var(--brand-color)', textTransform: 'uppercase' }}>
                    Check In
                  </Typography>
                </Box>
                <Box
                  component="input"
                  type="date"
                  sx={{
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                    fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                    fontSize: '0.95rem',
                    color: 'rgba(15,23,42,0.55)',
                    bgcolor: 'transparent'
                  }}
                />
              </Box>

              <Box sx={{ display: { xs: 'none', sm: 'block' }, width: '1px', alignSelf: 'stretch', bgcolor: 'rgba(16,24,40,0.08)', mx: 1 }} />

              {/* Check out */}
              <Box sx={{ flex: 1, px: { sm: 1.5 }, textAlign: 'left' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                  <CalendarTodayOutlinedIcon sx={{ fontSize: 14, color: 'var(--brand-color)' }} />
                  <Typography sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 0.6, color: 'var(--brand-color)', textTransform: 'uppercase' }}>
                    Check Out
                  </Typography>
                </Box>
                <Box
                  component="input"
                  type="date"
                  sx={{
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                    fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                    fontSize: '0.95rem',
                    color: 'rgba(15,23,42,0.55)',
                    bgcolor: 'transparent'
                  }}
                />
              </Box>

              <IconButton
                sx={{
                  bgcolor: 'var(--brand-color)',
                  color: '#fff',
                  width: 52,
                  height: 52,
                  borderRadius: 2.5,
                  ml: { xs: 0, sm: 1 },
                  alignSelf: { xs: 'flex-end', sm: 'center' },
                  boxShadow: '0 10px 24px rgba(3,102,214,0.35)',
                  '&:hover': { bgcolor: 'var(--brand-color)', opacity: 0.9 }
                }}
              >
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>

      <Box
        component="section"
        sx={{
          bgcolor: '#f7f9fb',
          px: { xs: 2, sm: 3, md: 3.5 },
          py: { xs: 5, sm: 6 },
          mt: { xs: 0, md: 1 }
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 2,
              mb: 4
            }}
          >
            <Box>
              <Typography
                component="h2"

                sx={{
                  fontFamily: 'Noto Serif, serif',
                  fontSize: { xs: '1.5rem', sm: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#202124',
                  mb: 1,
                  ml:{ xs: 0, sm: 0.2, md: -5.5}
                }}
              >
                Popular Destinations
              </Typography>
              <Typography
                sx={{
                  maxWidth: 570,
                  fontFamily: 'Manrope, system-ui, sans-serif',
                  color: '#59636e',
                  fontSize: '0.78rem',
                  lineHeight: 1.6,
                  ml: { xs: 0, sm: 0.2, md: -5.5 }
                }}
              >
                Discover the island&apos;s most iconic landscapes, from the bustling heart of<br />
                Colombo to the misty highlands of Ella.
              </Typography>
            </Box>
            <Button
              endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
              sx={{
                flexShrink: 0,
                color: 'var(--brand-color)',
                fontFamily: 'Manrope, system-ui, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'none',
                minWidth: 0,
                marginRight: { xs: 'auto', sm: 0, md: -13.5 },
                p: 0,
                '&:hover': { bgcolor: 'transparent' }
              }}
            >
              View all destinations
            </Button>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: { xs: 2, sm: 2.5, md: 5 },
              ml: { xs: 0, sm: 0.2, md: -5.5 },
              mr: { xs: 0, sm: 0.2, md: -13.5 }
            }}
          >
            {DESTINATIONS.map((destination) => (
              <Box
                key={destination.name}
                sx={{
                  overflow: 'hidden',
                  bgcolor: '#fff',
                  borderRadius: 3,
                  boxShadow: '0 8px 22px rgba(28, 49, 70, 0.07)'
                }}
              >
                <Box sx={{ position: 'relative', height: { xs: 205, sm: 190, md: 208 } }}>
                  <Box
                    component="img"
                    src={destination.image}
                    alt={destination.name}
                    sx={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 13,
                      right: 13,
                      bgcolor: 'rgba(255,255,255,0.94)',
                      borderRadius: 5,
                      px: 1.4,
                      py: 0.55,
                      color: 'var(--brand-color)',
                      fontFamily: 'Manrope, system-ui, sans-serif',
                      fontSize: '0.58rem',
                      fontWeight: 700
                    }}
                  >
                    {destination.type}
                  </Box>
                </Box>
                <Box sx={{ px: 2.6, py: 2.5 }}>
                  <Typography
                    sx={{ fontFamily: 'Noto Serif, serif', fontSize: '1rem', fontWeight: 700, color: '#252525', mb: 0.6 }}
                  >
                    {destination.name}
                  </Typography>
                  <Typography sx={{ fontFamily: 'Manrope, system-ui, sans-serif', color: '#333c46', fontSize: '0.68rem' }}>
                    Starting from <Box component="span" sx={{ color: 'var(--brand-color)', fontWeight: 700 }}>{destination.price}</Box>
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        sx={{
          bgcolor: '#f1f3f5',
          px: { xs: 2, sm: 3, md: 3.5 },
          py: { xs: 5, sm: 6 }
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 2,
              mb: 4
            }}
          >
            <Box>
              <Typography
                component="h2"
                sx={{
                  fontFamily: 'Noto Serif, serif',
                  fontSize: { xs: '1.5rem', sm: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#202124',
                  mb: 1,
                  ml:{ xs: 0, sm: 0.2, md: -5.5}
                }}
              >
                Curated Tour Packages
              </Typography>
              <Typography
                sx={{
                  maxWidth: 570,
                  fontFamily: 'Manrope, system-ui, sans-serif',
                  color: '#59636e',
                  fontSize: '0.78rem',
                  lineHeight: 1.6,
                  ml:{ xs: 0, sm: 0.2, md: -5.5}
                }}
              >
                Immersive experiences hand-picked by local experts to ensure your journey<br />
                through Sri Lanka is nothing short of magical.
              </Typography>
            </Box>
            <Button
              endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
              sx={{
                flexShrink: 0,
                color: 'var(--brand-color)',
                fontFamily: 'Manrope, system-ui, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'none',
                minWidth: 0,
                 marginRight: { xs: 'auto', sm: 0, md: -13.5 },
                p: 0,
                '&:hover': { bgcolor: 'transparent' }
              }}
            >
              View All Journeys
            </Button>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: { xs: 2, sm: 2.5, md: 5 },
              ml: { xs: 0, sm: 0.2, md: -5.5 },
              mr: { xs: 0, sm: 0.2, md: -13.5 }
            }}
          >
            {TOUR_PACKAGES.map((tour) => (
              <Box
                key={tour.name}
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 3,
                  p: 1.5,
                  boxShadow: '0 8px 22px rgba(28, 49, 70, 0.07)'
                }}
              >
                <Box
                  component="img"
                  src={tour.image}
                  alt={tour.name}
                  sx={{
                    width: '100%',
                    height: { xs: 190, sm: 150, md: 200 },
                    display: 'block',
                    objectFit: 'cover',
                    borderRadius: 2
                  }}
                />
                <Box sx={{ px: 0.1, pt: 1.8 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Noto Serif, serif',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#252525',
                      mb: 0.7
                    }}
                  >
                    {tour.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, color: '#59636e', mb: 1.6 }}>
                    <CalendarTodayOutlinedIcon sx={{ fontSize: 13 }} />
                    <Typography sx={{ fontFamily: 'Manrope, system-ui, sans-serif', fontSize: '0.65rem' }}>
                      {tour.duration}
                    </Typography>
                  </Box>
                  <Box sx={{ borderTop: '1px solid #edf0f2', pt: 1.4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontFamily: 'Manrope, system-ui, sans-serif', color: 'var(--brand-color)', fontSize: '0.65rem', fontWeight: 700 }}>
                      {tour.price}
                    </Typography>
                    <Button
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 13 }} />}
                      sx={{ color: 'var(--brand-color)', fontFamily: 'Manrope, system-ui, sans-serif', fontSize: '0.65rem', fontWeight: 700, textTransform: 'none', minWidth: 0, p: 0, '&:hover': { bgcolor: 'transparent' } }}
                    >
                      Details
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ bgcolor: '#f7f8fa', px: { xs: 2, sm: 3, md: 3.5 }, py: { xs: 5, sm: 6 } }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 3.5, sm: 4.5 } }}>
            <Typography component="h2" sx={{ fontFamily: 'Noto Serif, serif', fontSize: { xs: '1.5rem', sm: '1.75rem' }, fontWeight: 700, lineHeight: 1.2, color: '#202124', mb: 1 }}>
              Elite Fleet Rentals
            </Typography>
            <Typography sx={{ maxWidth: 560, mx: 'auto', fontFamily: 'Manrope, system-ui, sans-serif', color: '#59636e', fontSize: '0.78rem', lineHeight: 1.6 }}>
              Travel in unparalleled comfort and style across the island with our meticulously maintained premium fleet.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },  gap: { xs: 2, sm: 2.5, md: 5 }, ml: { xs: 0, sm: 0.2, md: -5.5 }, mr: { xs: 0, sm: 0.2, md: -13.5 }  }}>
            {VEHICLE_RENTALS.map((vehicle) => (
              <Box key={vehicle.name} sx={{ bgcolor: '#fff', borderRadius: 3, p: 2, boxShadow: '0 8px 22px rgba(28, 49, 70, 0.07)', textAlign: 'center' }}>
                <Box component="img" src={vehicle.image} alt={vehicle.name} sx={{ width: '100%', height: { xs: 190, sm: 150, md: 200 }, display: 'block', objectFit: 'cover', mb: 2.2, borderRadius: 2 }} />
                <Typography sx={{ fontFamily: 'Noto Serif, serif', fontSize: '1rem', fontWeight: 700, color: '#252525', mb: 0.5 }}>
                  {vehicle.name}
                </Typography>
                <Typography sx={{ fontFamily: 'Manrope, system-ui, sans-serif', color: 'var(--brand-color)', fontSize: '0.65rem', fontWeight: 700, mb: 2.2 }}>
                  {vehicle.price}
                </Typography>
                <Button fullWidth variant="outlined" sx={{ borderColor: 'var(--brand-color)', borderRadius: 2, color: 'var(--brand-color)', fontFamily: 'Manrope, system-ui, sans-serif', fontSize: '0.65rem', fontWeight: 700, textTransform: 'none', py: 0.7, '&:hover': { borderColor: 'var(--brand-color)', bgcolor: 'rgba(3, 102, 214, 0.05)' } }}>
                  Reserve Now
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        sx={{
          bgcolor: '#f8fafb',
          px: { xs: 2, sm: 3, md: 3.5 },
          py: { xs: 6, sm: 7.5 },
          borderTop: '1px solid #eef1f3'
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5.5 } }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: 'Noto Serif, serif',
                fontSize: { xs: '1.55rem', sm: '1.8rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#202124',
                mb: 1.1
              }}
            >
              Expert Local Guides
            </Typography>
            <Typography
              sx={{
                maxWidth: 500,
                mx: 'auto',
                fontFamily: 'Manrope, system-ui, sans-serif',
                color: '#59636e',
                fontSize: '0.72rem',
                lineHeight: 1.55
              }}
            >
              Connect with passionate storytellers and seasoned explorers who will reveal the hidden<br />
              soul of Sri Lanka.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
              columnGap: { xs: 2, sm: 4, md: 7 },
              rowGap: { xs: 4.5, sm: 0 },
              maxWidth: 1080,
              mx: 'auto'
            }}
          >
            {LOCAL_GUIDES.map((guide) => (
              <Box key={guide.name} sx={{ textAlign: 'center', minWidth: 0 }}>
                <Box
                  sx={{
                    width: { xs: 112, sm: 136, md: 150 },
                    height: { xs: 112, sm: 136, md: 150 },
                    mx: 'auto',
                    mb: 2,
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    bgcolor: '#d9dee1',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    component="img"
                    src={guide.image}
                    alt={guide.name}
                    sx={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', filter: 'grayscale(100%)' }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'Noto Serif, serif',
                    fontSize: { xs: '0.85rem', sm: '0.95rem' },
                    fontWeight: 700,
                    color: '#252525',
                    whiteSpace: 'nowrap',
                    mb: 0.55
                  }}
                >
                  {guide.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Manrope, system-ui, sans-serif',
                    color: '#59636e',
                    fontSize: { xs: '0.48rem', sm: '0.54rem' },
                    letterSpacing: 0.15,
                    whiteSpace: 'nowrap',
                    mb: 0.85
                  }}
                >
                  {guide.languages}
                </Typography>
                <Typography sx={{ fontFamily: 'Manrope, sans-serif', color: '#252525', fontSize: '0.6rem', fontWeight: 600 }}>
                  <Box component="span" sx={{ color: '#f5b400', fontSize: '0.8rem', mr: 0.35 }}>★</Box>
                  {guide.rating}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}