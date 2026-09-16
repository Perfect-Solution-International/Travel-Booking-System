import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const guides = [
	{ name: 'Nimal Perera', rating: '4.9', specialty: 'CULTURAL & WILDLIFE SPECIALIST', languages: 'English, Sinhala, German', experience: '12 Years Experience', price: 'LKR 8,500', image: '/guide1.png' },
	{ name: 'Sunil Dissanayake', rating: '4.8', specialty: 'HERITAGE & HISTORY EXPERT', languages: 'English, Sinhala, French', experience: '15 Years Experience', price: 'LKR 7,000', image: '/guide2.png' },
	{ name: 'Anoma Wijesinghe', rating: '5.0', specialty: 'ADVENTURE & ECO-TOURISM', languages: 'English, Sinhala, Japanese', experience: '8 Years Experience', price: 'LKR 9,200', image: '/guide3.png' },
	{ name: 'Aruna Bandara', rating: '4.7', specialty: 'COASTAL & WATERSPORTS', languages: 'English, Sinhala', experience: '6 Years Experience', price: 'LKR 6,500', image: '/guide4.png' },
	{ name: 'Gamini K.', rating: '4.9', specialty: 'SPIRITUAL & ARCHAEOLOGY GUIDE', languages: 'English, Sinhala, Tamil', experience: '22 Years Experience', price: 'LKR 10,000', image: '/guide5.png' },
	{ name: 'Tharushi M.', rating: '4.9', specialty: 'CULINARY & LOCAL LIFE EXPERT', languages: 'English, Sinhala, Mandarin', experience: '5 Years Experience', price: 'LKR 7,500', image: '/guide6.png' },
];

