import {TCategoryModel, TQuestionModel} from './types/model';

const Models = () => {
  const CategoryModel: TCategoryModel[] = [];

  const QuestionModel: TQuestionModel[] = [];

  const initModel = () => {
    const categories = ['HTML & CSS', 'Javascript', 'CS', 'Tools'];
    const questions = [
      {
        categoryId: 0,
        title: 'HTML의 태그에 대해 알고 있다.',
        link: 'https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
      },
      {
        categoryId: 0,
        title: '시맨틱 태그를 쓰는 이유에 대해 알고 있다.',
        link: 'https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals',
      },
      {
        categoryId: 0,
        title: 'id와 class 선택자의 차이점에 대해 설명할 수 있다.',
        link: 'https://opentutorials.org/course/2418/13347',
      },
      {
        categoryId: 0,
        title: 'CSS box model에 대해 이해하고 활용할 수 있다.',
        link: 'https://opentutorials.org/course/2418/13404',
      },
      {
        categoryId: 0,
        title: 'CSS position에 대해 이해하고 활용할 수 있다.',
        link: 'https://opentutorials.org/course/2418/13414',
      },
      {
        categoryId: 0,
        title: 'CSS 레이아웃을 원하는 위치에 배치하고 활용할 수 있다.',
        link: 'https://opentutorials.org/course/2418/13526',
      },
      {
        categoryId: 0,
        title: 'CSS framework를 사용해본 적이 있다.',
        link: 'https://tailwindcss.com/',
      },
      {
        categoryId: 0,
        title: '반응형 디자인과 미디어 쿼리를 활용할 수 있다.',
        link: '[https://opentutorials.org/course/2418/13517](https://opentutorials.org/course/2418/13517)',
      },
      {
        categoryId: 0,
        title: 'SASS, SCSS와 CSS의 차이점을 알고 써본 경험이 있다.',
        link: 'https://sass-lang.com/guide',
      },
      {
        categoryId: 0,
        title: 'CSS in JS의 개념을 알고 써본 적이 있다.',
        link: 'https://d0gf00t.tistory.com/22',
      },
      {
        categoryId: 1,
        title: '자바스크립트가 무엇이고 어떤 역할을 하는지 알고 있다.',
        link: 'https://ko.javascript.info/intro',
      },
      {
        categoryId: 1,
        title: 'DOM에 대해 이해하고 조작할 수 있다.',
        link: 'https://ko.javascript.info/document',
      },
      {
        categoryId: 1,
        title:
          '이벤트 버블링, 캡처링의 원리에 대해 알고 중단하는 방법을 알고 있다.',
        link: 'https://ko.javascript.info/bubbling-and-capturing',
      },
      {
        categoryId: 1,
        title: '자바스크립트의 데이터 타입에 대해 알고 있다.',
        link: 'https://ko.javascript.info/types',
      },
      {
        categoryId: 1,
        title: '자바스크립트 객체와 관련된 문법을 알고 활용할 수 있다.',
        link: 'https://ko.javascript.info/object-basics',
      },
      {
        categoryId: 1,
        title: '클로저와 렉시컬 스코프의 개념과 동작 원리에 대해 알고 있다. ',
        link: 'https://ko.javascript.info/closure',
      },
      {
        categoryId: 1,
        title:
          '호이스팅의 의미를 알고 var, let, const 키워드에서 각각 어떻게 동작하는지 차이를 알고 있다.',
        link: 'https://developer.mozilla.org/ko/docs/Glossary/Hoisting',
      },
      {
        categoryId: 1,
        title: ' 프로토타입의 개념에 대해 알고 활용할 수 있다.',
        link: 'https://ko.javascript.info/prototype-inheritance',
      },
      {
        categoryId: 1,
        title: '자바스크립트의 비동기 처리 하는 이유와 방식에 대해 알고 있다.',
        link: 'https://ko.javascript.info/async',
      },
      {
        categoryId: 1,
        title:
          'fetch를 통해 서버에 네트워크 요청을 보내고 정보를 받아올 수 있다.',
        link: 'https://ko.javascript.info/fetch',
      },
      {
        categoryId: 1,
        title: '자바스크립트 이벤트 루프의 동작 원리를 알고 있다.',
        link: 'https://ko.javascript.info/event-loop',
      },
      {
        categoryId: 1,
        title:
          'CORS의 개념과 CORS 에러가 발생 했을 때 해결 방안에 대해 알고 있다.',
        link: 'https://ko.javascript.info/fetch-crossorigin',
      },
      {
        categoryId: 2,
        title: '브라우저 렌더링의 원리에 대해 설명할 수 있다.',
        link: 'https://d2.naver.com/helloworld/59361',
      },
      {
        categoryId: 2,
        title: 'REST API의 정의와 특징을 알고 설명할 수 있다.',
        link: 'https://www.youtube.com/watch?v=iOueE9AXDQQ',
      },
      {
        categoryId: 2,
        title: 'HTTP와 HTTPS의 차이점에 대해 설명할 수 있다.',
        link: 'https://www.youtube.com/watch?v=H6lpFRpyl14',
      },
      {
        categoryId: 2,
        title: 'TCP, UDP 각각의 특징과 차이점에 대해 설명할 수 있다.',
        link: 'https://www.youtube.com/watch?v=ikDVGYp5dhg',
      },
      {
        categoryId: 2,
        title:
          '브라우저 저장소(LocalStorage, SessionStorage, Cookie) 각각의 특징에 대해 비교하고 설명할 수 있다.',
        link: 'https://erwinousy.medium.com/쿠키-vs-로컬스토리지-차이점은-무엇일까-28b8db2ca7b2',
      },
      {
        categoryId: 2,
        title: 'DNS의 개념에 대해 알고 있고 동작 방식에 대해 알고 있다.',
        link: 'https://www.youtube.com/watch?v=6fc9NAQkcv0',
      },
      {
        categoryId: 2,
        title: '스택과 큐의 특징을 알고 구현할 수 있다.',
        link: 'https://www.youtube.com/watch?v=Nk_dGScimz8',
      },
      {
        categoryId: 3,
        title: 'npm이 무엇인지 알고 활용할 수 있다.',
        link: 'https://opentutorials.org/module/4044',
      },
      {
        categoryId: 3,
        title: '웹팩의 개념과 사용하는 이유에 대해 알고 있다.',
        link: 'https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html',
      },
      {
        categoryId: 3,
        title: '바벨의 개념과 사용하는 이유에 대해 알고 있다.',
        link: 'https://ahnheejong.name/articles/frontend-birds-eye-view-babel/',
      },
      {
        categoryId: 3,
        title: 'git을 사용해보고 프로젝트 관리 방법에 대해 알고 있다.',
        link: 'https://www.youtube.com/watch?v=1I3hMwQU6GU',
      },
      {
        categoryId: 3,
        title: '테스팅 도구를 쓰는 이유를 알고 써본 적이 있다.',
        link: 'https://www.youtube.com/watch?v=Npi21gLIEZM',
      },
      {
        categoryId: 3,
        title: '코드 포맷터와 린터의 역할을 알고 프로젝트에 적용할 수 있다.',
        link: 'https://dev.to/andrewbaisden/how-to-use-eslint-and-prettier-for-code-analysis-and-formatting-1b4g',
      },
    ];

    // 카테고리 생성
    categories.forEach((category, index) => {
      CategoryModel.push({
        id: index,
        title: category,
      });
    });

    // 질문 생성
    questions.forEach((question, index) => {
      QuestionModel.push({
        id: index,
        categoryId: question.categoryId,
        title: question.title,
        link: question.link,
      });
    });
  };

  initModel();
  return {CategoryModel, QuestionModel};
};

export default Models;
