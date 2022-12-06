const nexo = require('@tiendanube/nexo').default;
const helpers = require('@tiendanube/nexo/helpers');

const nexoClient =  nexo.create({
  clientId: '0000',
  log: true,
})

helpers.connect(nexoClient).then(() => {
  helpers.iAmReady(nexoClient);

  showConnected();
  
  setSomeActions();
  
}).catch(() => {
  showNoConnected();
})

function showConnected(){
  const element = document.createElement('h1');
  element.innerHTML = "The application has successfully connected with Admin";
  insertApp(element);
}

function showNoConnected(){
  const element = document.createElement('h1');
  element.innerHTML = "This application is only visible within the Admin";
  insertApp(element);
}

function setSomeActions(){
  const buttonGoTo = document.createElement('button');
  buttonGoTo.innerText = 'Go to orders';
  buttonGoTo.addEventListener('click', () => {
    helpers.goTo(nexoClient, '/orders');
  });
  insertApp(buttonGoTo);


  const buttonSessionToken = document.createElement('button');
  buttonSessionToken.innerText = 'Get session token';

  const textToken = document.createElement('span');

  buttonSessionToken.addEventListener('click', () => {
    helpers.getSessionToken(nexoClient).then(token => {
      textToken.innerHTML = token;
    });
  });

  insertApp(buttonSessionToken);
  insertApp(textToken);
}

function insertApp(element){
  document.body.appendChild(element);
}
