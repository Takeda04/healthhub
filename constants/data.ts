

export const doctors = [
  {
    id: 1,
    image: "https://minio.skydoc.uz/skydoc/Dzhuraeva_ZA_400_400_dc7f217383.jpg",
    name: "Dr. Jurayeva Ziyoda",
    specialization: "Cardiologist",
    rating: "5.0",
    distance: "2 km",
    link: "details/DoctorDetailScreen",
    about: "Dr. Jurayeva Ziyoda yurak kasalliklari bo'yicha mutaxassis. U yurak kasalliklarini tashxislash va davolashda katta tajribaga ega."
  },
  {
    id: 2,
    image: "https://minio.skydoc.uz/skydoc/Yusupova_Yu_N_400_400_19c124b82b.jpg",
    name: "Dr. Malikova Yulduz",
    specialization: "Dermatologist",
    rating: "5.0",
    distance: "3.9 km",
    link: "details/DoctorDetailScreen",
    about: "Dr. Malikova Yulduz teri kasalliklari bo'yicha mutaxassis. U teri kasalliklarini tashxislash va davolashda katta tajribaga ega."
  },
  {
    id: 3,
    image: "https://minio.skydoc.uz/skydoc/Rahmonov_OM_400_400_6e86eb405a.jpg",
    name: "Dr. Oripov Oybek",
    specialization: "Urolog",
    rating: "5.0",
    distance: "2 km",
    link: "details/DoctorDetailScreen",
    about: "Dr. Oripov Oybek siydik tizimi kasalliklari bo'yicha mutaxassis. U siydik tizimi kasalliklarini tashxislash va davolashda katta tajribaga ega."
  },
  {
    id: 4,
    image: "https://minio.skydoc.uz/skydoc/Abdurahmonov_AA_400_400_8a2180da80.jpg",
    name: "Dr. Obidov Abdulla",
    specialization: "Pediatr",
    rating: "5.0",
    distance: "5.5 km",
    link: "details/DoctorDetailScreen",
    about: "Dr. Obidov Abdulla bolalar kasalliklari bo'yicha mutaxassis. U bolalar kasalliklarini tashxislash va davolashda katta tajribaga ega."
  },
  {
    id: 5,
    image: "https://minio.skydoc.uz/skydoc/Abidova_DK_400_400_ded7e14671.jpg",
    name: "Dr. Abidova Dildora",
    specialization: "Audiolog",
    rating: "4.9",
    distance: "2 km",
    link: "details/DoctorDetailScreen",
    about: "Dr. Abidova Dildora eshitish tizimi kasalliklari bo'yicha mutaxassis. U eshitish tizimi kasalliklarini tashxislash va davolashda katta tajribaga ega."
  },
  {
    id: 6,
    image: "https://minio.skydoc.uz/skydoc/Agishev_TT_400_400_7af6bc20a5.jpg",
    name: "Dr. Agishev Timur",
    specialization: "Mammolog",
    rating: "4.8",
    distance: "3.8 km",
    link: "details/DoctorDetailScreen",
    about: "Dr. Agishev Timur sut bezlari kasalliklari bo'yicha mutaxassis. U sut bezlari kasalliklarini tashxislash va davolashda katta tajribaga ega."
  },
  {
    id: 7,
    image: "https://minio.skydoc.uz/skydoc/Abdullaev_MM_400_400_e9c5ad52bd.jpg",
    name: "Dr. Aminov Maxsur",
    specialization: "Travmatolog-ortoped",
    rating: "5.0",
    distance: "4.2 km",
    link: "details/DoctorDetailScreen",
    about: "Dr. Aminov Maxsur suyak va bo'g'im kasalliklari bo'yicha mutaxassis. U suyak va bo'g'im kasalliklarini tashxislash va davolashda katta tajribaga ega."
  },
  {
    id: 8,
    image: "https://minio.skydoc.uz/skydoc/Abdullaev_FI_400_400_40230d7f6f.jpg",
    name: "Dr. Samanov Farrux",
    specialization: "Reanimatolog",
    rating: "4.9",
    distance: "3.5 km",
    link: "details/DoctorDetailScreen",
    about: "Dr. Samanov Farrux reanimatsiya bo'yicha mutaxassis. U reanimatsiya bo'yicha kasalliklarni tashxislash va davolashda katta tajribaga ega."
  },
];


export const pills = [
  {
    image: "https://via.placeholder.com/80", // Replace with actual image URLs
    name: "Aspirin",
    description: "Used to reduce pain, fever, or inflammation.",
    price: "$5.99",
  },
  {
    image: "https://via.placeholder.com/80",
    name: "Ibuprofen",
    description:
      "Nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever and treat pain.",
    price: "$8.99",
  },
  // Add more pills here
];


// topDoctorsData.ts
export interface Doctor {
  image: string;
  name: string;
  specialization: string;
  rating: string;
  distance: string;
}

const topDoctorsData: Doctor[] = [
  {
    image: 'https://minio.skydoc.uz/skydoc/Yusupova_Yu_N_400_400_19c124b82b.jpg',
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    rating: '4.5',
    distance: '2.5 km away',
  },
  {
    image: 'https://via.placeholder.com/60',
    name: 'Dr. Jane Smith',
    specialization: 'Dermatologist',
    rating: '4.8',
    distance: '1.2 km away',
  },
  {
    image: 'https://via.placeholder.com/60',
    name: 'Dr. Michael Brown',
    specialization: 'Ophthalmologist',
    rating: '4.7',
    distance: '3.0 km away',
  },
  {
    image: 'https://via.placeholder.com/60',
    name: 'Dr. Emily Davis',
    specialization: 'Pediatrician',
    rating: '4.6',
    distance: '4.1 km away',
  },
  {
    image: 'https://via.placeholder.com/60',
    name: 'Dr. William Johnson',
    specialization: 'Psychologist',
    rating: '4.9',
    distance: '2.0 km away',
  },
];

export default topDoctorsData;

