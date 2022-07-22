import createDomNode from '../helpers/createDomNode';

export default class Footer {
  private line;

  private footer;

  private yearOfCreation;

  private wrapperGithub;

  private linkGithub;

  private imgGithub;

  private nameGithub;

  private linkRSSchool;

  private imgRSSchool;

  constructor() {
    this.line = createDomNode('hr', 'line');

    this.footer = createDomNode('footer');

    this.yearOfCreation = createDomNode('span', 'year', '© 2022');

    this.wrapperGithub = createDomNode('div', 'github');
    this.linkGithub = createDomNode('a', 'github') as HTMLAnchorElement;
    this.linkGithub.href = 'https://github.com/Veronika2811';
    this.linkGithub.target = 'blank';

    this.imgGithub = createDomNode('img', 'footer__icon-git') as HTMLImageElement;
    this.imgGithub.alt = 'GitHub';
    this.imgGithub.src = './assets/svg/github.svg';

    this.nameGithub = createDomNode('span', 'git-name', 'Veronika2811');

    this.linkRSSchool = createDomNode('a') as HTMLAnchorElement;
    this.imgRSSchool = createDomNode('img', 'footer__icon-rsschool') as HTMLImageElement;
    this.imgRSSchool.alt = 'RSSchool';
    this.imgRSSchool.src = './assets/svg/rs_school.svg';

    this.linkGithub.append(this.imgGithub, this.nameGithub);
    this.wrapperGithub.append(this.linkGithub);

    this.linkRSSchool.append(this.imgRSSchool);

    this.footer.append(this.yearOfCreation, this.wrapperGithub, this.linkRSSchool);

    document.body.append(this.line, this.footer);
  }
}