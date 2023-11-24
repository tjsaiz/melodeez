@ECHO OFF
IF EXIST "frontend" START "" /D frontend call npm install
IF EXIST "backend" START "" /D backend call npm install
