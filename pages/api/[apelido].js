async function crush(request, response) {
    const endpoint = process.env.ENDPOINT_CRUSH;
    const apelido = request.query.apelido;
    const crush = await fetch(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}&team_name=${apelido}`);
    const json = await crush.json();

}

export default crush;