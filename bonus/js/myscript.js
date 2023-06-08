// ---Vue app---
const {createApp} = Vue
createApp ({
    data () {
        return{

            // ---Variables---
            key: prompt(`Scrivi la tua Key per poter accedere al servizio di openai per  ricevere risposte ai messaggi mandati.

Per ricevere la tua key, vai su https://platform.openai.com/docs/quickstart/build-your-application registrati e clicca su "+ Create new secret key".

Nel caso non ti importasse premi il pulsante 'OK' per proseguire col normale funzionamento della web app.`),
            activeChat: 0,
            search: '',

            // ---Contacts array start---
            contacts: [
                {name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'},
                    {date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'},
                    {date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'}
                    ],
                },
                {name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'},
                    {date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'},
                    {date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'}
                    ],
                },
                {name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'},
                    {date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'},
                    {date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'}
                    ],
                },
                {name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'},
                    {date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'}
                    ],
                },
                {name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'},
                    {date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'}
                    ],
                },
                {name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'},
                    {date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'},
                    {date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'}
                    ],
                },
                {name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'},
                    {date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'}
                        ],
                },
                {name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'},
                    {date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'},
                    {date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'}
                        ],
                },
            ],
            // ---Contacts array end---

        }
    },

    methods: {

        // ---Function to activate the clicked chat---
        showChat(index){
            this.activeChat = index;
        },

        // ---Function to get hours and minute from the full date in the array---
        whatTime(date){
            const dateTimeParts = date.split(' ');
            const timePart = dateTimeParts[1];
            const timeParts = timePart.split(':');
            const hours = timeParts[0];
            const minutes = timeParts[1];
            const result = hours + ':' + minutes;
            return result;
        },

        // ---Function to send the message that user wrote in the chat, will also write a reply---
        addMsg(msg, showedchat){
            if(msg ===  undefined || msg === ''){
            // ---Does nothing in case there is no text---
            }else{
            let currentdate = new Date();
            // ---Write the date in the same form as the array---
            currentdate = currentdate.getDate()+'/'+currentdate.getMonth()+'/'+currentdate.getFullYear()+' '+(('0'+currentdate.getHours()).slice(-2))+':'+(('0'+currentdate.getMinutes()).slice(-2))+':'+currentdate.getSeconds();
            this.contacts[showedchat].messages.push({date: currentdate, message: msg, status: 'sent'});
            // ---Write the reply after 1000ms---
            setTimeout(()=>{this.contacts[showedchat].messages.push({date: currentdate, message: 'Ok', status: 'received'})}, 1000);
            this.newMsg = '';
            }
        },

        // ---Function to search by name in the chat list---
        searchChat(){
            for(let i = 0; i < this.contacts.length; i++){
                if(this.contacts[i].name.toLowerCase().includes(this.search.toLowerCase())){
                    this.contacts[i].visible = true;
                } else{
                    this.contacts[i].visible = false;
                }
            }
        },

        // ---Function to delete the message---
        deleteMsg(msg){
            const messageIndex = this.contacts[this.activeChat].messages.indexOf(msg);
            this.contacts[this.activeChat].messages.splice(messageIndex, 1);
        },

        // ---Gpt3.5 AI message response to our message---
        async answerAI(msg, showedchat){
        if(msg ===  undefined || msg === '' || (!msg.replace(/\s/g, '').length)){
            // ---Does nothing in case there is no text or in case there is only spaces---
        }else{
            console.log('Elaboro una risposta..');
            let currentdate = new Date();
            // ---Write the date in the same form as the array---
            currentdate = currentdate.getDate()+'/'+currentdate.getMonth()+'/'+currentdate.getFullYear()+' '+(('0'+currentdate.getHours()).slice(-2))+':'+(('0'+currentdate.getMinutes()).slice(-2))+':'+currentdate.getSeconds();
            this.contacts[showedchat].messages.push({date: currentdate, message: msg, status: 'sent'});
            const microphone = document.querySelector('.fa-microphone');
            const send = document.querySelector('.fa-paper-plane');
            microphone.classList.remove('deactive');
            send.classList.remove('active');
            this.newMsg = '';

            const whoistexting = this.contacts[showedchat].name;
            const API_URL = "https://api.openai.com/v1/chat/completions";
            const API_KEY = this.key;
            const MODEL = "gpt-3.5-turbo";
            const temperature = 1;

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: MODEL,
                    messages: [
                        {
                            role:"user",
                            content: `Rispondi al messaggio: ${msg}. Come se fossi ${whoistexting}, un amico/a di chi sta scrivendo la domanda. La risposta dev'essere di massimo 200 caratteri`,
                        }
                    ],
                    temperature: temperature,
                    // ---Maximum token reply, longer = more words, shorter = less words---
                    max_tokens: 200,
                }),
            });
            const data = await response.json();
            if(data.choices === undefined){
                console.log(`La tua key non è valida/corretta. Openai non è in grado di generare una risposta al tuo messaggio. Verrà data la risposta standard`);
                setTimeout(()=>{this.contacts[showedchat].messages.push({date: currentdate, message: this.randomReply(), status: 'received'})}, 1000);
            }else{
            const chatResponse = data.choices[0].message.content;
            console.log(chatResponse)
            this.contacts[showedchat].messages.push({date: currentdate, message: chatResponse, status: 'received'});
            }
        }},

        // ---Function to show the send button after there is some written text---
        sendButton(msg){
            const microphone = document.querySelector('.fa-microphone');
            const send = document.querySelector('.fa-paper-plane');
            if(msg.length >= 1){
                microphone.classList.add('deactive');
                send.classList.add('active');
            }else{
                microphone.classList.remove('deactive');
                send.classList.remove('active');
            }
        },

        // ---Get a random response---
        randomReply(){
            const reply = ['Ok', 'Tutto bene tu?', 'Non mi ricordo chi sei, ci conosciamo?', 'Sto guidando, ti rispondo dopo', 'Ho il telefono che sta morendo, chiamami', 'Ciao', 'Concordo'];
            const randomNum = Math.floor(Math.random() * reply.length) + 1;
            const answer = reply[randomNum];
            return answer
        },
    },
}).mount ("#app")
