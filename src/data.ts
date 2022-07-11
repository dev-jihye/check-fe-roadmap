export type TCategoryModel = {
  id: number;
  title: string;
};

export type TQuestionModel = {
  id: number;
  categoryId: number;
  title: string;
};

const Models = () => {
  const CategoryModel: TCategoryModel[] = [];

  const QuestionModel: TQuestionModel[] = [];

  const initModel = () => {
    const categories = ['HTML & CSS', 'Javascript', 'CS', 'Framework', 'Tools'];
    const questions = [
      {categoryId: 0, title: 'HTML의 태그에 대해 알고 있다.'},
      {
        categoryId: 0,
        title: '시맨틱 태그를 쓰는 이유에 대해 알고 있다.',
      },
      {
        categoryId: 0,
        title: 'id와 class 선택자의 차이점에 대해 설명할 수 있다.',
      },
      {
        categoryId: 0,
        title: 'CSS box model에 대해 이해하고 활용할 수 있다.',
      },
      {
        categoryId: 0,
        title: 'CSS position에 대해 이해하고 활용할 수 있다.',
      },
      {
        categoryId: 0,
        title: 'CSS flex와 grid에 대해 이해하고 활용할 수 있다.',
      },
      {
        categoryId: 0,
        title: ' CSS framework를 사용해본 적이 있다.',
      },
      {
        categoryId: 0,
        title: '반응형 디자인과 미디어 쿼리를 활용할 수 있다.',
      },
      {
        categoryId: 0,
        title: 'SASS, SCSS와 CSS의 차이점을 알고 써본 경험이 있다.',
      },
      {
        categoryId: 0,
        title: 'CSS in JS의 개념을 알고 써본 적이 있다.',
      },
      {
        categoryId: 1,
        title: '자바스크립트가 무엇이고 어떤 역할을 하는지 알고 있다.',
      },
      {
        categoryId: 1,
        title: '자바스크립트를 활용해 DOM을 조작할 수 있다.',
      },
      {
        categoryId: 1,
        title: 'callback 함수에 대해 알고 활용할 수 있다.',
      },
      {
        categoryId: 1,
        title: 'fetch API를 사용해서 ajax 통신할 수 있다.',
      },
      {
        categoryId: 1,
        title: '이벤트 버블링, 캡처링, 이벤트 위임에 대해 알고 있다.',
      },
      {
        categoryId: 1,
        title: '자바스크립트의 데이터 타입에 대해 알고 있다.',
      },
      {
        categoryId: 1,
        title: '자바스크립트의 비동기 처리 하는 이유와 방식에 대해 알고 있다.',
      },
      {
        categoryId: 1,
        title:
          '호이스팅의 의미를 알고 var, let, const 키워드에서 각각 어떻게 동작하는지 차이를 알고 있다.',
      },
      {
        categoryId: 1,
        title: '클로저와 스코프에 대해 알고 있다.',
      },
      {
        categoryId: 1,
        title: '실행 문맥의 개념에 대해 알고 있다.',
      },
      {
        categoryId: 1,
        title: '자바스크립트 이벤트 루프의 동작 원리를 알고 있다.',
      },
      {categoryId: 2, title: '브라우저 렌더링의 원리에 대해 설명할 수 있다.'},
      {categoryId: 2, title: 'REST API의 정의와 특징을 알고 설명할 수 있다.'},
      {categoryId: 2, title: 'HTTP와 HTTPS의 차이점에 대해 설명할 수 있다.'},
      {
        categoryId: 2,
        title: 'HTTP 프로토콜 특징과 요청 메서드에 대해 알고 설명할 수 있다.',
      },
      {
        categoryId: 2,
        title:
          '브라우저 저장소(LocalStorage, SessionStorage, Cookie) 각각의 특징에 대해 비교하고 설명할 수 있다.',
      },
      {
        categoryId: 2,
        title: 'DNS의 개념에 대해 알고 있고 동작 방식에 대해 알고 있다.',
      },
      {
        categoryId: 2,
        title:
          'CORS의 개념과 CORS 에러가 발생 했을 때 해결 방안에 대해 알고 있다.',
      },
      {
        categoryId: 3,
        title: 'React, Vue 중에 사용해본 프레임워크가 있다.',
      },
      {
        categoryId: 3,
        title: 'React나 Vue의 라이프 사이클에 대해 설명할 수 있다.',
      },
      {
        categoryId: 3,
        title: 'CSR, SSR 방식의 특징과 차이점에 대해 알고 있다.',
      },
      {
        categoryId: 3,
        title: '상태 관리 툴을 쓰는 이유를 알고 써본 적이 있다.',
      },
      {
        categoryId: 4,
        title: '웹팩의 개념과 사용하는 이유에 대해 알고 있다.',
      },
      {
        categoryId: 4,
        title: 'git을 사용해보고 프로젝트 관리 방법에 대해 알고 있다.',
      },
      {
        categoryId: 4,
        title: '테스팅 도구를 쓰는 이유를 알고 써본 적이 있다.',
      },
      {
        categoryId: 4,
        title: '코드 포맷터와 린터의 역할을 알고 써본 적이 있다.',
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
      });
    });
  };

  initModel();
  return {CategoryModel, QuestionModel};
};

export default Models;
