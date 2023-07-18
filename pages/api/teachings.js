function teachings(request, response){
  response.json({
    datas: [
        {
            title: 'A', 
            datas: [
                {id: 1, teachingTitle: 'Amor', verses:'Jo 3.16', teachingDescription: 'Porque Deus amou o mundo de tal maneira que deu seu filho unigênito para todo aquele que nEle crêr não pereça mas tenha a vida eterna', video: 'gsFP4QePxiI'},
                {id: 2, teachingTitle: 'Andar no Caminho', verses:'Jo 14.6', teachingDescription: 'Eu sou o caminho, a verdade e a vida, ninguém vai ao Pai se não por mim', video: 'wPywfvLaSC4'},
                {id: 3, teachingTitle: 'Amós 1.1', verses:'Amós 1-3', teachingDescription: 'Amós era um profeta', video: 'NXnDB-paGV4'},
            ]
        },
        {
            title: 'B', datas: [
                {id: 4, teachingTitle: 'Brigas', verses:'2 Timóteo 2:23-26', teachingDescription: 'Fique longe das discussões tolas e sem valor, pois você sabe que elas sempre acabam em brigas. O servo do Senhor não deve andar brigando, mas deve tratar todos com educação. Deve ser um mestre bom e paciente, que corrige com delicadeza aqueles que são contra ele. Pois pode ser que Deus dê a eles a oportunidade de se arrependerem e de virem a conhecer a verdade. E assim voltarão ao seu perfeito juízo e escaparão da armadilha do Diabo, que os prendeu para fazerem o que ele quer.', video: '-1L8Y_3Ib-g'},
                {id: 5, teachingTitle: 'Bem Aventuranças', verses:'Mt 5', teachingDescription: '3 Bem-aventurados os pobres de espírito, porque deles é o reino dos céus. 4 Bem-aventurados os que choram, porque eles serão consolados. 5 Bem-aventurados os mansos, porque eles herdarão a terra. 6 Bem-aventurados os que têm fome e sede de justiça, porque eles serão fartos. 7 Bem-aventurados os misericordiosos, porque eles alcançarão misericórdia. 8 Bem-aventurados os puros de coração, porque eles verão a Deus. 9 Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus. 10 Bem-aventurados os que sofrem perseguição por causa da justiça, porque deles é o reino dos céus. 11 Bem-aventurados sois vós, quando vos injuriarem e perseguirem, e mentindo, falarem todo mal contra vós por minha causa. 12 Exultai e alegrai-vos, porque é grande o vosso galardão nos céus; porque assim perseguiram os profetas que vieram antes de vós.', video: '8W7HOfR9oy0'},
            ]
        },
        {
            title: 'C', datas: [
                {id: 7, teachingTitle: 'Caminho Estreito e largo', verses:'Mt 7.13-14', teachingDescription: 'Entrai pela porta estreita, porque larga é a porta, e espaçoso, o caminho que conduz à perdição, e muitos são os que entram por ela; e porque estreita é a porta, e apertado, o caminho que leva à vida, e poucos há que a encontrem', video: '2cg1C2FS1ak'},
                {id: 8, teachingTitle: 'Cultivar', verses:'Dt 28.39', teachingDescription: 'Plantarás vinhas, e cultivarás; porém não beberás vinho, nem colherás as uvas; porque o bicho as colherá', video: 'FjBbI7JXop0'},
            ]
            
        },
        {
            title: 'D', datas: [
                {id: 1, teachingTitle: 'Dadivas', verses:'Tg 1.7', teachingDescription: 'Toda boa dádiva e todo dom perfeito vêm do alto, descendo do Pai das luzes, em quem não há oscilação como se vê nas nuvens inconstantes.', video: 'Jddkj4gX0zw'},
            ]
            
        },
        ]
    }
    
  )
}

export default teachings;