/*$(document).ready(function () {
    $('h1').html('HolaMundo').css('color' , 'red')   
    $('button').click(function () {
        // $('p').css('color' , 'blue')
        $('p').hide()
    }) 
});

$(document).ready(function () {
    $('h1').click(function () {
        document.write('<h1>Hola Mundo</h1>')
        console.log('Hola ');
        $(this).hide()
    })
});
*/
$(document).ready(function () {
    $('h2').dblclick(function () {
        document.write(`
        
         <h1 style='color:red;'>Bienvenido </h1>
         <h3 title'Hola Mundo '>Aprenderás todos lo conocimientos necesarios para agregar jquery a tus páginas web y hacerlas más dinámicas </h3>
            <p>XD</p>
           <br>
           <iframe width="853" height="480" src="https://www.youtube.com/embed/rSjCJGoH-GQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           <br>
           <iframe width="853" height="480" src="https://www.youtube.com/embed/DVN8NWppCN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        `)
        console.log('Hola ');
        $(this).hide()
    })
});