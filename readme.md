# Project AC-Exercise-S2-3-A14-URL-shortener
Alpha camp Semester2-3 A14 短網址產生器

![alt text](https://github.com/yc62897441/AC-Exercise-S2-3-A14-URL-shortener/blob/master/images/sample001.jpg?raw=true)

## Environment & Prerequisites

nvm: 1.1.9

body-parser: ^1.20.0

express: ^4.17.3

express-handlebars: ^6.0.4

mongoose: ^6.2.10

## Installing and Execution
1. Clone projet to your localhost
```
git clone https://github.com/yc62897441/AC-Exercise-S2-3-A14-URL-shortener.git
```

2. change directory to project file
```
cd "AC-Exercise-S2-3-A14-URL-shortener"
```

3. install npm module
```
npm install
```

4. Run project
```
npm run dev
```

5. browse: localhost:3000

6. If app crashed, declare variable "mainURL"  
```
// ./routes/modules/switch.js
let mainURL = 'http://localhost:3000/'
```

## Features
1. Switch a long URL to a short one.

2. Rebuild the long URL from the short one.