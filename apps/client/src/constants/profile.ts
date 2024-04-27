export const MAJOR_LIST = [
  { value: 'ALL', name: '전체' },
  { value: 'FRONTEND', name: '프론트엔드' },
  { value: 'BACKEND', name: '백엔드' },
  { value: 'EMBEDDED', name: '임베디드' },
  { value: 'GAME', name: '게임' },
  { value: 'ETC', name: '기타' },
] as const;

export const RECRUIT_FULL_VIEW_LINK =
  'https://www.rallit.com/?jobGroup=DEVELOPER&jobLevel=INTERN%2CBEGINNER%2CJUNIOR&pageNumber=1';

export const DIRECT_PROFILE_LIST = [
  {
    profileId: 5,
    userId: 4,
    introduction: `- 부마위키, 식견의 백엔드 팀장이에요.\n- 트레이드 오프에 관한 토론을 좋아해요.`,
  },
  {
    profileId: 15,
    userId: 1,
    introduction: `- 당근 인턴 경험이 있어요.\n- 마루와 식견의 프론트엔드 팀장이에요.\n- 오픈소스에 기여하는 것을 좋아해요.`,
  },
  {
    profileId: 13,
    userId: 9,
    introduction: `- 부마위키에서 PM 및 프론트엔드 팀장을\n담당했어요.\n- 클린 코드와 기술 동향에 대해 관심이\n있어요.`,
  },
  {
    profileId: 3,
    userId: 3,
    introduction: `- 마루, 식견의 디자인을 맡았어요.\n- 디자인과 디자이너 취업 등에 대해 이야기\n해드릴 수 있어요.`,
  },
] as const;

export const BUMAWIKI_PROFILE_ID_LIST = [5, 13, 7, 14, 16];

export const SICKGYUN_PROFILE_ID_LIST = [5, 15, 3, 4];
