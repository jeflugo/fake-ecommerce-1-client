import HERO_BANNER_SM from '../assets/hero-banner-sm.png'
import HERO_BANNER_MD from '../assets/hero-banner-md.png'
import HERO_BANNER_LG from '../assets/hero-banner-lg.png'

const HERO_BANNERS = {
	SM: HERO_BANNER_SM,
	MD: HERO_BANNER_MD,
	LG: HERO_BANNER_LG,
}

//* CATEGORIES
import MEN_CAT_IMG from '../assets/categories/men-category.png'
import KIDS_CAT_IMG from '../assets/categories/kids-category.png'
import WOMEN_CAT_IMG from '../assets/categories/women-category.png'
import POWER_CAT_IMG from '../assets/categories/power-category.png'

//* SEASON OFFERS
import SEASON_1 from '../assets/season-offers/season-offers-1.png'
import SEASON_2 from '../assets/season-offers/season-offers-2.jpg'
import SEASON_3 from '../assets/season-offers/season-offers-3.jpg'
import SEASON_4 from '../assets/season-offers/season-offers-4.jpg'
import SEASON_5 from '../assets/season-offers/season-offers-5.jpg'

import {
	FaTwitter,
	FaYoutube,
	FaFacebook,
	FaInstagram,
	FaTiktok,
} from 'react-icons/fa'

const CATEGORIES_PHOTOS = [
	{
		mainText: 'Live at max potential',
		subText: 'All in men shoes',
		img: MEN_CAT_IMG,
	},
	{
		mainText: 'Always have fun',
		subText: 'Resistant to water and easy to wash',
		img: KIDS_CAT_IMG,
	},
	{
		mainText: 'A shoe you can trust',
		subText: 'Maximum durability in the market',
		img: WOMEN_CAT_IMG,
	},
	{
		mainText: 'Another level of competence',
		subText: 'Take your game to the next level.',
		img: POWER_CAT_IMG,
	},
]

const SEASON_OFFERS = [
	{
		buttonText: "Men's summer offers",
		mainCatName: 'men',
		subCatName: 'seasonal',
		catIndex: 1,
	},
	{
		buttonText: "Kids's summer offers",
		mainCatName: 'kids',
		subCatName: 'seasonal',
		catIndex: 3,
	},
	{
		buttonText: "Woman's summer offers",
		mainCatName: 'women',
		subCatName: 'seasonal',
		catIndex: 2,
	},
]

const SEASON_OFFERS_IMGS = [SEASON_1, SEASON_2, SEASON_3, SEASON_4, SEASON_5]

const FOOTER_LINKS = [
	{
		name: 'HELP',
		values: [
			{
				name: 'Get Help',
				url: '/',
			},
			{
				name: 'Order Status',
				url: '/',
			},
			{
				name: 'Shipping and Delivery',
				url: '/',
			},
			{
				name: 'Returns',
				url: '/',
			},
			{
				name: 'Order Cancellation',
				url: '/',
			},
			{
				name: 'Payment Options',
				url: '/',
			},
			{
				name: 'Giftcard Balance',
				url: '/',
			},
			{
				name: 'Contact Us',
				url: '/',
			},
		],
	},
	{
		name: 'COMPANY',
		values: [
			{
				name: 'About glu',
				url: '/',
			},
			{
				name: 'News',
				url: '/',
			},
			{
				name: 'Careers',
				url: '/',
			},
			{
				name: 'Incestors',
				url: '/',
			},
			{
				name: 'Purpose',
				url: '/',
			},
			{
				name: 'Sustainability',
				url: '/',
			},
		],
	},
	{
		name: 'PROMOTIONS',
		values: [
			{
				name: 'Students',
				url: '/',
			},
			{
				name: 'Military',
				url: '/',
			},
			{
				name: 'Teachers',
				url: '/',
			},
			{
				name: 'First Responders and Medical',
				url: '/',
			},
			{
				name: 'Professionals',
				url: '/',
			},
			{
				name: 'Birthday',
				url: '/',
			},
		],
	},
]

const SOCIAL_LINKS = [
	{
		name: 'Twitter',
		SocialIcon: FaTwitter,
		url: '/',
	},
	{
		name: 'Instagram',
		SocialIcon: FaInstagram,
		url: '/',
	},
	{
		name: 'Youtube',
		SocialIcon: FaYoutube,
		url: '/',
	},
	{
		name: 'Facebook',
		SocialIcon: FaFacebook,
		url: '/',
	},
	{
		name: 'Tiktok',
		SocialIcon: FaTiktok,
		url: '/',
	},
]

const FOOTER_INFO_LINKS = [
	{
		name: 'Guides',
		url: '/',
	},
	{
		name: 'Terms of use',
		url: '/',
	},
	{
		name: 'Terms of sale',
		url: '/',
	},
	{
		name: 'glu privacy policy',
		url: '/',
	},
]

const SEARCH_CATEGORIES = [
	{
		name: 'all',
		subs: [
			{
				name: 'all',
				value: 'Show all',
			},
		],
	},
	{
		name: 'men',
		subs: [
			{
				name: 'all',
				value: 'All shoes',
			},
			{
				name: 'running',
				value: 'Running',
			},
			{
				name: 'basket',
				value: 'Basket',
			},
			{
				name: 'skate',
				value: 'Skate',
			},
			{
				name: 'boots',
				value: 'Boots',
			},
			{
				name: 'workout',
				value: 'Workout',
			},
			{
				name: 'offers',
				value: 'Offers',
			},
			{
				name: 'seasonal',
				value: 'Seasonal',
			},
		],
	},
	{
		name: 'women',
		subs: [
			{
				name: 'all',
				value: 'All shoes',
			},
			{
				name: 'running',
				value: 'Running',
			},
			{
				name: 'sandals',
				value: 'Sandals',
			},
			{
				name: 'soccer',
				value: 'Soccer',
			},
			{
				name: 'volleyball',
				value: 'Volleyball',
			},
			{
				name: 'workout',
				value: 'Workout',
			},
			{
				name: 'offers',
				value: 'Offers',
			},
			{
				name: 'seasonal',
				value: 'Seasonal',
			},
		],
	},
	{
		name: 'kids',
		subs: [
			{
				name: 'all',
				value: 'All shoes',
			},
			{
				name: 'running',
				value: 'Running',
			},
			{
				name: 'soccer',
				value: 'Soccer',
			},
			{
				name: 'offers',
				value: 'Offers',
			},
			{
				name: 'seasonal',
				value: 'Seasonal',
			},
		],
	},
	{
		name: 'unisex',
		subs: [
			{
				name: 'all',
				value: 'All shoes',
			},
			{
				name: 'basket',
				value: 'Basket',
			},
			{
				name: 'running',
				value: 'Running',
			},
			{
				name: 'golf',
				value: 'Golf',
			},
			{
				name: 'offers',
				value: 'Offers',
			},
			{
				name: 'seasonal',
				value: 'Seasonal',
			},
		],
	},
]

const ORDER_BY_OPTIONS = ['Newest', 'Price up', 'Price down']

const COMPANY_EMAIL = 'company@glu.com'

export {
	HERO_BANNERS,
	CATEGORIES_PHOTOS,
	SEASON_OFFERS,
	SEASON_OFFERS_IMGS,
	FOOTER_LINKS,
	SOCIAL_LINKS,
	FOOTER_INFO_LINKS,
	SEARCH_CATEGORIES,
	ORDER_BY_OPTIONS,
	COMPANY_EMAIL,
}
