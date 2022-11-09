let current = []

let hiragana_all = ['a', 'i', 'e', 'o', 'u', 'ka', 'ki', 'ku', 'ke', 'ko', 'ma', 'mi', 'mu', 'me', 'mo', 'ha', 'hi', 'fu', 'he', 'ho', 'na', 'ni', 'nu', 'ne', 'no', 'n', 'ta', 'chi', 'tsu', 'te', 'to', 'ra', 'ri', 'ru', 're', 'ro', 'sa', 'shi', 'su', 'se', 'so', 'wa', 'wo', 'ya', 'yu', 'yo']

let exiled = []

let digraph = ['kya','kyo','kyu', 'sha','shu','sho','cha','chu','cho','nya','nyu','nyo','hya','hyo','hyu','mya','myo','myu','rya','ryo','ryu']

let full_hira = [...hiragana_all, ...digraph]

let selection;



function exile (random_selection_all, exiled, selection) {

    for(let i = 0; i < selection.length; i++) {

        if(selection[i] === random_selection_all) {

            selection.splice(i,1);

        }

    }

    exiled.push(random_selection_all)

}


function desexile (random_selection_all, exiled, selection) {

    selection.push(exiled[0])

    exiled.pop()


}

function cardDeleter(current) {

    current.pop()
}

// Deletes item and last answer iteration from array


function cardPusher(current, random_selection_all) {


    current.push(random_selection_all)

}

// Inserts the new answer iteration


function buttonNameChanger(changer) {

    changer.text("Submit")


}

// Changes the name of the button display (used once)


function correct_answer(current){

    let answer = $("#kotae").val()

    if (answer !== current[0]) {

        $("#coin").text("Incorrect! " + current)
        return false

}
    else {
        $("#coin").text("Correct! " + current)
        return true

    }


}

// Checks for the answer taking array[0] as reference

function image_changer(selection_path){


    $("#img_holder").empty()

    $('#img_holder').append("<img id='hiragana_img' src='" + selection_path + "'/>")


}

//  Changes the image


function main_hiragana(current, hiragana_all, exiled, digraph, full_hira, selection) {


    if((document.getElementById('hiramono').checked) && (document.getElementById('hiradigra').checked)) {

        selection = full_hira

    }

    else if(document.getElementById('hiramono').checked) {

        selection = hiragana_all

    }
    else if(document.getElementById('hiradigra').checked) {

        selection = digraph

    }
        let random_selection_all = selection[Math.floor(Math.random() * selection.length)];
        let selection_path = "/Hiragana/" + random_selection_all + ".png"
        // always change with each click

        let changer = $("#button_placement")


       function behave(current, hiragana_all, exiled, digraph, full_hira, selection){


           if (changer.text() === 'Start') {


               $("#coin").text("")
               image_changer(selection_path)
               buttonNameChanger(changer)
               cardPusher(current, random_selection_all)
               $("#kotae").val("")
               exile(random_selection_all, exiled, selection);
               console.log(selection)


           } else {


               correct_answer(current);
               let confirm = correct_answer(current)

               if(confirm === true){

                   desexile (random_selection_all, exiled, selection)
                   cardDeleter(current)
                   image_changer(selection_path)
                   cardDeleter(current)
                   cardPusher(current, random_selection_all)
                   $("#kotae").val("")
                   exile (random_selection_all, exiled, selection);
                   console.log(selection)
               }

               else{
                   behave(current, hiragana_all, exiled, digraph, full_hira, selection)
               }


           }

       }

       behave(current, hiragana_all, exiled, digraph, full_hira, selection)


    }








