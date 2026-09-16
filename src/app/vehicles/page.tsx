'use client';

import React from 'react';
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
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const vehicles = [
	{ name: 'Toyota Axio', type: 'Sedan', price: 'LKR 8,000', badge: 'Reliable Choice', image: '/vehicles1.png', seats: '5 Seats', drive: 'Automatic', luggage: 'Petrol' },
	{ name: 'Honda Vezel', type: 'SUV', price: 'LKR 12,500', badge: 'Eco Hybrid', image: '/vehicles2.png', seats: '5 Seats', drive: 'Automatic', luggage: 'Hybrid' },
	{ name: 'Toyota Rav4', type: 'SUV', price: 'LKR 18,000', badge: 'Adventure Ready', image: '/vehicles3.png', seats: '5 Seats', drive: 'Automatic', luggage: 'Petrol' },
	{ name: 'Toyota Hiace', type: 'Van', price: 'LKR 25,000', badge: 'Group Travel', image: '/vehicles4.png', seats: '12 Seats', drive: 'Manual/Auto', luggage: 'Diesel' },
];

function Filters() {
	const checkboxSx = {
		'& .MuiSvgIcon-root': { fontSize: 16 },
		color: '#c1c9d7',
		'&.Mui-checked': { color: '#0056D2' },
	};
	const labelSx = { m: 0 };
	const textSx = { fontSize: '0.76rem', color: '#3b485b' };

	return <Box sx={{ background: '#fff', borderRadius: 2, border: '1px solid #dfe9f4', boxShadow: '0 10px 18px rgba(15,23,42,0.03)', p: 2 }}>
		<Typography sx={{ fontWeight: 800, fontSize: '0.72rem', letterSpacing: '0.14em', color: '#64748b', textTransform: 'uppercase', mb: 1.5 }}>Filters</Typography>
		<Box sx={{ mb: 2.8 }}>
			<Typography sx={{ fontWeight: 800, color: '#1f2937', fontSize: '0.74rem', mb: 0.8 }}>Vehicle type</Typography>
			{['Sedans', 'SUVs', 'Vans'].map((item) => <FormControlLabel key={item} control={<Checkbox size="small" defaultChecked={item === 'SUVs'} sx={checkboxSx} />} label={<Typography sx={textSx}>{item}</Typography>} sx={{ ...labelSx, display: 'flex' }} />)}
		</Box>
		<Box sx={{ mb: 2.8 }}>
			<Typography sx={{ fontWeight: 800, color: '#1f2937', fontSize: '0.74rem', mb: 0.8 }}>Transmission</Typography>
			{['Automatic', 'Manual'].map((item) => <FormControlLabel key={item} control={<Radio size="small" defaultChecked={item === 'Automatic'} sx={checkboxSx} />} label={<Typography sx={textSx}>{item}</Typography>} sx={labelSx} />)}
		</Box>
		<Box>
			<Typography sx={{ fontWeight: 800, color: '#1f2937', fontSize: '0.74rem', mb: 0.8 }}>Capacity</Typography>
			{['2 Seats', '5 Seats', '7+ Seats'].map((item) => <FormControlLabel key={item} control={<Checkbox size="small" defaultChecked={item === '5 Seats'} sx={checkboxSx} />} label={<Typography sx={textSx}>{item}</Typography>} sx={{ ...labelSx, display: 'flex' }} />)}
		</Box>
	</Box>;
}

