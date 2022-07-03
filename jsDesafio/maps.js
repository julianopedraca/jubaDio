function getAdmins(map){
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Nome', 'Admin');
usuarios.set('Stephanie', 'Admin');
usuarios.set('João', 'User');
usuarios.set('Maria', 'User');
usuarios.set('Pedro', 'Admin');
usuarios.set('José', 'Admin');

console.log(getAdmins(usuarios));