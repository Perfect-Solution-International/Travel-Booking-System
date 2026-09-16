'use client';

import React from 'react';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const filters = [
  {
    title: 'Property type',
    items: ['Hotel', 'Villa', 'Apartment', 'Resort'],
    checked: ['Hotel', 'Resort'],
  },
  {
    title: 'Category',
    items: ['Free Wi-Fi', 'Pool', 'AC', 'Beach'],
    checked: ['Free Wi-Fi', 'Pool'],
  },
  {
    title: 'Price range',
    items: ['Under LKR 50,000', 'LKR 50,000 - 70,000', 'Over LKR 70,000'],
  },
  {
    title: 'Rating',
    items: ['★★★★☆', '★★★★★'],
  },
];

const hotels = [
  {
    name: 'Cloud Nine Retreat',
    location: 'Ella, Central Highlands',
    rating: '4.9',
    price: 'LKR 45,000',
    type: 'Resort',
    badge: 'Mountain View',
    image: '/Hotel%201.png',
    amenities: ['wifi', 'pool', 'parking'],
  },
  {
    name: 'Azure Shore Villa',
    location: 'Bentota, South Coast',
    rating: '4.8',
    price: 'LKR 68,000',
    type: 'Villa',
    badge: 'Beachfront',
    image: '/Hotel%202.png',
    amenities: ['wifi', 'pool', 'beach'],
  },
  {
    name: 'Safari Sky Lodge',
    location: 'Yala National Park',
    rating: '4.7',
    price: 'LKR 38,000',
    type: 'Hotel',
    badge: 'Wilderness',
    image: '/Hotel%203.png',
    amenities: ['wifi', 'pool', 'parking'],
  },
  {
    name: 'The Fort Manor',
    location: 'Galle, Fort',
    rating: '5.0',
    price: 'LKR 52,000',
    type: 'Hotel',
    badge: 'Heritage',
    image: '/Hotel%204.png',
    amenities: ['wifi', 'pool', 'beach'],
  },
];

function AmenityIcon({ type }: { type: string }) {
  switch (type) {
    case 'wifi':
      return <WifiOutlinedIcon sx={{ fontSize: 15 }} />;
    case 'pool':
      return <PoolOutlinedIcon sx={{ fontSize: 15 }} />;
    case 'parking':
      return <LocalParkingOutlinedIcon sx={{ fontSize: 15 }} />;
    case 'beach':
      return <BeachAccessOutlinedIcon sx={{ fontSize: 15 }} />;
    default:
      return <WifiOutlinedIcon sx={{ fontSize: 15 }} />;
  }
}