export default function VehiclesPage() {
	const [mobileFilterOpen, setMobileFilterOpen] = React.useState(false);
	const [searchTerm, setSearchTerm] = React.useState('');
	const filteredVehicles = vehicles.filter((vehicle) =>
		`${vehicle.name} ${vehicle.type} ${vehicle.drive} ${vehicle.luggage}`.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<Box sx={{ minHeight: '100vh', background: '#f3f3f3', pb: 4 }}>
			<Box sx={{ position: 'relative', minHeight: { xs: 260, md: 360 }, overflow: 'hidden', backgroundImage: 'linear-gradient(90deg, rgba(8,21,39,.72) 0%, rgba(8,21,39,.34) 38%, rgba(8,21,39,.06) 72%), linear-gradient(180deg, rgba(10,20,35,.08), rgba(10,20,35,.28)), url(/vehicles.png)', backgroundSize: 'cover', backgroundPosition: { xs: '58% center', md: 'center 58%' }, display: 'flex', alignItems: 'center' }}><Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 3 } }}><Box sx={{ maxWidth: { xs: 330, md: 420 }, color: '#fff' }}><Typography component="h1" sx={{ whiteSpace: 'nowrap', fontFamily: 'Noto Serif, serif', fontWeight: 800, fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }, lineHeight: 1.08, textShadow: '0 2px 18px rgba(0,0,0,.35)', mb: 1 }}>Explore the Fleet</Typography><Typography sx={{ color: 'rgba(255,255,255,.92)', fontSize: { xs: '.72rem', sm: '.9rem' }, textShadow: '0 1px 10px rgba(0,0,0,.3)' }}>Find the perfect wheels for every Sri Lankan adventure.</Typography></Box></Container></Box>

			<Container maxWidth="lg" sx={{ mt: -1, position: 'relative', zIndex: 2 }}><Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '240px minmax(0, 1fr)' }, gap: 2.5, alignItems: 'start' }}><Box sx={{ display: { xs: 'none', md: 'block' }, mt: 5.5 }}><Filters /></Box>

					<Box>
						<Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 2, flexWrap: 'wrap', mb: { xs: 3, md: 5 } }}>
							<Box><Typography sx={{ fontFamily: 'Noto Serif, serif', fontSize: { xs: '1.5rem', sm: '1.75rem' }, fontWeight: 700, color: '#202124', mt: { xs: 2.5, md: 5.5 } }}>Explore Fleet</Typography><Typography sx={{ color: '#6b7280', fontSize: '0.72rem', mt: .25 }}>Curated premium rentals for your Sri Lankan journey.</Typography>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: { xs: '100%', md: 'auto' }, mt: { xs: 0, md: 5.5 } }}>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: 3, background: '#fff', border: '1px solid #e7edf5', borderRadius: 2, px: 1.2, py: .7 }}><Typography sx={{ fontSize: '.7rem', color: '#6b7280', fontWeight: 700, whiteSpace: 'nowrap' }}>Sort by:</Typography><FormControl size="small" sx={{ minWidth: 160 }}><Select defaultValue="price" sx={{ fontSize: '.72rem', height: 30, '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, '& .MuiSelect-select': { padding: '0 8px 0 0' } }}><MenuItem sx={{ fontSize: '0.68rem' }} value="price">Price: Low to High</MenuItem><MenuItem sx={{ fontSize: '0.68rem' }} value="recommended">Recommended</MenuItem></Select></FormControl>
								</Box>
							</Box>
						</Box>

						{mobileFilterOpen && <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 2 }}><Filters /></Box>}
						<Grid container spacing={2.4}>
							{filteredVehicles.map((vehicle) => (
								<Grid key={vehicle.name} size={{ xs: 12, sm: 6, md: 4 }}>
									<Card elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, overflow: 'hidden', border: '1px solid #e7edf5', boxShadow: '0 10px 24px rgba(15, 23, 42, 0.03)', background: '#fff', '& .MuiSvgIcon-root': { stroke: 'currentColor', strokeWidth: 0.45 } }}>
										<Box sx={{ position: 'relative' }}>
											<CardMedia component="img" height="190" image={vehicle.image} alt={vehicle.name} sx={{ objectFit: 'cover' }} />
											<Box sx={{ position: 'absolute', top: 12, left: 12, background: 'rgba(255,255,255,0.86)', borderRadius: 1, px: 1, py: 0.5, fontSize: '0.6rem', fontWeight: 800, color: '#0056D2', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{vehicle.badge}</Box>
											<Button aria-label={`Add ${vehicle.name} to wishlist`} sx={{ position: 'absolute', top: 12, right: 12, minWidth: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.5)', color: '#FF383C', boxShadow: '0 8px 18px rgba(15, 23, 42, 0.12)', p: 0, '&:hover': { background: '#fff' } }}><FavoriteBorderOutlinedIcon sx={{ fontSize: 18 }} /></Button>
										</Box>
										<Box sx={{ p: 1.7, display: 'flex', flexDirection: 'column', flex: 1 }}><Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap', gap: 1, mb: .7 }}><Typography sx={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: 'Noto Serif, serif', fontSize: { xs: '.9rem', sm: '1rem' }, fontWeight: 700, color: '#252525' }}>{vehicle.name}</Typography><Box sx={{ flexShrink: 0, textAlign: 'right', whiteSpace: 'nowrap' }}><Typography sx={{ color: '#111827', fontSize: { xs: '.95rem', sm: '1.05rem' }, fontWeight: 800 }}>{vehicle.price}</Typography><Typography sx={{ color: '#6b7280', fontSize: '.6rem' }}>/ day</Typography></Box></Box><Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.8, color: '#4b5565' }}><Box sx={{ display: 'flex', alignItems: 'center', gap: .35 }}><Box sx={{ width: 26, height: 26, borderRadius: '50%', background: '#f3f7ff', color: '#0056D2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><PersonOutlineOutlinedIcon sx={{ fontSize: 15 }} /></Box><Typography sx={{ color: '#4b5565', fontSize: '.72rem' }}>{vehicle.seats}</Typography></Box><Box sx={{ display: 'flex', alignItems: 'center', gap: .35 }}><Box sx={{ width: 26, height: 26, borderRadius: '50%', background: '#f3f7ff', color: '#0056D2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FilterListOutlinedIcon sx={{ fontSize: 15 }} /></Box><Typography sx={{ color: '#4b5565', fontSize: '.72rem' }}>{vehicle.drive}</Typography></Box><Box sx={{ display: 'flex', alignItems: 'center', gap: .35 }}><Box sx={{ width: 26, height: 26, borderRadius: '50%', background: '#f3f7ff', color: '#0056D2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LuggageOutlinedIcon sx={{ fontSize: 15 }} /></Box><Typography sx={{ color: '#4b5565', fontSize: '.72rem' }}>{vehicle.luggage}</Typography></Box></Box><Button fullWidth variant="contained" sx={{ height: 40, minHeight: 40, background: '#0056D2', borderRadius: 1.5, textTransform: 'none', fontWeight: 700, boxShadow: 'none', py: 0, fontSize: '.7rem', mt: 'auto', '&:hover': { background: '#004ab7' } }}>Rent Now</Button>
										</Box>
									</Card>
								</Grid>
							))}
						</Grid>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}