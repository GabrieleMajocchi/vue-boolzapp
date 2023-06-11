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
            blank: true,
            timedLoader: '',
            isdark: false,
            newMsg: '',
            searchEmojiInput: '',
            emojivisible: false,

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
                    ]
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
                    message: 'Okay, fammi sapere appena ci sono novità!',
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

            // ---Emoji array start---
            emojis: {
                smilyAndPeople: [
                    {emoji:'😀', name:'grinning face', visible: true}, {emoji:'😃', name:'grinning face with big eyes', visible: true}, {emoji:'😆', name:'grinning squinting face', visible: true}, {emoji:'😄', name:'grinning face with smiling eyes', visible: true}, {emoji:'🙂', name:'slightly smiling face', visible: true}, {emoji:'🤣', name:'rolling on the floor laughing', visible: true}, {emoji:'😊', name:'smiling face with smiling eyes', visible: true}, {emoji:'😁', name:'beaming face with smiling eyes', visible: true}, {emoji:'😅', name:'grinning face with sweat', visible: true}, {emoji:'😂', name:'face with tears of joy', visible: true}, {emoji:'😉', name:'winking face', visible: true}, {emoji:'☺️', name:'smiling face', visible: true}, {emoji:'😇', name:'smiling face with halo', visible: true}, {emoji:'😍', name:'smiling face with heart-eyes', visible: true}, {emoji:'😗', name:'kissing face', visible: true}, {emoji:'🙃', name:'upside-down face', visible: true}, {emoji:'😌', name:'relieved face', visible: true}, {emoji:'😘', name:'face blowing a kiss', visible: true}, {emoji:'😙', name:'kissing face with smiling eyes', visible: true}, {emoji:'😎', name:'smiling face with sunglasses', visible: true}, {emoji:'😋', name:'face savoring food', visible: true}, {emoji:'😛', name:'face with tongue', visible: true}, {emoji:'😜', name:'winking face with tongue', visible: true}, {emoji:'🤗', name:'hugging face', visible: true}, {emoji:'😏', name:'smirking face', visible: true}, {emoji:'😚', name:'kissing face with closed eyes', visible: true}, {emoji:'🤡', name:'clown face', visible: true}, {emoji:'🤓', name:'nerd face', visible: true}, {emoji:'😝', name:'squinting face with tongue', visible: true}, {emoji:'🤑', name:'money-mouth face', visible: true}, {emoji:'🙁', name:'slightly frowning face', visible: true}, {emoji:'😟', name:'worried face', visible: true}, {emoji:'😞', name:'disappointed face', visible: true}, {emoji:'☹️', name:'frowning face', visible: true}, {emoji:'😒', name:'unamused face', visible: true}, {emoji:'😕', name:'confused face', visible: true}, {emoji:'🤠', name:'cowboy hat face', visible: true}, {emoji:'😔', name:'pensive face', visible: true}, {emoji:'😩', name:'weary face', visible: true}, {emoji:'😤', name:'face with steam from nose', visible: true}, {emoji:'😫', name:'tired face', visible: true}, {emoji:'😣', name:'persevering face', visible: true}, {emoji:'😖', name:'confounded face', visible: true}, {emoji:'😱', name:'face screaming in fear', visible: true}, {emoji:'😯', name:'hushed face', visible: true}, {emoji:'😥', name:'sad but relieved face', visible: true}, {emoji:'🤢', name:'nauseated face', visible: true}, {emoji:'💀', name:'skull', visible: true}, {emoji:'🤔', name:'thinking face', visible: true}, {emoji:'😪', name:'sleepy face', visible: true}, {emoji:'😶', name:'face without mouth', visible: true}, {emoji:'🤖', name:'robot', visible: true}, {emoji:'😬', name:'grimacing face', visible: true}, {emoji:'😡', name:'pouting face', visible: true}, {emoji:'🎃', name:'jack-o-lantern', visible: true}, {emoji:'💩', name:'pile of poo', visible: true}, {emoji:'😭', name:'loudly crying face', visible: true}, {emoji:'😺', name:'grinning cat', visible: true}, {emoji:'😹', name:'cat with tears of joy', visible: true}, {emoji:'😽', name:'kissing cat', visible: true}, {emoji:'😓', name:'downcast face with sweat', visible: true}, {emoji:'🙀', name:'weary cat', visible: true}, {emoji:'😮', name:'face with open mouth', visible: true}, {emoji:'😾', name:'pouting cat', visible: true}, {emoji:'😿', name:'crying cat', visible: true}, {emoji:'🤤', name:'drooling face', visible: true}, {emoji:'😲', name:'astonished face', visible: true}, {emoji:'😠', name:'angry face', visible: true}, {emoji:'👍', name:'thumbs up', visible: true}, {emoji:'🤐', name:'zipper-mouth face', visible: true}, {emoji:'🤥', name:'lying face', visible: true}, {emoji:'🙄', name:'face with rolling eyes', visible: true}, {emoji:'🙏', name:'folded hands', visible: true}, {emoji:'😴', name:'sleeping face', visible: true}, {emoji:'😦', name:'frowning face with open mouth', visible: true}, {emoji:'👎', name:'thumbs down', visible: true}, {emoji:'🤧', name:'sneezing face', visible: true}, {emoji:'😵', name:'dizzy face', visible: true}, {emoji:'🤞', name:'crossed fingers', visible: true}, {emoji:'😧', name:'anguished face', visible: true}, {emoji:'☝️', name:'index pointing up', visible: true}, {emoji:'🙌', name:'raising hands', visible: true}, {emoji:'🤒', name:'face with thermometer', visible: true}, {emoji:'✌️', name:'victory hand', visible: true}, {emoji:'😷', name:'face with medical mask', visible: true}, {emoji:'👆', name:'backhand index pointing up', visible: true}, {emoji:'✋', name:'raised hand', visible: true}, {emoji:'👇', name:'backhand index pointing down', visible: true}, {emoji:'👉', name:'backhand index pointing right', visible: true}, {emoji:'💪', name:'flexed biceps', visible: true}, {emoji:'💍', name:'ring', visible: true}, {emoji:'😳', name:'flushed face', visible: true}, {emoji:'😢', name:'crying face', visible: true}, {emoji:'🖖', name:'vulcan salute', visible: true}, {emoji:'🤕', name:'face with head-bandage', visible: true}, {emoji:'👤', name:'bust in silhouette', visible: true}, {emoji:'😰', name:'anxious face with sweat', visible: true}, {emoji:'👲', name:'person with skullcap', visible: true}, {emoji:'😈', name:'smiling face with horns', visible: true}, {emoji:'👦', name:'boy', visible: true}, {emoji:'😨', name:'fearful face', visible: true}, {emoji:'🧠', name:'brain', visible: true}, {emoji:'👋', name:'waving hand', visible: true}, {emoji:'👨', name:'man', visible: true}, {emoji:'👳', name:'person wearing turban', visible: true}, {emoji:'👿', name:'angry face with horns', visible: true}, {emoji:'👹', name:'ogre', visible: true}, {emoji:'😑', name:'expressionless face', visible: true}, {emoji:'✍️', name:'writing hand', visible: true}, {emoji:'💅', name:'nail polish', visible: true}, {emoji:'👺', name:'goblin', visible: true}, {emoji:'👮', name:'police officer', visible: true}, {emoji:'🖕', name:'middle finger', visible: true}, {emoji:'👵', name:'old woman', visible: true}, {emoji:'🤳', name:'selfie', visible: true}, {emoji:'👃', name:'nose', visible: true}, {emoji:'👂', name:'ear', visible: true}, {emoji:'😸', name:'grinning cat with smiling eyes', visible: true}, {emoji:'🤛', name:'left-facing fist', visible: true}, {emoji:'😐', name:'neutral face', visible: true}, {emoji:'👐', name:'open hands', visible: true}, {emoji:'😼', name:'cat with wry smile', visible: true}, {emoji:'👽', name:'alien', visible: true}, {emoji:'☠️', name:'skull and crossbones', visible: true}, {emoji:'👀', name:'eyes', visible: true}, {emoji:'👻', name:'ghost', visible: true}, {emoji:'👣', name:'footprints', visible: true}, {emoji:'👩', name:'woman', visible: true}, {emoji:'😻', name:'smiling cat with heart-eyes', visible: true}, {emoji:'👾', name:'alien monster', visible: true}, {emoji:'👨‍💻', name:'man technologist', visible: true}, {emoji:'👩‍💻', name:'woman technologist', visible: true}, {emoji:'🤶', name:'Mrs. Claus', visible: true}, {emoji:'👸', name:'princess', visible: true}, {emoji:'👩‍🔬', name:'woman scientist', visible: true}, {emoji:'👥', name:'busts in silhouette', visible: true}, {emoji:'✊', name:'raised fist', visible: true}, {emoji:'👊', name:'oncoming fist', visible: true}, {emoji:'🤵', name:'person in tuxedo', visible: true}, {emoji:'👨‍🏭', name:'man factory worker', visible: true}, {emoji:'🤜', name:'right-facing fist', visible: true}, {emoji:'👨‍🎓', name:'man student', visible: true}, {emoji:'👩‍🎨', name:'woman artist', visible: true}, {emoji:'👌', name:'OK hand', visible: true}, {emoji:'👨‍🔬', name:'man scientist', visible: true}, {emoji:'🤚', name:'raised back of hand', visible: true}, {emoji:'👈', name:'backhand index pointing left', visible: true}, {emoji:'👏', name:'clapping hands', visible: true}, {emoji:'👩‍🎓', name:'woman student', visible: true}, {emoji:'🤝', name:'handshake', visible: true}, {emoji:'👱', name:'person: blond hair', visible: true}, {emoji:'👴', name:'old man', visible: true}, {emoji:'👧', name:'girl', visible: true}, {emoji:'👶', name:'baby', visible: true}, {emoji:'🤘', name:'sign of the horns', visible: true}, {emoji:'💆', name:'person getting massage', visible: true}, {emoji:'👯', name:'people with bunny ears', visible: true}, {emoji:'💃', name:'woman dancing', visible: true}, {emoji:'👩‍❤️‍👩', name:'couple with heart: woman, woman', visible: true}, {emoji:'👨‍👩‍👧', name:'family: man, woman, girl', visible: true}, {emoji:'👩‍❤️‍💋‍👩', name:'kiss: woman, woman', visible: true}, {emoji:'👪', name:'family', visible: true}, {emoji:'👫', name:'woman and man holding hands', visible: true}, {emoji:'💂', name:'guard', visible: true}, {emoji:'👖', name:'jeans', visible: true}, {emoji:'🤙', name:'call me hand', visible: true}, {emoji:'👕', name:'t-shirt', visible: true}, {emoji:'👬', name:'men holding hands', visible: true}, {emoji:'👔', name:'necktie', visible: true}, {emoji:'💄', name:'lipstick', visible: true}, {emoji:'👩‍🏫', name:'woman teacher', visible: true}, {emoji:'👨‍❤️‍💋‍👨', name:'kiss: man, man', visible: true}, {emoji:'👄', name:'mouth', visible: true}, {emoji:'👭', name:'women holding hands', visible: true}, {emoji:'👨‍🚀', name:'man astronaut', visible: true}, {emoji:'💋', name:'kiss mark', visible: true}, {emoji:'🚶', name:'person walking', visible: true}, {emoji:'👗', name:'dress', visible: true}, {emoji:'👨‍🍳', name:'man cook', visible: true}, {emoji:'👨‍🌾', name:'man farmer', visible: true}, {emoji:'🕵️‍♀️', name:'woman detective', visible: true}, {emoji:'👷', name:'construction worker', visible: true}, {emoji:'👅', name:'tongue', visible: true}, {emoji:'👩‍🔧', name:'woman mechanic', visible: true}, {emoji:'🤴', name:'prince', visible: true}, {emoji:'🏃', name:'person running', visible: true}, {emoji:'🎅', name:'Santa Claus', visible: true}, {emoji:'🕺', name:'man dancing', visible: true}, {emoji:'👨‍🔧', name:'man mechanic', visible: true}, {emoji:'👰', name:'person with veil', visible: true}, {emoji:'👨‍❤️‍👨', name:'couple with heart: man, man', visible: true}, {emoji:'💏', name:'kiss', visible: true}, {emoji:'👨‍🎤', name:'man singer', visible: true}, {emoji:'👩‍🌾', name:'woman farmer', visible: true}, {emoji:'💁', name:'person tipping hand', visible: true}, {emoji:'👩‍🏭', name:'woman factory worker', visible: true}, {emoji:'👨‍👨‍👧', name:'family: man, man, girl', visible: true}, {emoji:'👩‍🎤', name:'woman singer', visible: true}, {emoji:'👨‍🏫', name:'man teacher', visible: true}, {emoji:'💑', name:'couple with heart', visible: true}, {emoji:'👩‍🚀', name:'woman astronaut', visible: true}, {emoji:'👼', name:'baby angel', visible: true}, {emoji:'👨‍🎨', name:'man artist', visible: true}, {emoji:'👩‍🚒', name:'woman firefighter', visible: true}, {emoji:'👨‍💼', name:'man office worker', visible: true}, {emoji:'👩‍💼', name:'woman office worker', visible: true}, {emoji:'👨‍👩‍👦‍👦', name:'family: man, woman, boy, boy', visible: true}, {emoji:'👩‍🍳', name:'woman cook', visible: true}, {emoji:'👨‍🚒', name:'man firefighter', visible: true}, {emoji:'👨‍👩‍👧‍👦', name:'family: man, woman, girl, boy', visible: true}, {emoji:'🤰', name:'pregnant woman', visible: true}, {emoji:'👨‍👨‍👦‍👦', name:'family: man, man, boy, boy', visible: true}, {emoji:'👩‍👩‍👦', name:'family: woman, woman, boy', visible: true}, {emoji:'👩‍👦', name:'family: woman, boy', visible: true}, {emoji:'👨‍👩‍👧‍👧', name:'family: man, woman, girl, girl', visible: true}, {emoji:'👩‍👦‍👦', name:'family: woman, boy, boy', visible: true}, {emoji:'🙋', name:'person raising hand', visible: true}, {emoji:'👨‍👨‍👧‍👦', name:'family: man, man, girl, boy', visible: true}, {emoji:'👩‍👧', name:'family: woman, girl', visible: true}, {emoji:'🙇', name:'person bowing', visible: true}, {emoji:'🙆', name:'person gesturing OK', visible: true}, {emoji:'🙅', name:'person gesturing NO', visible: true}, {emoji:'👨‍👨‍👧‍👧', name:'family: man, man, girl, girl', visible: true}, {emoji:'👨‍👦', name:'family: man, boy', visible: true}, {emoji:'👨‍👧', name:'family: man, girl', visible: true}, {emoji:'🙍', name:'person frowning', visible: true}, {emoji:'👩‍👩‍👧‍👦', name:'family: woman, woman, girl, boy', visible: true}, {emoji:'🙎', name:'person pouting', visible: true}, {emoji:'👩‍👧‍👧', name:'family: woman, girl, girl', visible: true}, {emoji:'👠', name:'high-heeled shoe', visible: true}, {emoji:'👩‍👩‍👧', name:'family: woman, woman, girl', visible: true}, {emoji:'👩‍👩‍👧‍👧', name:'family: woman, woman, girl, girl', visible: true}, {emoji:'👩‍👩‍👦‍👦', name:'family: woman, woman, boy, boy', visible: true}, {emoji:'👘', name:'kimono', visible: true}, {emoji:'👢', name:'woman’s boot', visible: true}, {emoji:'👟', name:'running shoe', visible: true}, {emoji:'👡', name:'woman’s sandal', visible: true}, {emoji:'👓', name:'glasses', visible: true}, {emoji:'👨‍👨‍👦', name:'family: man, man, boy', visible: true}, {emoji:'👝', name:'clutch bag', visible: true}, {emoji:'🧢', name:'billed cap', visible: true}, {emoji:'👛', name:'purse', visible: true}, {emoji:'💇', name:'person getting haircut', visible: true}, {emoji:'🎩', name:'top hat', visible: true}, {emoji:'👨‍👧‍👦', name:'family: man, girl, boy', visible: true}, {emoji:'🧣', name:'scarf', visible: true}, {emoji:'🌂', name:'closed umbrella', visible: true}, {emoji:'👙', name:'bikini', visible: true}, {emoji:'🎓', name:'graduation cap', visible: true}, {emoji:'👒', name:'woman’s hat', visible: true}, {emoji:'☂️', name:'umbrella', visible: true}, {emoji:'🎒', name:'backpack', visible: true}, {emoji:'🧤', name:'gloves', visible: true}, {emoji:'🧥', name:'coat', visible: true}, {emoji:'👨‍👧‍👧', name:'family: man, girl, girl', visible: true}, {emoji:'👩‍👧‍👦', name:'family: woman, girl, boy', visible: true}, {emoji:'👞', name:'man’s shoe', visible: true}, {emoji:'👜', name:'handbag', visible: true}, {emoji:'👑', name:'crown', visible: true}, {emoji:'💼', name:'briefcase', visible: true}, {emoji:'👚', name:'woman’s clothes', visible: true}, {emoji:'👨‍👦‍👦', name:'family: man, boy, boy', visible: true}, {emoji:'🧦', name:'socks', visible: true}
                    ],
                    animalsAndNature: [{emoji:'🐶', name:'dog face', visible: true, visible: true}, {emoji:'🐵', name:'monkey face', visible: true, visible: true}, {emoji:'🐥', name:'front-facing baby chick', visible: true, visible: true}, {emoji:'🐷', name:'pig face', visible: true, visible: true}, {emoji:'🐱', name:'cat face', visible: true, visible: true}, {emoji:'🐣', name:'hatching chick', visible: true, visible: true}, {emoji:'🦉', name:'owl', visible: true}, {emoji:'🐧', name:'penguin', visible: true}, {emoji:'🐼', name:'panda', visible: true}, {emoji:'🐨', name:'koala', visible: true}, {emoji:'🐮', name:'cow face', visible: true}, {emoji:'🐌', name:'snail', visible: true}, {emoji:'🐺', name:'wolf', visible: true}, {emoji:'🦄', name:'unicorn', visible: true}, {emoji:'🙉', name:'hear-no-evil monkey', visible: true}, {emoji:'🦇', name:'bat', visible: true}, {emoji:'🦊', name:'fox', visible: true}, {emoji:'🐞', name:'lady beetle', visible: true}, {emoji:'🐚', name:'spiral shell', visible: true}, {emoji:'🌝', name:'full moon face', visible: true}, {emoji:'🐴', name:'horse face', visible: true}, {emoji:'☁️', name:'cloud', visible: true}, {emoji:'🦂', name:'scorpion', visible: true}, {emoji:'🐢', name:'turtle', visible: true}, {emoji:'🦋', name:'butterfly', visible: true}, {emoji:'🐸', name:'frog', visible: true}, {emoji:'🦎', name:'lizard', visible: true}, {emoji:'🐠', name:'tropical fish', visible: true}, {emoji:'🐒', name:'monkey', visible: true}, {emoji:'🐹', name:'hamster', visible: true}, {emoji:'🌙', name:'crescent moon', visible: true}, {emoji:'🐄', name:'cow', visible: true}, {emoji:'🐛', name:'bug', visible: true}, {emoji:'🐦', name:'bird', visible: true}, {emoji:'🐍', name:'snake', visible: true}, {emoji:'🐜', name:'ant', visible: true}, {emoji:'🐗', name:'boar', visible: true}, {emoji:'🐽', name:'pig nose', visible: true}, {emoji:'🌎', name:'globe showing Americas', visible: true}, {emoji:'🐓', name:'rooster', visible: true}, {emoji:'🦑', name:'squid', visible: true}, {emoji:'🐫', name:'two-hump camel', visible: true}, {emoji:'🐋', name:'whale', visible: true}, {emoji:'🦌', name:'deer', visible: true}, {emoji:'🦅', name:'eagle', visible: true}, {emoji:'🐬', name:'dolphin', visible: true}, {emoji:'🐔', name:'chicken', visible: true}, {emoji:'🐐', name:'goat', visible: true}, {emoji:'🐃', name:'water buffalo', visible: true}, {emoji:'🐪', name:'camel', visible: true}, {emoji:'🐘', name:'elephant', visible: true}, {emoji:'🦀', name:'crab', visible: true}, {emoji:'☀️', name:'sun', visible: true}, {emoji:'🌾', name:'sheaf of rice', visible: true}, {emoji:'🐝', name:'honeybee', visible: true}, {emoji:'🐕', name:'dog', visible: true}, {emoji:'🐀', name:'rat', visible: true}, {emoji:'🦖', name:'T-Rex', visible: true}, {emoji:'🦏', name:'rhinoceros', visible: true}, {emoji:'🦐', name:'shrimp', visible: true}, {emoji:'🐟', name:'fish', visible: true}, {emoji:'🌵', name:'cactus', visible: true}, {emoji:'🐾', name:'paw prints', visible: true}, {emoji:'🐊', name:'crocodile', visible: true}, {emoji:'🥀', name:'wilted flower', visible: true}, {emoji:'🐤', name:'baby chick', visible: true}, {emoji:'🐖', name:'pig', visible: true}, {emoji:'🐯', name:'tiger face', visible: true}, {emoji:'🦁', name:'lion', visible: true}, {emoji:'🙈', name:'see-no-evil monkey', visible: true}, {emoji:'🐡', name:'blowfish', visible: true}, {emoji:'🦈', name:'shark', visible: true}, {emoji:'🐭', name:'mouse face', visible: true}, {emoji:'🐰', name:'rabbit face', visible: true}, {emoji:'🐆', name:'leopard', visible: true}, {emoji:'🐎', name:'horse', visible: true}, {emoji:'🌺', name:'hibiscus', visible: true}, {emoji:'🍂', name:'fallen leaf', visible: true}, {emoji:'🐅', name:'tiger', visible: true}, {emoji:'🐙', name:'octopus', visible: true}, {emoji:'💧', name:'droplet', visible: true}, {emoji:'🙊', name:'speak-no-evil monkey', visible: true}, {emoji:'🐏', name:'ram', visible: true}, {emoji:'🌻', name:'sunflower', visible: true}, {emoji:'🌴', name:'palm tree', visible: true}, {emoji:'🌘', name:'waning crescent moon', visible: true}, {emoji:'🐩', name:'poodle', visible: true}, {emoji:'🌸', name:'cherry blossom', visible: true}, {emoji:'🦓', name:'zebra', visible: true}, {emoji:'🐻', name:'bear', visible: true}, {emoji:'🦃', name:'turkey', visible: true}, {emoji:'🦕', name:'sauropod', visible: true}, {emoji:'💦', name:'sweat droplets', visible: true}, {emoji:'🐈', name:'cat', visible: true}, {emoji:'🌈', name:'rainbow', visible: true}, {emoji:'🐳', name:'spouting whale', visible: true}, {emoji:'☃️', name:'snowman', visible: true}, {emoji:'❄️', name:'snowflake', visible: true}, {emoji:'🍄', name:'mushroom', visible: true}, {emoji:'🦆', name:'duck', visible: true}, {emoji:'🌑', name:'new moon', visible: true}, {emoji:'🌖', name:'waning gibbous moon', visible: true}, {emoji:'💫', name:'dizzy', visible: true}, {emoji:'🐂', name:'ox', visible: true}, {emoji:'🌊', name:'water wave', visible: true}, {emoji:'🌿', name:'herb', visible: true}, {emoji:'🐉', name:'dragon', visible: true}, {emoji:'🌗', name:'last quarter moon', visible: true}, {emoji:'🌏', name:'globe showing Asia-Australia', visible: true}, {emoji:'🍀', name:'four leaf clover', visible: true}, {emoji:'🎄', name:'Christmas tree', visible: true}, {emoji:'🎋', name:'tanabata tree', visible: true}, {emoji:'🌜', name:'last quarter moon face', visible: true}, {emoji:'🌞', name:'sun with face', visible: true}, {emoji:'☘️', name:'shamrock', visible: true}, {emoji:'🐇', name:'rabbit', visible: true}, {emoji:'🎍', name:'pine decoration', visible: true}, {emoji:'🍃', name:'leaf fluttering in wind', visible: true}, {emoji:'🌔', name:'waxing gibbous moon', visible: true}, {emoji:'🌚', name:'new moon face', visible: true}, {emoji:'🦒', name:'giraffe', visible: true}, {emoji:'💐', name:'bouquet', visible: true}, {emoji:'🌟', name:'glowing star', visible: true}, {emoji:'🦔', name:'hedgehog', visible: true}, {emoji:'🐑', name:'ewe', visible: true}, {emoji:'🌱', name:'seedling', visible: true}, {emoji:'🌳', name:'deciduous tree', visible: true}, {emoji:'🌲', name:'evergreen tree', visible: true}, {emoji:'✨', name:'sparkles', visible: true}, {emoji:'🐲', name:'dragon face', visible: true}, {emoji:'🌹', name:'rose', visible: true}, {emoji:'🐁', name:'mouse', visible: true}, {emoji:'🌓', name:'first quarter moon', visible: true}, {emoji:'💥', name:'collision', visible: true}, {emoji:'🔥', name:'fire', visible: true}, {emoji:'🌍', name:'globe showing Europe-Africa', visible: true}, {emoji:'🌼', name:'blossom', visible: true}, {emoji:'🦍', name:'gorilla', visible: true}, {emoji:'🌛', name:'first quarter moon face', visible: true}, {emoji:'🌷', name:'tulip', visible: true}, {emoji:'💨', name:'dashing away', visible: true}, {emoji:'🌒', name:'waxing crescent moon', visible: true}, {emoji:'🌕', name:'full moon', visible: true}, {emoji:'🍁', name:'maple leaf', visible: true}
                    ],
                    foodAndDrink: [{emoji:'🍌', name:'banana', visible: true}, {emoji:'🍑', name:'peach', visible: true}, {emoji:'🥑', name:'avocado', visible: true}, {emoji:'🥜', name:'peanuts', visible: true}, {emoji:'🌰', name:'chestnut', visible: true}, {emoji:'🍖', name:'meat on bone', visible: true}, {emoji:'🍜', name:'steaming bowl', visible: true}, {emoji:'🍇', name:'grapes', visible: true}, {emoji:'🍈', name:'melon', visible: true}, {emoji:'🥫', name:'canned food', visible: true}, {emoji:'🥚', name:'egg', visible: true}, {emoji:'🌭', name:'hot dog', visible: true}, {emoji:'🍛', name:'curry rice', visible: true}, {emoji:'🍲', name:'pot of food', visible: true}, {emoji:'🍭', name:'lollipop', visible: true}, {emoji:'🥐', name:'croissant', visible: true}, {emoji:'🥛', name:'glass of milk', visible: true}, {emoji:'🍘', name:'rice cracker', visible: true}, {emoji:'🍹', name:'tropical drink', visible: true}, {emoji:'🍝', name:'spaghetti', visible: true}, {emoji:'🍯', name:'honey pot', visible: true}, {emoji:'🍟', name:'french fries', visible: true}, {emoji:'🍻', name:'clinking beer mugs', visible: true}, {emoji:'🍉', name:'watermelon', visible: true}, {emoji:'🥒', name:'cucumber', visible: true}, {emoji:'🍱', name:'bento box', visible: true}, {emoji:'🥣', name:'bowl with spoon', visible: true}, {emoji:'🥔', name:'potato', visible: true}, {emoji:'🥤', name:'cup with straw', visible: true}, {emoji:'🌯', name:'burrito', visible: true}, {emoji:'🍡', name:'dango', visible: true}, {emoji:'🥄', name:'spoon', visible: true}, {emoji:'🍙', name:'rice ball', visible: true}, {emoji:'🍫', name:'chocolate bar', visible: true}, {emoji:'🍼', name:'baby bottle', visible: true}, {emoji:'🥝', name:'kiwi fruit', visible: true}, {emoji:'🍧', name:'shaved ice', visible: true}, {emoji:'🍎', name:'red apple', visible: true}, {emoji:'🥖', name:'baguette bread', visible: true}, {emoji:'🌽', name:'ear of corn', visible: true}, {emoji:'🍆', name:'eggplant', visible: true}, {emoji:'🥃', name:'tumbler glass', visible: true}, {emoji:'🥕', name:'carrot', visible: true}, {emoji:'🍪', name:'cookie', visible: true}, {emoji:'🥙', name:'stuffed flatbread', visible: true}, {emoji:'🍣', name:'sushi', visible: true}, {emoji:'🍚', name:'cooked rice', visible: true}, {emoji:'🍴', name:'fork and knife', visible: true}, {emoji:'🥦', name:'broccoli', visible: true}, {emoji:'🥗', name:'green salad', visible: true}, {emoji:'🍺', name:'beer mug', visible: true}, {emoji:'🍸', name:'cocktail glass', visible: true}, {emoji:'🍐', name:'pear', visible: true}, {emoji:'🍢', name:'oden', visible: true}, {emoji:'🥩', name:'cut of meat', visible: true}, {emoji:'🥘', name:'shallow pan of food', visible: true}, {emoji:'🍕', name:'pizza', visible: true}, {emoji:'🍿', name:'popcorn', visible: true}, {emoji:'🍾', name:'bottle with popping cork', visible: true}, {emoji:'🌮', name:'taco', visible: true}, {emoji:'🍰', name:'shortcake', visible: true}, {emoji:'🥢', name:'chopsticks', visible: true}, {emoji:'🍞', name:'bread', visible: true}, {emoji:'🥥', name:'coconut', visible: true}, {emoji:'🍏', name:'green apple', visible: true}, {emoji:'🥞', name:'pancakes', visible: true}, {emoji:'🍗', name:'poultry leg', visible: true}, {emoji:'🍤', name:'fried shrimp', visible: true}, {emoji:'🥡', name:'takeout box', visible: true}, {emoji:'🍳', name:'cooking', visible: true}, {emoji:'🍋', name:'lemon', visible: true}, {emoji:'🥨', name:'pretzel', visible: true}, {emoji:'🍬', name:'candy', visible: true}, {emoji:'🍵', name:'teacup without handle', visible: true}, {emoji:'🥓', name:'bacon', visible: true}, {emoji:'🎂', name:'birthday cake', visible: true}, {emoji:'🍮', name:'custard', visible: true}, {emoji:'🍶', name:'sake', visible: true}, {emoji:'🥟', name:'dumpling', visible: true}, {emoji:'🥪', name:'sandwich', visible: true}, {emoji:'🧀', name:'cheese wedge', visible: true}, {emoji:'🥧', name:'pie', visible: true}, {emoji:'🍅', name:'tomato', visible: true}, {emoji:'🍩', name:'doughnut', visible: true}, {emoji:'🥠', name:'fortune cookie', visible: true}, {emoji:'🍠', name:'roasted sweet potato', visible: true}, {emoji:'🍥', name:'fish cake with swirl', visible: true}, {emoji:'🍔', name:'hamburger', visible: true}, {emoji:'🍷', name:'wine glass', visible: true}, {emoji:'🍒', name:'cherries', visible: true}, {emoji:'🍦', name:'soft ice cream', visible: true}, {emoji:'🍨', name:'ice cream', visible: true}, {emoji:'🍓', name:'strawberry', visible: true}, {emoji:'🍊', name:'tangerine', visible: true}, {emoji:'🍍', name:'pineapple', visible: true}, {emoji:'🥂', name:'clinking glasses', visible: true}
                    ],
                    objects: [{emoji:'🍓', name:'strawberry', visible: true}, {emoji:'🍞', name:'bread', visible: true}, {emoji:'🍏', name:'green apple', visible: true}, {emoji:'🍒', name:'cherries', visible: true}, {emoji:'🍅', name:'tomato', visible: true}, {emoji:'🍐', name:'pear', visible: true}, {emoji:'🍥', name:'fish cake with swirl', visible: true}, {emoji:'🌰', name:'chestnut', visible: true}, {emoji:'🥞', name:'pancakes', visible: true}, {emoji:'🥝', name:'kiwi fruit', visible: true}, {emoji:'🥓', name:'bacon', visible: true}, {emoji:'🍛', name:'curry rice', visible: true}, {emoji:'🍑', name:'peach', visible: true}, {emoji:'🍝', name:'spaghetti', visible: true}, {emoji:'🥑', name:'avocado', visible: true}, {emoji:'🥖', name:'baguette bread', visible: true}, {emoji:'🍊', name:'tangerine', visible: true}, {emoji:'🍈', name:'melon', visible: true}, {emoji:'🥐', name:'croissant', visible: true}, {emoji:'🍍', name:'pineapple', visible: true}, {emoji:'🍠', name:'roasted sweet potato', visible: true}, {emoji:'🍇', name:'grapes', visible: true}, {emoji:'🍙', name:'rice ball', visible: true}, {emoji:'🥔', name:'potato', visible: true}, {emoji:'🍾', name:'bottle with popping cork', visible: true}, {emoji:'🍯', name:'honey pot', visible: true}, {emoji:'🍧', name:'shaved ice', visible: true}, {emoji:'🍸', name:'cocktail glass', visible: true}, {emoji:'🍗', name:'poultry leg', visible: true}, {emoji:'🥄', name:'spoon', visible: true}, {emoji:'🥒', name:'cucumber', visible: true}, {emoji:'🍪', name:'cookie', visible: true}, {emoji:'🌯', name:'burrito', visible: true}, {emoji:'🥧', name:'pie', visible: true}, {emoji:'🧀', name:'cheese wedge', visible: true}, {emoji:'🍲', name:'pot of food', visible: true}, {emoji:'🥜', name:'peanuts', visible: true}, {emoji:'🥥', name:'coconut', visible: true}, {emoji:'🍺', name:'beer mug', visible: true}, {emoji:'🍹', name:'tropical drink', visible: true}, {emoji:'🥙', name:'stuffed flatbread', visible: true}, {emoji:'🍱', name:'bento box', visible: true}, {emoji:'🍣', name:'sushi', visible: true}, {emoji:'🍫', name:'chocolate bar', visible: true}, {emoji:'🥗', name:'green salad', visible: true}, {emoji:'🍚', name:'cooked rice', visible: true}, {emoji:'🌽', name:'ear of corn', visible: true}, {emoji:'🍤', name:'fried shrimp', visible: true}, {emoji:'🍆', name:'eggplant', visible: true}, {emoji:'🥢', name:'chopsticks', visible: true}, {emoji:'🍉', name:'watermelon', visible: true}, {emoji:'🌭', name:'hot dog', visible: true}, {emoji:'🥨', name:'pretzel', visible: true}, {emoji:'🍳', name:'cooking', visible: true}, {emoji:'🍎', name:'red apple', visible: true}, {emoji:'🍰', name:'shortcake', visible: true}, {emoji:'🍔', name:'hamburger', visible: true}, {emoji:'🥛', name:'glass of milk', visible: true}, {emoji:'🍜', name:'steaming bowl', visible: true}, {emoji:'🍖', name:'meat on bone', visible: true}, {emoji:'🥚', name:'egg', visible: true}, {emoji:'🍌', name:'banana', visible: true}, {emoji:'🍋', name:'lemon', visible: true}, {emoji:'🍼', name:'baby bottle', visible: true}, {emoji:'🥕', name:'carrot', visible: true}, {emoji:'🍨', name:'ice cream', visible: true}, {emoji:'🥪', name:'sandwich', visible: true}, {emoji:'🍘', name:'rice cracker', visible: true}, {emoji:'🍡', name:'dango', visible: true}, {emoji:'🍻', name:'clinking beer mugs', visible: true}, {emoji:'🍕', name:'pizza', visible: true}, {emoji:'🌮', name:'taco', visible: true}, {emoji:'🍦', name:'soft ice cream', visible: true}, {emoji:'🥣', name:'bowl with spoon', visible: true}, {emoji:'🥠', name:'fortune cookie', visible: true}, {emoji:'🥟', name:'dumpling', visible: true}, {emoji:'🥫', name:'canned food', visible: true}, {emoji:'🥩', name:'cut of meat', visible: true}, {emoji:'🍭', name:'lollipop', visible: true}, {emoji:'🍩', name:'doughnut', visible: true}, {emoji:'🍷', name:'wine glass', visible: true}, {emoji:'🥦', name:'broccoli', visible: true}, {emoji:'🥘', name:'shallow pan of food', visible: true}, {emoji:'🍟', name:'french fries', visible: true}, {emoji:'🍿', name:'popcorn', visible: true}, {emoji:'🍢', name:'oden', visible: true}, {emoji:'🍮', name:'custard', visible: true}, {emoji:'🎂', name:'birthday cake', visible: true}, {emoji:'🥤', name:'cup with straw', visible: true}, {emoji:'🍶', name:'sake', visible: true}, {emoji:'🍬', name:'candy', visible: true}, {emoji:'🍵', name:'teacup without handle', visible: true}, {emoji:'🥂', name:'clinking glasses', visible: true}, {emoji:'🥡', name:'takeout box', visible: true}, {emoji:'🍴', name:'fork and knife', visible: true}, {emoji:'🥃', name:'tumbler glass', visible: true}
                    ],
                    flags: [{emoji:'🏳️', name:'white flag', visible: true}, {emoji:'🏴', name:'black flag', visible: true}, {emoji:'🏁', name:'chequered flag', visible: true}, {emoji:'🇦🇫', name:'flag: Afghanistan', visible: true}, {emoji:'🇦🇱', name:'flag: Albania', visible: true}, {emoji:'🚩', name:'triangular flag', visible: true}, {emoji:'🇦🇩', name:'flag: Andorra', visible: true}, {emoji:'🏳️‍🌈', name:'rainbow flag', visible: true}, {emoji:'🇦🇷', name:'flag: Argentina', visible: true}, {emoji:'🇦🇸', name:'flag: American Samoa', visible: true}, {emoji:'🇦🇶', name:'flag: Antarctica', visible: true}, {emoji:'🇩🇿', name:'flag: Algeria', visible: true}, {emoji:'🇦🇲', name:'flag: Armenia', visible: true}, {emoji:'🇦🇴', name:'flag: Angola', visible: true}, {emoji:'🇦🇬', name:'flag: Antigua & Barbuda', visible: true}, {emoji:'🇦🇼', name:'flag: Aruba', visible: true}, {emoji:'🇦🇺', name:'flag: Australia', visible: true}, {emoji:'🇦🇿', name:'flag: Azerbaijan', visible: true}, {emoji:'🇧🇸', name:'flag: Bahamas', visible: true}, {emoji:'🇦🇮', name:'flag: Anguilla', visible: true}, {emoji:'🇧🇬', name:'flag: Bulgaria', visible: true}, {emoji:'🇧🇾', name:'flag: Belarus', visible: true}, {emoji:'🇦🇽', name:'flag: Åland Islands', visible: true}, {emoji:'🇧🇩', name:'flag: Bangladesh', visible: true}, {emoji:'🇧🇴', name:'flag: Bolivia', visible: true}, {emoji:'🇮🇴', name:'flag: British Indian Ocean Territory', visible: true}, {emoji:'🇧🇳', name:'flag: Brunei', visible: true}, {emoji:'🇧🇫', name:'flag: Burkina Faso', visible: true}, {emoji:'🇧🇮', name:'flag: Burundi', visible: true}, {emoji:'🇧🇭', name:'flag: Bahrain', visible: true}, {emoji:'🇧🇪', name:'flag: Belgium', visible: true}, {emoji:'🇨🇲', name:'flag: Cameroon', visible: true}, {emoji:'🇨🇨', name:'flag: Cocos (Keeling) Islands', visible: true}, {emoji:'🇧🇲', name:'flag: Bermuda', visible: true}, {emoji:'🇨🇫', name:'flag: Central African Republic', visible: true}, {emoji:'🇧🇹', name:'flag: Bhutan', visible: true}, {emoji:'🇨🇳', name:'flag: China', visible: true}, {emoji:'🇨🇬', name:'flag: Congo - Brazzaville', visible: true}, {emoji:'🇧🇧', name:'flag: Barbados', visible: true}, {emoji:'🇨🇾', name:'flag: Cyprus', visible: true}, {emoji:'🇹🇫', name:'flag: French Southern Territories', visible: true}, {emoji:'🇦🇹', name:'flag: Austria', visible: true}, {emoji:'🇨🇩', name:'flag: Congo - Kinshasa', visible: true}, {emoji:'🇬🇫', name:'flag: French Guiana', visible: true}, {emoji:'🇨🇿', name:'flag: Czechia', visible: true}, {emoji:'🇧🇦', name:'flag: Bosnia & Herzegovina', visible: true}, {emoji:'🇪🇺', name:'flag: European Union', visible: true}, {emoji:'🇫🇮', name:'flag: Finland', visible: true}, {emoji:'🇨🇽', name:'flag: Christmas Island', visible: true}, {emoji:'🇬🇪', name:'flag: Georgia', visible: true}, {emoji:'🇬🇲', name:'flag: Gambia', visible: true}, {emoji:'🇨🇺', name:'flag: Cuba', visible: true}, {emoji:'🇬🇺', name:'flag: Guam', visible: true}, {emoji:'🇵🇫', name:'flag: French Polynesia', visible: true}, {emoji:'🇬🇹', name:'flag: Guatemala', visible: true}, {emoji:'🇨🇷', name:'flag: Costa Rica', visible: true}, {emoji:'🇧🇶', name:'flag: Caribbean Netherlands', visible: true}, {emoji:'🇧🇷', name:'flag: Brazil', visible: true}, {emoji:'🇧🇼', name:'flag: Botswana', visible: true}, {emoji:'🇬🇶', name:'flag: Equatorial Guinea', visible: true}, {emoji:'🇬🇦', name:'flag: Gabon', visible: true}, {emoji:'🇬🇷', name:'flag: Greece', visible: true}, {emoji:'🇨🇼', name:'flag: Curaçao', visible: true}, {emoji:'🇬🇵', name:'flag: Guadeloupe', visible: true}, {emoji:'🇪🇨', name:'flag: Ecuador', visible: true}, {emoji:'🇩🇴', name:'flag: Dominican Republic', visible: true}, {emoji:'🇩🇰', name:'flag: Denmark', visible: true}, {emoji:'🇬🇮', name:'flag: Gibraltar', visible: true}, {emoji:'🇧🇯', name:'flag: Benin', visible: true}, {emoji:'🇪🇷', name:'flag: Eritrea', visible: true}, {emoji:'🇰🇭', name:'flag: Cambodia', visible: true}, {emoji:'🇫🇰', name:'flag: Falkland Islands', visible: true}, {emoji:'🇮🇲', name:'flag: Isle of Man', visible: true}, {emoji:'🇫🇷', name:'flag: France', visible: true}, {emoji:'🇨🇦', name:'flag: Canada', visible: true}, {emoji:'🇩🇪', name:'flag: Germany', visible: true}, {emoji:'🇭🇰', name:'flag: Hong Kong SAR China', visible: true}, {emoji:'🇪🇪', name:'flag: Estonia', visible: true}, {emoji:'🇨🇻', name:'flag: Cape Verde', visible: true}, {emoji:'🇸🇻', name:'flag: El Salvador', visible: true}, {emoji:'🇰🇾', name:'flag: Cayman Islands', visible: true}, {emoji:'🇬🇬', name:'flag: Guernsey', visible: true}, {emoji:'🇮🇶', name:'flag: Iraq', visible: true}, {emoji:'🇪🇬', name:'flag: Egypt', visible: true}, {emoji:'🇩🇲', name:'flag: Dominica', visible: true}, {emoji:'🇻🇬', name:'flag: British Virgin Islands', visible: true}, {emoji:'🇬🇱', name:'flag: Greenland', visible: true}, {emoji:'🇧🇿', name:'flag: Belize', visible: true}, {emoji:'🇿🇦', name:'flag: South Africa', visible: true}, {emoji:'🇬🇩', name:'flag: Grenada', visible: true}, {emoji:'🇩🇯', name:'flag: Djibouti', visible: true}, {emoji:'🇭🇹', name:'flag: Haiti', visible: true}, {emoji:'🇮🇪', name:'flag: Ireland', visible: true}, {emoji:'🇬🇾', name:'flag: Guyana', visible: true}, {emoji:'🇹🇩', name:'flag: Chad', visible: true}, {emoji:'🇬🇳', name:'flag: Guinea', visible: true}, {emoji:'🇰🇲', name:'flag: Comoros', visible: true}, {emoji:'🇬🇼', name:'flag: Guinea-Bissau', visible: true}, {emoji:'🇨🇱', name:'flag: Chile', visible: true}, {emoji:'🇯🇴', name:'flag: Jordan', visible: true}, {emoji:'🇲🇵', name:'flag: Northern Mariana Islands', visible: true}, {emoji:'🇨🇰', name:'flag: Cook Islands', visible: true}, {emoji:'🇪🇹', name:'flag: Ethiopia', visible: true}, {emoji:'🇬🇭', name:'flag: Ghana', visible: true}, {emoji:'🇭🇺', name:'flag: Hungary', visible: true}, {emoji:'🎌', name:'crossed flags', visible: true}, {emoji:'🇭🇳', name:'flag: Honduras', visible: true}, {emoji:'🇨🇮', name:'flag: Côte d’Ivoire', visible: true}, {emoji:'🇯🇵', name:'flag: Japan', visible: true}, {emoji:'🇸🇳', name:'flag: Senegal', visible: true}, {emoji:'🇳🇪', name:'flag: Niger', visible: true}, {emoji:'🇵🇹', name:'flag: Portugal', visible: true}, {emoji:'🇱🇧', name:'flag: Lebanon', visible: true}, {emoji:'🇱🇰', name:'flag: Sri Lanka', visible: true}, {emoji:'🇨🇭', name:'flag: Switzerland', visible: true}, {emoji:'🇸🇬', name:'flag: Singapore', visible: true}, {emoji:'🇫🇴', name:'flag: Faroe Islands', visible: true}, {emoji:'🇱🇻', name:'flag: Latvia', visible: true}, {emoji:'🇮🇨', name:'flag: Canary Islands', visible: true}, {emoji:'🇰🇿', name:'flag: Kazakhstan', visible: true}, {emoji:'🇭🇷', name:'flag: Croatia', visible: true}, {emoji:'🇵🇾', name:'flag: Paraguay', visible: true}, {emoji:'🇮🇳', name:'flag: India', visible: true}, {emoji:'🇸🇦', name:'flag: Saudi Arabia', visible: true}, {emoji:'🇰🇼', name:'flag: Kuwait', visible: true}, {emoji:'🇰🇬', name:'flag: Kyrgyzstan', visible: true}, {emoji:'🇮🇸', name:'flag: Iceland', visible: true}, {emoji:'🇨🇴', name:'flag: Colombia', visible: true}, {emoji:'🇰🇮', name:'flag: Kiribati', visible: true}, {emoji:'🇲🇷', name:'flag: Mauritania', visible: true}, {emoji:'🇵🇱', name:'flag: Poland', visible: true}, {emoji:'🇻🇳', name:'flag: Vietnam', visible: true}, {emoji:'🇺🇿', name:'flag: Uzbekistan', visible: true}, {emoji:'🇷🇪', name:'flag: Réunion', visible: true}, {emoji:'🇫🇲', name:'flag: Micronesia', visible: true}, {emoji:'🇲🇲', name:'flag: Myanmar (Burma)', visible: true}, {emoji:'🇲🇩', name:'flag: Moldova', visible: true}, {emoji:'🇶🇦', name:'flag: Qatar', visible: true}, {emoji:'🇫🇯', name:'flag: Fiji', visible: true}, {emoji:'🇲🇸', name:'flag: Montserrat', visible: true}, {emoji:'🇮🇷', name:'flag: Iran', visible: true}, {emoji:'🇺🇾', name:'flag: Uruguay', visible: true}, {emoji:'🇵🇲', name:'flag: St. Pierre & Miquelon', visible: true}, {emoji:'🇲🇰', name:'flag: North Macedonia', visible: true}, {emoji:'🇵🇷', name:'flag: Puerto Rico', visible: true}, {emoji:'🇷🇺', name:'flag: Russia', visible: true}, {emoji:'🇸🇲', name:'flag: San Marino', visible: true}, {emoji:'🇲🇨', name:'flag: Monaco', visible: true}, {emoji:'🇲🇬', name:'flag: Madagascar', visible: true}, {emoji:'🇱🇺', name:'flag: Luxembourg', visible: true}, {emoji:'🇲🇺', name:'flag: Mauritius', visible: true}, {emoji:'🇹🇳', name:'flag: Tunisia', visible: true}, {emoji:'🇲🇶', name:'flag: Martinique', visible: true}, {emoji:'🇱🇸', name:'flag: Lesotho', visible: true}, {emoji:'🇳🇴', name:'flag: Norway', visible: true}, {emoji:'🇷🇼', name:'flag: Rwanda', visible: true}, {emoji:'🇱🇦', name:'flag: Laos', visible: true}, {emoji:'🇽🇰', name:'flag: Kosovo', visible: true}, {emoji:'🇯🇪', name:'flag: Jersey', visible: true}, {emoji:'🇲🇼', name:'flag: Malawi', visible: true}, {emoji:'🇵🇳', name:'flag: Pitcairn Islands', visible: true}, {emoji:'🇲🇦', name:'flag: Morocco', visible: true}, {emoji:'🇲🇾', name:'flag: Malaysia', visible: true}, {emoji:'🇲🇪', name:'flag: Montenegro', visible: true}, {emoji:'🇲🇹', name:'flag: Malta', visible: true}, {emoji:'🇳🇬', name:'flag: Nigeria', visible: true}, {emoji:'🇳🇵', name:'flag: Nepal', visible: true}, {emoji:'🇱🇮', name:'flag: Liechtenstein', visible: true}, {emoji:'🇮🇹', name:'flag: Italy', visible: true}, {emoji:'🇵🇼', name:'flag: Palau', visible: true}, {emoji:'🇲🇭', name:'flag: Marshall Islands', visible: true}, {emoji:'🇳🇷', name:'flag: Nauru', visible: true}, {emoji:'🇰🇪', name:'flag: Kenya', visible: true}, {emoji:'🇸🇴', name:'flag: Somalia', visible: true}, {emoji:'🇲🇱', name:'flag: Mali', visible: true}, {emoji:'🇹🇲', name:'flag: Turkmenistan', visible: true}, {emoji:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', name:'flag: England', visible: true}, {emoji:'🇳🇮', name:'flag: Nicaragua', visible: true}, {emoji:'🇲🇳', name:'flag: Mongolia', visible: true}, {emoji:'🇿🇼', name:'flag: Zimbabwe', visible: true}, {emoji:'🇳🇺', name:'flag: Niue', visible: true}, {emoji:'🇵🇦', name:'flag: Panama', visible: true}, {emoji:'🇻🇺', name:'flag: Vanuatu', visible: true}, {emoji:'🇲🇽', name:'flag: Mexico', visible: true}, {emoji:'🇯🇲', name:'flag: Jamaica', visible: true}, {emoji:'🇵🇰', name:'flag: Pakistan', visible: true}, {emoji:'🇻🇦', name:'flag: Vatican City', visible: true}, {emoji:'🇾🇪', name:'flag: Yemen', visible: true}, {emoji:'🇪🇭', name:'flag: Western Sahara', visible: true}, {emoji:'🇱🇾', name:'flag: Libya', visible: true}, {emoji:'🇧🇱', name:'flag: St. Barthélemy', visible: true}, {emoji:'🇲🇿', name:'flag: Mozambique', visible: true}, {emoji:'🇱🇷', name:'flag: Liberia', visible: true}, {emoji:'🇳🇦', name:'flag: Namibia', visible: true}, {emoji:'🇹🇼', name:'flag: Taiwan', visible: true}, {emoji:'🇸🇱', name:'flag: Sierra Leone', visible: true}, {emoji:'🇸🇧', name:'flag: Solomon Islands', visible: true}, {emoji:'🇮🇩', name:'flag: Indonesia', visible: true}, {emoji:'🇲🇴', name:'flag: Macao SAR China', visible: true}, {emoji:'🇳🇫', name:'flag: Norfolk Island', visible: true}, {emoji:'🇳🇱', name:'flag: Netherlands', visible: true}, {emoji:'🏴󠁧󠁢󠁷󠁬󠁳󠁿', name:'flag: Wales', visible: true}, {emoji:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', name:'flag: Scotland', visible: true}, {emoji:'🇾🇹', name:'flag: Mayotte', visible: true}, {emoji:'🇵🇭', name:'flag: Philippines', visible: true}, {emoji:'🇼🇫', name:'flag: Wallis & Futuna', visible: true}, {emoji:'🇬🇧', name:'flag: United Kingdom', visible: true}, {emoji:'🇸🇨', name:'flag: Seychelles', visible: true}, {emoji:'🇻🇪', name:'flag: Venezuela', visible: true}, {emoji:'🇹🇯', name:'flag: Tajikistan', visible: true}, {emoji:'🇱🇹', name:'flag: Lithuania', visible: true}, {emoji:'🇸🇩', name:'flag: Sudan', visible: true}, {emoji:'🇼🇸', name:'flag: Samoa', visible: true}, {emoji:'🇴🇲', name:'flag: Oman', visible: true}, {emoji:'🇸🇭', name:'flag: St. Helena', visible: true}, {emoji:'🇳🇿', name:'flag: New Zealand', visible: true}, {emoji:'🇷🇸', name:'flag: Serbia', visible: true}, {emoji:'🇲🇻', name:'flag: Maldives', visible: true}, {emoji:'🇹🇴', name:'flag: Tonga', visible: true}, {emoji:'🇹🇿', name:'flag: Tanzania', visible: true}, {emoji:'🇹🇻', name:'flag: Tuvalu', visible: true}, {emoji:'🇰🇳', name:'flag: St. Kitts & Nevis', visible: true}, {emoji:'🇹🇨', name:'flag: Turks & Caicos Islands', visible: true}, {emoji:'🇵🇪', name:'flag: Peru', visible: true}, {emoji:'🇳🇨', name:'flag: New Caledonia', visible: true}, {emoji:'🇵🇬', name:'flag: Papua New Guinea', visible: true}, {emoji:'🇱🇨', name:'flag: St. Lucia', visible: true}, {emoji:'🇸🇸', name:'flag: South Sudan', visible: true}, {emoji:'🇺🇬', name:'flag: Uganda', visible: true}, {emoji:'🇬🇸', name:'flag: South Georgia & South Sandwich Islands', visible: true}, {emoji:'🇸🇹', name:'flag: São Tomé & Príncipe', visible: true}, {emoji:'🇸🇽', name:'flag: Sint Maarten', visible: true}, {emoji:'🇸🇪', name:'flag: Sweden', visible: true}, {emoji:'🇻🇨', name:'flag: St. Vincent & Grenadines', visible: true}, {emoji:'🇹🇬', name:'flag: Togo', visible: true}, {emoji:'🇸🇷', name:'flag: Suriname', visible: true}, {emoji:'🇺🇸', name:'flag: United States', visible: true}, {emoji:'🇻🇮', name:'flag: U.S. Virgin Islands', visible: true}, {emoji:'🇹🇹', name:'flag: Trinidad & Tobago', visible: true}, {emoji:'🇸🇮', name:'flag: Slovenia', visible: true}, {emoji:'🇸🇾', name:'flag: Syria', visible: true}, {emoji:'🇸🇿', name:'flag: Eswatini', visible: true}, {emoji:'🇦🇪', name:'flag: United Arab Emirates', visible: true}, {emoji:'🇹🇭', name:'flag: Thailand', visible: true}, {emoji:'🇵🇸', name:'flag: Palestinian Territories', visible: true}, {emoji:'🇺🇦', name:'flag: Ukraine', visible: true}, {emoji:'🇰🇷', name:'flag: South Korea', visible: true}, {emoji:'🇸🇰', name:'flag: Slovakia', visible: true}, {emoji:'🇪🇸', name:'flag: Spain', visible: true}, {emoji:'🇹🇱', name:'flag: Timor-Leste', visible: true}, {emoji:'🇷🇴', name:'flag: Romania', visible: true}, {emoji:'🇹🇷', name:'flag: Turkey', visible: true}, {emoji:'🇹🇰', name:'flag: Tokelau', visible: true}, {emoji:'🇿🇲', name:'flag: Zambia', visible: true}, {emoji:'🇰🇵', name:'flag: North Korea', visible: true}
                    ],
                    symbols:  [{emoji:'🖤', name:'black heart', visible: true}, {emoji:'💕', name:'two hearts', visible: true}, {emoji:'💛', name:'yellow heart', visible: true}, {emoji:'💗', name:'growing heart', visible: true}, {emoji:'💟', name:'heart decoration', visible: true}, {emoji:'☮️', name:'peace symbol', visible: true}, {emoji:'❣️', name:'heart exclamation', visible: true}, {emoji:'☸️', name:'wheel of dharma', visible: true}, {emoji:'❤️', name:'red heart', visible: true}, {emoji:'💞', name:'revolving hearts', visible: true}, {emoji:'💔', name:'broken heart', visible: true}, {emoji:'💜', name:'purple heart', visible: true}, {emoji:'⛎', name:'Ophiuchus', visible: true}, {emoji:'🆔', name:'ID button', visible: true}, {emoji:'🉑', name:'Japanese “acceptable” button', visible: true}, {emoji:'💚', name:'green heart', visible: true}, {emoji:'🔛', name:'ON! arrow', visible: true}, {emoji:'☯️', name:'yin yang', visible: true}, {emoji:'💖', name:'sparkling heart', visible: true}, {emoji:'🈶', name:'Japanese “not free of charge” button', visible: true}, {emoji:'🔴', name:'red circle', visible: true}, {emoji:'✡️', name:'star of David', visible: true}, {emoji:'☪️', name:'star and crescent', visible: true}, {emoji:'💯', name:'hundred points', visible: true}, {emoji:'🈸', name:'Japanese “application” button', visible: true}, {emoji:'🅱️', name:'B button (blood type)', visible: true}, {emoji:'🚳', name:'no bicycles', visible: true}, {emoji:'⁉️', name:'exclamation question mark', visible: true}, {emoji:'🔯', name:'dotted six-pointed star', visible: true}, {emoji:'♠️', name:'spade suit', visible: true}, {emoji:'🈵', name:'Japanese “no vacancy” button', visible: true}, {emoji:'🚭', name:'no smoking', visible: true}, {emoji:'🕟', name:'four-thirty', visible: true}, {emoji:'🕠', name:'five-thirty', visible: true}, {emoji:'〰️', name:'wavy dash', visible: true}, {emoji:'💙', name:'blue heart', visible: true}, {emoji:'🔰', name:'Japanese symbol for beginner', visible: true}, {emoji:'🚯', name:'no littering', visible: true}, {emoji:'🕎', name:'menorah', visible: true}, {emoji:'✝️', name:'latin cross', visible: true}, {emoji:'🕥', name:'ten-thirty', visible: true}, {emoji:'🔱', name:'trident emblem', visible: true}, {emoji:'💭', name:'thought balloon', visible: true}, {emoji:'🅿️', name:'P button', visible: true}, {emoji:'🚺', name:'women’s room', visible: true}, {emoji:'❔', name:'white question mark', visible: true}, {emoji:'☦️', name:'orthodox cross', visible: true}, {emoji:'🛐', name:'place of worship', visible: true}, {emoji:'💝', name:'heart with ribbon', visible: true}, {emoji:'💓', name:'beating heart', visible: true}, {emoji:'🔠', name:'input latin uppercase', visible: true}, {emoji:'💘', name:'heart with arrow', visible: true}, {emoji:'☢️', name:'radioactive', visible: true}, {emoji:'🕤', name:'nine-thirty', visible: true}, {emoji:'🏧', name:'ATM sign', visible: true}, {emoji:'💮', name:'white flower', visible: true}, {emoji:'💤', name:'zzz', visible: true}, {emoji:'♻️', name:'recycling symbol', visible: true}, {emoji:'🕛', name:'twelve o’clock', visible: true}, {emoji:'🔀', name:'shuffle tracks button', visible: true}, {emoji:'♨️', name:'hot springs', visible: true}, {emoji:'▶️', name:'play button', visible: true}, {emoji:'⚛️', name:'atom symbol', visible: true}, {emoji:'⬆️', name:'up arrow', visible: true}, {emoji:'🈲', name:'Japanese “prohibited” button', visible: true}, {emoji:'❎', name:'cross mark button', visible: true}, {emoji:'🕦', name:'eleven-thirty', visible: true}, {emoji:'🛄', name:'baggage claim', visible: true}, {emoji:'🕝', name:'two-thirty', visible: true}, {emoji:'🌀', name:'cyclone', visible: true}, {emoji:'☣️', name:'biohazard', visible: true}, {emoji:'🔣', name:'input symbols', visible: true}, {emoji:'◀️', name:'reverse button', visible: true}, {emoji:'✅', name:'check mark button', visible: true}, {emoji:'❕', name:'white exclamation mark', visible: true}, {emoji:'🕜', name:'one-thirty', visible: true}, {emoji:'🛃', name:'customs', visible: true}, {emoji:'🔄', name:'counterclockwise arrows button', visible: true}, {emoji:'🕚', name:'eleven o’clock', visible: true}, {emoji:'🕡', name:'six-thirty', visible: true}, {emoji:'🕙', name:'ten o’clock', visible: true}, {emoji:'🆖', name:'NG button', visible: true}, {emoji:'🆕', name:'NEW button', visible: true}, {emoji:'🚹', name:'men’s room', visible: true}, {emoji:'🔺', name:'red triangle pointed up', visible: true}, {emoji:'🛅', name:'left luggage', visible: true}, {emoji:'🕧', name:'twelve-thirty', visible: true}, {emoji:'🔷', name:'large blue diamond', visible: true}, {emoji:'📣', name:'megaphone', visible: true}, {emoji:'〽️', name:'part alternation mark', visible: true}, {emoji:'🔇', name:'muted speaker', visible: true}, {emoji:'➰', name:'curly loop', visible: true}, {emoji:'🚱', name:'non-potable water', visible: true}, {emoji:'🚸', name:'children crossing', visible: true}, {emoji:'🕞', name:'three-thirty', visible: true}, {emoji:'🔲', name:'black square button', visible: true}, {emoji:'🆘', name:'SOS button', visible: true}, {emoji:'🕓', name:'four o’clock', visible: true}, {emoji:'©️', name:'copyright', visible: true}, {emoji:'🔚', name:'END arrow', visible: true}, {emoji:'✔️', name:'check mark', visible: true}, {emoji:'🔞', name:'no one under eighteen', visible: true}, {emoji:'🕔', name:'five o’clock', visible: true}, {emoji:'♣️', name:'club suit', visible: true}, {emoji:'💢', name:'anger symbol', visible: true}, {emoji:'🕢', name:'seven-thirty', visible: true}, {emoji:'🅰️', name:'A button (blood type)', visible: true}, {emoji:'💬', name:'speech balloon', visible: true}, {emoji:'♦️', name:'diamond suit', visible: true}, {emoji:'📳', name:'vibration mode', visible: true}, {emoji:'🚷', name:'no pedestrians', visible: true}, {emoji:'🕑', name:'two o’clock', visible: true}, {emoji:'🛂', name:'passport control', visible: true}, {emoji:'🆎', name:'AB button (blood type)', visible: true}, {emoji:'🚫', name:'prohibited', visible: true}, {emoji:'🆚', name:'VS button', visible: true}, {emoji:'✖️', name:'multiply', visible: true}, {emoji:'🃏', name:'joker', visible: true}, {emoji:'🕘', name:'nine o’clock', visible: true}, {emoji:'🎴', name:'flower playing cards', visible: true}, {emoji:'🕗', name:'eight o’clock', visible: true}, {emoji:'🔅', name:'dim button', visible: true}, {emoji:'🅾️', name:'O button (blood type)', visible: true}, {emoji:'1️⃣', name:'keycap: 1', visible: true}, {emoji:'㊙️', name:'Japanese “secret” button', visible: true}, {emoji:'🔊', name:'speaker high volume', visible: true}, {emoji:'🈷️', name:'Japanese “monthly amount” button', visible: true}, {emoji:'✳️', name:'eight-spoked asterisk', visible: true}, {emoji:'🛑', name:'stop sign', visible: true}, {emoji:'🔂', name:'repeat single button', visible: true}, {emoji:'🕐', name:'one o’clock', visible: true}, {emoji:'‼️', name:'double exclamation mark', visible: true}, {emoji:'®️', name:'registered', visible: true}, {emoji:'↔️', name:'left-right arrow', visible: true}, {emoji:'🉐', name:'Japanese “bargain” button', visible: true}, {emoji:'↗️', name:'up-right arrow', visible: true}, {emoji:'▫️', name:'white small square', visible: true}, {emoji:'♥️', name:'heart suit', visible: true}, {emoji:'🔹', name:'small blue diamond', visible: true}, {emoji:'🈴', name:'Japanese “passing grade” button', visible: true}, {emoji:'📴', name:'mobile phone off', visible: true}, {emoji:'🕕', name:'six o’clock', visible: true}, {emoji:'❇️', name:'sparkle', visible: true}, {emoji:'🔵', name:'blue circle', visible: true}, {emoji:'💱', name:'currency exchange', visible: true}, {emoji:'❌', name:'cross mark', visible: true}, {emoji:'◼️', name:'black medium square', visible: true}, {emoji:'🕒', name:'three o’clock', visible: true}, {emoji:'🔟', name:'keycap: 10', visible: true}, {emoji:'🆒', name:'COOL button', visible: true}, {emoji:'🕖', name:'seven o’clock', visible: true}, {emoji:'🔉', name:'speaker medium volume', visible: true}, {emoji:'🕣', name:'eight-thirty', visible: true}, {emoji:'🆑', name:'CL button', visible: true}, {emoji:'▪️', name:'black small square', visible: true}, {emoji:'🔸', name:'small orange diamond', visible: true}, {emoji:'✴️', name:'eight-pointed star', visible: true}, {emoji:'❓', name:'question mark', visible: true}, {emoji:'⏩', name:'fast-forward button', visible: true}, {emoji:'💠', name:'diamond with a dot', visible: true}, {emoji:'🚮', name:'litter in bin sign', visible: true}, {emoji:'➖', name:'minus', visible: true}, {emoji:'🔻', name:'red triangle pointed down', visible: true},  {emoji:'↩️', name:'right arrow curving left', visible: true}, {emoji:'📵', name:'no mobile phones', visible: true}, {emoji:'🎶', name:'musical notes', visible: true}, {emoji:'🈺', name:'Japanese “open for business” button', visible: true}, {emoji:'⚜️', name:'fleur-de-lis', visible: true}, {emoji:'📛', name:'name badge', visible: true}, {emoji:'➕', name:'plus', visible: true}, {emoji:'🈂️', name:'Japanese “service charge” button', visible: true}, {emoji:'🈳', name:'Japanese “vacancy” button', visible: true}, {emoji:'📢', name:'loudspeaker', visible: true}, {emoji:'◻️', name:'white medium square', visible: true}, {emoji:'☑️', name:'check box with check', visible: true}, {emoji:'🔃', name:'clockwise vertical arrows', visible: true}, {emoji:'🆙', name:'UP! button', visible: true}, {emoji:'🔘', name:'radio button', visible: true}, {emoji:'🔡', name:'input latin lowercase', visible: true}, {emoji:'🚾', name:'water closet', visible: true}, {emoji:'🔈', name:'speaker low volume', visible: true}, {emoji:'🎦', name:'cinema', visible: true}, {emoji:'↖️', name:'up-left arrow', visible: true}, {emoji:'🈹', name:'Japanese “discount” button', visible: true}, {emoji:'🌐', name:'globe with meridians', visible: true}, {emoji:'㊗️', name:'Japanese “congratulations” button', visible: true}, {emoji:'⤴️', name:'right arrow curving up', visible: true}, {emoji:'↕️', name:'up-down arrow', visible: true}, {emoji:'🈁', name:'Japanese “here” button', visible: true}, {emoji:'➗', name:'divide', visible: true}, {emoji:'™️', name:'trade mark', visible: true}, {emoji:'⏪', name:'fast reverse button', visible: true}, {emoji:'3️⃣', name:'keycap: 3', visible: true}, {emoji:'7️⃣', name:'keycap: 7', visible: true}, {emoji:'6️⃣', name:'keycap: 6', visible: true}, {emoji:'🔙', name:'BACK arrow', visible: true}, {emoji:'↘️', name:'down-right arrow', visible: true}, {emoji:'🚼', name:'baby symbol', visible: true}, {emoji:'9️⃣', name:'keycap: 9', visible: true}, {emoji:'⬇️', name:'down arrow', visible: true}, {emoji:'↙️', name:'down-left arrow', visible: true}, {emoji:'⏫', name:'fast up button', visible: true}, {emoji:'💲', name:'heavy dollar sign', visible: true}, {emoji:'➡️', name:'right arrow', visible: true}, {emoji:'⤵️', name:'right arrow curving down', visible: true}, {emoji:'ℹ️', name:'information', visible: true}, {emoji:'⏬', name:'fast down button', visible: true}, {emoji:'🔼', name:'upwards button', visible: true}, {emoji:'🔁', name:'repeat button', visible: true}, {emoji:'🎵', name:'musical note', visible: true}, {emoji:'2️⃣', name:'keycap: 2', visible: true}, {emoji:'5️⃣', name:'keycap: 5', visible: true}, {emoji:'🆗', name:'OK button', visible: true}, {emoji:'🔤', name:'input latin letters', visible: true}, {emoji:'🔆', name:'bright button', visible: true}, {emoji:'0️⃣', name:'keycap: 0', visible: true}, {emoji:'💹', name:'chart increasing with yen', visible: true}, {emoji:'🔢', name:'input numbers', visible: true}, {emoji:'⚠️', name:'warning', visible: true}, {emoji:'📶', name:'antenna bars', visible: true}, {emoji:'🆓', name:'FREE button', visible: true}, {emoji:'4️⃣', name:'keycap: 4', visible: true}, {emoji:'*️⃣', name:'keycap: *', visible: true}, {emoji:'⬅️', name:'left arrow', visible: true}, {emoji:'🚻', name:'restroom', visible: true}, {emoji:'8️⃣', name:'keycap: 8', visible: true}, {emoji:'↪️', name:'left arrow curving right', visible: true}, {emoji:'🔜', name:'SOON arrow', visible: true}, {emoji:'🔶', name:'large orange diamond', visible: true}, {emoji:'🔽', name:'downwards button', visible: true}, {emoji:'➿', name:'double curly loop', visible: true}, {emoji:'🔳', name:'white square button', visible: true}, {emoji:'🔝', name:'TOP arrow', visible: true}, {emoji:'Ⓜ️', name:'circled M', visible: true}
                    ],
                    travelAndPlaces: [{emoji:'🚌', name:'bus', visible: true}, {emoji:'🛴', name:'kick scooter', visible: true}, {emoji:'🚗', name:'automobile', visible: true}, {emoji:'🚕', name:'taxi', visible: true}, {emoji:'🚟', name:'suspension railway', visible: true}, {emoji:'🛫', name:'airplane departure', visible: true}, {emoji:'🚙', name:'sport utility vehicle', visible: true}, {emoji:'🚉', name:'station', visible: true}, {emoji:'🛬', name:'airplane arrival', visible: true}, {emoji:'🛶', name:'canoe', visible: true}, {emoji:'🚜', name:'tractor', visible: true}, {emoji:'🚒', name:'fire engine', visible: true}, {emoji:'🚲', name:'bicycle', visible: true}, {emoji:'💺', name:'seat', visible: true}, {emoji:'🚛', name:'articulated lorry', visible: true}, {emoji:'🦗', name:'cricket', visible: true}, {emoji:'🎠', name:'carousel horse', visible: true}, {emoji:'🚇', name:'metro', visible: true}, {emoji:'🚚', name:'delivery truck', visible: true}, {emoji:'🚑', name:'ambulance', visible: true}, {emoji:'🚐', name:'minibus', visible: true}, {emoji:'🚈', name:'light rail', visible: true}, {emoji:'🏬', name:'department store', visible: true}, {emoji:'🕍', name:'synagogue', visible: true}, {emoji:'🚓', name:'police car', visible: true}, {emoji:'🛷', name:'sled', visible: true}, {emoji:'🚥', name:'horizontal traffic light', visible: true}, {emoji:'🚋', name:'tram car', visible: true}, {emoji:'🏩', name:'love hotel', visible: true}, {emoji:'🚂', name:'locomotive', visible: true}, {emoji:'🗼', name:'Tokyo tower', visible: true}, {emoji:'🏯', name:'Japanese castle', visible: true}, {emoji:'🌋', name:'volcano', visible: true}, {emoji:'✈️', name:'airplane', visible: true}, {emoji:'🚊', name:'tram', visible: true}, {emoji:'🚎', name:'trolleybus', visible: true}, {emoji:'🚆', name:'train', visible: true}, {emoji:'🗾', name:'map of Japan', visible: true}, {emoji:'🌅', name:'sunrise', visible: true}, {emoji:'🏦', name:'bank', visible: true}, {emoji:'🚀', name:'rocket', visible: true}, {emoji:'🌆', name:'cityscape at dusk', visible: true}, {emoji:'🚅', name:'bullet train', visible: true}, {emoji:'🚘', name:'oncoming automobile', visible: true}, {emoji:'🛸', name:'flying saucer', visible: true}, {emoji:'🎇', name:'sparkler', visible: true}, {emoji:'🎑', name:'moon viewing ceremony', visible: true}, {emoji:'🎆', name:'fireworks', visible: true}, {emoji:'🚢', name:'ship', visible: true}, {emoji:'🏢', name:'office building', visible: true}, {emoji:'🎡', name:'ferris wheel', visible: true}, {emoji:'🚤', name:'speedboat', visible: true}, {emoji:'💒', name:'wedding', visible: true}, {emoji:'🏪', name:'convenience store', visible: true}, {emoji:'🛵', name:'motor scooter', visible: true}, {emoji:'🚃', name:'railway car', visible: true}, {emoji:'🚡', name:'aerial tramway', visible: true}, {emoji:'🏥', name:'hospital', visible: true}, {emoji:'🏫', name:'school', visible: true}, {emoji:'🚔', name:'oncoming police car', visible: true}, {emoji:'🚠', name:'mountain cableway', visible: true}, {emoji:'🚧', name:'construction', visible: true}, {emoji:'🚞', name:'mountain railway', visible: true}, {emoji:'🌃', name:'night with stars', visible: true}, {emoji:'🚏', name:'bus stop', visible: true}, {emoji:'🌄', name:'sunrise over mountains', visible: true}, {emoji:'🌁', name:'foggy', visible: true}, {emoji:'🕋', name:'kaaba', visible: true}, {emoji:'🚖', name:'oncoming taxi', visible: true}, {emoji:'🗿', name:'moai', visible: true}, {emoji:'🚍', name:'oncoming bus', visible: true}, {emoji:'🏭', name:'factory', visible: true}, {emoji:'🚝', name:'monorail', visible: true}, {emoji:'🕌', name:'mosque', visible: true}, {emoji:'🏡', name:'house with garden', visible: true}, {emoji:'🎢', name:'roller coaster', visible: true}, {emoji:'🏰', name:'castle', visible: true}, {emoji:'🗻', name:'mount fuji', visible: true}, {emoji:'🏠', name:'house', visible: true}, {emoji:'🗽', name:'Statue of Liberty', visible: true}, {emoji:'🏤', name:'post office', visible: true}, {emoji:'🌠', name:'shooting star', visible: true}, {emoji:'🚦', name:'vertical traffic light', visible: true}, {emoji:'🥌', name:'curling stone', visible: true}, {emoji:'🚄', name:'high-speed train', visible: true}, {emoji:'🏣', name:'Japanese post office', visible: true}, {emoji:'🌉', name:'bridge at night', visible: true}, {emoji:'🏨', name:'hotel', visible: true}, {emoji:'🚁', name:'helicopter', visible: true}, {emoji:'🌇', name:'sunset', visible: true}, {emoji:'🌌', name:'milky way', visible: true}, {emoji:'🚨', name:'police car light', visible: true}
                    ],
                    activity: [{emoji:'🎣', name:'fishing pole', visible: true}, {emoji:'🥅', name:'goal net', visible: true}, {emoji:'🏓', name:'ping pong', visible: true}, {emoji:'🏹', name:'bow and arrow', visible: true}, {emoji:'🎸', name:'guitar', visible: true}, {emoji:'🏂', name:'snowboarder', visible: true}, {emoji:'🎿', name:'skis', visible: true}, {emoji:'🏄', name:'person surfing', visible: true}, {emoji:'🥊', name:'boxing glove', visible: true}, {emoji:'🎲', name:'game die', visible: true}, {emoji:'🎤', name:'microphone', visible: true}, {emoji:'🎪', name:'circus tent', visible: true}, {emoji:'🎳', name:'bowling', visible: true}, {emoji:'🤺', name:'person fencing', visible: true}, {emoji:'🎰', name:'slot machine', visible: true}, {emoji:'🎻', name:'violin', visible: true}, {emoji:'🏑', name:'field hockey', visible: true}, {emoji:'🏉', name:'rugby football', visible: true}, {emoji:'🏈', name:'american football', visible: true}, {emoji:'🏅', name:'sports medal', visible: true}, {emoji:'🎼', name:'musical score', visible: true}, {emoji:'🎧', name:'headphone', visible: true}, {emoji:'🏇', name:'horse racing', visible: true}, {emoji:'🥉', name:'3rd place medal', visible: true}, {emoji:'🎯', name:'direct hit', visible: true}, {emoji:'🥁', name:'drum', visible: true}, {emoji:'🎱', name:'pool 8 ball', visible: true}, {emoji:'🚣', name:'person rowing boat', visible: true}, {emoji:'🚵', name:'person mountain biking', visible: true}, {emoji:'🏌️‍♀️', name:'woman golfing', visible: true}, {emoji:'🏊', name:'person swimming', visible: true}, {emoji:'🏸', name:'badminton', visible: true}, {emoji:'🏒', name:'ice hockey', visible: true}, {emoji:'🏆', name:'trophy', visible: true}, {emoji:'🏋️‍♀️', name:'woman lifting weights', visible: true}, {emoji:'⛹️‍♀️', name:'woman bouncing ball', visible: true}, {emoji:'🏐', name:'volleyball', visible: true}, {emoji:'🏀', name:'basketball', visible: true}, {emoji:'🚴', name:'person biking', visible: true}, {emoji:'🎽', name:'running shirt', visible: true}, {emoji:'🎮', name:'video game', visible: true}, {emoji:'🎹', name:'musical keyboard', visible: true}, {emoji:'🥇', name:'1st place medal', visible: true}, {emoji:'🥋', name:'martial arts uniform', visible: true}, {emoji:'🎾', name:'tennis', visible: true}, {emoji:'🎷', name:'saxophone', visible: true}, {emoji:'🏏', name:'cricket game', visible: true}, {emoji:'🎭', name:'performing arts', visible: true}, {emoji:'🎺', name:'trumpet', visible: true}, {emoji:'🎬', name:'clapper board', visible: true}, {emoji:'🥈', name:'2nd place medal', visible: true}, {emoji:'🎫', name:'ticket', visible: true}, {emoji:'🎨', name:'artist palette', visible: true}
                    ],
                },
            // ---Emoji array end---
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
        // addMsg(msg, showedchat){
        //     if(msg ===  undefined || msg === ''){
        //     // ---Does nothing in case there is no text---
        //     }else{
        //     this.contacts[showedchat].messages.push({date: this.currentdate(), message: msg, status: 'sent'});
        //     // ---Write the reply after 1000ms---
        //     setTimeout(()=>{this.contacts[showedchat].messages.push({date: this.currentdate(), message: 'Ok', status: 'received'})}, 1000);
        //     this.newMsg = '';
        //     }
        // },

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

        // ---Function to search emoji by name---
        searchEmoji(){
            for(let i = 0; i < this.emojis.smilyAndPeople.length; i++){
                if(this.emojis.smilyAndPeople[i].name.toLowerCase().includes(this.searchEmojiInput.toLowerCase())){
                    this.emojis.smilyAndPeople[i].visible = true;
                } else{
                    this.emojis.smilyAndPeople[i].visible = false;
                }
            }
            for(let i = 0; i < this.emojis.animalsAndNature.length; i++){
                if(this.emojis.animalsAndNature[i].name.toLowerCase().includes(this.searchEmojiInput.toLowerCase())){
                    this.emojis.animalsAndNature[i].visible = true;
                } else{
                    this.emojis.animalsAndNature[i].visible = false;
                }
            }
            for(let i = 0; i < this.emojis.foodAndDrink.length; i++){
                if(this.emojis.foodAndDrink[i].name.toLowerCase().includes(this.searchEmojiInput.toLowerCase())){
                    this.emojis.foodAndDrink[i].visible = true;
                } else{
                    this.emojis.foodAndDrink[i].visible = false;
                }
            }
            for(let i = 0; i < this.emojis.activity.length; i++){
                if(this.emojis.activity[i].name.toLowerCase().includes(this.searchEmojiInput.toLowerCase())){
                    this.emojis.activity[i].visible = true;
                } else{
                    this.emojis.activity[i].visible = false;
                }
            }
            for(let i = 0; i < this.emojis.travelAndPlaces.length; i++){
                if(this.emojis.travelAndPlaces[i].name.toLowerCase().includes(this.searchEmojiInput.toLowerCase())){
                    this.emojis.travelAndPlaces[i].visible = true;
                } else{
                    this.emojis.travelAndPlaces[i].visible = false;
                }
            }
            for(let i = 0; i < this.emojis.objects.length; i++){
                if(this.emojis.objects[i].name.toLowerCase().includes(this.searchEmojiInput.toLowerCase())){
                    this.emojis.objects[i].visible = true;
                } else{
                    this.emojis.objects[i].visible = false;
                }
            }
            for(let i = 0; i < this.emojis.symbols.length; i++){
                if(this.emojis.symbols[i].name.toLowerCase().includes(this.searchEmojiInput.toLowerCase())){
                    this.emojis.symbols[i].visible = true;
                } else{
                    this.emojis.symbols[i].visible = false;
                }
            }
            for(let i = 0; i < this.emojis.flags.length; i++){
                if(this.emojis.flags[i].name.toLowerCase().includes(this.searchEmojiInput.toLowerCase())){
                    this.emojis.flags[i].visible = true;
                } else{
                    this.emojis.flags[i].visible = false;
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
            this.contacts[showedchat].messages.push({date: this.currentdate(), message: msg, status: 'sent'});
            const chatbox = document.querySelector('.chat');
            chatbox.scrollTop = chatbox.scrollHeight;
            const microphone = document.querySelector('.fa-microphone');
            const send = document.querySelector('.fa-paper-plane');
            microphone.classList.remove('deactive');
            send.classList.remove('active');
            this.newMsg = '';
            this.emojivisible = false;
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
                setTimeout(()=>{this.contacts[showedchat].messages.push({date: this.currentdate(), message: this.randomReply(), status: 'received'})}, 1000);
                setTimeout(()=>{chatbox.scrollTop = chatbox.scrollHeight;}, 1000);
            }else{
            const chatResponse = data.choices[0].message.content;
            console.log(chatResponse)
            this.contacts[showedchat].messages.push({date: this.currentdate(), message: chatResponse, status: 'received'});
            chatbox.scrollTop = chatbox.scrollHeight;
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
            const randomNum = Math.floor(Math.random() * reply.length);
            const answer = reply[randomNum];
            return answer
        },

        // ---Function to delete the a whole chat---
        deleteChat(){
            this.contacts.splice(this.activeChat, 1);
            this.blank = true;
            if(this.activeChat == (this.contacts.length)){
                this.activeChat = 0;
            }
        },

        // ---Function to delete all the messages from chat---
        deleteMessages(){
            let howmany = this.contacts[this.activeChat].messages.length;
            this.contacts[this.activeChat].messages.splice(0, howmany);
        },

        // ---Function to show a loader for 1s when page is loaded---
        loader(){
            setTimeout(()=>{this.timedLoader = 'd-none'}, 1000);
        },

        // ---Function to toggle darkmode---
        darkmode(){
            this.isdark = !this.isdark;
            if (this.isdark === true) {
                document.documentElement.classList.remove("light")
                document.documentElement.classList.add("dark")
                window.localStorage.setItem('mode', 'dark');
            } else {
                document.documentElement.classList.remove("dark")
                document.documentElement.classList.add("light")
                window.localStorage.setItem('mode', 'light');
            }
        },

        // ---Function to get the current date---
        currentdate(){
            let currentdate = new Date();
            // ---Write the date in the same form as the array---
            currentdate = currentdate.getDate()+'/'+currentdate.getMonth()+'/'+currentdate.getFullYear()+' '+(('0'+currentdate.getHours()).slice(-2))+':'+(('0'+currentdate.getMinutes()).slice(-2))+':'+currentdate.getSeconds()
            return currentdate
        },

        // ---Function to add a new chat---
        newChat(){
            const newchatuser = prompt('A chi vuoi scrivere?')
            this.contacts.push({name: newchatuser,
                                avatar: './img/avatar_new.jpg',
                                visible: true,
                                messages: [
                                ]});
            this.activeChat = this.contacts.length - 1;
            this.blank = false;
        },

        // ---Function to check if the active chat have messages in it---
        checkarray(){
            let isthere;
            if(( this.contacts[this.activeChat].messages.length) === 0){
                isthere = false;
            }else{
                isthere = true;
            }
            return isthere;
        },

        // ---Function to check if the chat have messages in it---
        checkarraysingle(index){
            let isthere;
            if(( this.contacts[index].messages.length) === 0){
                isthere = false;
            }else{
                isthere = true;
            }
            return isthere;
        },

        // ---Function to add selected emoji to the text input---
        addEmoji(emoji){
            this.newMsg += emoji;
        },

        // ---Focus on the input to send messages---
        focusMsg(){
            let focus = document.getElementById('inputMsg')
            focus.focus()
        },
    },
}).mount ("#app")

