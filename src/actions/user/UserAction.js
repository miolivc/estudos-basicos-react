
export const submitUserAction = (data) => {
    const url = "http://localhost:8080/usuario";

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => console.log(json))
}