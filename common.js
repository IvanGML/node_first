async function getUser() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                user: "Ivan",
                password: 1234
            })
        }, 1000);
    });
}

async function print() {
    const user = await getUser();
    console.log(user);
}

print();