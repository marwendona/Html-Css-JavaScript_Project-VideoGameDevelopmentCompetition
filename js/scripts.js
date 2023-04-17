function joinIn()
{
    window.open("signup.html", "_self");
}

function jumpTo(id)
{
    document.getElementById(id + "Section").scrollIntoView({behavior: 'smooth'});
}

function onOptionChanged(option)
{
    if (option == "Yes") {
        /*document.getElementById("FIFA 22").type = "radio";
        document.getElementById("eFootball 2022").type = "radio";
        document.getElementById("Fortnite").type = "radio";
        document.getElementById("Game Question").innerHTML = "Which tournaments will you participate in?";*/
        document.getElementById("once").hidden = true;
        document.getElementById("onceLabel").hidden = true;
        document.getElementById("twice").hidden = true;
        document.getElementById("twiceLabel").hidden = true;
        document.getElementById("more").hidden = true;
        document.getElementById("moreLabel").hidden = true;
        document.getElementById("Game Question").hidden = true;
    } else { 
        document.getElementById("once").type = "radio";
        document.getElementById("twice").type = "radio";
        document.getElementById("more").type = "radio";
        document.getElementById("Game Question").innerHTML = "How many times ?";
        
        document.getElementById("once").hidden = false;
        document.getElementById("onceLabel").hidden = false;
        document.getElementById("twice").hidden = false;
        document.getElementById("twiceLabel").hidden = false;
        document.getElementById("more").hidden = false;
        document.getElementById("moreLabel").hidden = false;
        document.getElementById("Game Question").hidden = false;
    }

    
}