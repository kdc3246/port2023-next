import link from '@/utils/link'
import about from '../assets/img/about.jpg'
import header_bg from '../assets/img/header_bg.jpg'
import jb from '../assets/img/jb.png'
// import port01 from '../assets/img/port01.jpg';
import port01 from '../assets/img/news01.jpg'
import port02 from '../assets/img/news02.jpg'
import port03 from '../assets/img/news03.jpg'
import port04 from '../assets/img/news04.jpg'
import port05 from '../assets/img/news05.jpg'
import port06 from '../assets/img/news06.jpg'
import port07 from '../assets/img/news07.jpg'
import port08 from '../assets/img/news08.jpg'
import port09 from '../assets/img/news09.jpg'
import port10 from '../assets/img/news10.jpg'

export const introText = {
  title: '중부대학교',
  desc: ['정보보호학전공', '창의적이고 경쟁력 있는 IT', '정보보호학과'],
  img: header_bg,
}

export const skillText = [
  {
    title: 'Python',
    desc: [
      '01. 파이썬이란?',
      '02. 파이썬 프로그래밍의 기초, 자료형',
      '03. 프로그램의 구조를 쌓는다! 제어문',
      '04. 파이썬의 입출력',
      '05. 파이썬 날개 달기',
      '06. 파이썬 프로그래밍, 어떻게 시작해야 할까?',
      '07. 파이썬 날아오르기',
      '08. 정규표현식',
      '09. 부록',
    ],
    link: [
      'https://wikidocs.net/5',
      'https://wikidocs.net/11',
      'https://wikidocs.net/19',
      'https://wikidocs.net/23',
      'https://wikidocs.net/27',
      'https://wikidocs.net/34',
      'https://wikidocs.net/184208',
      'https://wikidocs.net/1669',
      'https://wikidocs.net/202338',
    ],
  },
  {
    title: 'webhacking.kr',
    desc: [
      'Challenge old-01',
      'Challenge old-03',
      'Challenge old-06',
      'Challenge old-14',
      'Challenge old-15',
      'Challenge old-16',
      'Challenge old-17',
      'Challenge old-18',
      'Challenge old-24',
      'Challenge old-26',
      'Challenge old-27',
      'Challenge old-38',
    ],
    link: [
      'https://webhacking.kr/challenge/web-01/',
      'https://webhacking.kr/challenge/web-03/',
      'https://webhacking.kr/challenge/web-06/',
      'https://webhacking.kr/challenge/js-1/',
      'https://webhacking.kr/challenge/js-2/',
      'https://webhacking.kr/challenge/js-3/',
      'https://webhacking.kr/challenge/js-4/',
      'https://webhacking.kr/challenge/web-32/',
      'https://webhacking.kr/challenge/bonus-4/',
      'https://webhacking.kr/challenge/web-11/',
      'https://webhacking.kr/challenge/web-12/',
      'https://webhacking.kr/challenge/bonus-9/',
    ],
  },
  {
    title: 'Webstandard',
    desc: ['W3C', '웹 접근성 연구소', '네이버 널리'],
    link: [
      'https://www.w3.org/',
      'https://www.wah.or.kr:444/',
      'https://nuli.navercorp.com/',
    ],
  },
]

