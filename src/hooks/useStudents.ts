import { useQuery } from '@tanstack/react-query';
import { getStudentsApi } from '@/api/studentsApi';
import type studentInterface from '@/types/studentInterface';

interface studentsHookInterface {
  students: studentInterface[];
}

const useStudents = (): studentsHookInterface => {
  // const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['students'],
    queryFn: () => getStudentsApi(),
    
  });

  return {
    students: data ?? [],
  };
};

export default useStudents;
