// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });

  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
})();

  return User;
};

module.exports = UserModel;

// npx sequelize model:generate --name User.model --attributes fullName:string
// gerar um model na linha 