// types.ts
export interface CardData {
  title: string;
  button: string;
  image: React.ReactNode;
}

export type IDoctorData ={
  fullName: string;
  specialization: string;
  description: string;
  longitude: string;
  latitude:string;
  avatar: string;
  cost: string;
  schedules: [
    {
      day: string;
      startTime: string;
      endTime: string;
      id: number;
    }
  ];
  id: number;
  rating: string;
}
