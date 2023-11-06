- React Testing Library
- Jest

# Coverage output
- "coverage": "npm test -- --coverage --watchAll"


--------|---------|----------|---------|---------|-------------------
File    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------|---------|----------|---------|---------|-------------------
...iles |   38.88 |        0 |   66.66 |   38.88 |                   
 src    |    8.33 |        0 |   33.33 |    8.33 |                   
  ...sx |     100 |      100 |     100 |     100 |                   
  ...sx |       0 |      100 |     100 |       0 | 7-19              
  ...ts |       0 |        0 |       0 |       0 | 3-10              
 ...eet |     100 |      100 |     100 |     100 |                   
  ...sx |     100 |      100 |     100 |     100 |                   
  ...sx |     100 |      100 |     100 |     100 |                   
  ...sx |     100 |      100 |     100 |     100 |                   
--------|---------|----------|---------|---------|-------------------

Test Suites: 6 passed, 6 total
Tests:       4 skipped, 6 passed, 10 total
Snapshots:   0 total
Time:        23.549 s
Ran all test suites.

# Coverage output
- "coverage": "npm test -- --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}'"


 PASS  src/components/greet/greetThree.test.tsx (22.805 s)
 PASS  src/components/greet/greet.spec.tsx (22.744 s)
 PASS  src/__tests__/greet-test.tsx (22.83 s)
 PASS  src/components/greet/greetTwo.test.tsx (22.742 s)
 PASS  src/components/greet/greet.test.tsx (5.956 s)
 PASS  src/App.test.tsx (6.062 s)
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |      100 |     100 |     100 |                   
 greet.tsx      |     100 |      100 |     100 |     100 |                   
 greetThree.tsx |     100 |      100 |     100 |     100 |                   
 greetTwo.tsx   |     100 |      100 |     100 |     100 | 
----------------|---------|----------|---------|---------|-------------------

Test Suites: 6 passed, 6 total
Tests:       4 skipped, 6 passed, 10 total
Snapshots:   0 total
Time:        34.892 s
Ran all test suites.

# Coverage output
- "coverage": "npm test -- --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}'"

 PASS  src/components/greet/greetThree.test.tsx (10.905 s)
 PASS  src/__tests__/greet-test.tsx (11.291 s)
 PASS  src/components/greet/greet.spec.tsx (11.476 s)
 PASS  src/components/greet/greetTwo.test.tsx (10.72 s)
 PASS  src/components/greet/greet.test.tsx
 PASS  src/App.test.tsx
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |      100 |     100 |     100 |                   
 greet.tsx      |     100 |      100 |     100 |     100 |                   
 greetThree.tsx |     100 |      100 |     100 |     100 |                   
 greetTwo.tsx   |     100 |      100 |     100 |     100 |                   
----------------|---------|----------|---------|---------|-------------------

# Coverage Threshold

  "jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": -10
      }
    }
  }

  * With this configuration, Jest will fail if there is less than 80% branch, line & function coverage or if there r more than 10 uncovered statements

----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |      75 |        0 |      75 |      75 |                   
 greet.tsx      |     100 |      100 |     100 |     100 |                   
 greetFour.tsx  |       0 |        0 |       0 |       0 | 5-6               
 greetThree.tsx |     100 |      100 |     100 |     100 |                   
 greetTwo.tsx   |     100 |      100 |     100 |     100 |                   
----------------|---------|----------|---------|---------|-------------------
Jest: "global" coverage threshold for branches (80%) not met: 0%
Jest: "global" coverage threshold for lines (80%) not met: 75%
Jest: "global" coverage threshold for functions (80%) not met: 75%

# Jest also generates HTML page of ur coverage report

- coverage/Icov-report/index.html

- 80% Coverage - is a good goal to aim for.
