const fs = require('fs');


function JsonApp(path , data , keyword){
    bool = keyword in data 
    try{
        send = JSON.stringify(data)
    }
    catch{
        return "got a bad data"
    }

    formatted = send + ',\n'

    if (bool){
        fs.appendFile(path, formatted , (err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        });
        return 'request submitted'
    }
    else{
        return 'Only query will expected'
    }
}

module.exports = JsonApp