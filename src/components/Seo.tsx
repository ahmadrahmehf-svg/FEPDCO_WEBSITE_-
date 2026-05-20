import { useEffect } from 'react';
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  CONTACT,
  OG_IMAGE,
} from '../constants/seo';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  alternateName: 'FEPDCO',
  url: SITE_URL,
  logo: OG_IMAGE,
  description: SITE_DESCRIPTION,
  foundingDate: '2007',
  email: CONTACT.email,
  telephone: CONTACT.phone,
  faxNumber: CONTACT.fax,
  address: {
    '@type': 'PostalAddress',
    addressLocality: CONTACT.address.addressLocality,
    addressCountry: CONTACT.address.addressCountry,
    postalCode: CONTACT.address.postalCode,
  },
  areaServed: ['Jordan', 'Saudi Arabia', 'UAE', 'Bahrain', 'Mali', 'Libya', 'Middle East'],
  knowsAbout: [
    'Energy consulting',
    'EPC contracting',
    'Solar power plants',
    'Wind energy',
    'Oil and gas infrastructure',
    'Grid connection engineering',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_TAGLINE,
  publisher: { '@type': 'Organization', name: SITE_NAME },
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: SITE_URL,
  image: OG_IMAGE,
  description: SITE_DESCRIPTION,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amman',
    addressCountry: 'Jordan',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.9454,
    longitude: 35.9284,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
    opens: '08:00',
    closes: '17:00',
  },
};

export default function Seo() {
  useEffect(() => {
    const schemas = [organizationSchema, websiteSchema, professionalServiceSchema];
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'fepdco-structured-data';
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);
    return () => {
      document.getElementById('fepdco-structured-data')?.remove();
    };
  }, []);

  return null;
}
