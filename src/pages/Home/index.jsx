import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../components/ScrollToTop'

import HeroSection from './HeroSection'
import CategoriesSection from './CategoriesSection'
import BestSellers from './BestSellers'
import SeasonOffers from './SeasonOffers'

function Home() {
	return (
		<>
			<ScrollToTop />
			<Helmet>
				<title>glu - Home</title>
			</Helmet>
			<HeroSection />
			<CategoriesSection />
			<SeasonOffers />
			<BestSellers />
		</>
	)
}

export default Home
