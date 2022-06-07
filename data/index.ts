interface ServiceType {
    title: string
    subtitle: string
    image: string
}

export const services: ServiceType[] = [
    { 
        title: 'Digital Entrepreneurship',
        subtitle: 'Become a certified and contracted digital entrepreneur under the Script Beauty & Brand Company',
        image: '/images/influencer.jpg'
    },
    { 
        title: 'Product Partnerships',
        subtitle: 'Partner your brand and products with our platform and network of over 100 beauty and brand digital entrepreneurs',
        image: '/images/placement.jpg'
    },
    { 
        title: 'Brand Development & Consultation',
        subtitle: 'Grow your business social and trade footprint in an evolving social economy, with our brand specific strategies and expertise',
        image: '/images/consulting.jpg'
    },
];


interface CategoryType {
    name: string
    tags: string
    subtitle: string
    bg: string
    text: string
    image: string 
}

export const categories:CategoryType[] = [
    {
        name: 'Cosmetics',
        tags: 'cosmetics',
        subtitle: 'Top cosmetics brands both local and international',
        bg: 'bg-blue-700',
        image: '/images/cosmetics.jpg',
        text: 'text-green-800'
    },
    {
        name: 'Fashion',
        tags: 'fashion',
        subtitle: 'Top and upcoming fashion labels',
        bg: 'bg-red-700',
        image: '/images/fashion.jpg',
        text: 'text-green-800'
    },
    {
        name: 'Footwear',
        tags: 'footwear',
        subtitle: 'The most desireable footwear labels',
        bg: 'bg-yellow-700',
        image: '/images/footwear.jpg',
        text: 'text-green-800'
    },
    {
        name: 'Organic',
        tags: 'organic',
        subtitle: 'Organic products and food locally sourced',
        bg: 'bg-green-700',
        image: '/images/organic.jpg',
        text: 'text-green-800'
    },

]