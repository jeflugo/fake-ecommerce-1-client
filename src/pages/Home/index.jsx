import { Helmet } from 'react-helmet-async'
import HeroSection from './HeroSection'
import CategoriesSection from './CategoriesSection'
import SeasonOffers from './SeasonOffers'
import BestSellers from './BestSellers'
import ScrollToTop from '../../components/ScrollToTop'

function Home() {
	return (
		<>
			<ScrollToTop />
			<Helmet>
				<title>glu - Home</title>
			</Helmet>
			<div>
				<HeroSection />
				<CategoriesSection />
				<SeasonOffers />
				<BestSellers />
			</div>
		</>
	)
}

export default Home
