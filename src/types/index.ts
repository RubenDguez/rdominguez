// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TImage = any;

export type TPersonalInformation = {
  key: string;
  description: string | number;
};

export type TSpokenLanguage = {
  language: string;
  percentage: number;
};

export type TSkill = {
  skill: string;
  percentage?: number;
};

export type TMediaLink = {
  link: string;
  icon: React.ReactNode;
};
