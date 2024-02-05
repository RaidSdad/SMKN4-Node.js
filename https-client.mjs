import https from "https";

const endpoint = "https://eo6tew3aethsfs4.m.pipedream.net";

const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        'accept': "application/json",
    },
})