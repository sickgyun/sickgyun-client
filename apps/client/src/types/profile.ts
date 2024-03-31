export type Profile = {
  id: number;
  name: string;
  cardinal: number;
  email: string;
  imageUrl: string;
  isGraduated: boolean;
  isRecruited: boolean;
  major: string;
  githubId?: string;
  resumeUrl?: string;
  portfolioUrl?: string;
  company?: string;
  introduction?: string;
};

export type ProfileForm = {
  major: string;
  isRecruited: boolean;
  githubId?: string;
  company?: string;
  imageUrl?: string;
  introduction?: string;
  resumeUrl?: string;
  portfolioUrl?: string;
};
