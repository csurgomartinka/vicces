var viccek = [
    {
        "szöveg":`- Hol gyúrnak az angyalok?<br>
        - ???<br> 
        - Légkondiban.`,
        "kep":"0.jpg"
    },
    {
        "szöveg":`-Mi a villamos többesszáma?<br>
        -Villák mosnak.`,
        "kep":"1.jpg"
    },
    {
        "szöveg":`- Hogy hívják a részeges ember mobiltelefonját?<br>
        - ???<br>
        - Vodkafon.`,
        "kep":"2.jpg"
    },
    {
        "szöveg":`- Két madár ül a fán. Melyik közülük az idióta?<br>
        - ???<br>
        - A balfácán.`,
        "kep":"3.jpg"
    },
    {
        "szöveg":`Miből építették a trójai falovat?<br>
        - ???<br>
        - Kicseszésből.`,
        "kep":"4.jpg"
    }
]
var elozo = -1

sors()

function sors()
{
    document.getElementById("keslel").innerHTML = ""
    var veletlen = Math.floor(Math.random() * viccek.length);
    if (veletlen == elozo)
    {
        while(veletlen == elozo)
        {
            var veletlen = Math.floor(Math.random() * viccek.length);
        }
    }
    document.getElementById("vicchelye").innerHTML = viccek[veletlen].szöveg;
    document.getElementById("kephelye").innerHTML = `<img src="${viccek[veletlen].kep}" class = "img-fluid mx-auto d-block"></img>`;
    elozo = veletlen;
}

function katt()
{
    document.getElementById("vicchelye").innerHTML = ""
    document.getElementById("kephelye").innerHTML = ""
    document.getElementById("keslel").innerHTML = `<img src="mozgo.gif"></img>`;
    setTimeout(sors, 2000);
}
