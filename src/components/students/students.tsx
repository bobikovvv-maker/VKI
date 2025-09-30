'use client';

import usestudents from '@/hooks/useStudents';
import type GroupInterface from '@/types/studentInterface';
import styles from './students.module.scss';
import studentInterface from '@/types/studentInterface';

const Students = (): React.ReactElement => {
  const { students } = usestudents();

  return (
    <div className={styles.students}>
      {students.map((students: studentInterface) => (
        <h2 key={students.id}>
          {students.first_name}
          {students.last_name}
          {students.middle_name}
          {students.groupId}  
        </h2>
      ))}
    </div>
  );
};

export default Students;
