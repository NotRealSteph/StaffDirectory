
export const StaffData: {
    id:string,
    name:string,
    phone:string,
    department:string,
    address:string,
    city:string,
    state:string,
    zip:string,
    country:string
}[] = [
    {   id:'1', 
        name:'John Smith',
        phone:'02 9988 2211', 
        department:'1', 
        address:'1 Code Lane', 
        city:'Javaville', 
        state:'NSW', 
        zip:'0100', 
        country:'Australia'
    },
    {   id:'2', 
        name:'Sue White',
        phone:'03 8899 2255', 
        department:'2', 
        address:'16 Bit Way', 
        city:'Byte Cove', 
        state:'QLD', 
        zip:'1101', 
        country:'Australia'
    },
    {   id:'3', 
        name:"Bob O'Bits",
        phone:'05 7788 2255', 
        department:'3', 
        address:'8 Silicon Road', 
        city:'Cloud Hills', 
        state:'VIC', 
        zip:'1001', 
        country:'Australia'
    },
    {   id:'4', 
        name:'Mary Blue',
        phone:'06 4455 9988', 
        department:'2', 
        address:'4 Processor Boulevard', 
        city:'Appletson', 
        state:'NT', 
        zip:'1010', 
        country:'Australia'
    },
    {   id:'5', 
        name:'Mick Green',
        phone:'02 9988 1122', 
        department:'3', 
        address:'700 Bandwidth Street', 
        city:'Bufferland', 
        state:'NSW', 
        zip:'0110', 
        country:'Australia'
    },
];

export const Departments:string[] = [
    'General',
    'Information Communication Technology',
    'Finance',
    'Marketing',
    'Human Resources'
];

export const findDepartment = (depId:string):string|undefined => {
    return (
        Departments[parseInt(depId)]
        )
}