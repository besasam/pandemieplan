const all_words = [
    ['ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs'],
    ['tägige', 'wöchige', 'monatige', 'fache', 'malige', 'hebige'],
    ['harte', 'softe', 'optionale', 'intransparente', 'alternativlose', 'unumkehrbare'],
    ['Wellenbrecher', 'Brücken', 'Treppen', 'Wende', 'Impf', 'Ehren'],
    ['lockdown', 'stopp', 'sprint', 'maßnahme', 'kampagne', 'matrix'],
    ['zum Sommer', 'auf Weiteres', 'zur Bundestagswahl', '2030', 'nach den Abiturprüfungen', 'in die Puppen'],
    ['sofortigen', 'nachhaltigen', 'allmählichen', 'unausweichlichen', 'wirtschaftsschonenden', 'willkürlichen'],
    ['Senkung', 'Steigerung', 'Beendigung', 'Halbierung', 'Vernichtung', 'Beschönigung'],
    ['Infektionszahlen', 'privaten Treffen', 'Wirtschaftsleistung', 'Wahlprognosen', 'dritten Welle', 'Bundeskanzlerin']
];

function generatePandemieplan()
{
    let dice = [];
    for (let i=0; i < 9; i++) {
        dice.push(Math.floor(Math.random()*6));
    }

    let words = ['eine'];
    for (let i=0; i < 9; i++) {
        words.push(all_words[i][dice[i]]);
    }

    if (dice[4] < 3) {
        words[0] = 'ein';
        words[2] += 'r';
        words[3] += 'r';
    }

    return words;
}

function print()
{
    const content = document.getElementById('pandemieplan');
    const words = generatePandemieplan();
    content.innerHTML = `Was wir <i>jetzt</i> brauchen, ist ${words[0]} ${words[1]}${words[2]} ${words[3]} ${words[4]}${words[5]}
        bis ${words[6]} zur ${words[7]} ${words[8]} der ${words[9]}.`;
}

window.onload = () => {
    document.getElementById('wuerfeln').addEventListener('click', () => {
        print();
    });
    print();
};
