const fs=require('fs');

const addPerson=(id,fname,lname,age,city)=>{
    const allData=loadData();
    const duplicateData=allData.filter((obj)=>obj.id===id)
    if(duplicateData.length===0){
        allData.push({
            id:id,
            fname:fname,
            lname:lname,
            age:age,
            city:city
        })
        saveAllData(allData)
        console.log('Data added successfully')
    }else{
        console.log('Duplicate ID found. Data not added.')
    }
}


const loadData=()=>{
    try{
        const dataJson=fs.readFileSync('data.json').toString();
        return JSON.parse(dataJson);
    } catch(e){
        return [];
    }
}

const saveAllData=(allData)=>{
    const saveDataJson=JSON.stringify(allData);
    fs.writeFileSync('data.json',saveDataJson);
}

const deletePerson=(id)=>{
    const allData=loadData();
    const dataToKeep=allData.filter((obj)=>obj.id!==id);

    if(dataToKeep.length<allData.length){
        saveAllData(dataToKeep);
        console.log('Data deleted successfully');
    }
    else{
        console.log('No entry found with the given ID. Data not deleted.');
    }
}

const readPerson=(id)=>{
    const allData=loadData();
    const person=allData.find((obj)=>obj.id===id);

    if(person){
        console.log(person);
    }
    else
    {
        console.log('No entry found with the given ID.');
    }

}

const listPerson=()=>{
    const allData=loadData();
    if(allData.length>0){
        console.log('Listing all data entries:');
        allData.forEach((person)=>{
            console.log(person.fname + ' ' + person.lname + ', City: ' + person.city);
        });
    }
    else{
        console.log('No data entries found.');
    }
}

module.exports={
    addPerson,
    deletePerson,
    readPerson,
    listPerson
}