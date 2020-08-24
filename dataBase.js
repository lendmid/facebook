// в этом файле подклчается база данных. Далее на сервере она используется вызовом. Это дает возможность в один момент подключить другую базу данных без изменения файла сервера
let MongoClient = require('mongodb').MongoClient;

let state = {
    dataBase: null,
};

exports.connect = (url, options, callback) => {
    if (state.dataBase) return callback();
    
    MongoClient.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}, (err, dataBase) => {
        if (err) return callback(err);
        
        state.dataBase = dataBase;
        callback();
    })
}

exports.get = function () {
    return state.dataBase;
}
