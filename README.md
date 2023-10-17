# mercadona

Pour lancer l'app sur VS code : 
ouvrir le Terminal puis aller dans l'environnement virtuel en tapant la commande : myenv\scripts\activate
aller dans le repertoire backend en tapant la commande : cd backend
puis pour lancer le serveur, taper la commande : python manage.py runserver
puis ouvrir un nouveau terminal : desactiver l'environnement virtuel en tapant  : deactivate
aller dans le repertoire frontend en tapant la commande : cd frontend
puis lancer le serveur frontend en tapant la commande : npm run dev

Pour le correcteur, voici les identifiants pour se connecter sur le panneau admin : 

adresse mail : correcteur@gmail.com
password : test12345

attention si erreur CORS, aller dans settings dans le dossier backend et modifier la ligne 
CORS_ALLOWED_ORIGINS = [
"http://localhost:5173"
]

en remplacant le numéro de port "ex 5174 au lieu de 5173"
