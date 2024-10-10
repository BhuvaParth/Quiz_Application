const SubjectsData = {
  python: [
    {
      title: "Introduction to Python",
      description:
        "Learn the basics of Python programming, including variables, data types, loops, and functions, with an emphasis on writing clean and efficient code.",
    },
  ],
  css: [
    {
      title: "Mastering CSS",
      description:
        "Explore advanced CSS techniques for styling web pages, including layouts with Flexbox and Grid, responsive design, animations, and modern CSS features.",
    },
  ],
  angular: [
    {
      title: "Getting Started with Angular",
      description:
        "A comprehensive introduction to Angular, covering topics like components, directives, services, and routing, while building dynamic, single-page applications.",
    },
  ],
};

export default SubjectsData;

export const PythonQuiz = {
  title: "Python Programming Quiz",
  questions: [
    {
      question: "Which of the following is a valid variable name in Python?",
      options: [
        { option: "A", text: "1variable" },
        { option: "B", text: "variable1" },
        { option: "C", text: "variable-1" },
        { option: "D", text: "None of the above" },
      ],
      correctAnswer: "B",
    },
    {
      question: "What is the output of the following code: print(2 ** 3)?",
      options: [
        { option: "A", text: "5" },
        { option: "B", text: "6" },
        { option: "C", text: "8" },
        { option: "D", text: "9" },
      ],
      correctAnswer: "C",
    },
    {
      question: "Which of the following is a Python data type?",
      options: [
        { option: "A", text: "int" },
        { option: "B", text: "character" },
        { option: "C", text: "strnum" },
        { option: "D", text: "None of the above" },
      ],
      correctAnswer: "A",
    },
    {
      question: "What is the correct syntax to define a function in Python?",
      options: [
        { option: "A", text: "function myFunc():" },
        { option: "B", text: "def myFunc():" },
        { option: "C", text: "create myFunc():" },
        { option: "D", text: "None of the above" },
      ],
      correctAnswer: "B",
    },
    {
      question: "Which of these is a loop structure in Python?",
      options: [
        { option: "A", text: "for" },
        { option: "B", text: "repeat" },
        { option: "C", text: "foreach" },
        { option: "D", text: "None of the above" },
      ],
      correctAnswer: "A",
    },
    {
      question: "How do you create a list in Python?",
      options: [
        { option: "A", text: "list = []" },
        { option: "B", text: "list = {}" },
        { option: "C", text: "list = ()" },
        { option: "D", text: "list = <>" },
      ],
      correctAnswer: "A",
    },
    {
      question: "What is the correct way to import a module in Python?",
      options: [
        { option: "A", text: "import module_name" },
        { option: "B", text: "include module_name" },
        { option: "C", text: "require module_name" },
        { option: "D", text: "using module_name" },
      ],
      correctAnswer: "A",
    },
    {
      question: "What will be the output of print(type(5))?",
      options: [
        { option: "A", text: "<class 'int'>" },
        { option: "B", text: "<type 'int'>" },
        { option: "C", text: "int" },
        { option: "D", text: "5" },
      ],
      correctAnswer: "A",
    },
    {
      question: "Which keyword is used to handle exceptions in Python?",
      options: [
        { option: "A", text: "try" },
        { option: "B", text: "catch" },
        { option: "C", text: "except" },
        { option: "D", text: "handle" },
      ],
      correctAnswer: "C",
    },
    {
      question:
        "What is the output of the following code: print('Hello, World!'.split())?",
      options: [
        { option: "A", text: "['Hello,', 'World!']" },
        { option: "B", text: "['Hello', 'World!']" },
        { option: "C", text: "['Hello World!']" },
        { option: "D", text: "Hello World!" },
      ],
      correctAnswer: "B",
    },
    {
      question: "Which method is used to add an element to the end of a list?",
      options: [
        { option: "A", text: "add()" },
        { option: "B", text: "append()" },
        { option: "C", text: "insert()" },
        { option: "D", text: "extend()" },
      ],
      correctAnswer: "B",
    },
  ],
};

