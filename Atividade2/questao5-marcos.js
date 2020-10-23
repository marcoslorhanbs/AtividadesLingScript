let produtos = 
{
    videos: 
    {
        comedia: ["comedia1", "comedia2"],
        romance: ["romance1", "romance2"]
    },
    revistas:
    {
        moda: ["moda1", "moda2"],
        saude: ["saude1", "saude2"]
    },
    jogos:
    {
        rpg: ["rpg1", "rpg2"],
        acao: ["acao1", "acao2"]
    }
}

for(categoria in produtos)
{
    console.log(categoria);
    for(sub in produtos[categoria])
    {
        console.log(produtos[categoria][sub])
        
    }
    
}


