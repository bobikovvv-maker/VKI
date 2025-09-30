import Students from '@/components/students/students';
import Page from '@/components/layout/Page/Page';
import { type Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Группы - Вэб разработка ВКИ - Next.js шаблон',
  description: 'Шаблон для веб-разработки с использованием Next.js, React Hook Form, Yup, SCSS, Eslint, TanStack Query (React Query)',
};

const studentsPage = (): React.ReactNode => (
  <Page>
    <h1>студенты</h1>
    <Students/>
  </Page>
);

export default studentsPage;
