# ☁️ In-admin Applications

> An "In-Admin App", is an application that runs and executes within the context of Nuvemshop's administration panel, through the use of an iframe. The purpose of building in-admin apps is to provide integrations that feel more seamless and native.

> The objective of this project is to provide the developer with tools and examples to create such an embedded application. We will also provide 3 example applications: (1) one simple front end app in react, (2) one simple front end app in vanilla js, (3) a simple back end application written in node js that can connect with the previous two example front end apps.

## ⚡️ Let's start

Before we start let's do a macro view to understand the main actors with their responsibilities and initiation flow

![Untitled_2022-12-07_17-53-25](https://user-images.githubusercontent.com/44773699/206258946-38ecedf7-dbba-4515-a7c3-de8dc9ae4799.png)


## 🎭 Actors

As a developer, you will be responsible for developing the code in the In-Admin App. Your app, will be connected to the Nuvemshop Admin, through an SDK called Nexo. We are going to briefly describe the responsibilities of each Actor:

### In-admin App
This is the application that you will write. The application has to be a simple HTML document with public access via an URL. Below, you will find comprehensive documentation about how Nexo works. For now, we will just describe the basics:
- Use Start Nexo to initialize message exchange between the Admin, and the App (this will start the bridge for future communications)
- After initialization, you will have to explicitely Notify that the application is ready to be shown, this way, the Admin will render it
- Finally, you will execute the In-App business model logic

### Nexo
SDK to establish communication between the Admin and the Application
- Being the bridge for communications between the Admin and the Application
- Defines and manages the available actions that are exchanged through messages
- Provides tools to make easier the implementation of actions in the application 

### Admin
Admin actor is responsible for managing the currently logged in Nuvemshop merchant, which means:
- Activate development mode: allows developers to test applications without the need of them being formally approved in our Appstore ([see below how to activate this for your app](#-developer-mode))
- Define the access for the application (routes): Nuvemshop will provide you with a route (URL), in which your application will be summoned.
- Defines where the application will have to be loaded through an iframe
- Initializes Nexo to be able to receive and send messages according to the needs of the application
- It is responsible for checking if the application is ready to be displayed
- Manage session tokens and share with the app through Nexo to know which Store is logged in


## 🚦Application initialization flow

![output-onlinepngtools](https://user-images.githubusercontent.com/44773699/206066084-f754fcb9-711e-452c-9e21-f86a7f0b3fe2.png)


## 💬 Introduction to Nexo
It is a tool developed by Nuvemshop that allows us to establish communication with the Admin and also manage the actions that can be carried out between the application and the administrator.

Nexo is available through NPM
```bash
npm install @tiendanube/nexo
```

It is an essential requirement that the application generates an instance of Nexo to be able to execute the actions

The Nexo instance allows you to enter 2 parameters to start:


| Config   |  Type                     | Description                                                        |
|----------|---------------------------|--------------------------------------------------------------------|
| clientId | `string` required         | App Id, this value is provided by Nuvemshop in Partners Portal      |
| log      | `boolean` default `false` | Allows to show the message transfers between the App and the Admin |

The logs are available through the browser console
![Screen Shot 2022-12-06 at 15 54 42](https://user-images.githubusercontent.com/44773699/205997754-8f47aac1-73d1-4a34-9427-784e7e3f458d.png)


### 🤔 FAQ
- [How to create a Nexo instance?](https://www.npmjs.com/package/@tiendanube/nexo#create-a-nexo-instance)
- [How to start the application?](https://www.npmjs.com/package/@tiendanube/nexo#check-if-the-app-is-connected)
- [How to synchronize URLs?](https://www.npmjs.com/package/@tiendanube/nexo#enable-route-synchronization)
- [How to configure axios interceptor to obtain session token for each request?](https://www.npmjs.com/package/@tiendanube/nexo#get-session-token)
- [What actions are available?](https://www.npmjs.com/package/@tiendanube/nexo#actions)
- [What tools are available for the management of actions?](https://www.npmjs.com/package/@tiendanube/nexo#helpers)
  

## 👨‍💻 Learn more about test applications
- [React Application](/react)
- [Vanilla JS with webpack](/vanilla)
- [API with NodeJS](/api)

## 💻 Developer Mode
> This functionality is only available for previously enabled Stores. To access this functionality, request it through a contact at Nuvemshop

With the Developer Mode option activated you will have a new option available in the menu with the name "*Aplicativo de teste o Aplicación de Prueba*". By entering this option you can enter the URL of the application

![Screen Shot 2022-12-06 at 14 47 46](https://user-images.githubusercontent.com/44773699/205984732-1c572c57-14af-4245-9b03-262645fd91e1.png)

### Test application information
- Client ID: `0000`
- Key Secret: `THE_SECRET`
