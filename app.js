
const yargs=require('yargs');
const dataF=require('./dataF.js');

yargs.command({
    command:'add',
    describe:'add a new data entry',
    builder:{
        id:{
            describe:'Entry ID',
            type:'string',
            demandOption:true
        },
        fname:{
            describe:'Entry First Name',
            type:'string',
            demandOption:true
        },
        lname:{
            describe:'Entry Last Name',
            type:'string',
            demandOption:true
        },
        age:{
            describe:'Entry Age',
            type:'number',
            demandOption:true
        },
        city:{
            describe:'Entry City',
            type:'string',
            demandOption:true
        }
    },
    handler:(x)=>{
        dataF.addPerson(x.id,x.fname,x.lname,x.age,x.city)
    }
})

yargs.command({
    command:'delete',
    describe:'delete a data entry',
    builder:{
        id:{ 
            describe:'ID of the entry to delete',
            type:'string',
            demandOption:true
        }
    },
    handler:(x)=>{
        dataF.deletePerson(x.id)
    }
})

yargs.command({
    command:'read',
    describe:'read a data entry',
    builder:{
        id:{
            describe:'ID of the entry to read',
            type:'string',
            demandOption:true
    }
},
handler:(x)=>{
    dataF.readPerson(x.id)
}
})

yargs.command({
    command:'list',
    describe:'list all data entries',
    handler:()=>{
        dataF.listPerson()
    }
})

yargs.parse()