export default function HotelPage() {
  const [mobileFilterOpen, setMobileFilterOpen] = React.useState(false);
  const [sortBy, setSortBy] = React.useState('all');
  const [selectedFilters, setSelectedFilters] = React.useState<Record<string, string[]>>({});

  const toggleFilter = (title: string, item: string) => {
    setSelectedFilters((current) => {
      const selectedItems = current[title] ?? [];
      const nextItems = selectedItems.includes(item)
        ? selectedItems.filter((selectedItem) => selectedItem !== item)
        : [...selectedItems, item];

      if (nextItems.length === 0) {
        const next = { ...current };
        delete next[title];
        return next;
      }

      return { ...current, [title]: nextItems };
    });
  };

  const filteredHotels = React.useMemo(() => hotels.filter((hotel) => {
    const price = Number(hotel.price.replace(/[^0-9]/g, ''));
    const propertyTypes = selectedFilters['Property type'] ?? [];
    const categories = selectedFilters.Category ?? [];
    const priceRanges = selectedFilters['Price range'] ?? [];
    const ratings = selectedFilters.Rating ?? [];

    const matchesType = propertyTypes.length === 0 || propertyTypes.includes(hotel.type);
    const matchesCategory = categories.length === 0 || categories.some((category) => (
      (category === 'Free Wi-Fi' && hotel.amenities.includes('wifi')) ||
      (category === 'Pool' && hotel.amenities.includes('pool')) ||
      (category === 'AC' && hotel.amenities.includes('ac')) ||
      (category === 'Beach' && hotel.amenities.includes('beach'))
    ));
    const matchesPrice = priceRanges.length === 0 || priceRanges.some((range) => (
      (range === 'Under LKR 50,000' && price < 50000) ||
      (range === 'LKR 50,000 - 70,000' && price >= 50000 && price <= 70000) ||
      (range === 'Over LKR 70,000' && price > 70000)
    ));
    const matchesRating = ratings.length === 0 || ratings.some((rating) => (
      (rating === '★★★★☆' && Number(hotel.rating) >= 4.5) ||
      (rating === '★★★★★' && Number(hotel.rating) >= 4.9)
    ));

    return matchesType && matchesCategory && matchesPrice && matchesRating;
  }), [selectedFilters]);

  const sortedHotels = React.useMemo(() => {
    const orderedHotels = [...filteredHotels];

    if (sortBy === 'price-low') {
      return orderedHotels.sort((a, b) => Number(a.price.replace(/[^0-9]/g, '')) - Number(b.price.replace(/[^0-9]/g, '')));
    }

    if (sortBy === 'rating') {
      return orderedHotels.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    return orderedHotels;
  }, [filteredHotels, sortBy]);

  const renderFilters = () => (
    <>
      {filters.map((group) => (
        <Box key={group.title} sx={{ mb: 2.8 }}>
          <Typography
            sx={{
              fontWeight: 800,
              color: '#1f2937',
              fontSize: '0.74rem',
              mb: 0.8,
            }}
          >
            {group.title}
          </Typography>

          <Stack spacing={0}>
            {group.items.map((item) => {
              const checked = (selectedFilters[group.title] ?? []).includes(item);
              return (
                <FormControlLabel
                  key={item}
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={() => toggleFilter(group.title, item)}
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 16 },
                        color: '#c1c9d7',
                        '&.Mui-checked': { color: '#0056D2' },
                      }}
                    />
                  }
                  label={<Typography sx={{ fontSize: '0.76rem', color: '#3b485b' }}>{item}</Typography>}
                  sx={{ m: 0 }}
                />
              );
            })}
          </Stack>
        </Box>
      ))}
    </>
  );

  return (
    <Box sx={{ minHeight: '100vh', background: '#f3f3f3', pb: 4 }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: { xs: 260, md: 360 },
          overflow: 'hidden',
          backgroundImage:
            'linear-gradient(180deg, rgba(29,40,74,0.18), rgba(8,15,30,0.12)), url(/Hotel%20hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          display: 'flex',
          alignItems: 'flex-end',
          filter: 'saturate(1.08) contrast(1.08) brightness(1.08)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(27,22,52,0.20), rgba(7,16,28,0.18))',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pb: { xs: 4, md: 5 }, px: { xs: 2, md: 3 } }}>
          <Box sx={{ maxWidth: 760, color: '#fff' }}>
            <Typography
              component="h1"
              sx={{
                fontFamily: 'Noto Serif, serif',
                fontWeight: 800,
                color: '#fff',
                fontSize: { xs: '2.0rem', sm: '2.5rem', md: '3.0rem' },
                lineHeight: 1.08,
                letterSpacing: 0.1,
                textShadow: '0 2px 18px rgba(0,0,0,0.35)',
                mt: 10.8,
                mb: 1,
                transform: 'translateY(-8px)',
              }}
            >
              Refined Stays in Paradise
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                color: 'rgba(255,255,255,0.92)',
                fontSize: { xs: '0.72rem', sm: '0.9rem' },
                mt: 1.0,
                mb: 12,
                textShadow: '0 1px 10px rgba(0,0,0,0.3)',
              }}
            >
              Discover curated luxury escapes across the island.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -1, position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '240px minmax(0, 1fr)' },
            gap: 2.5,
            alignItems: 'start',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              background: '#fff',
              borderRadius: 2,
              border: '1px solid #dfe9f4',
              boxShadow: '0 10px 18px rgba(15,23,42,0.03)',
              p: 2,
              mt:5.5
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                color: '#64748b',
                textTransform: 'uppercase',
                mb: 1.5,
              }}
            >
              Filters
            </Typography>

            {renderFilters()}
          </Box>

          <Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'center' },
                gap: 2,
                flexWrap: 'wrap',
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Noto Serif, serif',
                  fontSize: { xs: '1.5rem', sm: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#202124',
                  mt:{xs: 2.5, md: 5.5}
                }}
              >
                Experience Sri Lanka
              </Typography>

              <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'space-between', gap: 1, width: '100%', ml: 0 }}>
                <Button
                  variant="outlined"
                  startIcon={<FilterAltOutlinedIcon sx={{ fontSize: 18 }} />}
                  onClick={() => setMobileFilterOpen((open) => !open)}
                  sx={{
                    borderRadius: 2,
                    borderColor: '#dbe1ea',
                    color: '#111827',
                    background: '#fff',
                    textTransform: 'none',
                    fontWeight: 700,
                    px: 1.3,
                    py: 0.8,
                    minWidth: 0,
                    '&:hover': { borderColor: '#bfd3f5', background: '#f8fbff' },
                  }}
                >
                  Filters
                </Button>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    background: '#fff',
                    border: '1px solid #e7edf5',
                    borderRadius: 2,
                    px: 1,
                    py: 0.55,
                  }}
                >
                  <Typography sx={{ fontSize: '0.65rem', color: '#6b7280', fontWeight: 700 }}>
                    Sort by:
                  </Typography>

                  <FormControl size="small" sx={{ minWidth: 110 }}>
                    <Select
                      value={sortBy}
                      onChange={(event) => setSortBy(event.target.value)}
                      sx={{
                        fontSize: '0.68rem',
                        height: 28,
                        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        '& .MuiSelect-select': { padding: '0 8px 0 0' },
                      }}
                    >
                      <MenuItem sx={{ fontSize: '0.68rem' }} value="all">All</MenuItem>
                      <MenuItem sx={{ fontSize: '0.68rem' }} value="recommended">Recommended</MenuItem>
                      <MenuItem sx={{ fontSize: '0.68rem' }} value="price-low">Price: low to high</MenuItem>
                      <MenuItem sx={{ fontSize: '0.68rem' }} value="rating">Top Rated</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  gap: 3,
                  background: '#fff',
                  border: '1px solid #e7edf5',
                  borderRadius: 2,
                  px: 1.2,
                  py: 0.7,
                  mt: { xs: 0.5, md: 5.5 },
                }}
              >
                <Typography sx={{ fontSize: '0.7rem', color: '#6b7280', fontWeight: 700 }}>
                  Sort by:
                </Typography>

                <FormControl size="small" sx={{ minWidth: 160 }}>
                  <Select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    sx={{
                      fontSize: '0.72rem',
                      height: 30,
                      '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                      '& .MuiSelect-select': { padding: '0 8px 0 0' },
                    }}
                  >
                    <MenuItem sx={{ fontSize: '0.68rem' }} value="all">All</MenuItem>
                    <MenuItem sx={{ fontSize: '0.68rem' }} value="recommended">Recommended</MenuItem>
                    <MenuItem sx={{ fontSize: '0.68rem' }} value="price-low">Price: low to high</MenuItem>
                    <MenuItem sx={{ fontSize: '0.68rem' }} value="rating">Top Rated</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            {mobileFilterOpen && (
              <Box
                sx={{
                  display: { xs: 'block', md: 'none' },
                  background: '#fff',
                  borderRadius: 2,
                  border: '1px solid #dfe9f4',
                  boxShadow: '0 10px 18px rgba(15,23,42,0.03)',
                  p: 2,
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    color: '#64748b',
                    textTransform: 'uppercase',
                    mb: 1.5,
                  }}
                >
                  Filters
                </Typography>

                {renderFilters()}
              </Box>
            )}

            <Typography sx={{ color: '#6b7280', fontSize: '0.8rem', mb: 5, mt:{ xs: 0, md: -1 } }}>
              Showing {sortedHotels.length} {sortedHotels.length === 1 ? 'property' : 'properties'} matched to your ideal stay.
            </Typography>

            <Grid container spacing={2.4}>
              {sortedHotels.map((hotel) => (
                <Grid key={hotel.name} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      overflow: 'hidden',
                      border: '1px solid #e7edf5',
                      boxShadow: '0 10px 24px rgba(15, 23, 42, 0.03)',
                      background: '#fff',
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia component="img" height="190" image={hotel.image} alt={hotel.name} />

                      <Button
                        aria-label="Add to wishlist"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          minWidth: 0,
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.5)',
                          color: '#FF383C',
                          boxShadow: '0 8px 18px rgba(15, 23, 42, 0.12)',
                          p: 0,
                          '&:hover': { background: '#fff' },
                        }}
                      >
                        <FavoriteBorderOutlinedIcon sx={{ fontSize: 18 }} />
                      </Button>

                      <Box
                        sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          background: 'rgba(255,255,255,0.82)',
                          borderRadius: 1,
                          px: 1,
                          py: 0.5,
                          fontSize: '0.6rem',
                          fontWeight: 800,
                          color: '#0056D2',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {hotel.badge}
                      </Box>

                    </Box>

                    <Box sx={{ p: 1.7 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <Typography sx={{  fontFamily: 'Noto Serif, serif', fontSize: '1rem', fontWeight: 700, color: '#252525' }}>{hotel.name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4, color: '#f59e0b' }}>
                          <StarIcon sx={{ fontSize: 16 }} />
                          <Typography sx={{ fontWeight: 700, fontSize: '0.72rem', color: '#111827' }}>{hotel.rating}</Typography>
                        </Box>
                      </Box>

                      <Typography sx={{ color: '#6b7280', fontSize: '0.72rem', mb: 1.2 }}>
                        {hotel.location}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.4 }}>
                        {hotel.amenities.map((amenity) => (
                          <Box
                            key={`${hotel.name}-${amenity}`}
                            sx={{
                              width: 26,
                              height: 26,
                              borderRadius: '50%',
                              background: '#f3f7ff',
                              color: '#0056D2',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <AmenityIcon type={amenity} />
                          </Box>
                        ))}
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 1.2 }}>
                        <Box>
                          <Typography sx={{ color: '#6b7280', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
                            Starting from
                          </Typography>
                          <Typography sx={{ color: '#111827', fontWeight: 800, fontSize: '1.05rem' }}>{hotel.price}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Button
                            component={NextLink}
                            href={`/hotel/${hotel.name.toLowerCase().replace(/\s+/g, '-')}`}
                            variant="contained"
                            sx={{
                              background: '#0056D2',
                              borderRadius: 2,
                              textTransform: 'none',
                              fontWeight: 700,
                              boxShadow: 'none',
                              px: 1.4,
                              py: 0.7,
                              fontSize: '0.70rem',
                              minWidth: 0,
                              '&:hover': { background: '#004ab7' },
                            }}
                          >
                            View Details
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
              {sortedHotels.length === 0 && (
                <Grid size={{ xs: 12 }}>
                  <Box sx={{ py: 6, textAlign: 'center', background: '#fff', border: '1px solid #e7edf5', borderRadius: 3 }}>
                    <Typography sx={{ fontFamily: 'Noto Serif, serif', fontSize: '1.1rem', fontWeight: 700, color: '#252525' }}>No stays found</Typography>
                    <Typography sx={{ color: '#6b7280', fontSize: '.76rem', mt: .6 }}>Try changing your selected filters.</Typography>
                  </Box>
                </Grid>
              )}
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Stack direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  sx={{
                    minWidth: 34,
                    width: 34,
                    height: 34,
                    borderRadius: 1.5,
                    color: '#374151',
                    borderColor: '#dbe1ea',
                    background: '#fff',
                    p: 0,
                  }}
                >
                  <ChevronLeftIcon sx={{ fontSize: 16 }} />
                </Button>

                {[1, 2, 3].map((page, index) => (
                  <Button
                    key={page}
                    variant={index === 0 ? 'contained' : 'outlined'}
                    sx={{
                      minWidth: 34,
                      width: 34,
                      height: 34,
                      borderRadius: 1.5,
                      p: 0,
                      background: index === 0 ? '#eff6ff' : '#fff',
                      color: index === 0 ? '#0056D2' : '#374151',
                      borderColor: '#dbe1ea',
                      boxShadow: 'none',
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      textTransform: 'none',
                    }}
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outlined"
                  sx={{
                    minWidth: 34,
                    width: 34,
                    height: 34,
                    borderRadius: 1.5,
                    color: '#374151',
                    borderColor: '#dbe1ea',
                    background: '#fff',
                    p: 0,
                  }}
                >
                  <ChevronRightIcon sx={{ fontSize: 16 }} />
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
