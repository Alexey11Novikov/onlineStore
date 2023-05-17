import http from "./http-common";

export const add = (data) => {
    console.log(data)
    http({
        method: "POST",
        url: "/createCustomer",
        data: data
    })
    .then((res) => { return res.data }).catch((err)=>console.log(err));
};

export const change = (id, data) => {
    http({
        method: "PATCH",
        url: "/updateCustomer/" + id,
        data: data
    })

    // http.patch("/updateCustomer/" + id, {
    //     data
    // }).then((res) => {
    //     return res.data;
    // });
};

export const deleteRow = (id) => {
    http.delete("/deleteCustomer/" + id).then((res) => {
        console.log(res);
    });
};



// name: "Кузнецов А.М.",
// age: 23,
// email: "asdasd@asd.com",
// date_birthday: "01.11.1999",