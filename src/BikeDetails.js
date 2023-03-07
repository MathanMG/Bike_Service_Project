let Bikevalues=[
    {
        "cusId":"TN28BL7035",
        "cusName":"Mathanraj",
        "cusContact":6383505378,
        "cusEmail":"mathanraj123@gmail.com",
        "cusDate":"12-05-2022"
    },
    {
        "cusId":"KA23BL7898",
        "cusName":"Karthik",
        "cusContact":9189734628,
        "cusEmail":"karthik143@gmail.com",
        "cusDate":"09-08-2021"
    },
    {
        "cusId":"KL28KO9878",
        "cusName":"Raj",
        "cusContact":9098786556,
        "cusEmail":"raj123@gmail.com",
        "cusDate":"30-07-2021"
    }
]
export const create=(data)=>
{
    Bikevalues.push(data)
}

export const list=()=>
{
    return Bikevalues;
}
export const read=(index)=>
{
    return Bikevalues[index];
}

export const FetchExact=(name)=>
{
    const temp=Bikevalues.filter((element)=>
    {
        return element.cusName===name;
    })
    return temp[0];
}
export const alter1=(data,pos)=>
{
    Bikevalues[pos]=data;
}

export const remove=(index)=>
{
    Bikevalues=Bikevalues.filter((data,ind)=>
    {
        return ind!==index;
    })
    return Bikevalues;

}