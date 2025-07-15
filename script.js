function getRandomInt(max)
{
    return Math.floor(Math.random()*max);
}

const level=document.querySelector("#level");
const target=document.querySelector("#target");
const reset=document.querySelector("#reset");
let secret=0;
level.addEventListener("keydown",e=>{
    if(e.key=="Enter")
    {
        const entered_val=Number(level.value);
        if(entered_val>0)
        {   secret=getRandomInt(entered_val);
             let para=document.createElement("p");
            para.innerText="Random number is generated. Guess the number!"
            target.appendChild(para);
            level.disabled=true;
        }
    }
});
const guessing=document.querySelector("#guess");
const guessform=document.querySelector("#guessform");
guessform.addEventListener("submit",e=>{
    e.preventDefault();
    guess_number=Number(guessing.value);
     let para=document.createElement("p");
    if(guess_number==secret)
    {
        para.innerText="Hurray! Your Guess is correct! The number is "+secret+" :)";
        guessing.disabled=true;
        level.value='';
    }
    else if(guess_number<secret)
    {
        para.innerText="Too Small !! Enter a Bigger number!";
    }
    else{
        para.innerText="Too Big !! Enter a Smaller number!";
    }
    document.querySelector("#target2").appendChild(para);
    guessing.value='';
});


reset.addEventListener("click",()=>{
    location.reload();
});
const instructions=document.querySelector("#instruction");
const instructionBtn=document.querySelector("#show");
instructionBtn.addEventListener("click",()=>{
    if(instructions.style.display=="none")
    {
        instructions.style.display="block";
    }else{
        instructions.style.display="none";
    }
});
