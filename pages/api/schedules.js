function schedules(request, response){
    response.json({
        datas: [
            {
                day: 'Dom',
                datas: [
                    {id: 1, desc: 'Culto de Ceia do Senhor', hour: '18:00'}
                ]
            },
            {
                day: 'Seg',
                datas: [
                    {id: 2, desc: 'Ensaio', hour: '18:00'}
                ]
            },
            {
                day: 'Ter',
                datas: [
                    {id: 3, desc: 'Oração Pela Manhã', hour: '08:00'},
                    {id: 4, desc: 'Culto de Ensinamentos', hour: '19:30'}
                ]
            },
            {
                day: 'Qua',
                datas: [
                    {id: 5, desc: 'Oração Pela Manhã', hour: '08:00'},
                ]
            },
            {
                day: 'Qui',
                datas: [
                    {id: 6, desc: 'Culto Público', hour: '19:00'},
                ]
            },
            {
                day: 'Sex',
                datas: [
                    {id: 7, desc: 'Ensaio do o Grupo das Crianças', hour: '19:00'},
                ]
            },
            {
                day: 'Sab',
                datas: [
                    {id: 8, desc: 'Discipulado', hour: '14:30'},
                    {id: 9, desc: 'Reunião com o Grupo de Louvor', hour: '19:30'},
                    
                ]
            }
            
        ]
    })
}

export default schedules;