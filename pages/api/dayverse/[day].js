const days = [
    {day: 1, verse: '1 Pedro 5:7', desc: 'Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.'},
    {day: 2, verse: 'Daniel 12:10', desc: 'Muitos serão purificados, e embranquecidos, e provados; mas os ímpios procederão impiamente, e nenhum dos ímpios entenderá, mas os sábios entenderão.'},
    {day: 3, verse: 'Salmo 51:17', desc: 'Os sacrifícios para Deus são o espírito quebrantado; a um coração quebrantado e contrito não desprezarás, ó Deus.'},
    {day: 4, verse: 'Salmo 143:1', desc: 'Ó Senhor, ouve a minha oração! Inclina os ouvidos às minhas súplicas; escuta-me segundo a tua verdade e segundo a tua justiça.'},
    {day: 5, verse: 'Lucas 9:23', desc: 'E dizia a todos: Se alguém quer vir após mim, negue-se a si mesmo, e tome cada dia a sua cruz, e siga-me.'},
    {day: 6, verse: 'Provérbios 28:13', desc: 'O que encobre as suas transgressões nunca prosperará; mas o que as confessa e deixa alcançará misericórdia.'},
    {day: 7, verse: 'Provérbios 21:2', desc: 'Todo caminho do homem é reto aos seus olhos, mas o Senhor sonda os corações.'},
    {day: 8, verse: '2 Coríntios 6:14', desc: 'Não vos prendais a um jugo desigual com os infiéis; porque que sociedade tem a justiça com a injustiça? E que comunhão tem a luz com as trevas?'},
    {day: 9, verse: '2 Coríntios 8:12', desc: 'Porque, se há prontidão de vontade, será aceita segundo o que qualquer tem e não segundo o que não tem.'},
    {day: 10, verse: 'Mateus 18:17', desc: 'E, se não as escutar, dize-o à igreja; e, se também não escutar a igreja, considera-o como um gentio e publicano.'},
    {day: 11, verse: 'Eclesiastes 12:13', desc: 'De tudo o que se tem ouvido, o fim é: Teme a Deus e guarda os seus mandamentos; porque este é o dever de todo homem.'},
    {day: 12, verse: 'Eclesiastes 4:10', desc: 'Porque, se um cair, o outro levanta o seu companheiro; mas ai do que estiver só; pois, caindo, não haverá outro que o levante.'},
    {day: 13, verse: '1 Timóteo 6:12', desc: 'Milita a boa milícia da fé, toma posse da vida eterna, para a qual também foste chamado, tendo já feito boa confissão diante de muitas testemunhas.'},
    {day: 14, verse: 'Naum 1:7', desc: 'O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que confiam nele.'},
    {day: 15, verse: '1 Tessalonicenses 5:6', desc: 'Não durmamos, pois, como os demais, mas vigiemos e sejamos sóbrios.'},
    {day: 16, verse: '2 Coríntios 4:17', desc: 'Porque a nossa leve e momentânea tribulação produz para nós um peso eterno de glória mui excelente.'},
    {day: 17, verse: 'Gálatas 5:22-23', desc: 'Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança. Contra essas coisas não há lei.'},
    {day: 18, verse: 'Lucas 17:3b-4', desc: 'E, se teu irmão pecar contra ti, repreende-o; e, se ele se arrepender, perdoa-lhe; e, se pecar contra ti sete vezes no dia e sete vezes no dia vier ter contigo, dizendo: Arrependo-me, perdoa-lhe.'},
    {day: 19, verse: 'Salmo 15:2-3', desc: 'Aquele que anda em sinceridade, e pratica a justiça, e fala verazmente segundo o seu coração; aquele que não difama com a sua língua, nem faz mal ao seu próximo, nem aceita nenhuma afronta contra o seu próximo.'},
    {day: 20, verse: 'Salmo 94:18', desc: 'Quando eu disse: O meu pé vacila; a tua benignidade, Senhor, me susteve. '},
    {day: 21, verse: 'Salmo 4:8', desc: 'Em paz também me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.'},
    {day: 22, verse: 'Marcos 12:30', desc: 'Amarás, pois, ao Senhor, teu Deus, de todo o teu coração, e de toda a tua alma, e de todo o teu entendimento, e de todas as tuas forças; este é o primeiro mandamento.'},
    {day: 23, verse: '1 Timóteo 4:8', desc: 'Porque o exercício corporal para pouco aproveita, mas a piedade para tudo é proveitosa, tendo a promessa da vida presente e da que há de vir.'},
    {day: 24, verse: 'Marcos 10:52', desc: 'E Jesus lhe disse: Vai, a tua fé te salvou. E logo viu, e seguiu a Jesus pelo caminho.'},
    {day: 25, verse: 'Salmo 147:3', desc: 'Sara os quebrantados de coração e liga-lhes as feridas.'},
    {day: 26, verse: 'Eclesiastes 3:12-13', desc: 'Já tenho conhecido que não há coisa melhor para eles do que se alegrarem e fazerem bem na sua vida; e também que todo homem coma e beba e goze do bem de todo o seu trabalho. Isso é um dom de Deus.'},
    {day: 27, verse: '1 Tessalonicenses 4:3-5', desc: 'Porque esta é a vontade de Deus, a vossa santificação: que vos abstenhais da prostituição, que cada um de vós saiba possuir o seu vaso em santificação e honra, não na paixão de concupiscência, como os gentios, que não conhecem a Deus.'},
    {day: 28, verse: 'Apocalipse 20:12-13', desc: 'E vi os mortos, grandes e pequenos, que estavam diante do trono, e abriram-se os livros. E abriu-se outro livro, que é o da vida. E os mortos foram julgados pelas coisas que estavam escritas nos livros, segundo as suas obras. E deu o mar os mortos que nele havia; e a morte e o inferno deram os mortos que neles havia; e foram julgados cada um segundo as suas obras.'},
    {day: 29, verse: 'Salmo 42:8', desc: 'Contudo, o Senhor mandará de dia a sua misericórdia, e de noite a sua canção estará comigo: a oração ao Deus da minha vida.'},
    {day: 30, verse: 'Apocalipse 3:21', desc: 'Ao que vencer, lhe concederei que se assente comigo no meu trono, assim como eu venci e me assentei com meu Pai no seu trono.'},
    {day: 31, verse: 'Isaías 26:8', desc: 'Até no caminho dos teus juízos, Senhor, te esperamos; no teu nome e na tua memória está o desejo da nossa alma.'},
];

export default function Dayverse(request, response){
    var obj = chooseDay(request.query.day);
    response.json(obj)
}

function chooseDay(daySelected){
    var obj
days.map((day)=>{
    if(day.day == daySelected){
         obj = day;
    }
})
return obj;
}