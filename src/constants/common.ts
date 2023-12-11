import type { Department } from '@/types';

export const DEPARTMENT_LIST: Department[] = ['전체', '소프트웨어개발과', '임베디드과'];

export const POSITION_LIST = [
  { queryParams: 'all', name: '전체' },
  { queryParams: 'frontend', name: '프론트엔드' },
  { queryParams: 'backend', name: '백엔드' },
  { queryParams: 'devops', name: '데브옵스' },
  { queryParams: 'app', name: '앱' },
  { queryParams: 'designer', name: '디자이너' },
] as const;
