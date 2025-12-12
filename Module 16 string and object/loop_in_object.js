const mobile = {
    brand: "samsung",
    price: 25000,
    color: "Black",
    Camera: '12mp',
    isNew: true
}

for (let prop in mobile)
{
    // console.log(prop);
    // console.log(mobile[prop]);
    console.log(prop + "-->" + mobile[prop]);
}