export interface IProject {
  id?: string;
  title: string;
  type: string;
  description: string;
  live: boolean;
  liveUrl: string;
  public: boolean;
  codeUrl: string;
  image: string;
  stack: string[];
}
