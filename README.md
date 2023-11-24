# melodeez
### Application user interface for music library
### Requires node.js and npm to run
### Instructions to run the application
1. Install packages by either running the install.bat scripted located in the root diretory  <br> 
or <br> 
run the following commands in a command prompt<br>
>Open command prompt inside the root directory<br>
> ```cd ./frontend ``` // locate frontend directory<br>
> ```npm install ``` <br>
> ```cd ../backend ``` // locate backend directory<br>
> ```npm install ``` <br>
---
2. Run the server by executing these following commands in the command prompt
> Open cmd prompt inside the frontend directory<br>
> ```npm run both``` <br>
> You should see vite and express running <br>
> ![img.png](resources/img.png)<br>
---

### If ports needed to be changed
##### For frontend:
- Locate vite.config.js in frontend directory
- Find this config inside

       export default defineConfig({
            plugins: [react()],
            server: {
            port: 5555,
            }
       })
- Change the port to any desired port
### For backend:
- Locate index.js in backend directory 
- Find the PORT variable: ```const PORT = 8000```
- Replace the PORT variable to any desired port


---

