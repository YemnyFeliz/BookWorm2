const User = require('./User');
const Favorites = require('./favorites');
const Book = require('./book');

User.hasMany(Favorites, {
    foreignKey: 'user_id',
});

Favorites.belongsTo(User, {
    foreignKey: 'user_id',
});


Book.belongsTo(Favorites, {
    foreignKey: 'book_id',
    as: 'favorite'
});

Favorites.hasMany(Book, {
    foreignKey: 'book_id',
    as: 'books',
});


module.exports = { User, Favorites, Book };
