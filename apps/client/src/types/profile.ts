export type Profile = {
  id: number;
  name: string;
  cardinal: number;
  imageUrl: string;
  isGraduated: boolean;
  isRecruited: boolean;
  major: Major;
  githubId?: string;
  resumeUrl?: string;
  portfolioUrl?: string;
  company?: string;
  introduction?: string;
};

export type ProfileFormType = {
  major: Major;
  githubId?: string;
  company?: string;
  imageUrl?: string;
  introduction?: string;
  resumeUrl?: string;
  portfolioUrl?: string;
};

export type Major = 'ALL' | 'FRONTEND' | 'BACKEND' | 'EMBEDDED' | 'GAME' | 'ETC';

export type Promotion = 'BUMAWIKI' | 'SICKGYUN';
