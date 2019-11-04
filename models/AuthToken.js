module.exports = (sequelize, DataTypes) => {
  
    const AuthToken = sequelize.define('AuthToken', {
      token: DataTypes.STRING
    }, {});
    
    AuthToken.associate = function({ User }) {
        AuthToken.belongsTo(User);
    };

    AuthToken.generate = async function(UserId){
        if(!UserId){
            throw err;
        
    }
    return AuthToken;
  }
}