export default function GuidesPage() {
	return (
		<Box sx={{ minHeight: '100vh', background: '#f5f6f8', pb: 4 }}>
			<Box sx={{ width: '100%', minHeight: { xs: 260, md: 360 }, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'flex-end', backgroundImage: 'linear-gradient(180deg, rgba(29,40,74,.08), rgba(8,15,30,.18)), linear-gradient(90deg, rgba(15,25,26,.64), rgba(15,25,26,.24) 45%, rgba(15,25,26,0) 78%), url(/guide.png)', backgroundSize: 'cover', backgroundPosition: { xs: 'center 46%', md: 'center 45%' } }}>
				<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pb: { xs: 6, md: 8 }, px: { xs: 2, md: 3 } }}>
					<Box sx={{ maxWidth: { xs: 380, md: 600 }, color: '#fff' }}>
						<Typography component="h1" sx={{ fontFamily: 'Noto Serif, serif', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, lineHeight: 1.08, fontWeight: 800, letterSpacing: 0.1, mb: 1, textShadow: '0 2px 18px rgba(0,0,0,.35)' }}>Discover Sri Lanka with Local Experts</Typography>
						<Typography sx={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', fontSize: { xs: '.72rem', md: '.9rem' }, lineHeight: 1.55, mt: 1, color: 'rgba(255,255,255,.92)', textShadow: '0 1px 10px rgba(0,0,0,.3)' }}>Curated, certified guides to make your journey through the Pearl of the Indian Ocean truly unforgettable.</Typography>
					</Box>
				</Container>
			</Box>

			<Container maxWidth="lg" sx={{ mt: -1, position: 'relative', zIndex: 2 }}>
				<Box sx={{ mt: { xs: 2, md: 3 }, p: { xs: 2, md: 2.5 }, background: '#fff', borderRadius: 2, boxShadow: '0 8px 24px rgba(15,23,42,.05)' }}>
					<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1.1fr 1.1fr 1.1fr auto' }, gap: 2, alignItems: 'end' }}>
						<Box><Typography sx={{ fontSize: '.7rem', color: '#526173', fontWeight: 700, mb: .6 }}>Location</Typography><TextField fullWidth size="small" placeholder="e.g. Kandy, Galle" slotProps={{ input: { startAdornment: <InputAdornment position="start"><LocationOnOutlinedIcon sx={{ fontSize: 18, color: '#64748b' }} /></InputAdornment> } }} sx={{ '& .MuiOutlinedInput-root': { height: 42, background: '#f7f8fb', borderRadius: 1.2, fontSize: '.72rem' } }} /></Box>
						<Box><Typography sx={{ fontSize: '.7rem', color: '#526173', fontWeight: 700, mb: .6 }}>Language Spoken</Typography><FormControl fullWidth size="small"><Select defaultValue="any" startAdornment={<InputAdornment position="start"><LanguageOutlinedIcon sx={{ fontSize: 18, color: '#64748b', ml: .5 }} /></InputAdornment>} sx={{ height: 42, background: '#f7f8fb', borderRadius: 1.2, fontSize: '.72rem' }}><MenuItem sx={{ fontSize: '.68rem' }} value="any">Any Language</MenuItem><MenuItem sx={{ fontSize: '.68rem' }} value="english">English</MenuItem><MenuItem sx={{ fontSize: '.68rem' }} value="sinhala">Sinhala</MenuItem></Select></FormControl></Box>
						<Box><Typography sx={{ fontSize: '.7rem', color: '#526173', fontWeight: 700, mb: .6 }}>Experience Level</Typography><FormControl fullWidth size="small"><Select defaultValue="all" startAdornment={<InputAdornment position="start"><AutoAwesomeOutlinedIcon sx={{ fontSize: 18, color: '#64748b', ml: .5 }} /></InputAdornment>} sx={{ height: 42, background: '#f7f8fb', borderRadius: 1.2, fontSize: '.72rem' }}><MenuItem sx={{ fontSize: '.68rem' }} value="all">All Levels</MenuItem><MenuItem sx={{ fontSize: '.68rem' }} value="certified">Certified</MenuItem><MenuItem sx={{ fontSize: '.68rem' }} value="expert">Expert</MenuItem></Select></FormControl></Box>
						<Button variant="contained" startIcon={<SearchOutlinedIcon sx={{ fontSize: 17 }} />} sx={{ height: 42, minWidth: { xs: '100%', md: 150 }, borderRadius: 1.4, background: '#0056D2', textTransform: 'none', fontWeight: 700, fontSize: '.7rem', boxShadow: 'none', '&:hover': { background: '#004ab7' } }}>Search Guides</Button>
					</Box>
				</Box>
 
				<Box sx={{ mt: { xs: 4, md: 5 } }}>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 2, mb: 2.2 }}>
					</Box>

					<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' }, gap: { xs: 1.5, md: 2 } }}>
						{guides.map((guide) => (
							<Box key={guide.name} sx={{ minWidth: 0, display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid #edf0f4', borderRadius: 2, p: { xs: 1.7, md: 2 }, boxShadow: '0 8px 22px rgba(15,23,42,.025)' }}>
								<Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2, minHeight: 70 }}>
									<Avatar src={guide.image} alt={guide.name} sx={{ width: 64, height: 64, flexShrink: 0, border: '1px solid #edf0f4' }} />
									<Box sx={{ minWidth: 0, flex: 1 }}>
										<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: .5 }}>
											<Typography sx={{ fontFamily: 'Noto Serif, serif', fontSize: '1.02rem', lineHeight: 1.2, fontWeight: 700, color: '#252525' }}>{guide.name}</Typography>
											<Box sx={{ display: 'flex', alignItems: 'center', gap: .15, color: '#f59e0b', flexShrink: 0 }}><StarIcon sx={{ fontSize: 16 }} /><Typography sx={{ fontSize: '0.72rem', color: '#111827', fontWeight: 700 }}>{guide.rating}</Typography></Box>
										</Box>
										<Typography sx={{ color: '#53657a', fontSize: '.55rem', lineHeight: 1.3, letterSpacing: '.02em', mt: .45 }}>{guide.specialty}</Typography>
									</Box>
								</Box>

			 					<Box sx={{ mt: 2.2, display: 'grid', gap: 1.05 }}>
									<Box sx={{ display: 'flex', alignItems: 'center', gap: .8, color: '#0056D2' }}><LanguageOutlinedIcon sx={{ fontSize: 15 }} /><Typography sx={{ color: '#4b5565', fontSize: '.66rem' }}>{guide.languages}</Typography></Box>
									<Box sx={{ display: 'flex',  alignItems: 'center', gap: .8, color: '#0056D2' }}><AccessTimeOutlinedIcon sx={{ fontSize: 15 }} /><Typography sx={{ color: '#4b5565', fontSize: '.66rem' }}>{guide.experience}</Typography></Box>
									<Box sx={{ display: 'flex', alignItems: 'center', gap: .8, color: '#0056D2' }}><PaymentsOutlinedIcon sx={{ fontSize: 15 }} /><Typography sx={{ color: '#252525', fontSize: '.7rem', fontWeight: 800 }}>{guide.price} <Box component="span" sx={{ fontWeight: 600 }}>/ day</Box></Typography></Box>
								</Box>

								<Button variant="contained" fullWidth sx={{ mt: 2.3, height: 35, borderRadius: 1.2, background: '#0056D2', textTransform: 'none', fontSize: '.68rem', boxShadow: 'none', '&:hover': { background: '#004ab7', boxShadow: 'none' } }}>Hire Guide</Button>
							</Box>
						))}
					</Box>

					<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: .8 }}>
							<Button aria-label="Previous page" variant="outlined" sx={{ minWidth: 34, width: 34, height: 34, borderRadius: 1.2, color: '#374151', borderColor: '#dbe1ea', background: '#fff', p: 0 }}><ChevronLeftIcon sx={{ fontSize: 17 }} /></Button>
							{[1, 2, 3].map((page, index) => (
								<Button key={page} variant={index === 0 ? 'contained' : 'outlined'} sx={{ minWidth: 34, width: 34, height: 34, borderRadius: 1.2, p: 0, background: index === 0 ? '#0056D2' : '#fff', color: index === 0 ? '#fff' : '#374151', borderColor: '#dbe1ea', boxShadow: 'none', fontWeight: 700, fontSize: '.7rem', '&:hover': { background: index === 0 ? '#004ab7' : '#f8fbff', boxShadow: 'none' } }}>{page}</Button>
							))}
							<Button aria-label="Next page" variant="outlined" sx={{ minWidth: 34, width: 34, height: 34, borderRadius: 1.2, color: '#374151', borderColor: '#dbe1ea', background: '#fff', p: 0 }}><ChevronRightIcon sx={{ fontSize: 17 }} /></Button>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
