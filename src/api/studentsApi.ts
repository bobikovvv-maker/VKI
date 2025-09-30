import type studentInterface from '@/types/studentInterface';

export const getStudentsApi = async (): Promise<studentInterface[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students`);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}${response.statusText}`);
    }
    const studets = await response.json() as studentInterface[];
    return studets;
  }
  catch (err) {
    console.log('>>> getStudentsApi', err);
    return [] as studentInterface[];
  }
};