export const CSSQuiz = {
  title: "CSS Basics Quiz",
  questions: [
    {
      question: "Which property is used to change the text color in CSS?",
      options: [
        { option: "A", text: "color" },
        { option: "B", text: "font-color" },
        { option: "C", text: "text-color" },
        { option: "D", text: "None of the above" },
      ],
      correctAnswer: "A",
    },
    {
      question: "What does CSS stand for?",
      options: [
        { option: "A", text: "Cascading Style Sheets" },
        { option: "B", text: "Colorful Style Sheets" },
        { option: "C", text: "Computer Style Sheets" },
        { option: "D", text: "Creative Style Sheets" },
      ],
      correctAnswer: "A",
    },
    {
      question: "Which of the following is a valid CSS selector?",
      options: [
        { option: "A", text: "#myId" },
        { option: "B", text: ".myClass" },
        { option: "C", text: "div" },
        { option: "D", text: "All of the above" },
      ],
      correctAnswer: "D",
    },
    {
      question: "How do you apply a background color in CSS?",
      options: [
        { option: "A", text: "background: color;" },
        { option: "B", text: "bgcolor: color;" },
        { option: "C", text: "color: background;" },
        { option: "D", text: "None of the above" },
      ],
      correctAnswer: "A",
    },
    {
      question:
        "Which property is used to control the spacing between words in CSS?",
      options: [
        { option: "A", text: "letter-spacing" },
        { option: "B", text: "word-spacing" },
        { option: "C", text: "line-height" },
        { option: "D", text: "None of the above" },
      ],
      correctAnswer: "B",
    },
    {
      question: "Which CSS property controls the text size?",
      options: [
        { option: "A", text: "font-size" },
        { option: "B", text: "text-size" },
        { option: "C", text: "text-style" },
        { option: "D", text: "size" },
      ],
      correctAnswer: "A",
    },
    {
      question:
        "What is the correct CSS syntax to change the font of an element?",
      options: [
        { option: "A", text: "font-family: Arial;" },
        { option: "B", text: "font: Arial;" },
        { option: "C", text: "font-style: Arial;" },
        { option: "D", text: "text-font: Arial;" },
      ],
      correctAnswer: "A",
    },
    {
      question: "How do you make a list not display bullet points?",
      options: [
        { option: "A", text: "list-style: none;" },
        { option: "B", text: "list-type: none;" },
        { option: "C", text: "none: bullets;" },
        { option: "D", text: "bullets: none;" },
      ],
      correctAnswer: "A",
    },
    {
      question: "Which property is used to change the font of an element?",
      options: [
        { option: "A", text: "font-weight" },
        { option: "B", text: "font-style" },
        { option: "C", text: "font-family" },
        { option: "D", text: "font-type" },
      ],
      correctAnswer: "C",
    },
    {
      question: "How do you select all <p> elements inside a <div> element?",
      options: [
        { option: "A", text: "div p" },
        { option: "B", text: "div.p" },
        { option: "C", text: "p.div" },
        { option: "D", text: "p inside div" },
      ],
      correctAnswer: "A",
    },
    {
      question: "What is the default value of the position property?",
      options: [
        { option: "A", text: "static" },
        { option: "B", text: "relative" },
        { option: "C", text: "absolute" },
        { option: "D", text: "fixed" },
      ],
      correctAnswer: "A",
    },
  ],
};

export const AngularQuiz = {
  title: "Angular Quiz",
  questions: [
    {
      question: "What is Angular?",
      options: [
        { option: "A", text: "A JavaScript framework" },
        { option: "B", text: "A library" },
        { option: "C", text: "A CSS framework" },
        { option: "D", text: "A TypeScript framework" },
      ],
      correctAnswer: "A",
    },
    {
      question: "Which of the following is a feature of Angular?",
      options: [
        { option: "A", text: "Two-way data binding" },
        { option: "B", text: "Virtual DOM" },
        { option: "C", text: "Reactive programming" },
        { option: "D", text: "State management" },
      ],
      correctAnswer: "A",
    },
    {
      question: "What is the purpose of Angular CLI?",
      options: [
        { option: "A", text: "To create components" },
        { option: "B", text: "To build and manage Angular applications" },
        { option: "C", text: "To handle HTTP requests" },
        { option: "D", text: "To write CSS" },
      ],
      correctAnswer: "B",
    },
    {
      question: "Which of the following is not a lifecycle hook in Angular?",
      options: [
        { option: "A", text: "ngOnInit" },
        { option: "B", text: "ngOnDestroy" },
        { option: "C", text: "ngAfterViewInit" },
        { option: "D", text: "ngOnComplete" },
      ],
      correctAnswer: "D",
    },
    {
      question: "What does 'ng' stand for in Angular?",
      options: [
        { option: "A", text: "New Generation" },
        { option: "B", text: "Next Generation" },
        { option: "C", text: "Angular" },
        { option: "D", text: "Nothing" },
      ],
      correctAnswer: "C",
    },
    {
      question: "Which operator is used to create observables in Angular?",
      options: [
        { option: "A", text: "create()" },
        { option: "B", text: "subscribe()" },
        { option: "C", text: "Observable()" },
        { option: "D", text: "of()" },
      ],
      correctAnswer: "D",
    },
    {
      question: "What is a component in Angular?",
      options: [
        { option: "A", text: "A piece of code that controls a view" },
        { option: "B", text: "A service that fetches data" },
        { option: "C", text: "A module that contains routes" },
        { option: "D", text: "A function that manages state" },
      ],
      correctAnswer: "A",
    },
    {
      question:
        "Which of the following is used for dependency injection in Angular?",
      options: [
        { option: "A", text: "Module" },
        { option: "B", text: "Decorator" },
        { option: "C", text: "Service" },
        { option: "D", text: "Component" },
      ],
      correctAnswer: "C",
    },
    {
      question: "What is the purpose of Angular's NgModule?",
      options: [
        { option: "A", text: "To bundle components, directives, and pipes" },
        { option: "B", text: "To handle routes" },
        { option: "C", text: "To manage services" },
        { option: "D", text: "To create observables" },
      ],
      correctAnswer: "A",
    },
    {
      question:
        "What directive is used to create a condition in Angular templates?",
      options: [
        { option: "A", text: "*ngFor" },
        { option: "B", text: "*ngIf" },
        { option: "C", text: "*ngSwitch" },
        { option: "D", text: "*ngElse" },
      ],
      correctAnswer: "B",
    },
  ],
};
