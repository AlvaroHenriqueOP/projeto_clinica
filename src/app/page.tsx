import { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Dental Corp | Clínica Odontológica Especializada em Sorrisos',
  description: 'A Dental Corp oferece tratamentos odontológicos de excelência com tecnologia avançada e profissionais qualificados. Implantes, ortodontia, clareamento e muito mais.',
  keywords: 'clínica odontológica, dentista, tratamentos dentários, implantes, ortodontia, clareamento, saúde bucal, consultório dentário, estética dental',
  openGraph: {
    title: 'Dental Corp | Clínica Odontológica Especializada em Sorrisos',
    description: 'A Dental Corp oferece tratamentos odontológicos de excelência com tecnologia avançada e profissionais qualificados. Implantes, ortodontia, clareamento e muito mais.',
    images: ['/images/clinica_hero.jpg'],
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function Page() {
  return <HomePage />;
}
