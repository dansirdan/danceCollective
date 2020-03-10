const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {

  const Collective = sequelize.define("Collective", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Name or Organization already in use"
      },
      validate: {
        len: [6],
        // not: [" "],
        notEmpty: true
      }
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isUrl: true
      }
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    space: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
        not: [" "],
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "email already in use"
      },
      validate: {
        len: [6],
        isEmail: true,
        notEmpty: true
      }
    }
  });

  Collective.associate = (models) => {
    Collective.hasMany(models.Class, { as: "CollectiveClass", onDelete: "cascade" });
    Collective.hasMany(models.Performance, { as: "CollectivePerformance", onDelete: "cascade" });
    Collective.hasMany(models.Audition, { as: "CollectiveAudition", onDelete: "cascade" });
    Collective.hasMany(models.Space, { as: "CollectiveClass", onDelete: "cascade" });
  };

  Collective.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  Collective.beforeCreate(collective => {
    collective.password = bcrypt.hashSync(
      collective.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return Collective;
};