export const portText = [
  {
    num: '01',
    title: '최신 보안뉴스',
    desc: '2023 정보보호산업인의 밤...글로벌 톱5 보안 강국 도전',
    img: port01,
    code: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34270&key=&dir_group_dist=&dir_code=&searchDate=',
    view: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34270&key=&dir_group_dist=&dir_code=&searchDate=',
    name: '안랩보안뉴스',
  },
  {
    num: '02',
    title: '최신 보안 뉴스',
    desc: '워드프레스에서 날아온 보안 경고문, 클릭하면 사이트 빼앗긴다',
    img: port02,
    code: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34269&key=&dir_group_dist=&dir_code=&searchDate=',
    view: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34269&key=&dir_group_dist=&dir_code=&searchDate=',
    name: '안랩보안뉴스',
  },
  {
    num: '03',
    title: '최신 보안 뉴스',
    desc: '국가적 재난된 공공SW, 국회 토론회서 해결방안 논의',
    img: port03,
    code: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34268&key=&dir_group_dist=&dir_code=&searchDate=',
    view: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34268&key=&dir_group_dist=&dir_code=&searchDate=',
    name: '안랩보안뉴스',
  },
  {
    num: '04',
    title: '최신 보안 뉴스',
    desc: '[긴급] 유명 건설사 사칭한 ‘견적 요청’ 메일 급증',
    img: port04,
    code: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34267&key=&dir_group_dist=&dir_code=&searchDate=',
    view: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34267&key=&dir_group_dist=&dir_code=&searchDate=',
    name: '안랩보안뉴스',
  },
  {
    num: '05',
    title: '최신 보안 뉴스',
    desc: '에이싱크랫 악성코드, WSF 스크립트로 유포 중',
    img: port05,
    code: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34266&key=&dir_group_dist=&dir_code=&searchDate=',
    view: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34266&key=&dir_group_dist=&dir_code=&searchDate=',
    name: '안랩보안뉴스',
  },
  {
    num: '06',
    title: '최신 보안 뉴스',
    desc: '北 라자루스 그룹, 지난 6년간 암호화폐 해킹으로 30억 달러 탈취',
    img: port06,
    code: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34265&key=&dir_group_dist=&dir_code=&searchDate=',
    view: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34265&key=&dir_group_dist=&dir_code=&searchDate=',
    name: '안랩보안뉴스',
  },
  {
    num: '07',
    title: '최신 보안 뉴스',
    desc: '정부의 ‘사이버 보안 10만 인재양성’ 계획, 2023년 성과 및 2024년 목표는?',
    img: port07,
    code: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34257&key=&dir_group_dist=&dir_code=&searchDate=',
    view: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34257&key=&dir_group_dist=&dir_code=&searchDate=',
    name: '안랩보안뉴스',
  },
  {
    num: '08',
    title: '최신 보안 뉴스',
    desc: '최근 한국과 우즈벡 타깃 사이버공격에 원격 트로이목마 ‘SugarGh0st RAT’ 사용돼',
    img: port08,
    code: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34256&key=&dir_group_dist=&dir_code=&searchDate=',
    view: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34256&key=&dir_group_dist=&dir_code=&searchDate=',
    name: '안랩보안뉴스',
  },
  {
    num: '09',
    title: '최신 보안 뉴스',
    desc: '미국, 北 해킹그룹 킴수키(APT43)에 사이버 제재…정찰위성 발사 대응조치',
    img: port09,
    code: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34255&key=&dir_group_dist=&dir_code=&searchDate=',
    view: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34255&key=&dir_group_dist=&dir_code=&searchDate=',
    name: '안랩보안뉴스',
  },
  {
    num: '10',
    title: '최신 보안 뉴스',
    desc: '[클라우드+] AWS도 기업용 AI 챗봇 내놓는다…MS·구글과 클라우드 경쟁 격화',
    img: port10,
    code: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34254&key=&dir_group_dist=&dir_code=&searchDate=',
    view: 'https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?curPage=&menu_dist=1&seq=34254&key=&dir_group_dist=&dir_code=&searchDate=',
    name: '안랩보안뉴스',
  },
]

export const contactText = [
  {
    link: 'https://github.com/kdc3246/port2023-next',
    title: 'Git : Branch Repositories',
  },
  {
    link: 'https://port2023-next-theta.vercel.app/',
    title: 'vercel : port2023-Next',
  },
]

export const portfolioLinks = [
  {
    title: '김동철의 개인 포트폴리오',
    link: 'https://my-portfolio-three-psi-89.vercel.app/',
  },
  {
    title: '송경선의 개인 포트폴리오',
    link: 'https://mt-portfolio-livid.vercel.app/',
  },
  {
    title: '이라규의 개인 포트폴리오',
    link: '#',
  },
  {
    title: '이건우의 개인 포트폴리오',
    link: 'https://3-2portpoilo.vercel.app/',
  },
]

export const footerText = [
  {
    title: '김동철',
    desc: '안녕하세요. 김동철의 Git Hub 입니다.',
    link: 'https://github.com/kdc3246?tab=repositories',
  },
  {
    title: '송경선',
    desc: '안녕하세요. 송경선의 Git Hub 입니다.',
    link: 'https://github.com/songkungsun?tab=repositories',
  },
  {
    title: '이라규',
    desc: '안녕하세요. 이라규의 Git Hub 입니다.',
    link: 'https://github.com/ragyu?tab=repositories',
  },
  {
    title: '이건우',
    desc: '안녕하세요. 이건우의 Git Hub 입니다.',
    link: 'https://github.com/lgw7537?tab=repositories',
  },
]
