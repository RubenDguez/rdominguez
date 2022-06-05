export type TImage = any;

export type TPersonalInformation = {
  key: String;
  description: String | Number;
};

export type TSpokenLanguage = {
  language: String;
  percentage: number;
};

export type TSkill = {
  skill: String;
  percentage?: number;
};

export type TMediaLink = {
  link: String;
  icon: React.ReactNode;
};
