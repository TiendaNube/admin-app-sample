# ☁️ App in Admin

> The objective of this project is to provide the developer with tools and examples to create an embedded application in Admin of Nuvemshop


- [☁️ App in Admin](#️-app-in-admin)
  - [⚡️ Let's start](#️-lets-start)
    - [Actors](#actors)
      - [Admin](#admin)
      - [Nexo](#nexo)
      - [App](#app)
  - [Application initialization flow](#application-initialization-flow)
  - [Introducción Nexo](#introducción-nexo)
    - [FAQ](#faq)
  - [React Application](#react-application)
  - [Vanilla JS Aplication](#vanilla-js-aplication)
  - [API for Application](#api-for-application)
  - [Developer Mode](#developer-mode)
    - [Test application information](#test-application-information)

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

#### [Nexo](https://www.npmjs.com/package/@tiendanube/nexo)
Tool developed in JS for the communication between the Admin and the Application
- Being the bridge for communications between the Admin and the Application (bridge)
- Management of actions (patterns)
- Tools provider (tools)

#### App
The application has to be an HTML document with public access via URL
- Start Nexo for message exchange (start bridge)
- Notify that the application is ready to be shown (start)
- Representation of the business model

## Application initialization flow

![Authentication App New Admin_2022-12-06_16-50-18](https://user-images.githubusercontent.com/44773699/205972906-a8d59243-4893-4f28-8dee-61b60a86cc0b.png)


## Introducción Nexo
It is a tool developed by Nuvemshop that allows us to establish communication with the Admin and also manage the actions that can be carried out between the application and the administrator.

Nexo is available through NPM
```
$ npm install @tiendanube/nexo
```
```
$ yarn add @tiendanube/nexo
```

It is an essential requirement that the application generates an instance of Nexo to be able to execute the actions

The Nexo instance allows you to enter 2 parameters to start:


| Config   |  Type                     | Description                                                        |
|----------|---------------------------|--------------------------------------------------------------------|
| clientId | `string` required         | This value is provided by Nuvemshop                                |
| log      | `boolean` default `false` | Allows to show the message transfers between the App and the Admin |

The logs are available through the browser console
![Screen Shot 2022-12-06 at 15 54 42](https://user-images.githubusercontent.com/44773699/205997754-8f47aac1-73d1-4a34-9427-784e7e3f458d.png)


### FAQ
- [How to create a Nexo instance?](https://www.npmjs.com/package/@tiendanube/nexo#create-a-nexo-instance)
- [How to start the application?](https://www.npmjs.com/package/@tiendanube/nexo#check-if-the-app-is-connected)
- [How to synchronize URLs?](https://www.npmjs.com/package/@tiendanube/nexo#enable-route-synchronization)
- [How to configure axios interceptor to obtain session token for each request?](https://www.npmjs.com/package/@tiendanube/nexo#get-session-token)
- [What actions are available?](https://www.npmjs.com/package/@tiendanube/nexo#actions)
- [What tools are available for the management of actions?](https://www.npmjs.com/package/@tiendanube/nexo#helpers)

## React Application

This project was bootstrapped with Create React App.

<a href="https://www.loom.com/share/5f6414f1425049ec985b8096dabfc389">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/5f6414f1425049ec985b8096dabfc389-with-play.gif">
</a>

Dependencies: 
 - React 17
 - [Nexo](https://www.npmjs.com/package/@tiendanube/nexo)
 - [Nimbus](https://tiendanube.github.io/design-system-nimbus/?path=/story/intro-welcome--welcome) Design System Nuvemshop
 - [React Router Dom v5](https://v5.reactrouter.com/web/guides/quick-start)


**App Features**
- Management of pages and routes
- Listing page
- Forms page
- Layout of pages in 2 columns
- Navigation to an option of the Administrator
- URL synchronization
- Mobile mode


## Vanilla JS Aplication

In progress..
Create video..

**App Features:**
- x


## API for Application
In progress..
Create video..
**App Features:**
- x
  
## Developer Mode
> This functionality is only available for previously enabled Stores. To access this functionality, request it through a contact at Nuvemshop

With the Developer Mode option activated you will have a new option available in the menu with the name "*Aplicativo de teste o Aplicación de Prueba*". By entering this option you can enter the URL of the application

![Screen Shot 2022-12-06 at 14 47 46](https://user-images.githubusercontent.com/44773699/205984732-1c572c57-14af-4245-9b03-262645fd91e1.png)

### Test application information
- Client ID: `0000`
- Key Secret: `THE_SECRET`