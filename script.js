const demo = document.getElementById('demo');
const btn = document.getElementById('btn');
async function cats(paths) {
    const result = await fetch(paths);
    const data = await result.json();
    // gettng a random vaue
    let item = data[Math.floor(Math.random() * data.length)].text;
    demo.innerText = item
    // loop through each item
    // data.forEach(item => {
    //     const catFacts = item.text
    //     demo.innerText = catFacts
    //     console.log(item.text);
    // });

    // console.log(result);
    // console.log(data);
}
btn.addEventListener('click', (e) => {
    console.log(e);
    cats("https://cat-fact.herokuapp.com/facts");
})
// console.log(Math.floor(Math.random() *4) );
cats("https://cat-fact.herokuapp.com/facts");