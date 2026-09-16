
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function OfferPage() {
	return (
		<Box sx={{ minHeight: '100vh', background: '#f3f3f3', py: { xs: 7, md: 10 } }}>
			<Container maxWidth="lg">
				<Typography component="h1" sx={{ fontFamily: 'Noto Serif, serif', fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 800, color: '#202124', mb: 0.8 }}>
					Offers
				</Typography>
			</Container>
		</Box>
	);
}
