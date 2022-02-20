### [jsconfig.json 파일이 필요한 이유는 무엇입니까?](https://code.visualstudio.com/docs/languages/jsconfig)
#### Visual Studio Code의 JavaScript 지원은 두 가지 다른 모드에서 실행할 수 있습니다.

1. 파일 범위 - jsconfig.json 없음 :
   이 모드에서 Visual Studio Code에서 열린 JavaScript 파일은 독립 단위로 처리됩니다.
   파일 이 명시적으로 a.js파일을 참조하지 않는 한 ( 또는 CommonJS 모듈 사용 ) 두 파일
   사이에는 공통 프로젝트 컨텍스트가 없습니다.b.tsimport

2. 명시적 프로젝트 - jsconfig.json 포함 :
   JavaScript 프로젝트는 jsconfig.json파일을 통해 정의됩니다.
   디렉토리에 이러한 파일이 있으면 해당 디렉토리가 JavaScript 프로젝트의 루트임을 나타냅니다.
   파일 자체는 선택적으로 프로젝트에 속한 파일, 프로젝트에서 제외할 파일 및 컴파일러 옵션을
   나열할 수 있습니다.
