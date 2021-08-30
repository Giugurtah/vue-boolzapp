// Creazione suono di notifica
const notificationSound = new Audio("./sounds/notification_sound.wav")
var app = new Vue({
    el: '#app',
    data: {
      // Dati prelevati dalla base dati
      data,
      // Booleano che controlla se le notifiche sono attive o no
      IsNotificationActive: false,
      // Dati ricevuti da form/click
      searchedUser: "",
      selectedContact: data.contacts[0],
      sentMessage: "",
      selectedMessage: undefined,
      // Serie di risposte in aggiunta al semplice "ok" richiesto dalla traccia
      randomAnswers: ["Ok", "Perfetto", "Mi dispiace molto :(", "Hahaha molto divertente", "Preferirei di no"],
    },
    methods: {
      // Funzione di ricerca e modifica contatti visualizzati
      search(string) {
        if(string === "") {
          return data.contacts;
        } else {
          var searchedContacts = [];
          data.contacts.forEach(element => { 
            if (element.name.toLowerCase().includes(string.toLowerCase())) {
              searchedContacts.push(element);
            }
          })
          return searchedContacts;
        }
      },
      // Funzione che permette di inviare messaggi e riceverne uno generato automaticamnete
      sendMessage(string) {
        //Invio messaggio
        dayjs.extend(dayjs_plugin_customParseFormat);
        let newMessage = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          message: string,
          status: 'sent',
        };
        this.selectedContact.messages.push(newMessage);
        this.sentMessage = "";

        // Creazione ed invio messaggio fittizio di risposta
        setTimeout(() => {
          const randomNumber = Math.floor(Math.random()*5);
          newMessage = {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            message: this.randomAnswers[randomNumber],
            status: 'received',
          }
          this.selectedContact.messages.push(newMessage);
          
          // Controllo stato delle notifiche (attivo/disattivo)
          if(this.IsNotificationActive) {
            notificationSound.play();
          }
        }, 1000);
      },
      // Funzione che cancella un messaggio dala lista messaggi
      deleteMessage(index) {
        this.selectedContact.messages.splice(index, 1);
      },
      //Funzione che controlla se un messaggio è stato selezionato o no
      
    }
})



