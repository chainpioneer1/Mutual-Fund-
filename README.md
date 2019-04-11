# p-proj


## install Globals
npm i -g lerna
npm i -g ts-node
npm i -g typescript
npm i -g @angular/cli

## build 
node build


### guids
https://angular.io/tutorial


## commands
add module 'ng g m mutualFunds --spec false --routing'

ng build --watch

## vscode conf
        {
            "type": "node",
            "request": "launch",
            "name": "web-server",
            "runtimeArgs": ["-r","ts-node/register"],
            "args": ["${workspaceRoot}\\web-server\\app.ts"],
            "cwd": "${workspaceFolder}",
        }
        
to start server without debuging, run ts-node web-server/app.ts from root folder.

# vs-code ext
https://marketplace.visualstudio.com/items?itemName=doggy8088.angular-extension-pack

https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline



sudo chmod -R a+rwx Mutual-Fund
