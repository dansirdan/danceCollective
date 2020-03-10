const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {

  const Artist = sequelize.define("Artist", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
        // not: [" "],
        notEmpty: true
      }
    },
    headshot: {
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

  Artist.associate = (models) => {
    Artist.hasMany(models.Class, { as: "ArtistClass", onDelete: "cascade" });
    Artist.hasMany(models.Performance, { as: "ArtistPerformance", onDelete: "cascade" });
    Artist.hasMany(models.Audition, { as: "ArtistAudition", onDelete: "cascade" });
    // Artist.hasMany(models.Space, { as: "ArtistClass",onDelete: "cascade" });
  };

  Artist.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  Artist.beforeCreate(artist => {
    artist.password = bcrypt.hashSync(
      artist.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return Artist;
};
