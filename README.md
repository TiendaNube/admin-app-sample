# ☁️ App in Admin

> The objective of this project is to provide the developer with tools and examples to create an embedded application in Admin of Nuvemshop

3 examples will be shown, 2 front and one backend
- React with Nimbus (Nuvemshop Design System)
- Vanilla with Webpack
- NodeJS (to API)


## ⚡️ Let's start

Before we start let's do a macro view to understand the main actors with their responsibilities and initiation flow

![Untitled_2022-12-06_16-14-24](https://user-images.githubusercontent.com/44773699/205965748-e30c865c-be50-4c99-a038-fece4ca7232b.png)

###  Actors
#### Admin
Nuvemshop admin with merchants logged
- Activate development mode (dev mode)
- Define the access for the application (routes)
- Inicia la aplicación en un iframe (iframe)
- Start Nexo for message exchange (bridge)
- Check if the application is ready to load within the Admin
- Management of session token that will validate the authenticity of a Store with an active session (authentication)

### [Nexo](https://www.npmjs.com/package/@tiendanube/nexo)
Tool developed in JS for the communication between the Admin and the Application
- Being the bridge for communications between the Admin and the Application (bridge)
- Management of actions (patterns)
- Tools provider (tools)

### App
The application has to be an HTML document with public access via URL
- Start Nexo for message exchange (start bridge)
- Notify that the application is ready to be shown (start)
- Representation of the business model

## Application initialization flow

![Authentication App New Admin_2022-12-06_16-50-18](https://user-images.githubusercontent.com/44773699/205972906-a8d59243-4893-4f28-8dee-61b60a86cc0b.png)


## Developer Mode
> This functionality is only available for previously enabled Stores. To access this functionality, request it through a contact at Nuvemshop

With the Developer Mode option activated you will have a new option available in the menu with the name "*Aplicativo de teste o Aplicación de Prueba*". By entering this option you can enter the URL of the application

![Screen Shot 2022-12-06 at 14 47 46](https://user-images.githubusercontent.com/44773699/205984732-1c572c57-14af-4245-9b03-262645fd91e1.png)

### Test application information
- Client ID: `0000`
- Key Secret: `THE_SECRET`








